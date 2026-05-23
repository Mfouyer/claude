/* ============================================================
   app.js — Bootstrap
   ============================================================ */
(function () {
  "use strict";

  function start() {
    // Inicializa o estado, regenera vidas
    Economy.regenLives();
    State.save();

    // Verificar progresso prévio
    const s = State.get();
    const hasProgress = s.history.length > 0 || s.profile.xp > 0
      || Object.values(s.themes).some(t => Object.values(t.levels).some(lv => lv.tried > 0));

    if (hasProgress) {
      // Mostrar splash com botão "Continuar"
      Router.navigate("splash", { hasProgress: true });
    } else {
      // 1ª vez — splash de boas-vindas
      Router.navigate("splash", { hasProgress: false });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
