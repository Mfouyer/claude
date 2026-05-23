/* ============================================================
   questions-t7.js — Cubo e Paralelepípedo Retângulo
   ============================================================ */
(function () {
  "use strict";
  window.QBANK = window.QBANK || {};

  const Q = [
    // ============ FÁCIL ============
    {
      id: "t7.q01", themeId: "t7", level: "facil", type: "input",
      template: "Quantas faces, arestas e vértices tem um cubo?",
      hint: "Pensa no dado: 6 lados, 8 cantos, 12 arestas.",
      variants: [
        { prompt: "Faces de um cubo?", answer: 6, explain: "6 faces (todas quadradas iguais)." },
        { prompt: "Arestas de um cubo?", answer: 12, explain: "12 arestas (todas com o mesmo comprimento)." },
        { prompt: "Vértices de um cubo?", answer: 8, explain: "8 vértices (os 8 cantos)." }
      ]
    },
    {
      id: "t7.q02", themeId: "t7", level: "facil", type: "mcq",
      template: "Que forma têm todas as faces de um cubo?",
      hint: "Iguais entre si.",
      variants: [
        { prompt: "Que forma têm as faces de um cubo?", answer: "Quadrados",
          options: [{label:"Triângulos"},{label:"Quadrados",correct:true},{label:"Retângulos diferentes"},{label:"Pentágonos"}],
          explain: "As 6 faces de um cubo são quadrados iguais." },
        { prompt: "Que forma têm as faces de um paralelepípedo retângulo?", answer: "Retângulos",
          options: [{label:"Triângulos"},{label:"Quadrados sempre"},{label:"Retângulos",correct:true},{label:"Pentágonos"}],
          explain: "Paralelepípedo retângulo: 6 faces retangulares (em 3 pares iguais)." },
        { prompt: "Quantos pares de faces opostas tem um cubo?", answer: "3",
          options: [{label:"2"},{label:"3",correct:true},{label:"4"},{label:"6"}],
          explain: "6 faces ÷ 2 = 3 pares opostos (cima/baixo, frente/trás, esquerda/direita)." }
      ]
    },
    {
      id: "t7.q03", themeId: "t7", level: "facil", type: "vf",
      template: "O cubo é um caso particular de paralelepípedo retângulo.",
      hint: "Cubo = paralelepípedo retângulo com as 3 dimensões iguais.",
      variants: [
        { prompt: "O cubo é um caso particular de paralelepípedo retângulo.", answer: true,
          explain: "Verdadeiro. O cubo é o paralelepípedo retângulo em que as 3 dimensões (comprimento, largura, altura) são iguais." },
        { prompt: "O cubo é um prisma quadrangular.", answer: true,
          explain: "Verdadeiro. As bases são quadrados, é um caso particular de prisma quadrangular." },
        { prompt: "O paralelepípedo retângulo é sempre um cubo.", answer: false,
          explain: "Falso. Só é cubo se as 3 dimensões forem iguais. Uma caixa de sapatos é um paralelepípedo retângulo mas não é cubo." }
      ]
    },
    {
      id: "t7.q04", themeId: "t7", level: "facil", type: "mcq",
      template: "Cada face de um cubo é paralela a quantas outras faces?",
      hint: "Uma face tem 1 oposta.",
      variants: [
        { prompt: "Cada face de um cubo é paralela a quantas outras?", answer: "1",
          options: [{label:"1",correct:true},{label:"2"},{label:"3"},{label:"4"}],
          explain: "Cada face tem exatamente 1 face oposta (paralela)." },
        { prompt: "Cada face de um cubo é perpendicular a quantas outras?", answer: "4",
          options: [{label:"2"},{label:"3"},{label:"4",correct:true},{label:"5"}],
          explain: "Cada face é perpendicular às 4 faces adjacentes (todas exceto a oposta)." },
        { prompt: "Cada aresta de um cubo é paralela a quantas outras arestas?", answer: "3",
          options: [{label:"2"},{label:"3",correct:true},{label:"4"},{label:"6"}],
          explain: "Cada aresta tem 3 paralelas (no total, 4 arestas paralelas em cada um dos 3 grupos)." }
      ]
    },
    {
      id: "t7.q05", themeId: "t7", level: "facil", type: "input",
      template: "Um cubo tem todas as arestas iguais. Se uma aresta mede 5 cm, qual é o comprimento de cada uma das outras 11?",
      hint: "Todas iguais.",
      variants: [
        { prompt: "Aresta do cubo = 5 cm. Quanto mede cada uma das outras 11 arestas (em cm)?", answer: 5, explain: "Todas as arestas de um cubo têm o mesmo comprimento. Se uma mede 5 cm, todas medem 5 cm." },
        { prompt: "Aresta do cubo = 8 cm. Soma das 12 arestas (em cm)?", answer: 96, explain: "12 × 8 = 96 cm." },
        { prompt: "Aresta do cubo = 3 cm. Soma das 12 arestas (em cm)?", answer: 36, explain: "12 × 3 = 36 cm." }
      ]
    },
    {
      id: "t7.q06", themeId: "t7", level: "facil", type: "mcq",
      template: "Num paralelepípedo retângulo, quantos grupos de arestas iguais há?",
      hint: "1 grupo para cada dimensão (comprimento, largura, altura).",
      variants: [
        { prompt: "Num paralelepípedo retângulo, há __ grupos de 4 arestas iguais.", answer: "3",
          options: [{label:"2"},{label:"3",correct:true},{label:"4"},{label:"6"}],
          explain: "3 grupos de 4 arestas iguais — um para cada dimensão (comprimento, largura, altura)." },
        { prompt: "Num cubo, quantos grupos de arestas iguais há?", answer: "1 (todas iguais)",
          options: [{label:"3"},{label:"4"},{label:"1 (todas iguais)",correct:true},{label:"6"}],
          explain: "Num cubo TODAS as 12 arestas são iguais → 1 único grupo de 12." },
        { prompt: "Num paralelepípedo retângulo com dimensões 3, 4 e 5 cm, há quantas arestas com 4 cm?", answer: "4",
          options: [{label:"2"},{label:"4",correct:true},{label:"6"},{label:"12"}],
          explain: "Cada dimensão corresponde a 4 arestas paralelas. A dimensão de 4 cm tem 4 arestas iguais." }
      ]
    },

    // ============ MÉDIO ============
    {
      id: "t7.q07", themeId: "t7", level: "medio", type: "input",
      template: "A soma de todas as arestas de um cubo é 72 cm. Quanto mede cada aresta?",
      hint: "Há 12 arestas iguais. 72 ÷ 12 = ?",
      variants: [
        { prompt: "Soma das arestas de um cubo = 72 cm. Aresta = ? (cm)", answer: 6, explain: "12 arestas iguais → 72 ÷ 12 = 6 cm." },
        { prompt: "Soma das arestas de um cubo = 48 cm. Aresta = ? (cm)", answer: 4, explain: "48 ÷ 12 = 4 cm." },
        { prompt: "Soma das arestas de um cubo = 120 cm. Aresta = ? (cm)", answer: 10, explain: "120 ÷ 12 = 10 cm." },
        { prompt: "Soma das arestas de um cubo = 36 cm. Aresta = ? (cm)", answer: 3, explain: "36 ÷ 12 = 3 cm." }
      ]
    },
    {
      id: "t7.q08", themeId: "t7", level: "medio", type: "input",
      template: "Um cubo tem aresta de 7 cm. Qual é a soma de todas as suas arestas (em cm)?",
      hint: "12 arestas iguais. Multiplica.",
      variants: [
        { prompt: "Cubo de aresta 7 cm: soma das arestas (cm)?", answer: 84, explain: "12 × 7 = 84 cm." },
        { prompt: "Cubo de aresta 10 cm: soma das arestas (cm)?", answer: 120, explain: "12 × 10 = 120 cm." },
        { prompt: "Cubo de aresta 4 cm: soma das arestas (cm)?", answer: 48, explain: "12 × 4 = 48 cm." }
      ]
    },
    {
      id: "t7.q09", themeId: "t7", level: "medio", type: "mcq",
      template: "Num cubo [ABCDEFGH] em que ABCD é a base inferior e EFGH a base superior (com E sobre A, F sobre B, etc.), qual é a face oposta a [ABCD]?",
      hint: "A face oposta à base inferior é a base superior.",
      variants: [
        { prompt: "Cubo [ABCDEFGH] (ABCD em baixo, EFGH em cima). Face oposta a [ABCD]?", answer: "[EFGH]",
          options: [{label:"[ABFE]"},{label:"[EFGH]",correct:true},{label:"[BCGF]"},{label:"[DCGH]"}],
          explain: "[ABCD] é a base inferior; a face oposta (paralela) é a base superior [EFGH]." },
        { prompt: "Cubo [ABCDEFGH]. Face oposta a [ABFE]?", answer: "[DCGH]",
          options: [{label:"[DCGH]",correct:true},{label:"[ABCD]"},{label:"[BCGF]"},{label:"[EFGH]"}],
          explain: "[ABFE] (frente) tem como oposta a face [DCGH] (trás)." },
        { prompt: "Cubo [ABCDEFGH]. Face oposta a [BCGF]?", answer: "[ADHE]",
          options: [{label:"[ABCD]"},{label:"[EFGH]"},{label:"[ADHE]",correct:true},{label:"[ABFE]"}],
          explain: "[BCGF] (lado direito) tem como oposta a face [ADHE] (lado esquerdo)." }
      ]
    },
    {
      id: "t7.q10", themeId: "t7", level: "medio", type: "mcq",
      template: "Num cubo [ABCDEFGH], a aresta [AE] é paralela a quais?",
      hint: "São as 3 outras arestas verticais.",
      variants: [
        { prompt: "Cubo [ABCDEFGH]: arestas paralelas a [AE]?", answer: "[BF], [CG], [DH]",
          options: [
            {label:"[AB], [BC], [CD]"},
            {label:"[BF], [CG], [DH]",correct:true},
            {label:"[EF], [FG], [GH]"},
            {label:"[AC], [BD], [EG]"}
          ],
          explain: "[AE] é uma aresta 'vertical'. As 3 paralelas são as outras 'verticais': [BF], [CG], [DH]." },
        { prompt: "Cubo [ABCDEFGH]: arestas paralelas a [AB]?", answer: "[DC], [HG], [EF]",
          options: [
            {label:"[DC], [HG], [EF]",correct:true},
            {label:"[AE], [BF], [CG]"},
            {label:"[BC], [AD], [EH]"},
            {label:"[GH], [DH], [AE]"}
          ],
          explain: "[AB] tem como paralelas [DC] (base inferior), [HG] (base superior) e [EF] (lado superior frente)." },
        { prompt: "Cubo [ABCDEFGH]: arestas paralelas a [AD]?", answer: "[BC], [FG], [EH]",
          options: [
            {label:"[BC], [FG], [EH]",correct:true},
            {label:"[AE], [BF], [DH]"},
            {label:"[AB], [DC], [EF]"},
            {label:"[GH], [HG], [AE]"}
          ],
          explain: "[AD] tem 3 paralelas: [BC] (lado da base inferior), [FG], [EH]." }
      ]
    },
    {
      id: "t7.q11", themeId: "t7", level: "medio", type: "mcq",
      template: "Num cubo [ABCDEFGH], a aresta [AB] é perpendicular a quantas outras arestas?",
      hint: "É perpendicular às que se encontram com ela em ângulo reto.",
      variants: [
        { prompt: "Quantas arestas são perpendiculares a [AB] num cubo? (que se cruzam com ela)", answer: "4",
          options: [{label:"2"},{label:"3"},{label:"4",correct:true},{label:"6"}],
          explain: "Em cada vértice de [AB] (que são A e B) encontram-se 2 outras arestas perpendiculares — total 4." },
        { prompt: "Quantas faces do cubo são perpendiculares a uma face dada?", answer: "4",
          options: [{label:"2"},{label:"3"},{label:"4",correct:true},{label:"5"}],
          explain: "Uma face tem 4 faces adjacentes (todas perpendiculares a ela) e 1 oposta (paralela)." },
        { prompt: "Numa face do cubo, quantas arestas a delimitam?", answer: "4",
          options: [{label:"3"},{label:"4",correct:true},{label:"6"},{label:"8"}],
          explain: "Cada face é um quadrado → 4 arestas." }
      ]
    },
    {
      id: "t7.q12", themeId: "t7", level: "medio", type: "input",
      template: "Um paralelepípedo retângulo tem 12 cm × 6 cm × 5 cm. Quanto mede a soma de todas as arestas (em cm)?",
      hint: "4 arestas de cada dimensão. Soma = 4 × (12 + 6 + 5).",
      variants: [
        { prompt: "Paralelepípedo 12×6×5 cm — soma das arestas (cm)?", answer: 92, explain: "4 × (12 + 6 + 5) = 4 × 23 = 92 cm." },
        { prompt: "Paralelepípedo 10×8×4 cm — soma das arestas (cm)?", answer: 88, explain: "4 × (10 + 8 + 4) = 4 × 22 = 88 cm." },
        { prompt: "Paralelepípedo 5×5×8 cm — soma das arestas (cm)?", answer: 72, explain: "4 × (5 + 5 + 8) = 4 × 18 = 72 cm." }
      ]
    },
    {
      id: "t7.q13", themeId: "t7", level: "medio", type: "mcq",
      template: "Numa caixa de chocolates de 12 cm × 6 cm × 5 cm, quantos chocolates 3 cm × 1 cm × 1,5 cm cabem?",
      hint: "Divide as dimensões: 12÷3, 6÷1, 5÷1,5.",
      variants: [
        { prompt: "Caixa 12×6×5 cm; chocolate 3×1×1,5 cm. Quantos cabem (no melhor arranjo)?", answer: "80",
          options: [{label:"40"},{label:"60"},{label:"80",correct:true},{label:"120"}],
          explain: "Melhor orientação: 12÷3 = 4, 6÷1,5 = 4, 5÷1 = 5 → 4 × 4 × 5 = 80 chocolates." },
        { prompt: "Numa caixa 10×4×3 cm cabem cubinhos de 1×1×1 cm. Quantos cabem?", answer: "120",
          options: [{label:"60"},{label:"100"},{label:"120",correct:true},{label:"160"}],
          explain: "10 × 4 × 3 = 120 cubinhos." },
        { prompt: "Numa caixa 6×4×2 cm cabem cubinhos de 2×2×2 cm. Quantos cabem?", answer: "6",
          options: [{label:"3"},{label:"4"},{label:"6",correct:true},{label:"12"}],
          explain: "6÷2=3; 4÷2=2; 2÷2=1. Total: 3 × 2 × 1 = 6 cubinhos." }
      ]
    },
    {
      id: "t7.q14", themeId: "t7", level: "medio", type: "vf",
      template: "Num cubo, todas as faces têm a mesma área.",
      hint: "São 6 quadrados iguais.",
      variants: [
        { prompt: "Num cubo, todas as faces têm a mesma área.", answer: true,
          explain: "Verdadeiro. As 6 faces são quadrados com o mesmo lado, logo a mesma área." },
        { prompt: "Num paralelepípedo retângulo, todas as faces têm a mesma área.", answer: false,
          explain: "Falso. Há 3 pares iguais — mas as áreas dos pares podem ser diferentes (depende das dimensões)." },
        { prompt: "Num cubo, qualquer face é perpendicular às 4 faces adjacentes.", answer: true,
          explain: "Verdadeiro. Só a face oposta é paralela." }
      ]
    },

    // ============ HARD ============
    {
      id: "t7.q15", themeId: "t7", level: "hard", type: "input",
      template: "Um cubo de aresta 4 cm é partido em cubinhos de 1 cm × 1 cm × 1 cm. Quantos cubinhos se obtêm?",
      hint: "4 × 4 × 4.",
      variants: [
        { prompt: "Cubo de aresta 4 cm partido em cubinhos de 1×1×1 cm — quantos?", answer: 64, explain: "4 × 4 × 4 = 64 cubinhos." },
        { prompt: "Cubo de aresta 5 cm partido em cubinhos de 1×1×1 cm — quantos?", answer: 125, explain: "5 × 5 × 5 = 125." },
        { prompt: "Cubo de aresta 3 cm partido em cubinhos de 1×1×1 cm — quantos?", answer: 27, explain: "3 × 3 × 3 = 27." },
        { prompt: "Cubo de aresta 2 cm partido em cubinhos de 1×1×1 cm — quantos?", answer: 8, explain: "2 × 2 × 2 = 8." }
      ]
    },
    {
      id: "t7.q16", themeId: "t7", level: "hard", type: "input",
      template: "Um bolo cubo é coberto de chocolate em todas as faces exceto na base. Partido em 27 cubinhos iguais (3×3×3), quantos cubinhos têm chocolate?",
      hint: "Camada 1 (em baixo): só os das laterais. Camada 2: idem. Camada 3 (topo): todos.",
      variants: [
        { prompt: "Bolo cubo coberto exceto na base, dividido em 27 cubinhos (3×3×3). Quantos têm chocolate?", answer: 25,
          explain: "Camada 1 (em baixo): 8 dos 9 têm chocolate nas laterais (o do meio não). Camada 2: 8 dos 9. Camada 3 (topo): todos os 9. Total: 8+8+9 = 25." },
        { prompt: "Bolo cubo coberto exceto na base, dividido em 27 cubinhos. Quantos NÃO têm chocolate?", answer: 2,
          explain: "27 − 25 = 2. São os cubinhos do meio das camadas 1 e 2." },
        { prompt: "Se o bolo fosse coberto em TODAS as 6 faces e dividido em 27 cubinhos, quantos não têm chocolate?", answer: 1,
          explain: "Só 1 — o cubinho central, que não toca em nenhuma face exterior." }
      ]
    },
    {
      id: "t7.q17", themeId: "t7", level: "hard", type: "input",
      template: "Uma caixa cúbica tem 60 cm de soma de todas as arestas. Qual é a aresta do cubo (em cm)?",
      hint: "60 ÷ 12.",
      variants: [
        { prompt: "Cubo: soma das arestas = 60 cm. Aresta? (cm)", answer: 5, explain: "60 ÷ 12 = 5 cm." },
        { prompt: "Cubo: soma das arestas = 24 cm. Aresta? (cm)", answer: 2, explain: "24 ÷ 12 = 2 cm." },
        { prompt: "Cubo: soma das arestas = 144 cm. Aresta? (cm)", answer: 12, explain: "144 ÷ 12 = 12 cm." },
        { prompt: "Cubo: soma das arestas = 108 cm. Aresta? (cm)", answer: 9, explain: "108 ÷ 12 = 9 cm." }
      ]
    },
    {
      id: "t7.q18", themeId: "t7", level: "hard", type: "mcq",
      template: "A Manuela tem uma caixa de 12 cm × 6 cm × 5 cm e quer pôr fita castanha em TODAS as arestas. Custo da fita: 1,25 € por metro. Quanto gasta no mínimo?",
      hint: "Primeiro calcula a soma das arestas em cm, depois converte em metros e multiplica.",
      variants: [
        { prompt: "Caixa 12×6×5 cm; fita 1,25 €/m em todas as arestas. Custo?", answer: "1,15 €",
          options: [{label:"0,92 €"},{label:"1,15 €",correct:true},{label:"1,20 €"},{label:"2,30 €"}],
          explain: "Soma das arestas = 4×(12+6+5) = 92 cm = 0,92 m. Custo = 0,92 × 1,25 = 1,15 €." },
        { prompt: "Caixa 10×10×10 cm; fita 1 €/m em todas as arestas. Custo?", answer: "1,20 €",
          options: [{label:"1,00 €"},{label:"1,10 €"},{label:"1,20 €",correct:true},{label:"1,50 €"}],
          explain: "12 × 10 = 120 cm = 1,2 m. Custo = 1,2 × 1 = 1,20 €." },
        { prompt: "Caixa 20×10×5 cm; fita 0,5 €/m em todas as arestas. Custo?", answer: "0,70 €",
          options: [{label:"0,60 €"},{label:"0,70 €",correct:true},{label:"0,80 €"},{label:"1,40 €"}],
          explain: "Soma = 4×(20+10+5) = 140 cm = 1,4 m. Custo = 1,4 × 0,5 = 0,70 €." }
      ]
    },
    {
      id: "t7.q19", themeId: "t7", level: "hard", type: "vf",
      template: "Num cubo, há 4 arestas paralelas a cada uma das 3 direções principais.",
      hint: "12 arestas em 3 grupos.",
      variants: [
        { prompt: "Num cubo, as 12 arestas dividem-se em 3 grupos de 4 arestas paralelas entre si.", answer: true,
          explain: "Verdadeiro. 12 ÷ 3 = 4 — há 3 direções (frente-trás, esquerda-direita, cima-baixo), cada com 4 arestas paralelas." },
        { prompt: "Num cubo, cada vértice tem 3 arestas a sair dele.", answer: true,
          explain: "Verdadeiro. Em cada vértice convergem 3 arestas (3 direções)." },
        { prompt: "Num cubo, há 6 pares de faces opostas.", answer: false,
          explain: "Falso. Há 3 pares de faces opostas (cima/baixo, frente/trás, esquerda/direita)." }
      ]
    },
    {
      id: "t7.q20", themeId: "t7", level: "hard", type: "mcq",
      template: "Cubo [ABCDEFGH] (ABCD base, EFGH topo). Quais são as faces perpendiculares à face [ABCD]?",
      hint: "Todas exceto a face oposta (que é paralela).",
      variants: [
        { prompt: "Faces perpendiculares a [ABCD] no cubo?", answer: "As 4 faces laterais",
          options: [
            {label:"Apenas [EFGH]"},
            {label:"As 4 faces laterais",correct:true},
            {label:"Apenas [ABFE]"},
            {label:"Nenhuma"}
          ],
          explain: "[ABCD] tem 4 faces adjacentes (perpendiculares): [ABFE], [BCGF], [DCGH], [ADHE]. [EFGH] é paralela." },
        { prompt: "Face PARALELA a [ABCD]?", answer: "[EFGH]",
          options: [{label:"[ABFE]"},{label:"[BCGF]"},{label:"[EFGH]",correct:true},{label:"[ADHE]"}],
          explain: "Face oposta = paralela. [EFGH] é a base superior (oposta a [ABCD] base inferior)." },
        { prompt: "Faces perpendiculares a [ABFE] no cubo?", answer: "[ABCD], [BCGF], [EFGH], [ADHE]",
          options: [
            {label:"Apenas [DCGH]"},
            {label:"[ABCD], [BCGF], [EFGH], [ADHE]",correct:true},
            {label:"Apenas [BCGF]"},
            {label:"Nenhuma"}
          ],
          explain: "Todas as 4 adjacentes a [ABFE] são perpendiculares; só [DCGH] (oposta) é paralela." }
      ]
    },

    // ============ PRO ============
    {
      id: "t7.q21", themeId: "t7", level: "pro", type: "input",
      template: "Um cubo é cortado em 64 cubinhos iguais (4×4×4). Quantos cubinhos têm exatamente 3 faces pintadas (se o cubo estava todo pintado)?",
      hint: "São os cubinhos dos cantos.",
      variants: [
        { prompt: "Cubo 4×4×4 pintado: quantos cubinhos têm 3 faces pintadas?", answer: 8, explain: "Os 8 cubinhos dos cantos têm 3 faces pintadas — corresponde aos 8 vértices do cubo grande." },
        { prompt: "Cubo 4×4×4 pintado: quantos cubinhos têm exatamente 2 faces pintadas?", answer: 24,
          explain: "Os cubinhos nas arestas (não nos cantos). Cada aresta do cubo grande tem 4 cubinhos, mas 2 são cantos. Então 12 arestas × 2 = 24 cubinhos com 2 faces pintadas." },
        { prompt: "Cubo 4×4×4 pintado: quantos cubinhos têm 0 faces pintadas?", answer: 8,
          explain: "São os cubinhos do interior do cubo (não tocam em nenhuma face exterior). Para 4×4×4, o interior é 2×2×2 = 8." }
      ]
    },
    {
      id: "t7.q22", themeId: "t7", level: "pro", type: "mcq",
      template: "Qual afirmação sobre cubos e paralelepípedos é VERDADEIRA?",
      hint: "Verifica cada uma com cuidado.",
      variants: [
        { prompt: "Qual destas afirmações é VERDADEIRA?", answer: "As bases de uma pirâmide são polígonos",
          options: [
            {label:"As faces laterais de uma pirâmide são paralelas"},
            {label:"As faces laterais de um prisma são triângulos"},
            {label:"As bases de uma pirâmide são polígonos",correct:true},
            {label:"O cilindro e a esfera são poliedros"}
          ],
          explain: "Pirâmides têm 1 base poligonal. As outras opções estão erradas: faces laterais de pirâmide são triângulos (não paralelas); faces laterais de prisma são paralelogramos (no reto, retângulos); cilindro e esfera são NÃO poliedros." },
        { prompt: "Qual destas afirmações é VERDADEIRA?", answer: "As bases de um prisma são polígonos congruentes",
          options: [
            {label:"As faces laterais de uma pirâmide são paralelas"},
            {label:"As faces laterais de um prisma são triângulos sempre"},
            {label:"As bases de um prisma são polígonos congruentes",correct:true},
            {label:"O cilindro e a esfera são poliedros"}
          ],
          explain: "Os prismas têm 2 bases congruentes paralelas (verdadeiro). As outras afirmações são falsas." },
        { prompt: "Qual destas afirmações é VERDADEIRA?", answer: "As faces laterais de um prisma reto são retângulos",
          options: [
            {label:"As faces laterais de um prisma reto são retângulos",correct:true},
            {label:"O cubo tem 8 faces"},
            {label:"A esfera tem 6 vértices"},
            {label:"O cilindro é um poliedro"}
          ],
          explain: "Verdadeira: prisma reto = faces laterais retângulos. As outras afirmações são todas falsas." }
      ]
    },
    {
      id: "t7.q23", themeId: "t7", level: "pro", type: "input",
      template: "A Manuela tem uma caixa de chocolates retangular (12 cm × 6 cm × 5 cm). Quer comprar fita para passar à volta de TODAS as 12 arestas. Cada metro de fita custa 1,25 €. Quanto gasta no mínimo? (Em cêntimos, número inteiro.)",
      hint: "Soma das arestas em cm → metros → preço.",
      variants: [
        { prompt: "Caixa 12×6×5 cm; fita 1,25 €/m em todas as arestas. Custo em cêntimos?", answer: 115, explain: "4×(12+6+5) = 92 cm = 0,92 m. 0,92 × 1,25 = 1,15 € = 115 cêntimos." },
        { prompt: "Caixa 10×8×6 cm; fita 1 €/m em todas as arestas. Custo em cêntimos?", answer: 96, explain: "4×(10+8+6) = 96 cm = 0,96 m → 96 cêntimos." },
        { prompt: "Caixa 15×10×5 cm; fita 0,80 €/m em todas as arestas. Custo em cêntimos?", answer: 96, explain: "4×(15+10+5)=120 cm = 1,2 m → 1,2 × 0,80 = 0,96 € = 96 cêntimos." }
      ]
    },
    {
      id: "t7.q24", themeId: "t7", level: "pro", type: "mcq",
      template: "Um bolo cubo é coberto de chocolate em TODAS as faces excepto na de baixo. É cortado em 27 cubinhos iguais. Quantos cubinhos NÃO têm chocolate em nenhuma das suas faces externas?",
      hint: "Pensa em cada uma das 3 camadas.",
      variants: [
        { prompt: "Bolo cubo (27 cubinhos), só a base sem chocolate. Quantos cubinhos NÃO têm chocolate?", answer: "2",
          options: [{label:"0"},{label:"1"},{label:"2",correct:true},{label:"3"}],
          explain: "Os 2 cubinhos do meio das camadas 1 e 2 (em baixo e meio) — o do topo está coberto." },
        { prompt: "Bolo cubo (27 cubinhos), todas as 6 faces cobertas. Quantos cubinhos NÃO têm chocolate?", answer: "1",
          options: [{label:"0"},{label:"1",correct:true},{label:"2"},{label:"3"}],
          explain: "Só o cubinho central (não toca em nenhuma face exterior)." },
        { prompt: "Bolo cubo (27 cubinhos), 5 faces cobertas exceto a base. Quantos cubinhos TÊM chocolate?", answer: "25",
          options: [{label:"23"},{label:"24"},{label:"25",correct:true},{label:"26"}],
          explain: "27 − 2 (do meio das camadas 1 e 2) = 25 cubinhos com chocolate." }
      ]
    }
  ];

  window.QBANK.t7 = Q;
})();
