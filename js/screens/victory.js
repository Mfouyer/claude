/* ============================================================
   victory.js — Ecrã de Victory Royale (tema concluído)
   ============================================================ */
(function () {
  "use strict";
  window.Screens = window.Screens || {};

  function render(host, params) {
    const t = CONTENT.byId(params.themeId);
    // Recompensas pela conquista
    Economy.addVPoints(50);
    Economy.restoreAllLives();

    host.innerHTML = `
      <div class="victory-screen">
        <div class="victory-card">
          <div class="crown">👑</div>
          <h1>#1 VICTORY ROYALE</h1>
          <h2>Tema "${t.name}" dominado!</h2>
          <div class="victory-rewards">
            <div class="victory-reward">+50 💎 V-Pontos</div>
            <div class="victory-reward">❤️ Vidas restauradas</div>
            <div class="victory-reward">⭐ Estatuto: Mestre de ${t.name}</div>
          </div>
          <button class="btn btn-accent btn-lg" id="vic-back">Voltar ao Mapa</button>
        </div>
      </div>
    `;
    Router.HUD.update();
    host.querySelector("#vic-back").addEventListener("click", () => Router.navigate("menu"));
  }

  window.Screens.victory = { render };
})();
