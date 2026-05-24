/* ============================================================
   game.js — Ecrã principal de pergunta
   ============================================================ */
(function () {
  "use strict";
  window.Screens = window.Screens || {};

  const TIMER_PRO_MS = 20000;
  let _timerInt = null;
  let _state = null;

  function clearTimer() {
    if (_timerInt) { clearInterval(_timerInt); _timerInt = null; }
  }

  function streakName(s) {
    if (s >= 7) return "Domínio Total 👑";
    if (s >= 5) return "Tempestade Roxa 🌪️";
    if (s >= 3) return "Em Chamas 🔥";
    return null;
  }

  function buildPowerBar(materialized) {
    const ownsAny = Powers.ownsAny();
    if (!ownsAny) {
      return `<div class="power-bar" style="opacity:.7"><small style="color:var(--c-text-mute)">Não tens poderes — visita a loja 🛒</small></div>`;
    }
    const inv = Powers.inventory();
    const slots = Powers.listAll().map(p => {
      const cnt = inv[p.id] || 0;
      const usable = cnt > 0 && p.isUsable(materialized);
      return `
        <button class="power-slot ${usable ? '' : 'disabled'}"
                data-power="${p.id}"
                title="${p.name} — ${p.desc}"
                ${usable ? "" : "disabled"}>
          ${p.icon}
          ${cnt > 0 ? `<span class="power-count">${cnt}</span>` : ""}
        </button>
      `;
    }).join("");
    return `<div class="power-bar">${slots}</div>`;
  }

  function renderQuestion(host, ctx) {
    const m = ctx.materialized;
    const themeState = State.getTheme(ctx.themeId);
    const lv = themeState.levels[ctx.level];

    const isProTimer = ctx.level === "pro";
    m._timer = isProTimer;

    const streakLbl = streakName(ctx.streak);

    let optionsHTML = "";
    if (m.type === "mcq" || m.type === "vf") {
      optionsHTML = `<div class="options">${
        m.options.map((opt, i) => `
          <button class="option-btn" data-idx="${i}">${opt}</button>
        `).join("")
      }</div>`;
    } else if (m.type === "input") {
      optionsHTML = `
        <div class="options">
          <input type="number" class="input-answer" id="input-ans" inputmode="numeric" placeholder="Escreve a tua resposta" autofocus />
          <button class="btn btn-primary" id="submit-input">✓ Confirmar Resposta</button>
        </div>
      `;
    }

    const cnt = CONTENT.byId(ctx.themeId);
    host.innerHTML = `
      <section class="screen game-screen">
        <div class="game-meta">
          <span class="progress-pill">${cnt.icon} ${cnt.name} • ${ctx.level.toUpperCase()}</span>
          <span class="progress-pill">Pergunta ${ctx.index + 1} de ${ctx.queue.length}</span>
          ${streakLbl ? `<span class="streak-banner">${streakLbl} ×${ctx.streak}</span>` : ""}
        </div>
        ${isProTimer ? `<div class="timer-bar"><div class="timer-fill" id="timer-fill" style="width:100%"></div></div>` : ""}
        <div class="question-card">
          <p class="question-text">
            <span class="question-prefix">${m.prefix}</span>
            ${m.prompt}
          </p>
          ${optionsHTML}
          <div id="feedback-host"></div>
          <div class="game-actions" id="actions-host">
            <button class="btn btn-ghost" id="quit-game">Sair</button>
            <span style="flex:1"></span>
            <button class="btn btn-primary" id="next-q" hidden>Próxima →</button>
          </div>
        </div>
        ${buildPowerBar(m)}
      </section>
    `;

    // Marcar variante como mostrada
    Questions.recordVariantShown(m.qId, m.variantIdx);

    bindAnswerHandlers(host, ctx);
    bindPowerHandlers(host, ctx);

    host.querySelector("#quit-game").addEventListener("click", () => {
      clearTimer();
      Router.modal({
        title: "Sair do desafio?",
        body: "<p>Podes retomar mais tarde do ponto onde estás.</p>",
        buttons: [
          { label: "Continuar a jogar", cls: "btn-ghost" },
          { label: "Sair para o mapa", cls: "btn-primary", onClick: () => {
            // Guardar estado da sessão
            State.setSession({
              themeId: ctx.themeId, level: ctx.level,
              index: ctx.index, queue: ctx.queue
            }, "game");
            Router.navigate("menu");
          }}
        ]
      });
    });

    if (isProTimer) startTimer(host, ctx);

    // Foco no input se houver
    const input = host.querySelector("#input-ans");
    if (input) {
      input.focus();
      input.addEventListener("keydown", e => {
        if (e.key === "Enter") host.querySelector("#submit-input").click();
      });
    }
  }

  function bindAnswerHandlers(host, ctx) {
    host.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (ctx.answered) return;
        const idx = Number(btn.dataset.idx);
        handleAnswer(host, ctx, idx, btn);
      });
    });
    const submitInput = host.querySelector("#submit-input");
    if (submitInput) {
      submitInput.addEventListener("click", () => {
        if (ctx.answered) return;
        const inp = host.querySelector("#input-ans");
        const val = inp.value.trim();
        if (val === "") {
          Router.toast("Escreve a tua resposta primeiro.", "info");
          inp.focus();
          return;
        }
        handleAnswer(host, ctx, Number(val), null);
      });
    }
  }

  function bindPowerHandlers(host, ctx) {
    host.querySelectorAll(".power-slot:not(.disabled)").forEach(slot => {
      slot.addEventListener("click", () => {
        const id = slot.dataset.power;
        usePower(host, ctx, id, slot);
      });
    });
  }

  function startTimer(host, ctx) {
    clearTimer();
    ctx._timerRemaining = TIMER_PRO_MS;
    const fill = host.querySelector("#timer-fill");
    const tick = () => {
      ctx._timerRemaining -= 200;
      if (ctx._timerFrozenUntil && Date.now() < ctx._timerFrozenUntil) return; // congelado
      if (ctx._timerRemaining <= 0) {
        clearTimer();
        if (!ctx.answered) {
          Router.toast("⏰ O tempo esgotou!", "error");
          handleAnswer(host, ctx, -999, null); // resposta inválida → erro
        }
        return;
      }
      if (fill) fill.style.width = `${(ctx._timerRemaining / TIMER_PRO_MS) * 100}%`;
    };
    _timerInt = setInterval(tick, 200);
  }

  function usePower(host, ctx, id, slot) {
    if (ctx.answered) {
      Router.toast("Já respondeste a esta pergunta.", "info");
      return;
    }
    const power = Powers.byId(id);
    if (!power || !power.isUsable(ctx.materialized)) {
      Router.toast("Este poder não funciona nesta pergunta.", "info");
      return;
    }
    if (!Powers.consume(id)) {
      Router.toast("Não tens este poder!", "info");
      return;
    }
    Router.HUD.update();

    const ctxObj = {
      question: ctx.materialized,
      correctIdx: ctx.materialized.correctIdx
    };
    const result = power.apply(ctxObj);

    if (result.eliminate) {
      result.eliminate.forEach(i => {
        const btn = host.querySelector(`.option-btn[data-idx="${i}"]`);
        if (btn) btn.classList.add("eliminated");
      });
      Router.toast("📡 Scanner! 2 opções erradas eliminadas.", "success");
    }
    if (result.noLifeLoss) {
      ctx._noLifeLoss = true;
      Router.toast("🛡️ Escudo ativo — não perdes vida nesta pergunta.", "success");
    }
    if (result.doubleTry) {
      ctx._doubleTry = true;
      Router.toast("🔁 Escolha Dupla! Podes tentar duas vezes.", "success");
    }
    if (result.hint) {
      const fb = host.querySelector("#feedback-host");
      const div = document.createElement("div");
      div.className = "feedback";
      div.style.background = "rgba(255, 216, 61, 0.12)";
      div.style.borderColor = "var(--c-accent)";
      div.innerHTML = `<div class="feedback-title">⛏️ Dica:</div><div class="feedback-explain">${result.hint}</div>`;
      fb.appendChild(div);
    }
    if (result.freezeMs) {
      ctx._timerFrozenUntil = Date.now() + result.freezeMs;
      Router.toast(`❄️ Cronómetro congelado por ${result.freezeMs/1000}s!`, "success");
      setTimeout(() => { ctx._timerFrozenUntil = null; }, result.freezeMs);
    }
    if (result.formula) {
      const fb = host.querySelector("#feedback-host");
      const div = document.createElement("div");
      div.className = "feedback";
      div.style.background = "rgba(69, 196, 255, 0.12)";
      div.style.borderColor = "var(--c-info)";
      div.innerHTML = `<div class="feedback-title">🛰️ Fórmula:</div><div class="feedback-explain">${result.formula}</div>`;
      fb.appendChild(div);
    }
    slot.classList.add("used");
    slot.classList.add("disabled");
    slot.disabled = true;
  }

  function handleAnswer(host, ctx, userValue, btn) {
    const correct = Questions.checkAnswer(ctx.materialized, userValue);

    // Escolha Dupla: 1ª errada não conta
    if (!correct && ctx._doubleTry && !ctx._doubleTriedOnce) {
      ctx._doubleTriedOnce = true;
      if (btn) {
        btn.classList.add("wrong");
        setTimeout(() => btn.classList.remove("wrong"), 600);
      }
      Router.toast("Errado, mas tens mais uma tentativa! 🔁", "info");
      return;
    }

    ctx.answered = true;
    clearTimer();

    // Marcar UI
    if (ctx.materialized.type === "mcq" || ctx.materialized.type === "vf") {
      host.querySelectorAll(".option-btn").forEach(b => {
        const i = Number(b.dataset.idx);
        if (i === ctx.materialized.correctIdx) b.classList.add("correct");
        else if (i === userValue && !correct) b.classList.add("wrong");
        b.disabled = true;
      });
    } else if (ctx.materialized.type === "input") {
      const inp = host.querySelector("#input-ans");
      const submit = host.querySelector("#submit-input");
      if (inp) inp.disabled = true;
      if (submit) submit.disabled = true;
    }

    // Atualizar estatísticas
    Progress.recordAnswer(ctx.themeId, ctx.level, ctx.materialized.qId, correct);

    // Firebase: registar resposta
    if (window.FirebaseSync) {
      FirebaseSync.recordAnswer(correct, ctx.materialized.prompt || ctx.materialized.qId, ctx.themeId);
    }

    // Economia
    if (correct) {
      ctx.correct += 1;
      ctx.streak += 1;
      let vptsGain = 10;
      let xpGain = 20;
      if (ctx._streakDoubleNext) {
        vptsGain *= 2; xpGain *= 2;
        ctx._streakDoubleNext = false;
      }
      Economy.addVPoints(vptsGain);
      Economy.addXP(xpGain).forEach(skin => {
        Router.toast(`🎉 Subiste de nível! Desbloqueaste a skin "${skin.name}" ${skin.icon}`, "success");
      });
      const sb = Economy.streakBonus(ctx.streak);
      if (sb) {
        if (sb.vpts) Economy.addVPoints(sb.vpts);
        if (sb.doubleNext) ctx._streakDoubleNext = true;
        Router.toast(`${sb.label}! +${sb.vpts || 0} V-Pts`, "success");
      }
    } else {
      ctx.streak = 0;
      if (!ctx._noLifeLoss) {
        Economy.loseLife();
        if (State.getProfile().lives === 0) {
          // Última vida perdida — não fazer toast, abrimos modal directo em showFeedback
        }
      }
      Economy.addXP(5); // bónus consolação
      ctx._noLifeLoss = false;
    }
    Router.HUD.update();

    // Feedback
    showFeedback(host, ctx, correct);
  }

  function showMedKitModal(host, ctx) {
    const p = State.getProfile();
    const canAfford = p.vPoints >= Economy.MED_KIT_PRICE;
    // Determina se este ctx já tem uma sessão de jogo a correr (tem materialized)
    // ou se vem do ecrã de entrada (sem sessão real iniciada)
    const isActiveGame = !!(ctx.materialized !== undefined);

    Router.modal({
      title: "💉 Med Kit de Emergência",
      body: `
        <span class="medkit-icon">💉</span>
        <p style="text-align:center;margin-bottom:12px;">Ficaste sem vidas! O Med Kit recupera <strong>5/5 vidas</strong> e permite continuar imediatamente.</p>
        <div style="text-align:center;margin-bottom:8px;">
          <span class="medkit-price-tag">💎 ${Economy.MED_KIT_PRICE} V-Pontos</span>
        </div>
        <p style="text-align:center;font-size:0.88rem;color:var(--c-text-dim);">Tens agora: ${p.vPoints} 💎</p>
      `,
      extraClass: "modal-medkit",
      buttons: [
        canAfford
          ? { label: "💉 Usar Med Kit — continuar!", cls: "btn-medkit", onClick: () => {
              const r = Economy.buyMedKit();
              if (r.ok) {
                Router.toast("💉 Med Kit usado! Vidas restauradas.", "success");
                Router.HUD.update();
                if (isActiveGame) {
                  // Continuar a pergunta actual (avança para próxima)
                  // ctx.index já foi incrementado antes de chamar showMedKitModal a partir de advance
                  if (ctx.index >= ctx.queue.length) {
                    finishLevel(ctx);
                  } else {
                    nextQuestion(host, ctx);
                  }
                } else {
                  // Vinha de render sem vidas — reinicia o jogo normalmente
                  Router.navigate("game", {
                    themeId: ctx.themeId, level: ctx.level,
                    queue: ctx.queue, resumeIndex: ctx.index
                  });
                }
              } else {
                Router.toast(r.reason, "error");
              }
            }}
          : { label: "💎 V-Pontos insuficientes", cls: "btn-ghost", disabled: true },
        { label: "🛒 Visitar Loja", cls: "btn-accent", onClick: () => {
            if (ctx.themeId && ctx.queue && ctx.queue.length > 0) {
              State.setSession({ themeId: ctx.themeId, level: ctx.level, index: ctx.index, queue: ctx.queue }, "game");
            }
            Router.navigate("shop");
          }
        },
        { label: "🗺️ Ir ao Mapa", cls: "btn-ghost", onClick: () => {
            if (ctx.themeId && ctx.queue && ctx.queue.length > 0) {
              State.setSession({ themeId: ctx.themeId, level: ctx.level, index: ctx.index, queue: ctx.queue }, "game");
            }
            Router.navigate("menu");
          }
        }
      ]
    });
  }

  function showFeedback(host, ctx, correct) {
    const fb = host.querySelector("#feedback-host");
    const div = document.createElement("div");
    div.className = "feedback " + (correct ? "correct" : "wrong");
    div.innerHTML = `
      <div class="feedback-title">${correct ? "✅ Correto!" : "❌ Errado."}</div>
      <div class="feedback-explain">${ctx.materialized.explain || (correct ? "Boa!" : "Vamos rever.")}</div>
    `;
    fb.appendChild(div);

    const livesAfter = State.getProfile().lives;
    const next = host.querySelector("#next-q");

    // Sem vidas após erro: abre modal Med Kit directamente sem esperar "Próxima"
    if (!correct && livesAfter === 0) {
      // Incrementar index agora (equivalente ao que advance faria)
      ctx.index += 1;
      let medkitModalOpened = false;
      function openMedKit() {
        if (medkitModalOpened) return;
        medkitModalOpened = true;
        showMedKitModal(host, ctx);
      }
      next.hidden = false;
      next.textContent = "💉 Med Kit →";
      next.classList.add("btn-medkit");
      next.focus();
      next.addEventListener("click", openMedKit, { once: true });
      // Abre automaticamente após breve pausa para o jogador ver o feedback
      setTimeout(openMedKit, 900);
      return;
    }

    next.hidden = false;
    next.focus();
    next.addEventListener("click", () => advance(host, ctx), { once: true });
  }

  function advance(host, ctx) {
    ctx.index += 1;
    if (State.getProfile().lives === 0) {
      // Sem vidas: abrir modal Med Kit (já foi salvo o estado se vier de showMedKitModal)
      clearTimer();
      showMedKitModal(host, ctx);
      return;
    }
    if (ctx.index >= ctx.queue.length) {
      finishLevel(ctx);
      return;
    }
    nextQuestion(host, ctx);
  }

  function finishLevel(ctx) {
    Progress.markLevelDone(ctx.themeId, ctx.level);
    State.clearSession();

    // Firebase: terminar sessão
    if (window.FirebaseSync) FirebaseSync.endSession();
    const ls = State.getLevelStats(ctx.themeId, ctx.level);
    const theme = State.getTheme(ctx.themeId);
    const justRoyale = theme.victoryRoyale; // pode ter sido marcado agora

    if (justRoyale) {
      // Ecrã Victory Royale (ou se já era VR antes, mostra confirmação)
      Router.navigate("victory", { themeId: ctx.themeId, level: ctx.level, ls });
      return;
    }

    Router.modal({
      title: "Nível Concluído! 🎯",
      body: `
        <p>Acertaste <strong>${ctx.correct} de ${ctx.queue.length}</strong> perguntas (${Math.round(ctx.correct/ctx.queue.length*100)}%).</p>
        ${ls.pct >= Progress.UNLOCK_THRESHOLD ? "<p>🔓 Desbloqueaste o próximo nível!</p>" : "<p>🎯 Para desbloqueares o próximo nível precisas de ≥80%.</p>"}
      `,
      buttons: [
        { label: "Voltar ao Mapa", cls: "btn-primary", onClick: () => Router.navigate("menu") }
      ]
    });
  }

  function nextQuestion(host, ctx) {
    const qId = ctx.queue[ctx.index];
    const q = Questions.findById(qId);
    if (!q) {
      Router.toast("Pergunta não encontrada — a pular.", "error");
      ctx.index += 1;
      if (ctx.index >= ctx.queue.length) return finishLevel(ctx);
      return nextQuestion(host, ctx);
    }
    ctx.materialized = Questions.materialize(q);
    ctx.answered = false;
    ctx._noLifeLoss = false;
    ctx._doubleTry = false;
    ctx._doubleTriedOnce = false;
    renderQuestion(host, ctx);
  }

  function render(host, params) {
    // Verificar vidas
    Economy.regenLives();
    if (State.getProfile().lives === 0) {
      // Usar um ctx temporário para o modal Med Kit (com os params passados)
      const tempCtx = {
        themeId: params ? params.themeId : null,
        level: params ? params.level : null,
        index: params ? (params.resumeIndex || 0) : 0,
        queue: params ? (params.queue || []) : []
      };
      showMedKitModal(host, tempCtx);
      return;
    }

    if (!params || !params.queue || params.queue.length === 0) {
      Router.toast("Sessão inválida.", "error");
      Router.navigate("menu");
      return;
    }

    const ctx = {
      themeId: params.themeId,
      level: params.level,
      queue: params.queue,
      index: params.resumeIndex || 0,
      streak: 0,
      correct: 0,
      answered: false,
      materialized: null
    };
    _state = ctx;

    // Firebase: iniciar sessão
    if (window.FirebaseSync && window.FirebaseAuth) {
      const u = window.FirebaseAuth.currentUser();
      if (u) FirebaseSync.startSession(u.username, params.themeId);
    }

    nextQuestion(host, ctx);
  }

  window.Screens.game = { render };
})();
