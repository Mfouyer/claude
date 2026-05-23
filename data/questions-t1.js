/* ============================================================
   questions-t1.js — Banco de Triângulos
   ============================================================ */
(function () {
  "use strict";
  window.QBANK = window.QBANK || {};

  const Q = [
    // ============ FÁCIL ============
    {
      id: "t1.q01", themeId: "t1", level: "facil", type: "mcq",
      template: "Como se chama o triângulo com os 3 lados iguais?",
      hint: "3 lados iguais → o nome começa por 'E'.",
      variants: [
        { prompt: "Como se chama o triângulo com os 3 lados iguais?", answer: "Equilátero",
          options: [{label:"Isósceles"},{label:"Equilátero",correct:true},{label:"Escaleno"},{label:"Retângulo"}],
          explain: "Equi (igual) + látero (lado). Equilátero = 3 lados iguais." },
        { prompt: "Um triângulo que tem 3 lados com o mesmo comprimento designa-se por...", answer: "Equilátero",
          options: [{label:"Escaleno"},{label:"Isósceles"},{label:"Equilátero",correct:true},{label:"Obtusângulo"}],
          explain: "3 lados todos iguais → triângulo equilátero." },
        { prompt: "Como se designa um triângulo cujos três lados são congruentes?", answer: "Equilátero",
          options: [{label:"Equilátero",correct:true},{label:"Isósceles"},{label:"Escaleno"},{label:"Acutângulo"}],
          explain: "Congruentes = iguais. 3 lados iguais → equilátero." }
      ]
    },
    {
      id: "t1.q02", themeId: "t1", level: "facil", type: "mcq",
      template: "Como se chama o triângulo com 2 lados iguais (e o terceiro diferente)?",
      hint: "Tem pelo menos 2 lados iguais.",
      variants: [
        { prompt: "Como se chama o triângulo que tem pelo menos 2 lados iguais?", answer: "Isósceles",
          options: [{label:"Escaleno"},{label:"Equilátero"},{label:"Isósceles",correct:true},{label:"Retângulo"}],
          explain: "Pelo menos 2 lados com o mesmo comprimento → triângulo isósceles." },
        { prompt: "Um triângulo com lados 4 cm, 4 cm e 6 cm classifica-se como...", answer: "Isósceles",
          options: [{label:"Isósceles",correct:true},{label:"Escaleno"},{label:"Equilátero"},{label:"Acutângulo"}],
          explain: "Tem 2 lados iguais (4 cm) → isósceles." },
        { prompt: "Qual é o nome do triângulo com exatamente dois lados de igual medida?", answer: "Isósceles",
          options: [{label:"Equilátero"},{label:"Escaleno"},{label:"Obtusângulo"},{label:"Isósceles",correct:true}],
          explain: "Dois lados iguais → isósceles." }
      ]
    },
    {
      id: "t1.q03", themeId: "t1", level: "facil", type: "mcq",
      template: "Como se chama o triângulo com os 3 lados todos diferentes?",
      hint: "Cada lado tem uma medida única.",
      variants: [
        { prompt: "Como se chama o triângulo cujos 3 lados têm comprimentos diferentes?", answer: "Escaleno",
          options: [{label:"Equilátero"},{label:"Isósceles"},{label:"Escaleno",correct:true},{label:"Retângulo"}],
          explain: "3 lados todos diferentes → triângulo escaleno." },
        { prompt: "Um triângulo com lados de 3 cm, 4 cm e 5 cm é...", answer: "Escaleno",
          options: [{label:"Equilátero"},{label:"Escaleno",correct:true},{label:"Isósceles"},{label:"Obtusângulo"}],
          explain: "Os 3 lados são todos diferentes → escaleno." },
        { prompt: "Se nenhum dos lados de um triângulo tem o mesmo comprimento, é...", answer: "Escaleno",
          options: [{label:"Escaleno",correct:true},{label:"Equilátero"},{label:"Isósceles"},{label:"Acutângulo"}],
          explain: "Nenhum lado igual → escaleno." }
      ]
    },
    {
      id: "t1.q04", themeId: "t1", level: "facil", type: "mcq",
      template: "Qual é o triângulo que tem um ângulo reto (90°)?",
      hint: "É o triângulo com um 'cantinho' como o de uma folha.",
      variants: [
        { prompt: "Qual é o triângulo que tem um ângulo reto?", answer: "Triângulo retângulo",
          options: [{label:"Triângulo acutângulo"},{label:"Triângulo retângulo",correct:true},{label:"Triângulo obtusângulo"},{label:"Triângulo escaleno"}],
          explain: "Um ângulo de 90° → triângulo retângulo." },
        { prompt: "Como se classifica um triângulo que possui um ângulo de 90°?", answer: "Triângulo retângulo",
          options: [{label:"Triângulo retângulo",correct:true},{label:"Triângulo acutângulo"},{label:"Triângulo equilátero"},{label:"Triângulo obtusângulo"}],
          explain: "Ângulo reto = 90° → triângulo retângulo." },
        { prompt: "Um triângulo com um ângulo reto chama-se...", answer: "Triângulo retângulo",
          options: [{label:"Obtusângulo"},{label:"Acutângulo"},{label:"Isósceles"},{label:"Retângulo",correct:true}],
          explain: "Ângulo reto → retângulo." }
      ]
    },
    {
      id: "t1.q05", themeId: "t1", level: "facil", type: "mcq",
      template: "Como se chama o triângulo com todos os ângulos agudos (menores que 90°)?",
      hint: "Acutângulo começa por 'A' como 'agudo'.",
      variants: [
        { prompt: "Como se chama o triângulo com todos os ângulos agudos?", answer: "Acutângulo",
          options: [{label:"Obtusângulo"},{label:"Acutângulo",correct:true},{label:"Retângulo"},{label:"Isósceles"}],
          explain: "Todos os ângulos < 90° → acutângulo (todos agudos)." },
        { prompt: "Triângulo em que os 3 ângulos são menores que 90° chama-se...", answer: "Acutângulo",
          options: [{label:"Retângulo"},{label:"Obtusângulo"},{label:"Acutângulo",correct:true},{label:"Equilátero"}],
          explain: "3 ângulos agudos → acutângulo." },
        { prompt: "Qual é a classificação de um triângulo cujos ângulos medem 60°, 70° e 50°?", answer: "Acutângulo",
          options: [{label:"Acutângulo",correct:true},{label:"Retângulo"},{label:"Obtusângulo"},{label:"Escaleno"}],
          explain: "60° + 70° + 50° = 180° ✓ e todos < 90° → acutângulo." }
      ]
    },
    {
      id: "t1.q06", themeId: "t1", level: "facil", type: "mcq",
      template: "Qual é o triângulo com um ângulo obtuso (maior que 90°)?",
      hint: "'Obtuso' = grande, alargado. Maior que 90°.",
      variants: [
        { prompt: "Qual é o triângulo que tem um ângulo obtuso?", answer: "Obtusângulo",
          options: [{label:"Acutângulo"},{label:"Retângulo"},{label:"Obtusângulo",correct:true},{label:"Equilátero"}],
          explain: "Um ângulo > 90° → obtusângulo." },
        { prompt: "Um triângulo com um ângulo de 110° chama-se...", answer: "Obtusângulo",
          options: [{label:"Retângulo"},{label:"Obtusângulo",correct:true},{label:"Isósceles"},{label:"Acutângulo"}],
          explain: "110° é obtuso (> 90°) → obtusângulo." },
        { prompt: "Como se classifica um triângulo que possui um ângulo maior que 90° e menor que 180°?", answer: "Obtusângulo",
          options: [{label:"Obtusângulo",correct:true},{label:"Acutângulo"},{label:"Equilátero"},{label:"Retângulo"}],
          explain: "Ângulo obtuso = entre 90° e 180° → obtusângulo." }
      ]
    },
    {
      id: "t1.q07", themeId: "t1", level: "facil", type: "vf",
      template: "Um triângulo tem sempre 3 vértices.",
      hint: "Conta os 'cantos' de qualquer triângulo.",
      variants: [
        { prompt: "Um triângulo tem sempre 3 vértices.", answer: true, explain: "Sim! Todo o triângulo tem exatamente 3 vértices, 3 lados e 3 ângulos." },
        { prompt: "Todos os triângulos têm 3 lados, 3 ângulos e 3 vértices.", answer: true, explain: "Por definição, um triângulo é um polígono de 3 lados." },
        { prompt: "Há triângulos com 4 vértices.", answer: false, explain: "Não. Se tem 4 vértices, é um quadrilátero, não um triângulo." }
      ]
    },
    {
      id: "t1.q08", themeId: "t1", level: "facil", type: "vf",
      template: "Um triângulo equilátero tem todos os ângulos iguais.",
      hint: "Se os lados são todos iguais, os ângulos também são.",
      variants: [
        { prompt: "Num triângulo equilátero, os 3 ângulos são iguais.", answer: true, explain: "Sim, e cada um mede 60° (porque 60° × 3 = 180°)." },
        { prompt: "Os ângulos de um triângulo equilátero medem todos 60°.", answer: true, explain: "Como os 3 ângulos somam 180° e são iguais: 180° ÷ 3 = 60° cada." },
        { prompt: "Um triângulo equilátero pode ter um ângulo de 90°.", answer: false, explain: "Não. Todos os ângulos medem 60°, portanto nunca é retângulo." }
      ]
    },

    // ============ MÉDIO ============
    {
      id: "t1.q09", themeId: "t1", level: "medio", type: "mcq",
      template: "Um triângulo tem lados 5 cm, 5 cm e 3 cm. Como se classifica quanto aos lados?",
      hint: "Olha para a regra: 'pelo menos 2 iguais'.",
      variants: [
        { prompt: "Um triângulo tem lados 5 cm, 5 cm e 3 cm. Que tipo é, quanto aos lados?", answer: "Isósceles",
          options: [{label:"Equilátero"},{label:"Isósceles",correct:true},{label:"Escaleno"},{label:"Retângulo"}],
          explain: "5 e 5 são iguais → 2 lados iguais → isósceles." },
        { prompt: "Quanto aos lados, como classificas um triângulo de 7 cm, 7 cm e 4 cm?", answer: "Isósceles",
          options: [{label:"Escaleno"},{label:"Isósceles",correct:true},{label:"Equilátero"},{label:"Obtusângulo"}],
          explain: "Dois lados iguais (7 e 7) → isósceles." },
        { prompt: "Um triângulo isósceles é aquele que tem...", answer: "Pelo menos 2 lados iguais",
          options: [{label:"3 lados iguais"},{label:"3 lados diferentes"},{label:"Pelo menos 2 lados iguais",correct:true},{label:"Sempre 1 ângulo reto"}],
          explain: "Definição de isósceles: pelo menos 2 lados com o mesmo comprimento." }
      ]
    },
    {
      id: "t1.q10", themeId: "t1", level: "medio", type: "mcq",
      template: "Os lados de um triângulo medem 4 cm, 6 cm e 8 cm. Como se classifica?",
      hint: "Os 3 lados são diferentes?",
      variants: [
        { prompt: "Lados 4 cm, 6 cm e 8 cm. Classificação?", answer: "Escaleno",
          options: [{label:"Isósceles"},{label:"Escaleno",correct:true},{label:"Equilátero"},{label:"Retângulo"}],
          explain: "4 ≠ 6 ≠ 8 → todos diferentes → escaleno." },
        { prompt: "Um triângulo com lados 2 cm, 3 cm e 5 cm é...", answer: "Escaleno",
          options: [{label:"Escaleno",correct:true},{label:"Isósceles"},{label:"Equilátero"},{label:"Acutângulo"}],
          explain: "Os 3 lados são todos diferentes → escaleno." },
        { prompt: "Como classificas, quanto aos lados, um triângulo de medidas 9 cm, 12 cm e 15 cm?", answer: "Escaleno",
          options: [{label:"Equilátero"},{label:"Isósceles"},{label:"Escaleno",correct:true},{label:"Obtusângulo"}],
          explain: "9 ≠ 12 ≠ 15 → escaleno." }
      ]
    },
    {
      id: "t1.q11", themeId: "t1", level: "medio", type: "mcq",
      template: "Um triângulo tem ângulos 30°, 60° e 90°. Que tipo é, quanto aos ângulos?",
      hint: "Há algum ângulo de exatamente 90°?",
      variants: [
        { prompt: "Ângulos 30°, 60° e 90°. Classificação?", answer: "Retângulo",
          options: [{label:"Acutângulo"},{label:"Retângulo",correct:true},{label:"Obtusângulo"},{label:"Equilátero"}],
          explain: "Tem um ângulo de 90° → triângulo retângulo." },
        { prompt: "Um triângulo cujos ângulos medem 45°, 45° e 90° é...", answer: "Retângulo",
          options: [{label:"Acutângulo"},{label:"Obtusângulo"},{label:"Retângulo",correct:true},{label:"Equilátero"}],
          explain: "Tem 90° → retângulo. (E como tem 2 ângulos iguais é também isósceles.)" },
        { prompt: "Como se classifica, quanto aos ângulos, um triângulo com ângulos 20°, 70° e 90°?", answer: "Retângulo",
          options: [{label:"Obtusângulo"},{label:"Retângulo",correct:true},{label:"Acutângulo"},{label:"Escaleno"}],
          explain: "90° presente → triângulo retângulo." }
      ]
    },
    {
      id: "t1.q12", themeId: "t1", level: "medio", type: "mcq",
      template: "Um triângulo tem ângulos 20°, 30° e 130°. Como se classifica?",
      hint: "Algum ângulo > 90°?",
      variants: [
        { prompt: "Ângulos 20°, 30° e 130°. Tipo de triângulo?", answer: "Obtusângulo",
          options: [{label:"Acutângulo"},{label:"Retângulo"},{label:"Obtusângulo",correct:true},{label:"Equilátero"}],
          explain: "130° > 90° → obtusângulo." },
        { prompt: "Um triângulo com ângulos 40°, 40° e 100° é...", answer: "Obtusângulo",
          options: [{label:"Acutângulo"},{label:"Obtusângulo",correct:true},{label:"Retângulo"},{label:"Equilátero"}],
          explain: "100° é obtuso → obtusângulo. (E como 40°=40°, é também isósceles.)" },
        { prompt: "Como se classifica um triângulo com ângulos 15°, 25° e 140°?", answer: "Obtusângulo",
          options: [{label:"Obtusângulo",correct:true},{label:"Retângulo"},{label:"Acutângulo"},{label:"Escaleno"}],
          explain: "140° > 90° → obtusângulo." }
      ]
    },
    {
      id: "t1.q13", themeId: "t1", level: "medio", type: "input",
      template: "Os ângulos internos de um triângulo somam sempre quantos graus?",
      hint: "Pensa nos triângulos que viste. Quanto é que somam?",
      variants: [
        { prompt: "Quanto somam os ângulos internos de um triângulo (em graus)?", answer: 180, explain: "Em qualquer triângulo, os 3 ângulos internos somam sempre 180°." },
        { prompt: "A soma dos ângulos internos de qualquer triângulo, em graus, é igual a quanto?", answer: 180, explain: "Soma fixa: 180°." },
        { prompt: "Em qualquer triângulo, a soma dos seus ângulos internos vale __° (preenche).", answer: 180, explain: "180° é a soma fixa." }
      ]
    },
    {
      id: "t1.q14", themeId: "t1", level: "medio", type: "input",
      template: "Um triângulo tem dois ângulos de 50° e 70°. Quanto mede o terceiro ângulo, em graus?",
      hint: "Os três ângulos somam 180°. Subtrai!",
      variants: [
        { prompt: "Dois ângulos medem 50° e 70°. Quanto mede o terceiro (em graus)?", answer: 60, explain: "180° − 50° − 70° = 60°." },
        { prompt: "Dois ângulos medem 30° e 80°. Quanto mede o terceiro (em graus)?", answer: 70, explain: "180° − 30° − 80° = 70°." },
        { prompt: "Dois ângulos medem 90° e 45°. Quanto mede o terceiro (em graus)?", answer: 45, explain: "180° − 90° − 45° = 45°." },
        { prompt: "Dois ângulos medem 100° e 40°. Quanto mede o terceiro (em graus)?", answer: 40, explain: "180° − 100° − 40° = 40°." }
      ]
    },
    {
      id: "t1.q15", themeId: "t1", level: "medio", type: "vf",
      template: "Um triângulo pode ter dois ângulos retos.",
      hint: "Se tivesse, quanto já dariam só esses dois?",
      variants: [
        { prompt: "Um triângulo pode ter 2 ângulos de 90°.", answer: false, explain: "Não! Dois ângulos de 90° já somam 180° e ainda faltava o terceiro — impossível." },
        { prompt: "É possível um triângulo ter 2 ângulos retos.", answer: false, explain: "Não — 90° + 90° já dá 180° e ainda há um terceiro ângulo." },
        { prompt: "Num triângulo, pode haver mais do que um ângulo reto.", answer: false, explain: "Não. No máximo há um ângulo reto." }
      ]
    },
    {
      id: "t1.q16", themeId: "t1", level: "medio", type: "vf",
      template: "Um triângulo pode ser escaleno e acutângulo ao mesmo tempo.",
      hint: "Lados diferentes + ângulos todos < 90°?",
      variants: [
        { prompt: "Um triângulo pode ser escaleno e acutângulo simultaneamente.", answer: true, explain: "Sim. Exemplo: ângulos 40°, 60°, 80° (todos agudos) com 3 lados diferentes." },
        { prompt: "É possível um triângulo ser escaleno e obtusângulo ao mesmo tempo.", answer: true, explain: "Sim. Exemplo: ângulos 30°, 40° e 110°, com 3 lados diferentes." },
        { prompt: "Um triângulo pode ser equilátero e retângulo ao mesmo tempo.", answer: false, explain: "Não. Num equilátero todos os ângulos são 60° — nunca há 90°." }
      ]
    },

    // ============ HARD ============
    {
      id: "t1.q17", themeId: "t1", level: "hard", type: "vf",
      template: "Concordas com a Marta: 'um triângulo pode ser isósceles e equilátero'?",
      hint: "Equilátero tem 3 lados iguais. Isósceles precisa de pelo menos 2 iguais.",
      variants: [
        { prompt: "A Marta diz: 'um triângulo pode ser isósceles e equilátero ao mesmo tempo'. É verdade?", answer: true,
          explain: "Sim. Como o isósceles precisa de PELO MENOS 2 lados iguais, e o equilátero tem 3 iguais (logo, também tem 2 iguais), todo o equilátero é também isósceles. A Marta tem razão." },
        { prompt: "Todo o triângulo equilátero é também um triângulo isósceles.", answer: true,
          explain: "Verdadeiro. 3 lados iguais inclui o caso 'pelo menos 2 iguais'." },
        { prompt: "Um triângulo equilátero NÃO é isósceles porque tem 3 lados iguais.", answer: false,
          explain: "Falso. Isósceles é 'pelo menos 2 iguais', e 3 iguais cumpre essa condição. Equilátero é um caso particular de isósceles." }
      ]
    },
    {
      id: "t1.q18", themeId: "t1", level: "hard", type: "mcq",
      template: "Um triângulo equilátero pode ser classificado quanto aos ângulos como...",
      hint: "Que ângulos tem um equilátero?",
      variants: [
        { prompt: "Quanto aos ângulos, um triângulo equilátero é sempre...", answer: "Acutângulo",
          options: [{label:"Acutângulo",correct:true},{label:"Retângulo"},{label:"Obtusângulo"},{label:"Depende do triângulo"}],
          explain: "Todos os ângulos medem 60° → todos agudos → acutângulo." },
        { prompt: "Os ângulos de um triângulo equilátero medem cada um __°. Que tipo é, quanto aos ângulos?", answer: "Acutângulo",
          options: [{label:"Obtusângulo"},{label:"Retângulo"},{label:"Acutângulo",correct:true},{label:"Equilátero"}],
          explain: "60° + 60° + 60° = 180°. 60° é agudo → acutângulo." },
        { prompt: "Sabendo que um equilátero tem todos os ângulos iguais, é também...", answer: "Acutângulo",
          options: [{label:"Retângulo"},{label:"Acutângulo",correct:true},{label:"Obtusângulo"},{label:"Isósceles apenas"}],
          explain: "Cada ângulo é 60° (agudo) → acutângulo (e também isósceles)." }
      ]
    },
    {
      id: "t1.q19", themeId: "t1", level: "hard", type: "mcq",
      template: "Um triângulo retângulo isósceles tem que ângulos?",
      hint: "Um é 90°. Os outros dois somam 90° e são iguais.",
      variants: [
        { prompt: "Um triângulo retângulo isósceles tem ângulos de...", answer: "90°, 45° e 45°",
          options: [{label:"90°, 45° e 45°",correct:true},{label:"60°, 60° e 60°"},{label:"90°, 30° e 60°"},{label:"100°, 40° e 40°"}],
          explain: "É retângulo (1 ângulo de 90°) e os outros dois são iguais (isósceles), logo (180−90)÷2 = 45°." },
        { prompt: "Quais os ângulos de um triângulo isósceles que também é retângulo?", answer: "90°, 45° e 45°",
          options: [{label:"60°, 60° e 60°"},{label:"90°, 45° e 45°",correct:true},{label:"45°, 45° e 90°"},{label:"30°, 60° e 90°"}],
          explain: "90° + 45° + 45° = 180°. Os 2 ângulos iguais são 45°." },
        { prompt: "Num triângulo retângulo isósceles, quanto medem os dois ângulos não retos?", answer: "45° cada",
          options: [{label:"45° cada",correct:true},{label:"60° cada"},{label:"30° cada"},{label:"90° cada"}],
          explain: "Têm de somar 90° e ser iguais → 45° cada." }
      ]
    },
    {
      id: "t1.q20", themeId: "t1", level: "hard", type: "mcq",
      template: "Um triângulo obtusângulo pode ser equilátero?",
      hint: "Equilátero tem ângulos de 60° cada. Há algum obtuso?",
      variants: [
        { prompt: "Pode um triângulo equilátero ser obtusângulo?", answer: "Não, nunca",
          options: [{label:"Sim, sempre"},{label:"Às vezes"},{label:"Não, nunca",correct:true},{label:"Depende"}],
          explain: "Num equilátero todos os ângulos são 60° (agudos) → nunca é obtusângulo." },
        { prompt: "Pode um triângulo escaleno ser retângulo?", answer: "Sim, é possível",
          options: [{label:"Sim, é possível",correct:true},{label:"Não, nunca"},{label:"Só se for isósceles"},{label:"Só se for equilátero"}],
          explain: "Pode! Exemplo: triângulo de lados 3, 4 e 5 cm — é escaleno e tem um ângulo de 90°." },
        { prompt: "Pode um triângulo ser obtusângulo e ter um ângulo reto?", answer: "Não",
          options: [{label:"Sim"},{label:"Não",correct:true},{label:"Só se for isósceles"},{label:"Só com lados muito grandes"}],
          explain: "Um obtusângulo já tem um ângulo > 90°. Se tivesse outro de 90°, a soma passaria de 180°." }
      ]
    },
    {
      id: "t1.q21", themeId: "t1", level: "hard", type: "input",
      template: "Quanto mede cada ângulo de um triângulo equilátero, em graus?",
      hint: "180 ÷ 3 = ?",
      variants: [
        { prompt: "Em graus, quanto mede cada ângulo interno de um triângulo equilátero?", answer: 60, explain: "180° ÷ 3 = 60°. Cada ângulo de um equilátero mede 60°." },
        { prompt: "Os ângulos internos de um equilátero medem cada um __° (preenche).", answer: 60, explain: "Como são iguais e somam 180°, dividimos: 60° cada." },
        { prompt: "Num triângulo equilátero, todos os ângulos medem o mesmo valor. Qual, em graus?", answer: 60, explain: "60° por ângulo." }
      ]
    },

    // ============ PRO ============
    {
      id: "t1.q22", themeId: "t1", level: "pro", type: "mcq",
      template: "Qual destes triângulos é impossível?",
      hint: "Verifica se a soma dos ângulos dá exatamente 180°.",
      variants: [
        { prompt: "Qual destes triângulos é IMPOSSÍVEL?", answer: "Ângulos 100°, 50° e 40°",
          options: [{label:"Ângulos 60°, 60° e 60°"},{label:"Ângulos 90°, 45° e 45°"},{label:"Ângulos 100°, 50° e 40°",correct:true},{label:"Ângulos 20°, 80° e 80°"}],
          explain: "100° + 50° + 40° = 190° ≠ 180°. Os outros somam 180°. Este é impossível." },
        { prompt: "Qual conjunto de ângulos NÃO forma um triângulo?", answer: "70°, 60° e 60°",
          options: [{label:"70°, 60° e 50°"},{label:"30°, 60° e 90°"},{label:"40°, 60° e 80°"},{label:"70°, 60° e 60°",correct:true}],
          explain: "70° + 60° + 60° = 190°. Não dá 180° → impossível." },
        { prompt: "Qual destes NÃO pode ser um triângulo?", answer: "Ângulos 90°, 90° e 0°",
          options: [{label:"Ângulos 60°, 60° e 60°"},{label:"Ângulos 30°, 60° e 90°"},{label:"Ângulos 90°, 90° e 0°",correct:true},{label:"Ângulos 50°, 50° e 80°"}],
          explain: "Um ângulo de 0° não existe num triângulo (seria um segmento, não uma figura)." }
      ]
    },
    {
      id: "t1.q23", themeId: "t1", level: "pro", type: "mcq",
      template: "Um triângulo isósceles tem um ângulo de 100°. Quanto medem os outros dois?",
      hint: "Os outros dois são iguais e somam 80°.",
      variants: [
        { prompt: "Um triângulo isósceles tem um ângulo de 100°. Quanto medem os outros dois?", answer: "40° cada",
          options: [{label:"30° cada"},{label:"40° cada",correct:true},{label:"50° cada"},{label:"80° cada"}],
          explain: "180° − 100° = 80° para os outros dois iguais → 80° ÷ 2 = 40° cada." },
        { prompt: "Um triângulo isósceles tem um ângulo de 120°. Quanto medem os outros dois?", answer: "30° cada",
          options: [{label:"60° cada"},{label:"30° cada",correct:true},{label:"40° cada"},{label:"45° cada"}],
          explain: "180° − 120° = 60°. 60° ÷ 2 = 30° cada." },
        { prompt: "Um triângulo isósceles tem um ângulo de 80° (entre os dois lados iguais). Quanto medem os outros dois?", answer: "50° cada",
          options: [{label:"40° cada"},{label:"50° cada",correct:true},{label:"60° cada"},{label:"80° cada"}],
          explain: "180° − 80° = 100° → 50° cada." }
      ]
    },
    {
      id: "t1.q24", themeId: "t1", level: "pro", type: "vf",
      template: "Todo o triângulo retângulo isósceles é equilátero.",
      hint: "Se fosse equilátero teria todos os ângulos a 60°...",
      variants: [
        { prompt: "Todo o triângulo retângulo isósceles é também equilátero.", answer: false,
          explain: "Falso. Retângulo isósceles tem ângulos 90°, 45° e 45°. Equilátero tem todos a 60°. São tipos diferentes." },
        { prompt: "Um triângulo equilátero é também um triângulo retângulo.", answer: false,
          explain: "Falso. Equilátero tem ângulos de 60° — nunca tem 90°." },
        { prompt: "Um triângulo escaleno pode ser obtusângulo.", answer: true,
          explain: "Verdadeiro. Exemplo: ângulos 30°, 50° e 100° com 3 lados diferentes." }
      ]
    },
    {
      id: "t1.q25", themeId: "t1", level: "pro", type: "mcq",
      template: "Que combinação 'lados × ângulos' é IMPOSSÍVEL?",
      hint: "Pensa em quais propriedades excluem outras.",
      variants: [
        { prompt: "Que combinação é IMPOSSÍVEL?", answer: "Equilátero e Obtusângulo",
          options: [{label:"Equilátero e Acutângulo"},{label:"Isósceles e Retângulo"},{label:"Equilátero e Obtusângulo",correct:true},{label:"Escaleno e Obtusângulo"}],
          explain: "Equilátero tem ângulos de 60° (sempre acutângulo) — nunca pode ser obtusângulo nem retângulo." },
        { prompt: "Que par NÃO é possível?", answer: "Equilátero e Retângulo",
          options: [{label:"Isósceles e Acutângulo"},{label:"Equilátero e Retângulo",correct:true},{label:"Escaleno e Acutângulo"},{label:"Isósceles e Obtusângulo"}],
          explain: "Equilátero nunca tem 90° (todos os ângulos são 60°)." },
        { prompt: "Qual destes triângulos NÃO existe?", answer: "Acutângulo com um ângulo de 100°",
          options: [{label:"Isósceles com um ângulo de 100°"},{label:"Escaleno acutângulo"},{label:"Acutângulo com um ângulo de 100°",correct:true},{label:"Retângulo isósceles"}],
          explain: "'Acutângulo' significa TODOS os ângulos < 90°. 100° contradiz isso." }
      ]
    }
  ];

  window.QBANK.t1 = Q;
})();
