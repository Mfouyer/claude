/* ============================================================
   content.js (screen) — Mostra a matéria + escolha de nível
   ============================================================ */
(function () {
  "use strict";
  window.Screens = window.Screens || {};

  const LEVEL_INFO = {
    facil: { name: "Fácil", icon: "🌱", desc: "Aprende as bases. Sem cronómetro." },
    medio: { name: "Médio", icon: "🌿", desc: "Aplica o que sabes." },
    hard:  { name: "Hard",  icon: "🌳", desc: "Para quem está confiante." },
    pro:   { name: "Pro",   icon: "🏆", desc: "Com cronómetro! Só para os melhores." }
  };

  function render(host, params) {
    const t = CONTENT.byId(params.themeId);
    if (!t) {
      Router.toast("Tema não encontrado.", "error");
      Router.navigate("menu");
      return;
    }

    const sections = t.sections.map(s => `
      <article class="content-section">
        <h3>${s.title}</h3>
        ${s.svg || ""}
        ${s.body}
      </article>
    `).join("");

    const themeState = State.getTheme(t.id);
    const levelCards = Progress.LEVEL_ORDER.map(lv => {
      const info = LEVEL_INFO[lv];
      const ls = themeState.levels[lv];
      const cls = [];
      let footer = "";
      if (ls.locked) {
        cls.push("locked");
        const prevIdx = Progress.LEVEL_ORDER.indexOf(lv) - 1;
        const prev = prevIdx >= 0 ? Progress.LEVEL_ORDER[prevIdx] : null;
        footer = `<div class="level-meta">🔒 Termina ${prev} com ≥80%</div>`;
      } else if (ls.done && ls.pct >= Progress.UNLOCK_THRESHOLD) {
        cls.push("completed");
        footer = `<div class="level-meta">✅ ${Math.round(ls.pct*100)}% • ${ls.correct}/${ls.tried}</div>`;
      } else if (ls.tried > 0) {
        footer = `<div class="level-meta">🎯 ${Math.round(ls.pct*100)}% • ${ls.correct}/${ls.tried}</div>`;
      } else {
        footer = `<div class="level-meta">Por jogar</div>`;
      }
      return `
        <div class="level-card ${cls.join(' ')}" data-level="${lv}">
          <div style="font-size:1.8rem">${info.icon}</div>
          <div class="level-name">${info.name}</div>
          <div class="level-meta">${info.desc}</div>
          ${footer}
        </div>
      `;
    }).join("");

    host.innerHTML = `
      <section class="screen content-screen">
        <div class="content-header">
          <div class="icon">${t.icon}</div>
          <h1>${t.name}</h1>
          <p>${t.paginas} — Areal Editores</p>
        </div>
        <article class="content-section">${t.intro}</article>
        ${sections}
        <article class="content-section">
          <h3>🎮 Escolhe um nível para começar o desafio</h3>
          <div class="level-picker">${levelCards}</div>
        </article>
      </section>
    `;

    host.querySelectorAll(".level-card").forEach(card => {
      card.addEventListener("click", () => {
        const lv = card.dataset.level;
        const ls = themeState.levels[lv];
        if (ls.locked) {
          Router.toast("Este nível está bloqueado. Atinge ≥80% no nível anterior! 🔒", "info");
          return;
        }
        // Iniciar jogo
        const queue = Questions.queueForLevel(t.id, lv, 8);
        if (queue.length === 0) {
          Router.toast("Sem perguntas para este nível ainda.", "error");
          return;
        }
        Router.navigate("game", { themeId: t.id, level: lv, queue, resumeIndex: 0 });
      });
    });

    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.Screens.content = { render };
})();
