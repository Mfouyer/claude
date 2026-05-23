/* ============================================================
   progress.js — Acertos/erros, desbloqueio 80%, Zona Recuperação
   ============================================================ */
(function () {
  "use strict";

  const UNLOCK_THRESHOLD = 0.8;       // 80% para abrir nível seguinte
  const VICTORY_THRESHOLD = 0.8;      // 80% em todos os níveis para Victory Royale
  const LEVEL_ORDER = ["facil", "medio", "hard", "pro"];

  function recordAnswer(themeId, level, qId, correct) {
    const s = State.get();
    const lvl = s.themes[themeId]?.levels?.[level];
    if (!lvl) return;
    lvl.tried += 1;
    if (correct) lvl.correct += 1; else lvl.wrong += 1;
    lvl.pct = lvl.tried > 0 ? lvl.correct / lvl.tried : 0;

    // questionStats
    const stat = s.questionStats[qId] || {
      shown: 0, correct: 0, wrong: 0,
      lastVariant: null, recentSlots: [], lastShownTs: 0
    };
    stat.shown += 1;
    if (correct) stat.correct += 1; else stat.wrong += 1;
    stat.lastShownTs = Date.now();
    s.questionStats[qId] = stat;

    // histórico
    State.pushHistory({
      type: "answer", themeId, level, qId, correct, ts: Date.now()
    });

    if (correct) {
      removeFromRecovery(qId);
    } else {
      addToRecovery(themeId, qId);
    }

    State.save();
  }

  function markLevelDone(themeId, level) {
    const s = State.get();
    const lvl = s.themes[themeId]?.levels?.[level];
    if (!lvl) return;
    lvl.done = true;
    // Desbloquear nível seguinte se atingiu 80%
    if (lvl.pct >= UNLOCK_THRESHOLD) {
      const idx = LEVEL_ORDER.indexOf(level);
      if (idx >= 0 && idx < LEVEL_ORDER.length - 1) {
        const next = LEVEL_ORDER[idx + 1];
        s.themes[themeId].levels[next].locked = false;
      }
    }
    // Verificar Victory Royale do tema
    checkVictoryRoyale(themeId);
    // Desbloquear próximo tema (se T1 completo com VR, abrir T2, etc.)
    propagateThemeUnlock();
    State.save();
  }

  function checkVictoryRoyale(themeId) {
    const t = State.getTheme(themeId);
    if (!t) return false;
    const allDone = LEVEL_ORDER.every(lv => {
      const s = t.levels[lv];
      return s.done && s.pct >= VICTORY_THRESHOLD;
    });
    if (allDone && !t.victoryRoyale) {
      t.victoryRoyale = true;
      return true;
    }
    return false;
  }

  function propagateThemeUnlock() {
    // Quando um tema atinge Victory Royale, desbloqueia o próximo.
    // Também: completar o nível Fácil de um tema com 80% já desbloqueia o tema seguinte
    // (para não obrigar a fazer Pro antes de avançar; o Lucas pode jogar em paralelo).
    const s = State.get();
    for (let i = 0; i < State.THEME_IDS.length - 1; i++) {
      const id = State.THEME_IDS[i];
      const nextId = State.THEME_IDS[i + 1];
      const cur = s.themes[id];
      const facilDone = cur.levels.facil.done && cur.levels.facil.pct >= UNLOCK_THRESHOLD;
      if (facilDone || cur.victoryRoyale) {
        s.themes[nextId].unlocked = true;
      }
    }
  }

  function getThemePercent(themeId) {
    const t = State.getTheme(themeId);
    if (!t) return 0;
    let tried = 0, correct = 0;
    LEVEL_ORDER.forEach(lv => {
      tried += t.levels[lv].tried;
      correct += t.levels[lv].correct;
    });
    return tried > 0 ? correct / tried : 0;
  }

  function getOverallStats() {
    const s = State.get();
    let tried = 0, correct = 0, wrong = 0, royales = 0;
    State.THEME_IDS.forEach(id => {
      const t = s.themes[id];
      LEVEL_ORDER.forEach(lv => {
        tried += t.levels[lv].tried;
        correct += t.levels[lv].correct;
        wrong += t.levels[lv].wrong;
      });
      if (t.victoryRoyale) royales += 1;
    });
    return {
      tried, correct, wrong, royales,
      pct: tried ? correct / tried : 0
    };
  }

  function strongestAndWeakestTheme() {
    let strongest = null, weakest = null;
    State.THEME_IDS.forEach(id => {
      const t = State.getTheme(id);
      let tried = 0, correct = 0;
      LEVEL_ORDER.forEach(lv => {
        tried += t.levels[lv].tried;
        correct += t.levels[lv].correct;
      });
      if (tried < 3) return;
      const pct = correct / tried;
      if (!strongest || pct > strongest.pct) strongest = { id, pct, tried };
      if (!weakest || pct < weakest.pct) weakest = { id, pct, tried };
    });
    return { strongest, weakest };
  }

  // ---------- Zona de Recuperação ----------
  function addToRecovery(themeId, qId) {
    const s = State.get();
    if (s.recovery.some(r => r.qId === qId)) return; // já está
    s.recovery.push({
      themeId, qId,
      addedTs: Date.now(),
      due: true,
      attemptsToClear: 0
    });
  }

  function removeFromRecovery(qId) {
    const s = State.get();
    s.recovery = s.recovery.filter(r => r.qId !== qId);
  }

  function recoveryQueue() {
    return State.get().recovery.slice();
  }

  function recordRecoveryAttempt(qId, correct) {
    const s = State.get();
    const item = s.recovery.find(r => r.qId === qId);
    if (!item) return;
    if (correct) {
      removeFromRecovery(qId);
      // bónus a cada 3 limpos
      const clearedNow = (s.profile._recoveryCleared || 0) + 1;
      s.profile._recoveryCleared = clearedNow;
      if (clearedNow % 3 === 0) {
        Economy.addVPoints(20);
        return { cleared: true, bonus: true };
      }
      return { cleared: true, bonus: false };
    } else {
      item.attemptsToClear += 1;
      return { cleared: false };
    }
  }

  window.Progress = {
    UNLOCK_THRESHOLD, VICTORY_THRESHOLD, LEVEL_ORDER,
    recordAnswer, markLevelDone,
    checkVictoryRoyale, propagateThemeUnlock,
    getThemePercent, getOverallStats, strongestAndWeakestTheme,
    addToRecovery, removeFromRecovery, recoveryQueue, recordRecoveryAttempt
  };
})();
