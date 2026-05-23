/* ============================================================
   recovery.js — Zona de Recuperação
   ============================================================ */
(function () {
  "use strict";
  window.Screens = window.Screens || {};

  function render(host) {
    const queue = Progress.recoveryQueue();
    if (queue.length === 0) {
      host.innerHTML = `
        <section class="screen recovery-screen">
          <div class="recovery-empty">
            <span class="ico">🎉</span>
            <h2>Zona de Recuperação vazia!</h2>
            <p>Não tens erros para rever neste momento. Continua assim!</p>
            <button class="btn btn-primary" id="back-menu">Voltar ao Mapa</button>
          </div>
        </section>
      `;
      host.querySelector("#back-menu").addEventListener("click", () => Router.navigate("menu"));
      return;
    }

    // Iniciar sessão de recuperação: usar as perguntas erradas
    const queueIds = queue.map(r => r.qId);
    // Mostrar intro + começar
    host.innerHTML = `
      <section class="screen recovery-screen">
        <article class="card">
          <h2>🚑 Zona de Recuperação</h2>
          <p>Tens <strong>${queue.length}</strong> ${queue.length === 1 ? "pergunta" : "perguntas"} para rever. Cada acerto remove a pergunta da fila e podes ganhar bónus a cada 3 acertos!</p>
          <p style="color:var(--c-text-dim);font-size:.9rem">As perguntas vão aparecer com enunciado ligeiramente diferente da última vez — para testar mesmo o que aprendeste.</p>
          <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap">
            <button class="btn btn-primary" id="rec-start">▶ Começar Revisão</button>
            <button class="btn btn-ghost" id="rec-back">Voltar</button>
          </div>
        </article>
      </section>
    `;

    host.querySelector("#rec-back").addEventListener("click", () => Router.navigate("menu"));
    host.querySelector("#rec-start").addEventListener("click", () => {
      // Trick: usar o ecrã de jogo com a queue de recovery
      // Tema/nível: usar o do 1º item
      const first = queue[0];
      Router.navigate("game", {
        themeId: first.themeId,
        level: "facil", // Modo recuperação usa as próprias perguntas
        queue: queueIds,
        resumeIndex: 0,
        _isRecovery: true
      });
    });
  }

  window.Screens.recovery = { render };
})();
