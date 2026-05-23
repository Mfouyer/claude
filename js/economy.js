/* ============================================================
   economy.js — Vidas, V-Pontos, XP, skins, streaks
   Lê e escreve em State.get().profile
   ============================================================ */
(function () {
  "use strict";

  const LIFE_REGEN_MS = 8 * 60 * 1000; // 1 vida a cada 8 min
  const XP_PER_LEVEL = 200;
  const MED_KIT_PRICE = 80; // 80 💎 — recupera 5/5 vidas

  const SKINS_BY_LEVEL = {
    2: { id: "predador", icon: "🦊", name: "Lucas Predador" },
    3: { id: "cubo",     icon: "🟪", name: "Lucas Cubo" },
    4: { id: "piramide", icon: "🔺", name: "Lucas Pirâmide" },
    5: { id: "robot",    icon: "🤖", name: "Lucas Robô" },
    6: { id: "ninja",    icon: "🥷", name: "Lucas Ninja" },
    7: { id: "lendario", icon: "👑", name: "Lucas Lendário" }
  };

  // Skins compráveis na loja
  const SHOP_SKINS = [
    { id: "dragao",   icon: "🐉", name: "Dragão Geométrico",   price: 500 },
    { id: "astro",    icon: "🚀", name: "Astronauta",          price: 500 },
    { id: "pirata",   icon: "🏴‍☠️", name: "Pirata dos Polígonos", price: 600 }
  ];

  function regenLives() {
    const p = State.getProfile();
    if (p.lives >= p.maxLives) {
      p.lastLifeRegenTs = Date.now();
      return;
    }
    const now = Date.now();
    const elapsed = now - (p.lastLifeRegenTs || now);
    if (elapsed < LIFE_REGEN_MS) return;
    const gained = Math.floor(elapsed / LIFE_REGEN_MS);
    p.lives = Math.min(p.maxLives, p.lives + gained);
    p.lastLifeRegenTs = now - (elapsed % LIFE_REGEN_MS);
  }

  function loseLife() {
    const p = State.getProfile();
    if (p.lives > 0) p.lives -= 1;
    if (p.lives < p.maxLives) {
      p.lastLifeRegenTs = Date.now();
    }
    State.save();
  }

  function gainLife(n) {
    const p = State.getProfile();
    p.lives = Math.min(p.maxLives, p.lives + (n || 1));
    State.save();
  }

  function restoreAllLives() {
    const p = State.getProfile();
    p.lives = p.maxLives;
    p.lastLifeRegenTs = Date.now();
    State.save();
  }

  function msUntilNextLife() {
    const p = State.getProfile();
    if (p.lives >= p.maxLives) return 0;
    const elapsed = Date.now() - (p.lastLifeRegenTs || Date.now());
    return Math.max(0, LIFE_REGEN_MS - elapsed);
  }

  function addVPoints(n) {
    const p = State.getProfile();
    p.vPoints = Math.max(0, p.vPoints + n);
    State.save();
  }

  function spendVPoints(n) {
    const p = State.getProfile();
    if (p.vPoints < n) return false;
    p.vPoints -= n;
    State.save();
    return true;
  }

  function addXP(n) {
    const p = State.getProfile();
    p.xp = Math.max(0, p.xp + n);
    // Subiu de nível?
    const newLevel = Math.floor(p.xp / XP_PER_LEVEL) + 1;
    const unlockedSkins = [];
    while (p.level < newLevel) {
      p.level += 1;
      const skin = SKINS_BY_LEVEL[p.level];
      if (skin && !p.skinsOwned.includes(skin.id)) {
        p.skinsOwned.push(skin.id);
        unlockedSkins.push(skin);
      }
      // Bónus: ao subir de nível, ganha 1 poder aleatório barato
      const candidates = ["scanner", "picareta", "congelante"];
      const pick = candidates[Math.floor(Math.random() * candidates.length)];
      p.inventory[pick] = (p.inventory[pick] || 0) + 1;
    }
    State.save();
    return unlockedSkins;
  }

  function xpProgress() {
    const p = State.getProfile();
    const inCurrent = p.xp - (p.level - 1) * XP_PER_LEVEL;
    return Math.max(0, Math.min(1, inCurrent / XP_PER_LEVEL));
  }

  function skinIcon(skinId) {
    const all = Object.assign({ default: { id: "default", icon: "🦸", name: "Lucas" } },
      ...Object.values(SKINS_BY_LEVEL).map(s => ({ [s.id]: s })),
      ...SHOP_SKINS.map(s => ({ [s.id]: s })));
    return all[skinId] || all.default;
  }

  function buyMedKit() {
    const p = State.getProfile();
    if (p.vPoints < MED_KIT_PRICE) return { ok: false, reason: "V-Pontos insuficientes." };
    p.vPoints -= MED_KIT_PRICE;
    p.lives = p.maxLives;
    p.lastLifeRegenTs = Date.now();
    State.save();
    return { ok: true };
  }

  function streakBonus(streak) {
    // +V-Pts bónus se atingir certas streaks
    if (streak === 3) return { vpts: 5, label: "Em Chamas 🔥" };
    if (streak === 5) return { vpts: 15, label: "Tempestade Roxa 🌪️" };
    if (streak === 7) return { vpts: 0, label: "Domínio Total 👑", doubleNext: true };
    return null;
  }

  // Esta API é consumida pelo router e pelas screens
  window.Economy = {
    LIFE_REGEN_MS, XP_PER_LEVEL, MED_KIT_PRICE, SKINS_BY_LEVEL, SHOP_SKINS,
    regenLives, loseLife, gainLife, restoreAllLives, msUntilNextLife,
    addVPoints, spendVPoints,
    buyMedKit,
    addXP, xpProgress,
    skinIcon, streakBonus
  };
})();
