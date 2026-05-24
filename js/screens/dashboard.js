/* ============================================================
   dashboard.js — Evolução, heatmap, estatísticas
   ============================================================ */
(function () {
  "use strict";
  window.Screens = window.Screens || {};

  function heatLevel(pct, tried) {
    if (tried === 0) return "heat-0";
    if (pct >= 0.95) return "heat-7";
    if (pct >= 0.85) return "heat-6";
    if (pct >= 0.75) return "heat-5";
    if (pct >= 0.65) return "heat-4";
    if (pct >= 0.50) return "heat-3";
    if (pct >= 0.30) return "heat-2";
    return "heat-1";
  }

  function halfDaysToText(n) {
    const days = n * 0.5;
    return days % 1 === 0 ? String(days) : days.toFixed(1).replace(".", ",");
  }

  function buildCommitmentsCard(commitments) {
    const c = commitments || { livros: 0, consola: 0, telemovel: 0 };
    const allZero = c.livros === 0 && c.consola === 0 && c.telemovel === 0;
    let body = "";
    if (allZero) {
      body = `<p style="color:var(--c-text-mute);font-size:0.9rem;">Nenhum compromisso ainda. Continua a jogar! ✨</p>`;
    } else {
      const lines = [];
      if (c.livros > 0) lines.push(`<li>📚 ${c.livros} livro(s) para ler</li>`);
      if (c.consola > 0) lines.push(`<li>🎮 ${halfDaysToText(c.consola)} dias sem consola</li>`);
      if (c.telemovel > 0) lines.push(`<li>📵 ${halfDaysToText(c.telemovel)} dias sem telemóvel</li>`);
      body = `<ul style="padding-left:18px;font-size:0.9rem;line-height:1.8;">${lines.join("")}</ul>`;
    }
    return `
      <article class="card" style="margin-top:12px">
        <h3>📋 Os teus compromissos</h3>
        ${body}
      </article>
    `;
  }

  function render(host) {
    const overall = Progress.getOverallStats();
    const { strongest, weakest } = Progress.strongestAndWeakestTheme();
    const p = State.getProfile();

    // Heatmap
    const header = `
      <div class="heat-cell header"></div>
      <div class="heat-cell header">Fácil</div>
      <div class="heat-cell header">Médio</div>
      <div class="heat-cell header">Hard</div>
      <div class="heat-cell header">Pro</div>
    `;
    const rows = CONTENT.list.map(t => {
      const themeState = State.getTheme(t.id);
      let row = `<div class="heat-cell label">${t.icon} ${t.name}</div>`;
      Progress.LEVEL_ORDER.forEach(lv => {
        const ls = themeState.levels[lv];
        const pct = ls.tried ? Math.round(ls.pct * 100) : 0;
        row += `<div class="heat-cell ${heatLevel(ls.pct, ls.tried)}" title="${ls.tried} tentativas, ${ls.correct} acertos">
          ${ls.tried ? pct + "%" : "—"}
        </div>`;
      });
      return row;
    }).join("");

    const last7 = State.get().history.filter(h => h.type === "answer").slice(-7);
    const lastList = last7.length
      ? last7.map(h => {
          const t = CONTENT.byId(h.themeId);
          return `<li>${t ? t.icon : ""} <strong>${t ? t.name : "?"}</strong> (${h.level}) — ${h.correct ? "✅" : "❌"}</li>`;
        }).join("")
      : "<li><em>Sem atividade recente.</em></li>";

    host.innerHTML = `
      <section class="screen dashboard-screen">
        <h1>📊 A tua Evolução</h1>

        <div class="dash-stats-grid">
          <div class="dash-stat">
            <span class="value">${p.level}</span>
            <span class="label">Nível atual</span>
          </div>
          <div class="dash-stat">
            <span class="value">${overall.tried}</span>
            <span class="label">Perguntas respondidas</span>
          </div>
          <div class="dash-stat">
            <span class="value">${Math.round(overall.pct * 100)}%</span>
            <span class="label">Taxa de acerto</span>
          </div>
          <div class="dash-stat">
            <span class="value">${overall.royales}</span>
            <span class="label">Victory Royales</span>
          </div>
          <div class="dash-stat">
            <span class="value">${p.skinsOwned.length}</span>
            <span class="label">Skins desbloqueadas</span>
          </div>
          <div class="dash-stat">
            <span class="value">${State.get().recovery.length}</span>
            <span class="label">A rever</span>
          </div>
        </div>

        <article class="card">
          <h3>🗺️ Mapa de Calor — taxa de acerto por tema × nível</h3>
          <div class="heatmap">${header}${rows}</div>
        </article>

        <article class="card" style="margin-top:12px">
          <h3>💪 Pontos fortes e a melhorar</h3>
          ${strongest ? `<p>🌟 Tema mais forte: <strong>${CONTENT.byId(strongest.id).name}</strong> (${Math.round(strongest.pct*100)}%)</p>` : "<p>Joga mais para descobrir os teus pontos fortes!</p>"}
          ${weakest ? `<p>🎯 Tema a melhorar: <strong>${CONTENT.byId(weakest.id).name}</strong> (${Math.round(weakest.pct*100)}%)</p>` : ""}
        </article>

        <article class="card" style="margin-top:12px">
          <h3>📜 Últimas 7 respostas</h3>
          <ul>${lastList}</ul>
        </article>

        ${buildCommitmentsCard(p.commitments)}

        <div style="margin-top:16px;text-align:center">
          <button class="btn btn-primary" id="dash-back">← Voltar ao Mapa</button>
        </div>
      </section>
    `;

    host.querySelector("#dash-back").addEventListener("click", () => Router.navigate("menu"));
  }

  window.Screens.dashboard = { render };
})();
