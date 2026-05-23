/* ============================================================
   splash.js — Ecrã inicial
   ============================================================ */
(function () {
  "use strict";
  window.Screens = window.Screens || {};

  function render(host, params) {
    const p = State.getProfile();
    const skin = Economy.skinIcon(p.skin);
    const hasProgress = !!(params && params.hasProgress);
    const session = State.get().session;
    const canResume = hasProgress && session && session.cursor;

    host.innerHTML = `
      <section class="screen splash">
        <div class="splash-avatar">${skin.icon}</div>
        <h1 class="splash-title">MatemáticaRoyale</h1>
        <p class="splash-sub">Olá, ${p.name}! Bem-vindo ao desafio.</p>
        <div class="splash-actions">
          ${canResume ? `<button class="btn btn-accent btn-lg" id="splash-resume">▶ Continuar Partida</button>` : ""}
          <button class="btn ${canResume ? 'btn-ghost' : 'btn-primary'} btn-lg" id="splash-start">
            ${hasProgress ? "🗺️ Ir para o mapa" : "🎮 Começar Aventura"}
          </button>
          ${hasProgress ? `<button class="btn btn-ghost" id="splash-reset">⚠️ Recomeçar do zero</button>` : ""}
        </div>
        <p class="splash-info">Geometria — 5º ano — Areal Editores (MSI 5 P2)</p>
      </section>
    `;

    if (canResume) {
      host.querySelector("#splash-resume").addEventListener("click", () => {
        const cur = session.cursor;
        Router.navigate("game", { themeId: cur.themeId, level: cur.level, resumeIndex: cur.index, queue: cur.queue });
      });
    }
    host.querySelector("#splash-start").addEventListener("click", () => Router.navigate("menu"));
    const resetBtn = host.querySelector("#splash-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        Router.modal({
          title: "Tens a certeza?",
          body: "<p>Vais perder TODO o progresso do Lucas (XP, V-Pontos, skins, estatísticas...). Esta ação não pode ser desfeita.</p>",
          buttons: [
            { label: "Cancelar", cls: "btn-ghost" },
            { label: "Sim, recomeçar", cls: "btn-danger", onClick: () => {
              State.reset();
              Router.toast("Progresso apagado. Vamos começar uma nova aventura! 🎮", "info");
              Router.navigate("splash", { hasProgress: false });
            }}
          ]
        });
      });
    }
  }

  window.Screens.splash = { render };
})();
