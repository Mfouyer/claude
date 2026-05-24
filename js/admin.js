/* ============================================================
   admin.js — Lógica do painel de administração
   Depende de: firebase.js (FirebaseReady, _FirebaseDB, _FirestoreSDK)
   ============================================================ */

(function () {
  "use strict";

  const ADMIN_PIN_KEY = "mathRoyale.adminPin";
  const STORAGE_KEY = "mathRoyale.v1";
  const PARENT_USERNAME = "erik";
  const DEFAULT_PARENT_PIN = "0000";

  // ---- helpers ----
  function db() { return window._FirebaseDB; }
  function sdk() { return window._FirestoreSDK; }

  function fmt(n) { return (n === undefined || n === null) ? "—" : n; }

  function halfDaysToText(n) {
    var days = n * 0.5;
    return days % 1 === 0 ? String(days) : days.toFixed(1).replace(".", ",");
  }

  function buildAdminCommitmentsSection() {
    var raw = null;
    try { raw = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var commitments = { livros: 0, consola: 0, telemovel: 0 };
    if (raw) {
      try {
        var state = JSON.parse(raw);
        if (state && state.profile && state.profile.commitments) {
          commitments = Object.assign({}, commitments, state.profile.commitments);
        }
      } catch (e) {}
    }
    var allZero = commitments.livros === 0 && commitments.consola === 0 && commitments.telemovel === 0;
    var bodyHTML = "";
    if (allZero) {
      bodyHTML = '<p class="admin-empty">Nenhum compromisso registado ainda.</p>';
    } else {
      var lines = [];
      if (commitments.livros > 0) lines.push('<div class="player-stat-row"><span>📚 Livros para ler</span><span class="player-stat-val">' + commitments.livros + '</span></div>');
      if (commitments.consola > 0) lines.push('<div class="player-stat-row"><span>🎮 Dias sem consola</span><span class="player-stat-val">' + halfDaysToText(commitments.consola) + '</span></div>');
      if (commitments.telemovel > 0) lines.push('<div class="player-stat-row"><span>📵 Dias sem telemóvel</span><span class="player-stat-val">' + halfDaysToText(commitments.telemovel) + '</span></div>');
      bodyHTML = '<div style="max-width:360px;">' + lines.join("") + '</div>';
    }
    return '<div class="admin-section"><div class="admin-section-title">📋 Compromissos do Lucas</div>' + bodyHTML + '</div>';
  }

  function fmtTime(seconds) {
    if (!seconds) return "0m";
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    return h ? h + "h " + m + "m" : m + "m";
  }

  function fmtDate(ts) {
    if (!ts) return "—";
    var d = new Date(typeof ts === "number" ? ts : ts.toMillis ? ts.toMillis() : ts);
    return d.toLocaleDateString("pt-PT", { day: "2-digit", month: "2-digit", year: "2-digit" })
      + " " + d.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });
  }

  function pct(correct, total) {
    if (!total) return 0;
    return Math.round((correct / total) * 100);
  }

  function accClass(p) {
    if (p >= 80) return "acc-good";
    if (p >= 50) return "acc-mid";
    return "acc-bad";
  }

  // ---- Sessão admin (sessionStorage local) ----
  function isLoggedIn() {
    return sessionStorage.getItem("adminAuth") === "1";
  }

  function doLogin(pin) {
    // Verificar PIN do pai no Firestore; fallback para LS se offline
    return window.FirebaseReady.then(function (d) {
      if (!d) {
        // Offline: usar PIN guardado no LS ou default
        var stored = localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_PARENT_PIN;
        if (pin === stored) {
          sessionStorage.setItem("adminAuth", "1");
          return { ok: true };
        }
        return { ok: false, error: "PIN incorreto." };
      }
      var s = sdk();
      var docRef = s.doc(d, "users", PARENT_USERNAME);
      return s.getDoc(docRef).then(function (snap) {
        if (!snap.exists()) {
          // Criar utilizador pai
          return s.setDoc(docRef, {
            name: PARENT_USERNAME,
            pin: pin,
            role: "parent",
            createdAt: Date.now()
          }).then(function () {
            sessionStorage.setItem("adminAuth", "1");
            localStorage.setItem(ADMIN_PIN_KEY, pin);
            return { ok: true };
          });
        }
        var data = snap.data();
        if (String(data.pin) === String(pin)) {
          sessionStorage.setItem("adminAuth", "1");
          localStorage.setItem(ADMIN_PIN_KEY, pin);
          return { ok: true };
        }
        return { ok: false, error: "PIN incorreto." };
      });
    }).catch(function () {
      var stored = localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_PARENT_PIN;
      if (pin === stored) {
        sessionStorage.setItem("adminAuth", "1");
        return { ok: true };
      }
      return { ok: false, error: "PIN incorreto." };
    });
  }

  // ---- Ecrã de login admin ----
  function renderLoginScreen() {
    document.getElementById("admin-main").innerHTML = `
      <div class="admin-login">
        <div class="admin-login-logo">⚙</div>
        <h2 style="text-align:center;font-size:1.1rem;color:var(--c-text);margin-bottom:4px;letter-spacing:2px;">PAINEL DO PAI</h2>
        <p style="text-align:center;color:var(--c-text-mute);font-size:0.85rem;margin-bottom:0;">Acesso restrito</p>
        <form class="admin-login-form" id="admin-login-form" novalidate>
          <div>
            <label class="login-label" style="display:block;font-family:var(--font-display);font-size:0.7rem;letter-spacing:2px;color:var(--c-text-mute);text-transform:uppercase;margin-bottom:8px;">PIN de Acesso</label>
            <div class="pin-inputs" id="admin-pin-inputs">
              <input class="pin-digit" type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" data-pos="0" aria-label="PIN dígito 1" />
              <input class="pin-digit" type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" data-pos="1" aria-label="PIN dígito 2" />
              <input class="pin-digit" type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" data-pos="2" aria-label="PIN dígito 3" />
              <input class="pin-digit" type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" data-pos="3" aria-label="PIN dígito 4" />
            </div>
          </div>
          <div class="login-error" id="admin-login-error" hidden></div>
          <button class="btn btn-primary btn-block" type="submit" id="admin-login-btn">Entrar</button>
          <p style="font-size:0.78rem;color:var(--c-text-mute);text-align:center;margin:0;">PIN padrão: 0000 (altere após entrar)</p>
        </form>
      </div>
    `;

    var pinInputs = document.querySelectorAll("#admin-pin-inputs .pin-digit");
    var errorEl   = document.getElementById("admin-login-error");
    var submitBtn = document.getElementById("admin-login-btn");

    // Foco automático
    setTimeout(function () { if (pinInputs[0]) pinInputs[0].focus(); }, 60);

    // PIN navigation
    pinInputs.forEach(function (input, idx) {
      input.addEventListener("input", function () {
        input.value = input.value.replace(/\D/g, "").slice(-1);
        if (input.value && idx < pinInputs.length - 1) pinInputs[idx + 1].focus();
      });
      input.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !input.value && idx > 0) {
          pinInputs[idx - 1].focus();
          pinInputs[idx - 1].value = "";
        }
        if (e.key === "Enter") { e.preventDefault(); submitBtn.click(); }
      });
    });

    document.getElementById("admin-login-form").addEventListener("submit", function (e) {
      e.preventDefault();
      errorEl.hidden = true;
      var pin = Array.from(pinInputs).map(function (i) { return i.value; }).join("");
      if (pin.length !== 4) {
        errorEl.textContent = "Insere os 4 dígitos do PIN.";
        errorEl.hidden = false;
        return;
      }
      submitBtn.disabled = true;
      submitBtn.textContent = "A verificar...";
      doLogin(pin).then(function (result) {
        if (result.ok) {
          renderDashboard();
        } else {
          errorEl.textContent = result.error || "PIN incorreto.";
          errorEl.hidden = false;
          submitBtn.disabled = false;
          submitBtn.textContent = "Entrar";
          pinInputs.forEach(function (i) { i.value = ""; });
          if (pinInputs[0]) pinInputs[0].focus();
        }
      });
    });
  }

  // ---- Dashboard principal ----
  function renderDashboard() {
    var main = document.getElementById("admin-main");
    main.innerHTML = '<div class="admin-loading">A carregar dados...</div>';

    var d = db();
    var s = sdk();

    if (!d) {
      main.innerHTML = '<div class="admin-loading">Firebase offline. Dados indisponíveis.</div>';
      return;
    }

    // Carregar todos os utilizadores (players) e progressos
    Promise.all([
      s.getDocs(s.query(s.collection(d, "users"), s.where("role", "==", "player"))),
      s.getDocs(s.collection(d, "progress")),
      s.getDocs(s.query(
        s.collection(d, "sessions"),
        s.orderBy("startTime", "desc"),
        s.limit(100)
      ))
    ]).then(function (results) {
      var usersSnap    = results[0];
      var progressSnap = results[1];
      var sessionsSnap = results[2];

      var users    = {};
      var progress = {};
      var sessions = [];

      usersSnap.forEach(function (doc) { users[doc.id] = doc.data(); });
      progressSnap.forEach(function (doc) { progress[doc.id] = doc.data(); });
      sessionsSnap.forEach(function (doc) {
        var data = doc.data();
        data._id = doc.id;
        sessions.push(data);
      });

      renderDashboardHTML(users, progress, sessions);
    }).catch(function (err) {
      console.error("[Admin] Erro ao carregar dados:", err);
      main.innerHTML = '<div class="admin-loading">Erro ao carregar dados do Firestore.</div>';
    });
  }

  function renderDashboardHTML(users, progress, sessions) {
    var main = document.getElementById("admin-main");

    var playerNames = Object.keys(users);
    var selectedPlayer = playerNames[0] || null;

    function buildHTML() {
      var playersHTML = playerNames.length === 0
        ? '<p class="admin-empty">Nenhum jogador registado ainda.</p>'
        : '<div class="player-grid">' + playerNames.map(function (name) {
            var p  = progress[name] || {};
            var accPct = pct(p.totalCorrect, (p.totalCorrect || 0) + (p.totalWrong || 0));
            return `
              <div class="player-card ${name === selectedPlayer ? "selected" : ""}" data-player="${name}">
                <div class="player-name">${name}</div>
                <div class="player-stat-row">
                  <span>Sessões</span>
                  <span class="player-stat-val">${fmt(p.totalSessions)}</span>
                </div>
                <div class="player-stat-row">
                  <span>Tempo total</span>
                  <span class="player-stat-val">${fmtTime(p.totalTimeSeconds)}</span>
                </div>
                <div class="player-stat-row">
                  <span>Taxa de acerto</span>
                  <span class="player-stat-val ${accClass(accPct)}">${accPct}%</span>
                </div>
                <div class="player-stat-row">
                  <span>Última sessão</span>
                  <span class="player-stat-val" style="font-size:0.78rem;">${p.lastSession ? fmtDate(p.lastSession.ts) : "—"}</span>
                </div>
              </div>
            `;
          }).join("") + "</div>";

      var detailHTML = selectedPlayer ? buildDetailHTML(selectedPlayer, users, progress, sessions) : "";

      main.innerHTML = `
        <div class="admin-section">
          <div class="admin-section-title">Jogadores</div>
          ${playersHTML}
        </div>
        ${selectedPlayer ? `
        <div class="admin-section" id="player-detail">
          <div class="admin-section-title">Detalhe — ${selectedPlayer}</div>
          ${detailHTML}
        </div>` : ""}
        ${buildAdminCommitmentsSection()}
        <div class="admin-section">
          <div class="admin-section-title">Ações</div>
          <button class="btn btn-ghost" id="btn-change-pin">🔑 Alterar PIN do Pai</button>
          &nbsp;
          <button class="btn btn-ghost" id="btn-refresh">↻ Atualizar dados</button>
          &nbsp;
          <button class="btn btn-ghost" id="btn-logout">Sair</button>
        </div>
      `;

      // Eventos dos cards de jogador
      main.querySelectorAll(".player-card").forEach(function (card) {
        card.addEventListener("click", function () {
          selectedPlayer = card.dataset.player;
          buildHTML();
        });
      });

      // Botões
      var btnPin = document.getElementById("btn-change-pin");
      if (btnPin) btnPin.addEventListener("click", showChangePinModal);

      var btnRefresh = document.getElementById("btn-refresh");
      if (btnRefresh) btnRefresh.addEventListener("click", renderDashboard);

      var btnLogout = document.getElementById("btn-logout");
      if (btnLogout) btnLogout.addEventListener("click", function () {
        sessionStorage.removeItem("adminAuth");
        renderLoginScreen();
      });
    }

    buildHTML();
  }

  function buildDetailHTML(name, users, progress, sessions) {
    var p = progress[name] || {};
    var u = users[name] || {};
    var ts = p.themeStats || {};
    var wrong = Array.isArray(p.wrongQuestions) ? p.wrongQuestions : [];

    // Sessões deste jogador (já ordenadas por startTime desc no query)
    var playerSessions = sessions.filter(function (s) { return s.username === name; }).slice(0, 10);

    var totalAnswered = (p.totalCorrect || 0) + (p.totalWrong || 0);
    var accPct = pct(p.totalCorrect, totalAnswered);

    var themeNames = { t1: "T1", t2: "T2", t3: "T3", t4: "T4", t5: "T5", t6: "T6", t7: "T7" };

    return `
      <div class="detail-panel">
        <div class="detail-name">${name}</div>

        <div class="stats-row">
          <div class="stat-pill"><span class="stat-pill-val">${fmt(p.totalSessions)}</span><span class="stat-pill-lbl">Sessões</span></div>
          <div class="stat-pill"><span class="stat-pill-val">${fmtTime(p.totalTimeSeconds)}</span><span class="stat-pill-lbl">Tempo</span></div>
          <div class="stat-pill"><span class="stat-pill-val ${accClass(accPct)}">${accPct}%</span><span class="stat-pill-lbl">Acerto</span></div>
          <div class="stat-pill"><span class="stat-pill-val">${fmt(p.totalCorrect)}</span><span class="stat-pill-lbl">Corretas</span></div>
          <div class="stat-pill"><span class="stat-pill-val" style="color:var(--c-danger)">${fmt(p.totalWrong)}</span><span class="stat-pill-lbl">Erradas</span></div>
        </div>

        <div style="margin-bottom:18px;">
          <div class="admin-section-title" style="margin-bottom:10px;">Progresso por tema</div>
          <div class="theme-grid">
            ${["t1","t2","t3","t4","t5","t6","t7"].map(function (tid) {
              return `<div class="theme-cell">
                <span class="theme-cell-label">${themeNames[tid]}</span>
                <span class="theme-cell-val">${ts[tid] || 0}</span>
              </div>`;
            }).join("")}
          </div>
        </div>

        ${wrong.length ? `
        <div style="margin-bottom:18px;">
          <div class="admin-section-title" style="margin-bottom:10px;">Top 5 perguntas mais erradas</div>
          <ul class="wrong-list">
            ${wrong.map(function (w, i) {
              return `<li class="wrong-item">
                <span class="wrong-rank">${i + 1}</span>
                <span class="wrong-text">${w.question || "—"}</span>
                <span class="wrong-count">${w.count}×</span>
              </li>`;
            }).join("")}
          </ul>
        </div>` : ""}

        ${playerSessions.length ? `
        <div>
          <div class="admin-section-title" style="margin-bottom:10px;">Histórico de sessões (últimas 10)</div>
          <div style="overflow-x:auto;">
            <table class="sessions-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Tema</th>
                  <th>Duração</th>
                  <th>Resp.</th>
                  <th>Acerto</th>
                </tr>
              </thead>
              <tbody>
                ${playerSessions.map(function (sess) {
                  var st = typeof sess.startTime === "number" ? sess.startTime :
                           (sess.startTime && sess.startTime.toMillis ? sess.startTime.toMillis() : null);
                  var sessPct = pct(sess.questionsCorrect || 0, sess.questionsAnswered || 0);
                  return `<tr>
                    <td>${st ? fmtDate(st) : "—"}</td>
                    <td>${sess.themeId ? sess.themeId.toUpperCase() : "—"}</td>
                    <td>${sess.durationSeconds ? fmtTime(sess.durationSeconds) : "—"}</td>
                    <td>${fmt(sess.questionsAnswered)}</td>
                    <td class="${accClass(sessPct)}">${sess.questionsAnswered ? sessPct + "%" : "—"}</td>
                  </tr>`;
                }).join("")}
              </tbody>
            </table>
          </div>
        </div>` : '<p class="admin-empty">Sem sessões registadas.</p>'}
      </div>
    `;
  }

  // ---- Modal de alteração de PIN ----
  function showChangePinModal() {
    var overlay = document.createElement("div");
    overlay.className = "admin-modal";
    overlay.innerHTML = `
      <div class="admin-modal-box">
        <h2 style="margin-bottom:16px;font-size:1rem;letter-spacing:1.5px;color:var(--c-magenta);">ALTERAR PIN DO PAI</h2>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div>
            <label style="display:block;font-family:var(--font-display);font-size:0.7rem;letter-spacing:1.5px;color:var(--c-text-mute);text-transform:uppercase;margin-bottom:8px;">PIN atual</label>
            <input class="admin-input" type="password" inputmode="numeric" maxlength="4" id="pin-current" placeholder="••••" />
          </div>
          <div>
            <label style="display:block;font-family:var(--font-display);font-size:0.7rem;letter-spacing:1.5px;color:var(--c-text-mute);text-transform:uppercase;margin-bottom:8px;">Novo PIN</label>
            <input class="admin-input" type="password" inputmode="numeric" maxlength="4" id="pin-new" placeholder="••••" />
          </div>
          <div>
            <label style="display:block;font-family:var(--font-display);font-size:0.7rem;letter-spacing:1.5px;color:var(--c-text-mute);text-transform:uppercase;margin-bottom:8px;">Confirmar novo PIN</label>
            <input class="admin-input" type="password" inputmode="numeric" maxlength="4" id="pin-confirm" placeholder="••••" />
          </div>
          <div id="pin-error" class="login-error" hidden></div>
          <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:4px;">
            <button class="btn btn-ghost" id="pin-cancel">Cancelar</button>
            <button class="btn btn-primary" id="pin-save">Guardar</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById("pin-cancel").addEventListener("click", function () { overlay.remove(); });
    overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.remove(); });

    document.getElementById("pin-save").addEventListener("click", function () {
      var current  = document.getElementById("pin-current").value.trim();
      var newPin   = document.getElementById("pin-new").value.trim();
      var confirm  = document.getElementById("pin-confirm").value.trim();
      var errorEl  = document.getElementById("pin-error");

      function showErr(msg) { errorEl.textContent = msg; errorEl.hidden = false; }

      if (newPin.length !== 4 || !/^\d{4}$/.test(newPin)) { showErr("O novo PIN deve ter 4 dígitos."); return; }
      if (newPin !== confirm) { showErr("Os PINs não coincidem."); return; }

      var d = db();
      var s = sdk();

      var storedPin = localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_PARENT_PIN;
      if (String(current) !== String(storedPin)) {
        // Verificar no Firestore também
        if (d && s) {
          s.getDoc(s.doc(d, "users", PARENT_USERNAME)).then(function (snap) {
            if (snap.exists() && String(snap.data().pin) !== String(current)) {
              showErr("PIN atual incorreto.");
              return;
            }
            saveNewPin(d, s, newPin, overlay);
          }).catch(function () { showErr("Erro ao verificar PIN."); });
          return;
        }
        showErr("PIN atual incorreto.");
        return;
      }
      saveNewPin(d, s, newPin, overlay);
    });
  }

  function saveNewPin(d, s, newPin, overlay) {
    localStorage.setItem(ADMIN_PIN_KEY, newPin);
    if (d && s) {
      s.updateDoc(s.doc(d, "users", PARENT_USERNAME), { pin: newPin }).catch(function () {});
    }
    overlay.remove();
    showAdminToast("PIN alterado com sucesso.", "success");
  }

  function showAdminToast(msg, type) {
    var t = document.createElement("div");
    t.className = "toast toast-" + (type || "info");
    t.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:300;";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () {
      t.style.opacity = "0";
      t.style.transition = "opacity 400ms";
      setTimeout(function () { t.remove(); }, 400);
    }, 2600);
  }

  // ---- Garantir utilizador pai no Firestore ----
  function ensureParentUser() {
    return window.FirebaseReady.then(function (d) {
      if (!d) return;
      var s = sdk();
      var docRef = s.doc(d, "users", PARENT_USERNAME);
      return s.getDoc(docRef).then(function (snap) {
        if (!snap.exists()) {
          return s.setDoc(docRef, {
            name: PARENT_USERNAME,
            pin: DEFAULT_PARENT_PIN,
            role: "parent",
            createdAt: Date.now()
          });
        }
      });
    }).catch(function () {});
  }

  // ---- Bootstrap ----
  window.addEventListener("DOMContentLoaded", function () {
    ensureParentUser();

    if (isLoggedIn()) {
      renderDashboard();
    } else {
      renderLoginScreen();
    }
  });

})();
