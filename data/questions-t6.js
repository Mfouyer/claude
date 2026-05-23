/* ============================================================
   questions-t6.js — Relações 3n / 2n / n+2 nos prismas
   ============================================================ */
(function () {
  "use strict";
  window.QBANK = window.QBANK || {};

  const Q = [
    // ============ FÁCIL ============
    {
      id: "t6.q01", themeId: "t6", level: "facil", type: "input",
      template: "Num prisma triangular (n=3), quantas arestas há?",
      hint: "Usa a fórmula: arestas = 3 × n.",
      formulaHint: "Arestas = 3 × n (onde n é o número de lados da base)",
      variants: [
        { prompt: "Prisma triangular (n=3): arestas = ?", answer: 9, explain: "3 × 3 = 9 arestas." },
        { prompt: "Prisma quadrangular (n=4): arestas = ?", answer: 12, explain: "3 × 4 = 12 arestas." },
        { prompt: "Prisma pentagonal (n=5): arestas = ?", answer: 15, explain: "3 × 5 = 15 arestas." },
        { prompt: "Prisma hexagonal (n=6): arestas = ?", answer: 18, explain: "3 × 6 = 18 arestas." }
      ]
    },
    {
      id: "t6.q02", themeId: "t6", level: "facil", type: "input",
      template: "Num prisma triangular (n=3), quantos vértices há?",
      hint: "Vértices = 2 × n.",
      formulaHint: "Vértices = 2 × n",
      variants: [
        { prompt: "Prisma triangular (n=3): vértices = ?", answer: 6, explain: "2 × 3 = 6 vértices." },
        { prompt: "Prisma quadrangular (n=4): vértices = ?", answer: 8, explain: "2 × 4 = 8 vértices." },
        { prompt: "Prisma pentagonal (n=5): vértices = ?", answer: 10, explain: "2 × 5 = 10 vértices." },
        { prompt: "Prisma hexagonal (n=6): vértices = ?", answer: 12, explain: "2 × 6 = 12 vértices." }
      ]
    },
    {
      id: "t6.q03", themeId: "t6", level: "facil", type: "input",
      template: "Num prisma triangular (n=3), quantas faces há?",
      hint: "Faces = n + 2.",
      formulaHint: "Faces = n + 2",
      variants: [
        { prompt: "Prisma triangular (n=3): faces = ?", answer: 5, explain: "3 + 2 = 5 faces." },
        { prompt: "Prisma quadrangular (n=4): faces = ?", answer: 6, explain: "4 + 2 = 6 faces." },
        { prompt: "Prisma pentagonal (n=5): faces = ?", answer: 7, explain: "5 + 2 = 7 faces." },
        { prompt: "Prisma hexagonal (n=6): faces = ?", answer: 8, explain: "6 + 2 = 8 faces." }
      ]
    },
    {
      id: "t6.q04", themeId: "t6", level: "facil", type: "mcq",
      template: "Qual é a fórmula para o número total de arestas de um prisma?",
      hint: "Pensa: cada base tem n arestas (são 2 bases) + n arestas laterais.",
      formulaHint: "Arestas = 3 × n",
      variants: [
        { prompt: "Fórmula das arestas de um prisma:", answer: "3 × n",
          options: [{label:"2 × n"},{label:"3 × n",correct:true},{label:"n + 2"},{label:"n × n"}],
          explain: "Arestas = 3n. (2n nas duas bases + n laterais.)" },
        { prompt: "Fórmula dos vértices de um prisma:", answer: "2 × n",
          options: [{label:"3 × n"},{label:"2 × n",correct:true},{label:"n + 2"},{label:"n − 1"}],
          explain: "Vértices = 2n (n em cada base × 2 bases)." },
        { prompt: "Fórmula das faces de um prisma:", answer: "n + 2",
          options: [{label:"n × 2"},{label:"3n"},{label:"n + 2",correct:true},{label:"2n + 2"}],
          explain: "Faces = n + 2 (n faces laterais + 2 bases)." }
      ]
    },
    {
      id: "t6.q05", themeId: "t6", level: "facil", type: "mcq",
      template: "Num prisma, o que é 'n'?",
      hint: "É o nº de lados do polígono da base.",
      variants: [
        { prompt: "Nas fórmulas dos prismas, 'n' representa...", answer: "O número de lados do polígono da base",
          options: [
            {label:"O número total de faces"},
            {label:"O número de lados do polígono da base",correct:true},
            {label:"A altura do prisma"},
            {label:"O número de vértices"}
          ],
          explain: "n é sempre o nº de lados da BASE (que também é o nº de vértices da base e o nº de arestas da base)." },
        { prompt: "Num prisma triangular, n = ?", answer: "3",
          options: [{label:"3",correct:true},{label:"4"},{label:"5"},{label:"6"}],
          explain: "Base = triângulo → n = 3." },
        { prompt: "Num prisma hexagonal, n = ?", answer: "6",
          options: [{label:"4"},{label:"5"},{label:"6",correct:true},{label:"8"}],
          explain: "Base = hexágono → n = 6." }
      ]
    },
    {
      id: "t6.q06", themeId: "t6", level: "facil", type: "vf",
      template: "Num prisma, o número de vértices é sempre par.",
      hint: "É 2n. 2 × qualquer número = par.",
      variants: [
        { prompt: "Num prisma, o número total de vértices é sempre par.", answer: true,
          explain: "Verdadeiro. Vértices = 2n, e 2 × qualquer inteiro é sempre par." },
        { prompt: "Num prisma, o número total de arestas é sempre múltiplo de 3.", answer: true,
          explain: "Verdadeiro. Arestas = 3n, e 3 × qualquer inteiro é múltiplo de 3." },
        { prompt: "Num prisma, o número total de faces é sempre par.", answer: false,
          explain: "Falso. Faces = n + 2. Se n for ímpar (ex: triangular, n=3), faces = 5 (ímpar)." }
      ]
    },
    {
      id: "t6.q07", themeId: "t6", level: "facil", type: "input",
      template: "Quantas faces tem um prisma hexagonal?",
      hint: "n+2 com n=6.",
      formulaHint: "Faces = n + 2",
      variants: [
        { prompt: "Faces de um prisma hexagonal (n=6)?", answer: 8, explain: "6 + 2 = 8 faces." },
        { prompt: "Faces de um prisma heptagonal (n=7)?", answer: 9, explain: "7 + 2 = 9 faces." },
        { prompt: "Faces de um prisma octogonal (n=8)?", answer: 10, explain: "8 + 2 = 10 faces." }
      ]
    },
    {
      id: "t6.q08", themeId: "t6", level: "facil", type: "input",
      template: "Quantas arestas tem um prisma hexagonal?",
      hint: "3 × 6 = ?",
      formulaHint: "Arestas = 3 × n",
      variants: [
        { prompt: "Arestas de um prisma hexagonal?", answer: 18, explain: "3 × 6 = 18 arestas." },
        { prompt: "Arestas de um prisma heptagonal?", answer: 21, explain: "3 × 7 = 21 arestas." },
        { prompt: "Arestas de um prisma octogonal?", answer: 24, explain: "3 × 8 = 24 arestas." }
      ]
    },

    // ============ MÉDIO ============
    {
      id: "t6.q09", themeId: "t6", level: "medio", type: "input",
      template: "Um prisma tem bases octogonais (8 lados). Quantas arestas tem ao todo?",
      hint: "n=8 → 3n = ?",
      formulaHint: "Arestas = 3 × n",
      variants: [
        { prompt: "Prisma com bases octogonais (n=8): arestas?", answer: 24, explain: "3 × 8 = 24." },
        { prompt: "Prisma com bases decagonais (n=10): arestas?", answer: 30, explain: "3 × 10 = 30." },
        { prompt: "Prisma com bases dodecagonais (n=12): arestas?", answer: 36, explain: "3 × 12 = 36." }
      ]
    },
    {
      id: "t6.q10", themeId: "t6", level: "medio", type: "input",
      template: "Um prisma tem bases octogonais. Quantos vértices tem ao todo?",
      hint: "2 × 8 = ?",
      formulaHint: "Vértices = 2 × n",
      variants: [
        { prompt: "Prisma com bases octogonais (n=8): vértices?", answer: 16, explain: "2 × 8 = 16 vértices." },
        { prompt: "Prisma com bases decagonais (n=10): vértices?", answer: 20, explain: "2 × 10 = 20." },
        { prompt: "Prisma com bases dodecagonais (n=12): vértices?", answer: 24, explain: "2 × 12 = 24." }
      ]
    },
    {
      id: "t6.q11", themeId: "t6", level: "medio", type: "input",
      template: "Um prisma com bases octogonais (8 lados) tem quantas faces ao todo?",
      hint: "n+2 com n=8.",
      formulaHint: "Faces = n + 2",
      variants: [
        { prompt: "Prisma octogonal (n=8): faces?", answer: 10, explain: "8 + 2 = 10 faces." },
        { prompt: "Prisma decagonal (n=10): faces?", answer: 12, explain: "10 + 2 = 12 faces." },
        { prompt: "Prisma dodecagonal (n=12): faces?", answer: 14, explain: "12 + 2 = 14 faces." }
      ]
    },
    {
      id: "t6.q12", themeId: "t6", level: "medio", type: "input",
      template: "Um prisma tem 30 arestas. Quantos lados tem a sua base?",
      hint: "30 = 3n → n = ?",
      formulaHint: "Arestas = 3 × n. Se sabes as arestas, então n = arestas ÷ 3.",
      variants: [
        { prompt: "Prisma com 30 arestas — quantos lados tem a base?", answer: 10, explain: "30 ÷ 3 = 10. A base tem 10 lados (decágono)." },
        { prompt: "Prisma com 18 arestas — quantos lados tem a base?", answer: 6, explain: "18 ÷ 3 = 6. Base hexagonal." },
        { prompt: "Prisma com 24 arestas — quantos lados tem a base?", answer: 8, explain: "24 ÷ 3 = 8. Base octogonal." },
        { prompt: "Prisma com 15 arestas — quantos lados tem a base?", answer: 5, explain: "15 ÷ 3 = 5. Base pentagonal." }
      ]
    },
    {
      id: "t6.q13", themeId: "t6", level: "medio", type: "input",
      template: "Um prisma tem 14 vértices. Quantos lados tem a sua base?",
      hint: "14 = 2n → n = ?",
      formulaHint: "Vértices = 2 × n. Se sabes os vértices, então n = vértices ÷ 2.",
      variants: [
        { prompt: "Prisma com 14 vértices — quantos lados tem a base?", answer: 7, explain: "14 ÷ 2 = 7. Base heptagonal." },
        { prompt: "Prisma com 12 vértices — quantos lados tem a base?", answer: 6, explain: "12 ÷ 2 = 6. Base hexagonal." },
        { prompt: "Prisma com 20 vértices — quantos lados tem a base?", answer: 10, explain: "20 ÷ 2 = 10. Base decagonal." },
        { prompt: "Prisma com 8 vértices — quantos lados tem a base?", answer: 4, explain: "8 ÷ 2 = 4. Base quadrangular." }
      ]
    },
    {
      id: "t6.q14", themeId: "t6", level: "medio", type: "input",
      template: "Um prisma tem 10 faces. Quantos lados tem a sua base?",
      hint: "10 = n+2 → n = ?",
      formulaHint: "Faces = n + 2. Se sabes as faces, então n = faces − 2.",
      variants: [
        { prompt: "Prisma com 10 faces — quantos lados tem a base?", answer: 8, explain: "10 − 2 = 8. Base octogonal." },
        { prompt: "Prisma com 7 faces — quantos lados tem a base?", answer: 5, explain: "7 − 2 = 5. Base pentagonal." },
        { prompt: "Prisma com 5 faces — quantos lados tem a base?", answer: 3, explain: "5 − 2 = 3. Base triangular." },
        { prompt: "Prisma com 12 faces — quantos lados tem a base?", answer: 10, explain: "12 − 2 = 10. Base decagonal." }
      ]
    },
    {
      id: "t6.q15", themeId: "t6", level: "medio", type: "vf",
      template: "Um prisma com base pentagonal tem 10 vértices e 15 arestas.",
      hint: "n=5. Aplica 2n e 3n.",
      formulaHint: "Vértices = 2n; Arestas = 3n",
      variants: [
        { prompt: "Prisma pentagonal: 10 vértices e 15 arestas?", answer: true,
          explain: "Verdadeiro. 2 × 5 = 10 vértices, 3 × 5 = 15 arestas." },
        { prompt: "Prisma hexagonal: 12 vértices e 12 arestas?", answer: false,
          explain: "Falso. Tem 12 vértices (2×6) MAS 18 arestas (3×6), não 12." },
        { prompt: "Prisma triangular: 6 vértices, 9 arestas, 5 faces?", answer: true,
          explain: "Verdadeiro. 2×3=6, 3×3=9, 3+2=5. Tudo bate certo." }
      ]
    },
    {
      id: "t6.q16", themeId: "t6", level: "medio", type: "mcq",
      template: "Qual destes prismas tem 7 faces?",
      hint: "n + 2 = 7 → n = ?",
      formulaHint: "Faces = n + 2",
      variants: [
        { prompt: "Prisma com 7 faces:", answer: "Prisma pentagonal",
          options: [{label:"Prisma triangular"},{label:"Prisma quadrangular"},{label:"Prisma pentagonal",correct:true},{label:"Prisma hexagonal"}],
          explain: "n+2=7 → n=5 → pentagonal." },
        { prompt: "Prisma com 8 faces:", answer: "Prisma hexagonal",
          options: [{label:"Prisma pentagonal"},{label:"Prisma hexagonal",correct:true},{label:"Prisma heptagonal"},{label:"Prisma octogonal"}],
          explain: "n+2=8 → n=6 → hexagonal." },
        { prompt: "Prisma com 6 faces:", answer: "Prisma quadrangular",
          options: [{label:"Prisma triangular"},{label:"Prisma quadrangular",correct:true},{label:"Prisma pentagonal"},{label:"Prisma hexagonal"}],
          explain: "n+2=6 → n=4 → quadrangular." }
      ]
    },
    {
      id: "t6.q17", themeId: "t6", level: "medio", type: "input",
      template: "Um prisma com bases de 50 lados tem quantas arestas?",
      hint: "3 × 50 = ?",
      formulaHint: "Arestas = 3 × n",
      variants: [
        { prompt: "Prisma com bases de 50 lados — arestas?", answer: 150, explain: "3 × 50 = 150 arestas." },
        { prompt: "Prisma com bases de 100 lados — arestas?", answer: 300, explain: "3 × 100 = 300 arestas." },
        { prompt: "Prisma com bases de 25 lados — arestas?", answer: 75, explain: "3 × 25 = 75 arestas." }
      ]
    },
    {
      id: "t6.q18", themeId: "t6", level: "medio", type: "input",
      template: "Um prisma com bases de 50 lados tem quantos vértices?",
      hint: "2 × 50 = ?",
      formulaHint: "Vértices = 2 × n",
      variants: [
        { prompt: "Prisma com bases de 50 lados — vértices?", answer: 100, explain: "2 × 50 = 100 vértices." },
        { prompt: "Prisma com bases de 50 lados — faces?", answer: 52, explain: "50 + 2 = 52 faces." },
        { prompt: "Prisma com bases de 100 lados — vértices?", answer: 200, explain: "2 × 100 = 200 vértices." }
      ]
    },

    // ============ HARD ============
    {
      id: "t6.q19", themeId: "t6", level: "hard", type: "vf",
      template: "É possível construir um prisma com 11 vértices.",
      hint: "11 é ímpar. Mas vértices = 2n (par).",
      formulaHint: "Vértices = 2 × n (sempre par)",
      variants: [
        { prompt: "Pode existir um prisma com 11 vértices?", answer: false,
          explain: "Não! Vértices = 2n é sempre par. 11 é ímpar → impossível." },
        { prompt: "Pode existir um prisma com 13 vértices?", answer: false,
          explain: "Não. 13 é ímpar e vértices = 2n é sempre par." },
        { prompt: "Pode existir um prisma com 14 vértices?", answer: true,
          explain: "Sim. 14 = 2 × 7, logo é um prisma heptagonal (com bases de 7 lados)." }
      ]
    },
    {
      id: "t6.q20", themeId: "t6", level: "hard", type: "vf",
      template: "É possível construir um prisma com 16 arestas.",
      hint: "Tem de ser múltiplo de 3.",
      formulaHint: "Arestas = 3n (sempre múltiplo de 3)",
      variants: [
        { prompt: "Pode existir um prisma com 16 arestas?", answer: false,
          explain: "Não. Arestas = 3n é sempre múltiplo de 3. 16 ÷ 3 = 5,33… (não dá inteiro) → impossível." },
        { prompt: "Pode existir um prisma com 17 arestas?", answer: false,
          explain: "Não. 17 não é múltiplo de 3." },
        { prompt: "Pode existir um prisma com 21 arestas?", answer: true,
          explain: "Sim. 21 = 3 × 7 → prisma heptagonal." }
      ]
    },
    {
      id: "t6.q21", themeId: "t6", level: "hard", type: "input",
      template: "Qual é o número MÍNIMO de vértices que um prisma pode ter?",
      hint: "Menor n possível é 3 (triângulo).",
      formulaHint: "Vértices = 2n. O menor n é 3.",
      variants: [
        { prompt: "Nº mínimo de vértices de um prisma?", answer: 6, explain: "Menor base = triângulo (n=3). Vértices = 2 × 3 = 6. O prisma triangular tem 6 vértices." },
        { prompt: "Nº mínimo de arestas de um prisma?", answer: 9, explain: "n=3 → arestas = 3 × 3 = 9. O prisma triangular tem 9 arestas." },
        { prompt: "Nº mínimo de faces de um prisma?", answer: 5, explain: "n=3 → faces = 3 + 2 = 5. O prisma triangular tem 5 faces." }
      ]
    },
    {
      id: "t6.q22", themeId: "t6", level: "hard", type: "mcq",
      template: "Um prisma tem 15 arestas. Qual é o seu nome?",
      hint: "15 = 3n → n = 5 → pentágono.",
      formulaHint: "Arestas = 3n. Para 15 arestas, n = 5.",
      variants: [
        { prompt: "Prisma com 15 arestas chama-se...", answer: "Prisma pentagonal",
          options: [{label:"Prisma triangular"},{label:"Prisma quadrangular"},{label:"Prisma pentagonal",correct:true},{label:"Prisma hexagonal"}],
          explain: "15 ÷ 3 = 5. Base com 5 lados = pentágono → prisma pentagonal." },
        { prompt: "Prisma com 21 arestas chama-se...", answer: "Prisma heptagonal",
          options: [{label:"Prisma hexagonal"},{label:"Prisma heptagonal",correct:true},{label:"Prisma octogonal"},{label:"Prisma decagonal"}],
          explain: "21 ÷ 3 = 7. Base de 7 lados = heptágono." },
        { prompt: "Prisma com 9 arestas chama-se...", answer: "Prisma triangular",
          options: [{label:"Prisma triangular",correct:true},{label:"Prisma quadrangular"},{label:"Prisma pentagonal"},{label:"Pirâmide triangular"}],
          explain: "9 ÷ 3 = 3. Base triangular." }
      ]
    },
    {
      id: "t6.q23", themeId: "t6", level: "hard", type: "input",
      template: "Um prisma tem 24 arestas. Quantas faces tem?",
      hint: "Primeiro acha n a partir das arestas, depois aplica n+2.",
      formulaHint: "Arestas = 3n → n = arestas ÷ 3. Depois faces = n + 2.",
      variants: [
        { prompt: "Prisma com 24 arestas — quantas faces tem?", answer: 10, explain: "n = 24÷3 = 8. Faces = 8+2 = 10." },
        { prompt: "Prisma com 15 arestas — quantas faces?", answer: 7, explain: "n = 15÷3 = 5. Faces = 5+2 = 7." },
        { prompt: "Prisma com 30 arestas — quantas faces?", answer: 12, explain: "n = 30÷3 = 10. Faces = 10+2 = 12." },
        { prompt: "Prisma com 18 arestas — quantas faces?", answer: 8, explain: "n = 18÷3 = 6. Faces = 6+2 = 8." }
      ]
    },
    {
      id: "t6.q24", themeId: "t6", level: "hard", type: "input",
      template: "Um prisma tem 12 vértices. Quantas arestas tem?",
      hint: "Acha n primeiro.",
      formulaHint: "Vértices = 2n → n = vértices ÷ 2. Depois arestas = 3n.",
      variants: [
        { prompt: "Prisma com 12 vértices — quantas arestas?", answer: 18, explain: "n = 12÷2 = 6. Arestas = 3×6 = 18." },
        { prompt: "Prisma com 8 vértices — quantas arestas?", answer: 12, explain: "n = 8÷2 = 4. Arestas = 3×4 = 12." },
        { prompt: "Prisma com 10 vértices — quantas arestas?", answer: 15, explain: "n = 10÷2 = 5. Arestas = 3×5 = 15." },
        { prompt: "Prisma com 16 vértices — quantas arestas?", answer: 24, explain: "n = 16÷2 = 8. Arestas = 3×8 = 24." }
      ]
    },
    {
      id: "t6.q25", themeId: "t6", level: "hard", type: "vf",
      template: "Num prisma, as fórmulas 3n, 2n e n+2 dão sempre números diferentes.",
      hint: "Para n pequeno, vê se algum coincide.",
      variants: [
        { prompt: "Num prisma triangular, arestas, vértices e faces dão números todos diferentes (9, 6, 5).", answer: true,
          explain: "Verdadeiro. 9, 6, 5 — todos diferentes para o prisma triangular." },
        { prompt: "Num prisma quadrangular, o número de arestas é igual ao número de vértices.", answer: false,
          explain: "Falso. Num prisma quadrangular: arestas = 3×4 = 12, vértices = 2×4 = 8. São diferentes (12 ≠ 8)." },
        { prompt: "Num prisma, arestas > vértices > faces (para n ≥ 3).", answer: true,
          explain: "Verdadeiro. 3n > 2n > n+2 quando n ≥ 3 (porque 2n > n+2 ↔ n > 2)." }
      ]
    },

    // ============ PRO ============
    {
      id: "t6.q26", themeId: "t6", level: "pro", type: "mcq",
      template: "Uma caixa de bombons tem a forma de prisma e tem 30 arestas. Quantas faces tem?",
      hint: "n = 30÷3 = 10. Faces = n+2.",
      formulaHint: "n = arestas ÷ 3. Faces = n + 2.",
      variants: [
        { prompt: "Prisma com 30 arestas tem __ faces.", answer: "12",
          options: [{label:"10"},{label:"11"},{label:"12",correct:true},{label:"20"}],
          explain: "n = 30/3 = 10. Faces = 10+2 = 12." },
        { prompt: "Prisma com 36 arestas tem __ faces.", answer: "14",
          options: [{label:"12"},{label:"14",correct:true},{label:"18"},{label:"24"}],
          explain: "n = 36/3 = 12. Faces = 12+2 = 14." },
        { prompt: "Prisma com 60 arestas tem __ faces.", answer: "22",
          options: [{label:"20"},{label:"22",correct:true},{label:"30"},{label:"40"}],
          explain: "n = 60/3 = 20. Faces = 20+2 = 22." }
      ]
    },
    {
      id: "t6.q27", themeId: "t6", level: "pro", type: "vf",
      template: "Existe um prisma com 7 vértices.",
      hint: "Vértices têm de ser pares.",
      formulaHint: "Vértices = 2n (sempre par)",
      variants: [
        { prompt: "Pode existir um prisma com 7 vértices?", answer: false,
          explain: "Não — vértices de prisma são sempre pares (2n). 7 é ímpar." },
        { prompt: "Pode existir um prisma com 7 arestas?", answer: false,
          explain: "Não — arestas são múltiplos de 3. 7 não é múltiplo de 3." },
        { prompt: "Pode existir um prisma com 7 faces?", answer: true,
          explain: "Sim. 7 = 5 + 2, logo é um prisma pentagonal." }
      ]
    },
    {
      id: "t6.q28", themeId: "t6", level: "pro", type: "input",
      template: "Um prisma tem 22 faces. Quantas arestas tem?",
      hint: "Acha n a partir das faces, depois aplica 3n.",
      formulaHint: "Faces = n + 2 → n = faces − 2. Depois arestas = 3n.",
      variants: [
        { prompt: "Prisma com 22 faces — quantas arestas?", answer: 60, explain: "n = 22 − 2 = 20. Arestas = 3 × 20 = 60." },
        { prompt: "Prisma com 12 faces — quantas arestas?", answer: 30, explain: "n = 10. Arestas = 30." },
        { prompt: "Prisma com 8 faces — quantas arestas?", answer: 18, explain: "n = 6. Arestas = 18." },
        { prompt: "Prisma com 5 faces — quantas arestas?", answer: 9, explain: "n = 3. Arestas = 9." }
      ]
    },
    {
      id: "t6.q29", themeId: "t6", level: "pro", type: "input",
      template: "Um prisma tem 14 faces. Quantos vértices tem?",
      hint: "n = 14 - 2 = 12. Vértices = 2 × 12.",
      formulaHint: "n = faces − 2. Vértices = 2n.",
      variants: [
        { prompt: "Prisma com 14 faces — vértices?", answer: 24, explain: "n = 12. Vértices = 2 × 12 = 24." },
        { prompt: "Prisma com 10 faces — vértices?", answer: 16, explain: "n = 8. Vértices = 16." },
        { prompt: "Prisma com 7 faces — vértices?", answer: 10, explain: "n = 5. Vértices = 10." },
        { prompt: "Prisma com 22 faces — vértices?", answer: 40, explain: "n = 20. Vértices = 40." }
      ]
    },
    {
      id: "t6.q30", themeId: "t6", level: "pro", type: "mcq",
      template: "Um prisma tem 50 arestas. Qual destas afirmações é VERDADEIRA?",
      hint: "Verifica se 50 é múltiplo de 3.",
      formulaHint: "Arestas = 3n (deve ser múltiplo de 3)",
      variants: [
        { prompt: "Um prisma tem 50 arestas. Qual é a afirmação verdadeira?", answer: "É impossível — 50 não é múltiplo de 3",
          options: [
            {label:"Tem base com 50 lados"},
            {label:"Tem 17 faces"},
            {label:"É impossível — 50 não é múltiplo de 3",correct:true},
            {label:"Tem 25 vértices"}
          ],
          explain: "50 ÷ 3 = 16,67... não é inteiro. Não há prisma com 50 arestas." },
        { prompt: "Um prisma tem 100 arestas. Qual é a afirmação verdadeira?", answer: "É impossível — 100 não é múltiplo de 3",
          options: [
            {label:"Tem 33 faces"},
            {label:"É impossível — 100 não é múltiplo de 3",correct:true},
            {label:"Tem base com 100 lados"},
            {label:"Tem 50 vértices"}
          ],
          explain: "100 ÷ 3 = 33,33... → impossível." },
        { prompt: "Um prisma tem 33 arestas. É possível?", answer: "Sim — é um prisma com base de 11 lados",
          options: [
            {label:"Não, 33 é ímpar"},
            {label:"Sim — é um prisma com base de 11 lados",correct:true},
            {label:"Não, 33 não é múltiplo de 3"},
            {label:"Sim — tem 11 faces"}
          ],
          explain: "33 ÷ 3 = 11. Prisma com base de 11 lados (undecagonal) — possível!" }
      ]
    },
    {
      id: "t6.q31", themeId: "t6", level: "pro", type: "mcq",
      template: "Quantos vértices tem um prisma cujas bases têm 50 lados?",
      hint: "Multiplica 50 por 2.",
      formulaHint: "Vértices = 2 × n",
      variants: [
        { prompt: "Vértices de um prisma com bases de 50 lados?", answer: "100",
          options: [{label:"50"},{label:"100",correct:true},{label:"150"},{label:"52"}],
          explain: "2 × 50 = 100 vértices." },
        { prompt: "Arestas de um prisma com bases de 50 lados?", answer: "150",
          options: [{label:"100"},{label:"150",correct:true},{label:"50"},{label:"52"}],
          explain: "3 × 50 = 150 arestas." },
        { prompt: "Faces de um prisma com bases de 50 lados?", answer: "52",
          options: [{label:"50"},{label:"52",correct:true},{label:"100"},{label:"150"}],
          explain: "50 + 2 = 52 faces." }
      ]
    },
    {
      id: "t6.q32", themeId: "t6", level: "pro", type: "input",
      template: "Quantos lados tem a base de um prisma com 28 faces?",
      hint: "Faces = n+2 → n = ?",
      formulaHint: "n = faces − 2",
      variants: [
        { prompt: "Base de um prisma com 28 faces — quantos lados?", answer: 26, explain: "n = 28 − 2 = 26 lados." },
        { prompt: "Base de um prisma com 100 faces — quantos lados?", answer: 98, explain: "n = 100 − 2 = 98 lados." },
        { prompt: "Base de um prisma com 17 faces — quantos lados?", answer: 15, explain: "n = 17 − 2 = 15 lados." }
      ]
    }
  ];

  window.QBANK.t6 = Q;
})();
