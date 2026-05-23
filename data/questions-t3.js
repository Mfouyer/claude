/* ============================================================
   questions-t3.js — Elementos & Planificações
   ============================================================ */
(function () {
  "use strict";
  window.QBANK = window.QBANK || {};

  const Q = [
    // ============ FÁCIL ============
    {
      id: "t3.q01", themeId: "t3", level: "facil", type: "mcq",
      template: "O que é uma 'face' num sólido?",
      hint: "É o que vês quando olhas direito para um dos 'lados' do sólido.",
      variants: [
        { prompt: "O que é uma 'face' num sólido geométrico?", answer: "Um dos polígonos planos que formam o sólido",
          options: [
            {label:"O ponto onde se cruzam três arestas"},
            {label:"O segmento de reta entre duas faces"},
            {label:"Um dos polígonos planos que formam o sólido",correct:true},
            {label:"O eixo central do sólido"}
          ],
          explain: "Uma face é cada um dos polígonos planos que limitam o sólido." },
        { prompt: "O que é uma 'aresta'?", answer: "O segmento onde duas faces se encontram",
          options: [
            {label:"O ponto onde se cruzam várias arestas"},
            {label:"Uma face curva"},
            {label:"O segmento onde duas faces se encontram",correct:true},
            {label:"A base do sólido"}
          ],
          explain: "Aresta = segmento de reta onde duas faces se intersectam." },
        { prompt: "O que é um 'vértice'?", answer: "O ponto onde três ou mais arestas se encontram",
          options: [
            {label:"Uma das faces do sólido"},
            {label:"O ponto onde três ou mais arestas se encontram",correct:true},
            {label:"Um lado do sólido"},
            {label:"O centro do sólido"}
          ],
          explain: "Vértice = ponto comum a 3 ou mais arestas." }
      ]
    },
    {
      id: "t3.q02", themeId: "t3", level: "facil", type: "input",
      template: "Quantas faces tem um cubo?",
      hint: "Pensa no dado.",
      variants: [
        { prompt: "Faces de um cubo?", answer: 6, explain: "6 faces, todas quadradas e iguais." },
        { prompt: "Quantas faces tem um paralelepípedo retângulo?", answer: 6, explain: "6 faces (3 pares de retângulos iguais)." },
        { prompt: "Um sólido com 6 faces quadradas iguais tem __ faces.", answer: 6, explain: "É o cubo, com 6 faces." }
      ]
    },
    {
      id: "t3.q03", themeId: "t3", level: "facil", type: "input",
      template: "Quantas arestas tem um cubo?",
      hint: "Tens 4 arestas por face × 6 faces, mas cada aresta é partilhada por 2 faces.",
      variants: [
        { prompt: "Arestas de um cubo?", answer: 12, explain: "12 arestas, todas com o mesmo comprimento." },
        { prompt: "Arestas de um paralelepípedo retângulo?", answer: 12, explain: "12 arestas (4 de cada uma das 3 dimensões)." },
        { prompt: "Quantos segmentos formam as arestas de uma caixa de sapatos?", answer: 12, explain: "12 arestas." }
      ]
    },
    {
      id: "t3.q04", themeId: "t3", level: "facil", type: "input",
      template: "Quantos vértices tem um cubo?",
      hint: "Conta os cantos: 4 em cima + 4 em baixo.",
      variants: [
        { prompt: "Vértices de um cubo?", answer: 8, explain: "8 vértices, um em cada canto." },
        { prompt: "Vértices de um paralelepípedo retângulo?", answer: 8, explain: "8 vértices, tal como o cubo." },
        { prompt: "Quantos cantos tem uma caixa de cereais?", answer: 8, explain: "8 cantos = 8 vértices." }
      ]
    },
    {
      id: "t3.q05", themeId: "t3", level: "facil", type: "mcq",
      template: "O que é uma 'planificação' de um sólido?",
      hint: "Imagina cortar o sólido pelas arestas e abri-lo no plano.",
      variants: [
        { prompt: "O que é a planificação de um sólido?", answer: "É o sólido 'aberto' e estendido no plano",
          options: [
            {label:"É a base do sólido"},
            {label:"É o sólido 'aberto' e estendido no plano",correct:true},
            {label:"É a soma de todas as arestas"},
            {label:"É a área de uma face"}
          ],
          explain: "Planificação = a representação plana das faces do sólido, ligadas pelas arestas." },
        { prompt: "Uma planificação serve para...", answer: "Construir o sólido a partir do plano",
          options: [
            {label:"Medir o sólido"},
            {label:"Construir o sólido a partir do plano",correct:true},
            {label:"Calcular o volume"},
            {label:"Identificar a base"}
          ],
          explain: "A planificação permite construir o sólido (recortar e dobrar)." },
        { prompt: "Para fazer um cubo a partir de papel, precisas de uma planificação com...", answer: "6 quadrados",
          options: [{label:"4 triângulos"},{label:"6 quadrados",correct:true},{label:"5 retângulos"},{label:"8 círculos"}],
          explain: "6 quadrados unidos pelas arestas (numa das 11 disposições válidas)." }
      ]
    },
    {
      id: "t3.q06", themeId: "t3", level: "facil", type: "mcq",
      template: "A planificação de uma pirâmide quadrangular usa que polígonos?",
      hint: "1 base quadrada + faces laterais triangulares.",
      variants: [
        { prompt: "Planificação de pirâmide quadrangular:", answer: "1 quadrado + 4 triângulos",
          options: [{label:"1 quadrado + 3 triângulos"},{label:"1 quadrado + 4 triângulos",correct:true},{label:"2 quadrados + 4 triângulos"},{label:"5 quadrados"}],
          explain: "1 base quadrada + 4 faces laterais triangulares." },
        { prompt: "Planificação de pirâmide triangular (tetraedro):", answer: "4 triângulos",
          options: [{label:"3 triângulos"},{label:"4 triângulos",correct:true},{label:"1 quadrado + 3 triângulos"},{label:"6 triângulos"}],
          explain: "1 base triangular + 3 faces laterais triangulares = 4 triângulos no total." },
        { prompt: "Planificação de prisma triangular:", answer: "2 triângulos + 3 retângulos",
          options: [{label:"3 triângulos + 2 retângulos"},{label:"2 triângulos + 3 retângulos",correct:true},{label:"2 quadrados + 3 triângulos"},{label:"5 retângulos"}],
          explain: "2 bases triangulares + 3 faces laterais retangulares (no prisma reto)." }
      ]
    },
    {
      id: "t3.q07", themeId: "t3", level: "facil", type: "vf",
      template: "A esfera tem 0 faces planas.",
      hint: "Uma bola tem 'lados' planos?",
      variants: [
        { prompt: "A esfera tem 0 faces planas.", answer: true, explain: "Verdadeiro. A esfera só tem 1 superfície curva — nada de planos." },
        { prompt: "O cubo tem 8 faces.", answer: false, explain: "Falso. O cubo tem 6 faces." },
        { prompt: "Uma pirâmide quadrangular tem 5 faces.", answer: true, explain: "Verdadeiro. 1 base quadrada + 4 faces laterais triangulares = 5 faces." }
      ]
    },
    {
      id: "t3.q08", themeId: "t3", level: "facil", type: "vf",
      template: "Todas as arestas de um cubo têm o mesmo comprimento.",
      hint: "Repara num dado.",
      variants: [
        { prompt: "Todas as 12 arestas de um cubo têm o mesmo comprimento.", answer: true, explain: "Verdadeiro. É essa a característica do cubo." },
        { prompt: "As arestas de um paralelepípedo retângulo são todas iguais.", answer: false, explain: "Falso. Em geral há 3 grupos de 4 arestas iguais (uma por dimensão)." },
        { prompt: "Num cubo, todas as faces têm a mesma área.", answer: true, explain: "Verdadeiro. As 6 faces são quadrados com a mesma medida do lado." }
      ]
    },

    // ============ MÉDIO ============
    {
      id: "t3.q09", themeId: "t3", level: "medio", type: "input",
      template: "Quantas faces tem uma pirâmide quadrangular?",
      hint: "1 base + faces laterais triangulares (4 delas).",
      variants: [
        { prompt: "Faces de uma pirâmide quadrangular?", answer: 5, explain: "1 base + 4 faces laterais triangulares = 5 faces." },
        { prompt: "Faces de uma pirâmide pentagonal?", answer: 6, explain: "1 base pentagonal + 5 triângulos = 6 faces." },
        { prompt: "Faces de uma pirâmide triangular (tetraedro)?", answer: 4, explain: "1 base + 3 triângulos = 4 faces." }
      ]
    },
    {
      id: "t3.q10", themeId: "t3", level: "medio", type: "input",
      template: "Quantos vértices tem uma pirâmide quadrangular?",
      hint: "4 da base + 1 no topo.",
      variants: [
        { prompt: "Vértices de uma pirâmide quadrangular?", answer: 5, explain: "4 da base + 1 do topo = 5 vértices." },
        { prompt: "Vértices de uma pirâmide pentagonal?", answer: 6, explain: "5 da base + 1 do topo = 6 vértices." },
        { prompt: "Vértices de uma pirâmide triangular?", answer: 4, explain: "3 da base + 1 do topo = 4 vértices." }
      ]
    },
    {
      id: "t3.q11", themeId: "t3", level: "medio", type: "input",
      template: "Quantas arestas tem uma pirâmide quadrangular?",
      hint: "4 da base + 4 a subir para o vértice de topo.",
      variants: [
        { prompt: "Arestas de uma pirâmide quadrangular?", answer: 8, explain: "4 arestas da base + 4 arestas laterais (a subir) = 8 arestas." },
        { prompt: "Arestas de uma pirâmide triangular?", answer: 6, explain: "3 da base + 3 laterais = 6 arestas." },
        { prompt: "Arestas de uma pirâmide pentagonal?", answer: 10, explain: "5 da base + 5 laterais = 10 arestas." }
      ]
    },
    {
      id: "t3.q12", themeId: "t3", level: "medio", type: "mcq",
      template: "Para construir um cubo a partir de 6 quadrados, em quantas disposições diferentes podes organizá-los?",
      hint: "Há mais do que uma forma! O livro fala em várias.",
      variants: [
        { prompt: "Há quantas planificações diferentes possíveis para o cubo?", answer: "11",
          options: [{label:"6"},{label:"8"},{label:"11",correct:true},{label:"24"}],
          explain: "Existem 11 planificações diferentes do cubo (todas com 6 quadrados unidos pelas arestas)." },
        { prompt: "Para construir um cubo de papel, precisas de __ quadrados.", answer: "6",
          options: [{label:"4"},{label:"5"},{label:"6",correct:true},{label:"8"}],
          explain: "6 quadrados (as 6 faces do cubo)." },
        { prompt: "Que polígonos formam a planificação de um cubo?", answer: "6 quadrados iguais",
          options: [{label:"4 quadrados + 2 retângulos"},{label:"6 quadrados iguais",correct:true},{label:"6 retângulos iguais"},{label:"8 triângulos"}],
          explain: "Como todas as faces do cubo são quadrados iguais, a planificação são 6 quadrados iguais." }
      ]
    },
    {
      id: "t3.q13", themeId: "t3", level: "medio", type: "vf",
      template: "A planificação do cilindro é composta por 2 círculos e 1 retângulo.",
      hint: "As 2 bases circulares + a superfície lateral 'desenrolada'.",
      variants: [
        { prompt: "A planificação de um cilindro tem 2 círculos e 1 retângulo.", answer: true,
          explain: "Verdadeiro. As 2 bases são círculos; a superfície lateral 'desenrolada' é um retângulo." },
        { prompt: "A planificação de um cone tem 2 círculos.", answer: false,
          explain: "Falso. O cone tem só 1 base (círculo) + 1 setor circular (para a superfície lateral)." },
        { prompt: "A planificação de uma esfera é um quadrado.", answer: false,
          explain: "Falso. A esfera não tem planificação plana exata — não consegue ser 'desdobrada' sem deformações." }
      ]
    },
    {
      id: "t3.q14", themeId: "t3", level: "medio", type: "mcq",
      template: "Que polígonos formam as faces de um prisma hexagonal reto?",
      hint: "2 bases + faces laterais retangulares.",
      variants: [
        { prompt: "Faces de um prisma hexagonal reto:", answer: "2 hexágonos + 6 retângulos",
          options: [{label:"2 hexágonos + 6 triângulos"},{label:"2 hexágonos + 6 retângulos",correct:true},{label:"1 hexágono + 6 triângulos"},{label:"2 hexágonos + 8 retângulos"}],
          explain: "2 bases hexagonais + 6 faces laterais retangulares = 8 faces no total." },
        { prompt: "Faces de um prisma pentagonal reto:", answer: "2 pentágonos + 5 retângulos",
          options: [{label:"2 pentágonos + 5 retângulos",correct:true},{label:"2 pentágonos + 5 triângulos"},{label:"1 pentágono + 5 triângulos"},{label:"5 pentágonos"}],
          explain: "2 bases pentagonais + 5 faces laterais retangulares." },
        { prompt: "Faces de um prisma triangular reto:", answer: "2 triângulos + 3 retângulos",
          options: [{label:"3 triângulos + 2 retângulos"},{label:"2 triângulos + 3 retângulos",correct:true},{label:"2 triângulos + 3 quadrados sempre"},{label:"5 triângulos"}],
          explain: "2 bases triangulares + 3 faces laterais retangulares." }
      ]
    },
    {
      id: "t3.q15", themeId: "t3", level: "medio", type: "mcq",
      template: "Num cubo, cada vértice é comum a quantas faces?",
      hint: "Olha para um canto do dado.",
      variants: [
        { prompt: "Cada vértice de um cubo pertence a quantas faces?", answer: "3",
          options: [{label:"2"},{label:"3",correct:true},{label:"4"},{label:"6"}],
          explain: "Cada vértice do cubo é o canto onde se encontram 3 faces." },
        { prompt: "Cada vértice de um cubo é comum a quantas arestas?", answer: "3",
          options: [{label:"2"},{label:"3",correct:true},{label:"4"},{label:"6"}],
          explain: "3 arestas convergem em cada vértice de um cubo." },
        { prompt: "Cada aresta de um cubo é comum a quantas faces?", answer: "2",
          options: [{label:"1"},{label:"2",correct:true},{label:"3"},{label:"4"}],
          explain: "Cada aresta é a intersecção de exatamente 2 faces." }
      ]
    },
    {
      id: "t3.q16", themeId: "t3", level: "medio", type: "vf",
      template: "Numa planificação válida do cubo, há sempre 11 maneiras de arranjar os 6 quadrados.",
      hint: "11 planificações distintas, mas só há 1 cubo no fim.",
      variants: [
        { prompt: "Existem 11 planificações diferentes do cubo.", answer: true,
          explain: "Verdadeiro. Há 11 disposições diferentes de 6 quadrados que, quando dobradas, formam um cubo." },
        { prompt: "Qualquer disposição de 6 quadrados unidos pelos lados forma um cubo ao dobrar.", answer: false,
          explain: "Falso. Há disposições que não formam um cubo (por exemplo, se 4 quadrados estiverem em fila com 2 a sair do mesmo quadrado)." },
        { prompt: "A planificação do cubo só pode estar em forma de cruz.", answer: false,
          explain: "Falso. A cruz é uma das 11 planificações, mas há 10 outras possíveis." }
      ]
    },

    // ============ HARD ============
    {
      id: "t3.q17", themeId: "t3", level: "hard", type: "input",
      template: "Quantas arestas tem um prisma pentagonal?",
      hint: "5 arestas em cada base + 5 laterais.",
      variants: [
        { prompt: "Arestas de um prisma pentagonal?", answer: 15, explain: "5 (base superior) + 5 (base inferior) + 5 (laterais) = 15 arestas. Ou 3 × 5 = 15." },
        { prompt: "Arestas de um prisma hexagonal?", answer: 18, explain: "3 × 6 = 18 arestas." },
        { prompt: "Arestas de um prisma octogonal?", answer: 24, explain: "3 × 8 = 24 arestas." }
      ]
    },
    {
      id: "t3.q18", themeId: "t3", level: "hard", type: "input",
      template: "Quantos vértices tem um prisma hexagonal?",
      hint: "6 em cada base.",
      variants: [
        { prompt: "Vértices de um prisma hexagonal?", answer: 12, explain: "2 × 6 = 12 vértices (6 em cada base)." },
        { prompt: "Vértices de um prisma triangular?", answer: 6, explain: "2 × 3 = 6 vértices." },
        { prompt: "Vértices de um prisma pentagonal?", answer: 10, explain: "2 × 5 = 10 vértices." }
      ]
    },
    {
      id: "t3.q19", themeId: "t3", level: "hard", type: "mcq",
      template: "Quantas faces tem um prisma octogonal?",
      hint: "1 base + 1 base + faces laterais.",
      variants: [
        { prompt: "Faces de um prisma octogonal?", answer: "10",
          options: [{label:"8"},{label:"9"},{label:"10",correct:true},{label:"16"}],
          explain: "2 bases octogonais + 8 faces laterais = 10 faces. Ou 8 + 2 = 10 (regra n+2)." },
        { prompt: "Faces de um prisma heptagonal?", answer: "9",
          options: [{label:"7"},{label:"9",correct:true},{label:"14"},{label:"10"}],
          explain: "n + 2 = 7 + 2 = 9 faces." },
        { prompt: "Faces de um prisma decagonal (base de 10 lados)?", answer: "12",
          options: [{label:"10"},{label:"12",correct:true},{label:"20"},{label:"22"}],
          explain: "n + 2 = 10 + 2 = 12 faces." }
      ]
    },
    {
      id: "t3.q20", themeId: "t3", level: "hard", type: "mcq",
      template: "Numa planificação de cubo com símbolos nas faces, ao dobrar fica:",
      hint: "Os símbolos das faces opostas nunca se podem ver ao mesmo tempo.",
      variants: [
        { prompt: "Numa planificação de cubo em cruz, as faces opostas no cubo final são...", answer: "Os pares de faces que estão a 2 quadrados de distância",
          options: [
            {label:"As faces adjacentes na planificação"},
            {label:"Os pares de faces que estão a 2 quadrados de distância",correct:true},
            {label:"As duas faces das extremidades da cruz"},
            {label:"Qualquer par"}
          ],
          explain: "Ao dobrar, faces que estão a 2 quadrados na planificação ficam opostas (nunca adjacentes) no cubo." },
        { prompt: "Num cubo, duas faces que NÃO se podem ver ao mesmo tempo são...", answer: "Faces opostas",
          options: [{label:"Faces opostas",correct:true},{label:"Faces adjacentes"},{label:"Faces vizinhas"},{label:"Faces da mesma cor"}],
          explain: "Faces opostas estão em lados contrários do cubo — nunca aparecem juntas no mesmo olhar." },
        { prompt: "Se um cubo construído mostra ao mesmo tempo dois símbolos que estavam em faces opostas da planificação...", answer: "Está mal construído (impossível)",
          options: [{label:"Está bem construído"},{label:"Está mal construído (impossível)",correct:true},{label:"Pode estar bem"},{label:"Depende do tamanho"}],
          explain: "Não pode estar bem — faces opostas não se podem ver ao mesmo tempo." }
      ]
    },
    {
      id: "t3.q21", themeId: "t3", level: "hard", type: "vf",
      template: "A planificação do cone usa um setor circular para a superfície lateral.",
      hint: "É como uma fatia de pizza grande, enrolada.",
      variants: [
        { prompt: "A planificação do cone tem 1 círculo (base) e 1 setor circular (lateral).", answer: true,
          explain: "Verdadeiro. Ao desenrolar a superfície lateral do cone, obtemos um setor circular." },
        { prompt: "A planificação do cilindro tem 2 círculos e 2 retângulos.", answer: false,
          explain: "Falso. Tem 2 círculos (bases) e apenas 1 retângulo (a superfície lateral 'desenrolada')." },
        { prompt: "Uma planificação de pirâmide pentagonal usa 1 pentágono e 5 triângulos.", answer: true,
          explain: "Verdadeiro. 1 base pentagonal + 5 faces laterais triangulares." }
      ]
    },
    {
      id: "t3.q22", themeId: "t3", level: "hard", type: "vf",
      template: "Num cubo, há 3 pares de faces opostas.",
      hint: "Cima/baixo, frente/trás, esquerda/direita.",
      variants: [
        { prompt: "Um cubo tem 3 pares de faces opostas.", answer: true,
          explain: "Verdadeiro. 6 faces ÷ 2 (cada par) = 3 pares de faces opostas." },
        { prompt: "Cada face de um cubo é paralela a 1 outra face.", answer: true,
          explain: "Verdadeiro. A cada face corresponde uma única face oposta (paralela)." },
        { prompt: "Cada face de um cubo é perpendicular às 4 outras faces (excluindo a oposta).", answer: true,
          explain: "Verdadeiro. As 4 faces adjacentes formam ângulo reto com a face dada." }
      ]
    },

    // ============ PRO ============
    {
      id: "t3.q23", themeId: "t3", level: "pro", type: "mcq",
      template: "Numa planificação em cruz de cubo, com símbolo ▲ no centro e ● na ponta direita, quais ficam opostas?",
      hint: "Visualiza a dobragem: o quadrado oposto a uma face é o que fica do outro lado depois de fechar.",
      variants: [
        { prompt: "Na planificação em cruz: as 4 faces do braço horizontal/vertical ficam adjacentes ao centro. A face do centro fica oposta a...", answer: "A face na extremidade do braço vertical (que dobra por baixo)",
          options: [
            {label:"A face do meio da cruz"},
            {label:"A face na extremidade do braço vertical (que dobra por baixo)",correct:true},
            {label:"A face da esquerda"},
            {label:"Não há face oposta"}
          ],
          explain: "Na cruz, o quadrado central fica oposto ao quadrado da extremidade do braço mais comprido (o que dobra para o outro lado)." },
        { prompt: "Num cubo, se a face do TOPO tem um ▲ e a face da FRENTE tem um ●, podes ver os dois ao mesmo tempo?", answer: "Sim, são faces adjacentes",
          options: [
            {label:"Sim, são faces adjacentes",correct:true},
            {label:"Não, são opostas"},
            {label:"Só de certos ângulos"},
            {label:"Depende da cor"}
          ],
          explain: "Topo e frente são adjacentes (não opostas) → vê-se as duas ao mesmo tempo a olhar para um canto." },
        { prompt: "Num cubo, se a face do TOPO tem um ▲ e a face do FUNDO tem um ●, podes ver os dois ao mesmo tempo?", answer: "Não, são faces opostas",
          options: [
            {label:"Sim, são adjacentes"},
            {label:"Não, são faces opostas",correct:true},
            {label:"Só de cima"},
            {label:"Depende do tamanho"}
          ],
          explain: "Topo e fundo são faces opostas — não se podem ver simultaneamente." }
      ]
    },
    {
      id: "t3.q24", themeId: "t3", level: "pro", type: "input",
      template: "Um cubo tem 6 faces e 8 vértices. Quantas arestas tem?",
      hint: "Há uma fórmula famosa: faces + vértices = arestas + 2.",
      variants: [
        { prompt: "Cubo: F + V = A + 2. Se F=6 e V=8, qual é A?", answer: 12, explain: "6 + 8 = A + 2 → A = 12. (Relação de Euler.)" },
        { prompt: "Prisma triangular: F=5, V=6. Qual o número de arestas?", answer: 9, explain: "5 + 6 = A + 2 → A = 9." },
        { prompt: "Pirâmide quadrangular: F=5, V=5. Qual o número de arestas?", answer: 8, explain: "5 + 5 = A + 2 → A = 8." }
      ]
    },
    {
      id: "t3.q25", themeId: "t3", level: "pro", type: "mcq",
      template: "Numa planificação válida do cubo em forma de 'T', quantos quadrados há?",
      hint: "Tem de haver sempre 6 (uma por cada face do cubo).",
      variants: [
        { prompt: "Qualquer planificação válida do cubo tem __ quadrados.", answer: "6",
          options: [{label:"4"},{label:"5"},{label:"6",correct:true},{label:"7"}],
          explain: "São sempre 6 quadrados (uma face cada). A diferença entre planificações é a disposição." },
        { prompt: "Uma planificação válida da pirâmide quadrangular tem...", answer: "1 quadrado + 4 triângulos",
          options: [{label:"4 quadrados + 1 triângulo"},{label:"1 quadrado + 4 triângulos",correct:true},{label:"2 quadrados + 4 triângulos"},{label:"5 triângulos"}],
          explain: "Sempre 1 base quadrada + 4 faces laterais triangulares." },
        { prompt: "Quantos quadrados há na planificação de um prisma quadrangular cujas bases são quadrados (não retângulos genéricos)?", answer: "2 quadrados + 4 retângulos",
          options: [{label:"4 quadrados"},{label:"6 quadrados sempre"},{label:"2 quadrados + 4 retângulos",correct:true},{label:"2 quadrados + 4 quadrados (= cubo)"}],
          explain: "Bases quadradas + 4 faces laterais retangulares. Só é cubo se as alturas forem iguais aos lados das bases." }
      ]
    },
    {
      id: "t3.q26", themeId: "t3", level: "pro", type: "vf",
      template: "Há disposições de 6 quadrados unidos pelas arestas que NÃO formam um cubo ao dobrar.",
      hint: "Imagina uma disposição em 'L' ou 'escada'.",
      variants: [
        { prompt: "Nem toda a disposição de 6 quadrados forma um cubo ao dobrar.", answer: true,
          explain: "Verdadeiro. Das disposições possíveis com 6 quadrados, apenas 11 dobram-se num cubo." },
        { prompt: "Existem mais disposições com 6 quadrados do que apenas as 11 que formam cubo.", answer: true,
          explain: "Verdadeiro. Existem 35 disposições diferentes (hexominós), mas só 11 formam cubo." },
        { prompt: "Toda a disposição em linha reta de 6 quadrados forma um cubo.", answer: false,
          explain: "Falso. Uma fila reta de 6 quadrados não fecha — ao dobrar, ficam quadrados sobrepostos." }
      ]
    }
  ];

  window.QBANK.t3 = Q;
})();
