/* ============================================================
   router.js — Navegação entre ecrãs + resume
   Cada screen regista-se em window.Screens com .render(host, params)
   ============================================================ */
(function () {
  "use strict";

  const host = () => document.getElementById("screen-host");
  let currentScreen = null;
  let currentParams = null;

  function navigate(name, params) {
    if (!window.Screens || typeof window.Screens[name]?.render !== "function") {
      console.error("Ecrã desconhecido:", name);
      return;
    }
    currentScreen = name;
    currentParams = params || null;
    const h = host();
    if (!h) return;
    // Limpar cena 3D se existir antes de trocar de ecrã
    if (window.Scene3D && typeof window.Screens.content._destroyScene === "function") {
      window.Screens.content._destroyScene();
    }
    h.innerHTML = "";
    HUD.update();
    HUD.toggle(name !== "splash");
    window.Screens[name].render(h, params);

    // Sessão: se for ecrã de jogo, marca, senão não
    if (name === "game" || name === "recovery") {
      if (params) State.setSession(params.cursor || null, name);
    } else if (name === "menu" || name === "splash") {
      // não toca em session aqui (mantém o que estava)
    }
  }

  function back() {
    navigate("menu");
  }

  function current() { return { name: currentScreen, params: currentParams }; }

  // ---------- HUD ----------
  const HUD = {
    toggle(show) {
      const h = document.getElementById("hud");
      if (!h) return;
      h.hidden = !show;
    },
    update() {
      Economy.regenLives();
      const p = State.getProfile();
      const skin = Economy.skinIcon(p.skin);
      const elAvatar = document.getElementById("hud-avatar");
      const elLives  = document.getElementById("hud-lives");
      const elVpts   = document.getElementById("hud-vpts");
      const elLevel  = document.getElementById("hud-level");
      const elXp     = document.getElementById("hud-xp-fill");
      const elRecBadge = document.getElementById("hud-recovery-badge");
      if (elAvatar) elAvatar.textContent = skin.icon;
      if (elLives)  elLives.textContent  = `${p.lives}/${p.maxLives}`;
      if (elVpts)   elVpts.textContent   = p.vPoints;
      if (elLevel)  elLevel.textContent  = `Nível ${p.level}`;
      if (elXp)     elXp.style.width = `${Math.round(Economy.xpProgress() * 100)}%`;
      const rec = State.get().recovery.length;
      if (elRecBadge) {
        if (rec > 0) {
          elRecBadge.hidden = false;
          elRecBadge.textContent = rec;
        } else {
          elRecBadge.hidden = true;
        }
      }
    }
  };

  // ---------- Toast ----------
  function toast(msg, type) {
    const root = document.getElementById("toast-host");
    if (!root) return;
    const div = document.createElement("div");
    div.className = "toast toast-" + (type || "info");
    div.textContent = msg;
    root.appendChild(div);
    setTimeout(() => {
      div.style.opacity = "0";
      div.style.transition = "opacity 400ms";
      setTimeout(() => div.remove(), 400);
    }, 2600);
  }

  // ---------- Modal ----------
  function modal(opts) {
    const host = document.getElementById("modal-host");
    if (!host) return;
    host.innerHTML = "";
    host.hidden = false;
    const dial = document.createElement("div");
    dial.className = "modal" + (opts.extraClass ? " " + opts.extraClass : "");
    dial.innerHTML = `
      <h2>${opts.title || ""}</h2>
      <div>${opts.body || ""}</div>
      <div class="modal-actions"></div>
    `;
    const acts = dial.querySelector(".modal-actions");
    (opts.buttons || [{ label: "Fechar" }]).forEach(b => {
      const btn = document.createElement("button");
      btn.className = "btn " + (b.cls || "btn-ghost");
      btn.textContent = b.label;
      if (b.disabled) {
        btn.disabled = true;
      }
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        close();
        if (typeof b.onClick === "function") b.onClick();
      });
      acts.appendChild(btn);
    });
    host.appendChild(dial);

    function close() {
      host.innerHTML = "";
      host.hidden = true;
    }
    return { close };
  }

  // ---------- HUD botões ----------
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hud-back").addEventListener("click", () => navigate("menu"));
    document.getElementById("hud-shop").addEventListener("click", () => navigate("shop"));
    document.getElementById("hud-dashboard").addEventListener("click", () => navigate("dashboard"));
    document.getElementById("hud-recovery").addEventListener("click", () => {
      const queue = Progress.recoveryQueue();
      if (!queue.length) {
        toast("A tua Zona de Recuperação está vazia. Boa! 💪", "success");
      } else {
        navigate("recovery");
      }
    });
  });

  window.Router = { navigate, back, current, toast, modal, HUD };
})();
