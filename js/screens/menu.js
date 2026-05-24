/* ============================================================
   menu.js — Mapa de temas (Ilha)
   ============================================================ */
(function () {
  "use strict";
  window.Screens = window.Screens || {};

  function levelDot(lv) {
    if (lv.done && lv.pct >= Progress.UNLOCK_THRESHOLD) return "done";
    if (lv.tried > 0) return "partial";
    return "";
  }

  function themeCard(theme, content) {
    const royale = theme.victoryRoyale ? `<div class="theme-royale" title="Victory Royale">👑</div>` : "";
    const completed = theme.victoryRoyale ? "completed" : "";
    const locked = !theme.unlocked;
    const dots = Progress.LEVEL_ORDER.map(lv => {
      const ls = theme.levels[lv];
      return `<span class="theme-level-dot ${levelDot(ls)}" title="${lv} — ${ls.tried} tentativas, ${Math.round(ls.pct*100)}% acerto"></span>`;
    }).join("");

    return `
      <article class="theme-card ${locked ? 'locked' : ''} ${completed}" data-theme="${theme.id}">
        ${royale}
        <div class="theme-icon">${content.icon}</div>
        <div class="theme-name">${content.name}</div>
        <div class="theme-desc">${content.paginas}</div>
        <div class="theme-progress">
          <small style="color:var(--c-text-mute);margin-right:4px;">Níveis:</small>
          ${dots}
        </div>
      </article>
    `;
  }

  function render(host) {
    const s = State.get();
    const cards = CONTENT.list.map(content => {
      const theme = s.themes[content.id];
      return themeCard(theme, content);
    }).join("");

    // Verificar se há sessão a retomar
    const session = s.session;
    let resumeBlock = "";
    if (session && session.cursor) {
      const c = session.cursor;
      const cnt = CONTENT.byId(c.themeId);
      if (cnt) {
        resumeBlock = `
          <div class="resume-banner">
            <span>📍 Continuar onde paraste: <strong>${cnt.name}</strong> (${c.level}, pergunta ${c.index + 1})</span>
            <button class="btn btn-accent" id="menu-resume">Retomar</button>
          </div>
        `;
      }
    }

    host.innerHTML = `
      <section class="screen menu-screen">
        <div class="menu-header">
          <h1>🗺️ Mapa de Aventura</h1>
          <p>Escolhe um tema para começar a tua viagem!</p>
        </div>
        ${resumeBlock}
        <div class="theme-grid" id="theme-grid">${cards}</div>
        <div class="menu-ranking-row">
          <button class="btn btn-rank" id="menu-ranking">🏆 Ranking</button>
        </div>
      </section>
    `;

    if (resumeBlock) {
      host.querySelector("#menu-resume").addEventListener("click", () => {
        const c = State.get().session.cursor;
        Router.navigate("game", { themeId: c.themeId, level: c.level, resumeIndex: c.index, queue: c.queue });
      });
    }

    host.querySelector("#menu-ranking").addEventListener("click", () => {
      Router.navigate("leaderboard");
    });

    host.querySelectorAll(".theme-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.theme;
        const theme = State.getTheme(id);
        if (!theme.unlocked) {
          Router.toast("Este tema ainda está bloqueado. Termina o tema anterior primeiro! 🔒", "info");
          return;
        }
        Router.navigate("content", { themeId: id });
      });
    });
  }

  window.Screens.menu = { render };
})();
