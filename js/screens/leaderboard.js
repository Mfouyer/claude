/* ============================================================
   leaderboard.js — Ecrã de Ranking Global
   Regista window.Screens.leaderboard com render(host)
   ============================================================ */
(function () {
  "use strict";

  window.Screens = window.Screens || {};

  // Unsubscribe do onSnapshot activo
  var _unsubscribe = null;

  function cleanup() {
    if (typeof _unsubscribe === "function") {
      _unsubscribe();
      _unsubscribe = null;
    }
  }

  function formatTime(totalSeconds) {
    var s = totalSeconds || 0;
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    return h + "h" + String(m).padStart(2, "0") + "m";
  }

  function rankBadge(pos) {
    if (pos === 1) return "🥇";
    if (pos === 2) return "🥈";
    if (pos === 3) return "🥉";
    return "#" + pos;
  }

  function buildRow(entry, pos) {
    var isTop3 = pos <= 3;
    var accuracy = entry.totalAnswered > 0
      ? Math.round((entry.totalCorrect / entry.totalAnswered) * 100)
      : 0;
    var themesText = (entry.themesCompleted || 0) + "/7";
    var timeText = formatTime(entry.totalTimeSeconds);

    return (
      '<li class="leaderboard-entry' + (isTop3 ? " top3" : "") + '">' +
        '<span class="leaderboard-rank' + (isTop3 ? " gold" : "") + '">' + rankBadge(pos) + '</span>' +
        '<span class="leaderboard-name">' + escapeHtml(entry.username) + '</span>' +
        '<span class="leaderboard-score">' + (entry.rankScore || 0) + ' pts</span>' +
        '<span class="leaderboard-meta">' +
          '<span title="Taxa de acerto">' + accuracy + '%</span>' +
          '<span title="Temas concluídos">' + themesText + ' temas</span>' +
          '<span title="Tempo total">' + timeText + '</span>' +
        '</span>' +
      '</li>'
    );
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderList(host, players) {
    var list = host.querySelector(".leaderboard-list");
    var hint = host.querySelector(".leaderboard-hint");
    if (!list) return;

    if (players.length === 0) {
      list.innerHTML = '<li class="leaderboard-empty">Ainda não há jogadores no ranking.</li>';
      if (hint) hint.hidden = true;
      return;
    }

    list.innerHTML = players.map(function (p, i) {
      return buildRow(p, i + 1);
    }).join("");

    if (hint) {
      if (players.length === 1) {
        hint.textContent = "Desafia um amigo para subires! 🚀";
        hint.hidden = false;
      } else {
        hint.hidden = true;
      }
    }
  }

  function render(host) {
    // Cancelar snapshot anterior se houver
    cleanup();

    host.innerHTML = [
      '<section class="screen leaderboard-screen">',
        '<div class="leaderboard-header">',
          '<button class="btn btn-ghost leaderboard-back" id="lb-back">← Voltar</button>',
          '<h1 class="leaderboard-title">🏆 Ranking Global</h1>',
          '<p class="leaderboard-sub">Top 20 jogadores por pontuação combinada</p>',
        '</div>',
        '<div class="leaderboard-body">',
          '<ul class="leaderboard-list" id="lb-list">',
            '<li class="leaderboard-loading">A carregar ranking...</li>',
          '</ul>',
          '<p class="leaderboard-hint" id="lb-hint" hidden></p>',
        '</div>',
      '</section>'
    ].join("");

    host.querySelector("#lb-back").addEventListener("click", function () {
      cleanup();
      Router.navigate("menu");
    });

    // Aguardar Firebase estar pronto
    window.FirebaseReady.then(function (db) {
      if (!db) {
        // Offline
        var list = host.querySelector(".leaderboard-list");
        if (list) {
          list.innerHTML = '<li class="leaderboard-empty leaderboard-offline">Ranking disponível com ligação à internet 🌐</li>';
        }
        return;
      }

      var s = window._FirestoreSDK;
      if (!s || typeof s.onSnapshot !== "function") {
        var list2 = host.querySelector(".leaderboard-list");
        if (list2) {
          list2.innerHTML = '<li class="leaderboard-empty leaderboard-offline">Ranking disponível com ligação à internet 🌐</li>';
        }
        return;
      }

      var q = s.query(
        s.collection(db, "progress"),
        s.orderBy("rankScore", "desc"),
        s.limit(20)
      );

      _unsubscribe = s.onSnapshot(q, function (snap) {
        var players = [];
        snap.forEach(function (docSnap) {
          var data = docSnap.data();
          var totalAnswered = (data.totalCorrect || 0) + (data.totalWrong || 0);
          // Calcular themesCompleted a partir de themeStats (victoryRoyale não está aqui;
          // usamos o rankScore já calculado pelo firebase-sync + guardamos themesCompleted separado)
          // Para a listagem, usamos totalCorrect/totalWrong disponíveis
          players.push({
            username:        docSnap.id,
            rankScore:       data.rankScore || 0,
            totalCorrect:    data.totalCorrect || 0,
            totalWrong:      data.totalWrong || 0,
            totalAnswered:   totalAnswered,
            themesCompleted: data.themesCompleted || 0,
            totalTimeSeconds: data.totalTimeSeconds || 0
          });
        });
        renderList(host, players);
      }, function (err) {
        console.warn("[Leaderboard] Erro Firestore:", err);
        var list3 = host.querySelector(".leaderboard-list");
        if (list3) {
          list3.innerHTML = '<li class="leaderboard-empty leaderboard-offline">Ranking disponível com ligação à internet 🌐</li>';
        }
      });
    });
  }

  window.Screens.leaderboard = { render: render };
})();
