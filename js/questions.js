/* ============================================================
   questions.js — Selector com anti-padrão + materialização
   Tipos de pergunta:
     • mcq    — múltipla escolha (options[] + answerIndex)
     • vf     — verdadeiro/falso (answer:true|false)
     • input  — resposta numérica (answer:number)
   Cada pergunta tem variants[]: cada variante tem slots e/ou
   override de pergunta/explicação. Selector escolhe variante
   diferente das últimas 2, baralha opções, e roda prefixo.
   ============================================================ */
(function () {
  "use strict";

  const PREFIXES = [
    "Pergunta:",
    "Sabes dizer-me:",
    "Diz-me lá:",
    "Atenção:"
  ];

  // Junta os bancos por tema (cada questions-tN.js regista em window.QBANK)
  function bankFor(themeId, level) {
    const all = window.QBANK || {};
    const arr = (all[themeId] || []).filter(q => q.level === level);
    return arr;
  }

  function bankByTheme(themeId) {
    const all = window.QBANK || {};
    return all[themeId] || [];
  }

  function findById(qId) {
    for (const themeId in window.QBANK) {
      const found = window.QBANK[themeId].find(q => q.id === qId);
      if (found) return found;
    }
    return null;
  }

  function pickVariantIdx(q) {
    const stat = State.get().questionStats[q.id];
    const total = q.variants.length;
    if (total <= 1) return 0;
    const recent = stat?.recentSlots || [];
    const last = stat?.lastVariant;
    const avoid = new Set([last, ...recent.slice(-2)].filter(v => v != null));
    const candidates = [];
    for (let i = 0; i < total; i++) {
      if (!avoid.has(i)) candidates.push(i);
    }
    const pool = candidates.length ? candidates : [...Array(total).keys()].filter(i => i !== last);
    return pool[Math.floor(Math.random() * pool.length)] || 0;
  }

  // Renderiza string com {slots}
  function fill(tpl, slots) {
    if (!tpl) return "";
    return tpl.replace(/\{(\w+)\}/g, (_, k) => slots && slots[k] != null ? String(slots[k]) : "");
  }

  // Constrói as opções (algumas perguntas têm options fixas, outras "auto")
  function buildOptions(q, variant) {
    if (q.type !== "mcq") return null;

    // Caso 1: opções fixas na variante
    if (Array.isArray(variant.options)) {
      const correctIdx = variant.options.findIndex(o => o.correct === true);
      const opts = variant.options.map(o => typeof o === "string" ? { label: o } : o);
      return { options: opts.map(o => o.label), correctIdx };
    }

    // Caso 2: opções fixas no template
    if (Array.isArray(q.options) && q.options.length > 0) {
      // Pode ser strings ou {label, correct}
      const isObj = typeof q.options[0] === "object";
      const labels = isObj ? q.options.map(o => fill(o.label, variant.slots)) : q.options.map(o => fill(o, variant.slots));
      const correctIdx = isObj
        ? q.options.findIndex(o => o.correct === true)
        : labels.findIndex(l => String(l) === String(variant.answer));
      return { options: labels, correctIdx };
    }

    // Caso 3: distratores automáticos (numérico)
    if (typeof variant.answer === "number" && q.options === "auto") {
      return autoNumericOptions(variant.answer, q.autoSpread);
    }

    return null;
  }

  function autoNumericOptions(correct, spread) {
    const s = spread || [1, 2, 3];
    const opts = new Set([correct]);
    let guard = 0;
    while (opts.size < 4 && guard < 30) {
      const sign = Math.random() > 0.5 ? 1 : -1;
      const delta = s[Math.floor(Math.random() * s.length)];
      const cand = correct + sign * delta;
      if (cand >= 0) opts.add(cand);
      guard++;
    }
    const arr = [...opts];
    const correctIdx = arr.indexOf(correct);
    return { options: arr.map(String), correctIdx };
  }

  function shuffleOptions(opts, correctIdx) {
    const indices = opts.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const shuffled = indices.map(i => opts[i]);
    const newCorrect = indices.indexOf(correctIdx);
    return { options: shuffled, correctIdx: newCorrect };
  }

  // Materializa uma pergunta para apresentar
  function materialize(q, opts = {}) {
    if (!q) return null;
    const variantIdx = opts.forcedVariant != null ? opts.forcedVariant : pickVariantIdx(q);
    const variant = q.variants[variantIdx];
    const slots = variant.slots || {};

    const promptText = fill(variant.prompt || q.template, slots);
    const explain = fill(variant.explain || q.explain || "", slots);
    const hint = fill(variant.hint || q.hint || "", slots);

    let options = null;
    let correctIdx = null;
    let answer = variant.answer;

    if (q.type === "mcq") {
      const built = buildOptions(q, variant);
      if (built) {
        const shuffled = shuffleOptions(built.options, built.correctIdx);
        options = shuffled.options;
        correctIdx = shuffled.correctIdx;
        answer = options[correctIdx];
      }
    } else if (q.type === "vf") {
      // V/F: sempre 2 opções, ordem fixa (Verdadeiro, Falso)
      options = ["Verdadeiro", "Falso"];
      correctIdx = variant.answer === true ? 0 : 1;
      answer = variant.answer;
    } else if (q.type === "input") {
      // input: apenas verificar
    }

    const prefix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];

    return {
      qId: q.id,
      themeId: q.themeId,
      level: q.level,
      type: q.type,
      prefix,
      prompt: promptText,
      options,
      correctIdx,
      answer,
      explain,
      hint,
      formulaHint: q.formulaHint || variant.formulaHint || null,
      variantIdx,
      raw: q
    };
  }

  // Regista que esta variante foi usada
  function recordVariantShown(qId, variantIdx) {
    const s = State.get();
    const stat = s.questionStats[qId] || {
      shown: 0, correct: 0, wrong: 0,
      lastVariant: null, recentSlots: [], lastShownTs: 0
    };
    stat.lastShownTs = Date.now();
    if (!Array.isArray(stat.recentSlots)) stat.recentSlots = [];
    stat.recentSlots.push(variantIdx);
    if (stat.recentSlots.length > 4) stat.recentSlots.shift();
    stat.lastVariant = variantIdx;
    s.questionStats[qId] = stat;
    State.save();
  }

  // Selector principal: produz uma fila de N perguntas para um nível
  function queueForLevel(themeId, level, count) {
    const all = bankFor(themeId, level);
    if (!all.length) return [];
    // Baralhar
    const arr = all.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count || arr.length).map(q => q.id);
  }

  // Verificar resposta
  function checkAnswer(materialized, userValue) {
    if (!materialized) return false;
    if (materialized.type === "mcq") {
      return userValue === materialized.correctIdx;
    }
    if (materialized.type === "vf") {
      return userValue === materialized.correctIdx;
    }
    if (materialized.type === "input") {
      const expected = Number(materialized.answer);
      const got = Number(userValue);
      if (Number.isNaN(expected) || Number.isNaN(got)) return false;
      return Math.abs(expected - got) < 0.0001;
    }
    return false;
  }

  window.Questions = {
    materialize, recordVariantShown,
    queueForLevel, bankFor, bankByTheme, findById,
    checkAnswer
  };
})();
