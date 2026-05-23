/* ============================================================
   shop.js — Loja de poderes e skins
   ============================================================ */
(function () {
  "use strict";
  window.Screens = window.Screens || {};

  function render(host) {
    const p = State.getProfile();
    const inv = Powers.inventory();

    const powers = Powers.listAll().map(pw => {
      const owned = inv[pw.id] || 0;
      return `
        <div class="shop-item">
          <div class="ico">${pw.icon}</div>
          <div class="name">${pw.name}</div>
          <div class="desc">${pw.desc}</div>
          <div class="price">${pw.price} 💎</div>
          <small style="color:var(--c-text-mute)">Tens: ${owned}</small>
          <button class="btn btn-primary buy-power" data-id="${pw.id}" ${p.vPoints < pw.price ? "disabled" : ""}>Comprar</button>
        </div>
      `;
    }).join("");

    const skinsCurrent = Economy.skinIcon(p.skin);
    const skinsOwned = p.skinsOwned.map(id => {
      const s = Economy.skinIcon(id);
      const active = id === p.skin;
      return `
        <div class="shop-item" style="${active ? 'border-color:var(--c-success)' : ''}">
          <div class="ico">${s.icon}</div>
          <div class="name">${s.name}</div>
          ${active ? `<span class="owned-tag">A usar</span>` : `<button class="btn btn-primary equip-skin" data-id="${id}">Usar</button>`}
        </div>
      `;
    }).join("");

    const skinsForSale = Economy.SHOP_SKINS.filter(s => !p.skinsOwned.includes(s.id)).map(s => `
      <div class="shop-item">
        <div class="ico">${s.icon}</div>
        <div class="name">${s.name}</div>
        <div class="price">${s.price} 💎</div>
        <button class="btn btn-primary buy-skin" data-id="${s.id}" data-price="${s.price}" ${p.vPoints < s.price ? "disabled" : ""}>Comprar Skin</button>
      </div>
    `).join("");

    host.innerHTML = `
      <section class="screen shop-screen">
        <h1>🛒 Loja</h1>
        <p>Tens <strong>${p.vPoints} 💎 V-Pontos</strong>. Atualmente como <strong>${skinsCurrent.icon} ${skinsCurrent.name}</strong>.</p>

        <h2 style="margin-top:18px">⚡ Poderes-Dica</h2>
        <p style="color:var(--c-text-dim)">Compra poderes para usar quando estiveres encravado numa pergunta!</p>
        <div class="shop-grid">${powers}</div>

        <h2 style="margin-top:18px">🦸 Skins (Aparência do Lucas)</h2>
        <div class="shop-grid">${skinsOwned}${skinsForSale}</div>

        <div style="margin-top:20px;text-align:center">
          <button class="btn btn-primary" id="shop-back">← Voltar ao Mapa</button>
        </div>
      </section>
    `;

    host.querySelectorAll(".buy-power").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const r = Powers.buy(id);
        if (r.ok) {
          Router.toast("✅ Poder adquirido!", "success");
          Router.HUD.update();
          render(host); // refresh
        } else {
          Router.toast(r.reason || "Falhou.", "error");
        }
      });
    });

    host.querySelectorAll(".equip-skin").forEach(btn => {
      btn.addEventListener("click", () => {
        State.getProfile().skin = btn.dataset.id;
        State.save();
        Router.toast("🎭 Skin trocada!", "success");
        Router.HUD.update();
        render(host);
      });
    });

    host.querySelectorAll(".buy-skin").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const price = Number(btn.dataset.price);
        if (Economy.spendVPoints(price)) {
          State.getProfile().skinsOwned.push(id);
          State.save();
          Router.toast("✨ Skin desbloqueada!", "success");
          Router.HUD.update();
          render(host);
        } else {
          Router.toast("V-Pontos insuficientes.", "error");
        }
      });
    });

    host.querySelector("#shop-back").addEventListener("click", () => Router.navigate("menu"));
  }

  window.Screens.shop = { render };
})();
