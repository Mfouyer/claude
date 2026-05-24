/* ============================================================
   state.js — Gestão do estado persistente
   Responsabilidades:
     • Carregar/guardar em localStorage com schema versionado
     • Fornecer estado por defeito
     • Migrar versões antigas sem perder progresso
     • Acesso síncrono via State.get() / State.save()
   ============================================================ */
(function () {
  "use strict";

  const STORAGE_KEY = "mathRoyale.v1";
  const CURRENT_SCHEMA = 1;

  const THEME_IDS = ["t1", "t2", "t3", "t4", "t5", "t6", "t7"];
  const LEVELS = ["facil", "medio", "hard", "pro"];

  // -------- defaults --------
  function defaultLevelStats(locked) {
    return {
      tried: 0, correct: 0, wrong: 0,
      done: false, pct: 0,
      locked: !!locked,
      bestStreak: 0
    };
  }

  function defaultTheme(id, unlocked) {
    return {
      id,
      unlocked: !!unlocked,
      levels: {
        facil: defaultLevelStats(false),
        medio: defaultLevelStats(true),
        hard:  defaultLevelStats(true),
        pro:   defaultLevelStats(true)
      },
      victoryRoyale: false
    };
  }

  function defaultState() {
    const themes = {};
    THEME_IDS.forEach((id, i) => {
      themes[id] = defaultTheme(id, i === 0); // só t1 desbloqueado de início
    });
    return {
      schemaVersion: CURRENT_SCHEMA,
      profile: {
        name: "Lucas",
        xp: 0,
        level: 1,
        vPoints: 50,        // brindes iniciais para comprar 1ª dica
        lives: 10,
        maxLives: 10,
        lastLifeRegenTs: Date.now(),
        skin: "default",
        skinsOwned: ["default"],
        inventory: {
          scanner: 1,        // 1 dica grátis para começar
          escudo: 0,
          escolhaDupla: 0,
          picareta: 1,       // 1 dica grátis para começar
          congelante: 0,
          drone: 0
        },
        commitments: { livros: 0, consola: 0, telemovel: 0 }
      },
      themes,
      questionStats: {},
      recovery: [],
      session: {
        lastScreen: null,
        cursor: null,        // { themeId, level, index, queue:[qIds] }
        startedTs: null
      },
      history: []
    };
  }

  // -------- carregar com migração --------
  function load() {
    let raw;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      console.warn("localStorage indisponível", e);
      return defaultState();
    }
    if (!raw) return defaultState();
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      console.warn("Estado corrompido, a recomeçar.", e);
      return defaultState();
    }
    return migrate(parsed);
  }

  function migrate(s) {
    if (!s || typeof s !== "object") return defaultState();
    if (!s.schemaVersion || s.schemaVersion < 1) {
      // só schema v1 existe; futuro: encadear migrações
      s.schemaVersion = 1;
    }
    // Reparar campos em falta sem destruir progresso
    const def = defaultState();
    s.profile = Object.assign({}, def.profile, s.profile || {});
    s.profile.inventory = Object.assign({}, def.profile.inventory, s.profile.inventory || {});
    s.profile.skinsOwned = Array.isArray(s.profile.skinsOwned) && s.profile.skinsOwned.length
      ? s.profile.skinsOwned
      : ["default"];
    // Garantir que commitments existe e preserva valores existentes
    s.profile.commitments = Object.assign(
      {}, def.profile.commitments, s.profile.commitments || {}
    );
    s.themes = s.themes && typeof s.themes === "object" ? s.themes : {};
    THEME_IDS.forEach((id, i) => {
      if (!s.themes[id]) s.themes[id] = defaultTheme(id, i === 0);
      s.themes[id].levels = Object.assign({}, def.themes[id].levels, s.themes[id].levels || {});
      LEVELS.forEach(lv => {
        s.themes[id].levels[lv] = Object.assign(
          {}, defaultLevelStats(s.themes[id].levels[lv]?.locked), s.themes[id].levels[lv] || {}
        );
      });
    });
    s.questionStats = s.questionStats || {};
    s.recovery = Array.isArray(s.recovery) ? s.recovery : [];
    s.session = s.session || { lastScreen: null, cursor: null, startedTs: null };
    s.history = Array.isArray(s.history) ? s.history : [];
    return s;
  }

  // -------- estado em memória --------
  let _state = load();

  function get() { return _state; }

  function save() {
    try {
      // Cap do histórico a 500 entradas para não inchar o storage
      if (_state.history.length > 500) {
        _state.history = _state.history.slice(-500);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(_state));
    } catch (e) {
      console.warn("Falha a gravar estado", e);
    }
  }

  function reset() {
    _state = defaultState();
    save();
  }

  function pushHistory(entry) {
    if (!entry || !entry.type) return;
    entry.ts = entry.ts || Date.now();
    _state.history.push(entry);
  }

  // -------- helpers expostos --------
  function getTheme(themeId) { return _state.themes[themeId]; }
  function getLevelStats(themeId, level) {
    return _state.themes[themeId]?.levels?.[level];
  }
  function getProfile() { return _state.profile; }

  function setSession(cursor, screen) {
    _state.session = {
      lastScreen: screen || _state.session.lastScreen || null,
      cursor: cursor || null,
      startedTs: cursor ? Date.now() : null
    };
    save();
  }

  function clearSession() {
    _state.session = { lastScreen: null, cursor: null, startedTs: null };
    save();
  }

  // -------- API global --------
  window.State = {
    THEME_IDS,
    LEVELS,
    get, save, reset, load,
    pushHistory,
    getTheme, getLevelStats, getProfile,
    setSession, clearSession
  };
})();
