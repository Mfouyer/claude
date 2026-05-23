/* ============================================================
   powers.js — Os 6 poderes-dica
   Cada poder tem: id, icon, name, desc, price, isUsable(question), apply(ctx)
   ============================================================ */
(function () {
  "use strict";

  const POWERS = [
    {
      id: "scanner",
      icon: "📡",
      name: "Scanner Tático",
      desc: "Elimina 2 opções erradas (só perguntas de múltipla escolha).",
      price: 80,
      isUsable: q => q && q.type === "mcq" && Array.isArray(q.options) && q.options.length >= 4,
      // Devolve indices de opções a eliminar (max 2 erradas)
      apply: (ctx) => {
        const q = ctx.question;
        const correctIdx = ctx.correctIdx;
        const wrongIdxs = q.options
          .map((_, i) => i)
          .filter(i => i !== correctIdx);
        // Baralhar e pegar 2
        for (let i = wrongIdxs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [wrongIdxs[i], wrongIdxs[j]] = [wrongIdxs[j], wrongIdxs[i]];
        }
        return { eliminate: wrongIdxs.slice(0, 2) };
      }
    },
    {
      id: "escudo",
      icon: "🛡️",
      name: "Escudo Recuperador",
      desc: "Bloqueia perda de vida nesta pergunta — mesmo que erres.",
      price: 120,
      isUsable: () => true,
      apply: () => ({ noLifeLoss: true })
    },
    {
      id: "escolhaDupla",
      icon: "🔁",
      name: "Escolha Dupla",
      desc: "Permite responder duas vezes nesta pergunta. A 1ª errada não conta.",
      price: 150,
      isUsable: q => q && (q.type === "mcq" || q.type === "vf"),
      apply: () => ({ doubleTry: true })
    },
    {
      id: "picareta",
      icon: "⛏️",
      name: "Picareta Pedagógica",
      desc: "Mostra uma dica da matéria do tema sobre esta pergunta.",
      price: 100,
      isUsable: q => q && (q.hint || q.explain),
      apply: (ctx) => ({ hint: ctx.question.hint || ctx.question.explainShort || null })
    },
    {
      id: "congelante",
      icon: "❄️",
      name: "Granada Congelante",
      desc: "Para o cronómetro Pro durante 30 segundos.",
      price: 60,
      isUsable: q => q && q._timer === true,
      apply: () => ({ freezeMs: 30000 })
    },
    {
      id: "drone",
      icon: "🛰️",
      name: "Drone de Reconhecimento",
      desc: "Em perguntas de fórmula (3n / 2n / n+2), mostra a fórmula a usar.",
      price: 200,
      isUsable: q => q && q.formulaHint,
      apply: (ctx) => ({ formula: ctx.question.formulaHint })
    }
  ];

  const POWER_BY_ID = Object.fromEntries(POWERS.map(p => [p.id, p]));

  function inventory() {
    return State.getProfile().inventory;
  }

  function count(id) {
    return inventory()[id] || 0;
  }

  function ownsAny() {
    const inv = inventory();
    return Object.values(inv).some(c => c > 0);
  }

  function buy(id) {
    const p = POWER_BY_ID[id];
    if (!p) return { ok: false, reason: "Poder desconhecido." };
    if (!Economy.spendVPoints(p.price)) {
      return { ok: false, reason: "V-Pontos insuficientes." };
    }
    const inv = inventory();
    inv[id] = (inv[id] || 0) + 1;
    State.save();
    return { ok: true };
  }

  function consume(id) {
    const inv = inventory();
    if (!inv[id] || inv[id] <= 0) return false;
    inv[id] -= 1;
    State.save();
    return true;
  }

  function listAll() { return POWERS.slice(); }

  window.Powers = {
    listAll, count, buy, consume, inventory, ownsAny,
    byId: id => POWER_BY_ID[id]
  };
})();
