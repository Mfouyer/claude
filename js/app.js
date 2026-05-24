/* ============================================================
   app.js — Bootstrap
   ============================================================ */
(function () {
  "use strict";

  function startGame() {
    // Inicializa o estado, regenera vidas
    Economy.regenLives();
    State.save();

    // Verificar progresso prévio
    const s = State.get();
    const hasProgress = s.history.length > 0 || s.profile.xp > 0
      || Object.values(s.themes).some(t => Object.values(t.levels).some(lv => lv.tried > 0));

    if (hasProgress) {
      Router.navigate("splash", { hasProgress: true });
    } else {
      Router.navigate("splash", { hasProgress: false });
    }
  }

  // Expor para que o ecrã de login possa chamar após login com sucesso
  window.AppStart = startGame;

  function start() {
    // Verificar se utilizador está autenticado
    const user = window.FirebaseAuth ? window.FirebaseAuth.currentUser() : null;
    if (!user) {
      // Mostrar ecrã de login
      Router.navigate("login");
      return;
    }
    startGame();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
