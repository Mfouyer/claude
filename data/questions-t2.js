/* ============================================================
   questions-t2.js — Banco de Sólidos Geométricos (identificação)
   ============================================================ */
(function () {
  "use strict";
  window.QBANK = window.QBANK || {};

  const Q = [
    // ============ FÁCIL ============
    {
      id: "t2.q01", themeId: "t2", level: "facil", type: "mcq",
      template: "Que sólido te lembra uma lata de refrigerante?",
      hint: "Tem duas bases circulares e uma superfície curva.",
      variants: [
        { prompt: "Que sólido te lembra uma lata de refrigerante?", answer: "Cilindro",
          options: [{label:"Cone"},{label:"Cilindro",correct:true},{label:"Esfera"},{label:"Cubo"}],
          explain: "Uma lata tem 2 bases circulares e uma superfície curva → cilindro." },
        { prompt: "Uma pilha lembra que sólido geométrico?", answer: "Cilindro",
          options: [{label:"Cubo"},{label:"Cilindro",correct:true},{label:"Cone"},{label:"Pirâmide"}],
          explain: "Pilha = forma de cilindro." },
        { prompt: "Que sólido geométrico tem o formato de uma vela cilíndrica?", answer: "Cilindro",
          options: [{label:"Cilindro",correct:true},{label:"Esfera"},{label:"Cone"},{label:"Prisma"}],
          explain: "Vela cilíndrica = cilindro." }
      ]
    },
    {
      id: "t2.q02", themeId: "t2", level: "facil", type: "mcq",
      template: "Que sólido te lembra uma bola de futebol?",
      hint: "Toda redonda, sem cantos.",
      variants: [
        { prompt: "Uma bola de futebol é parecida com que sólido?", answer: "Esfera",
          options: [{label:"Cone"},{label:"Cilindro"},{label:"Esfera",correct:true},{label:"Cubo"}],
          explain: "Bola redonda → esfera." },
        { prompt: "Uma laranja tem a forma aproximada de...", answer: "Esfera",
          options: [{label:"Esfera",correct:true},{label:"Cilindro"},{label:"Cone"},{label:"Cubo"}],
          explain: "Laranja redonda → esfera." },
        { prompt: "A bola de bowling lembra que sólido geométrico?", answer: "Esfera",
          options: [{label:"Esfera",correct:true},{label:"Cubo"},{label:"Cilindro"},{label:"Prisma"}],
          explain: "Toda redonda → esfera." }
      ]
    },
    {
      id: "t2.q03", themeId: "t2", level: "facil", type: "mcq",
      template: "Um dado de jogo tem a forma de que sólido?",
      hint: "6 faces todas iguais e quadradas.",
      variants: [
        { prompt: "Um dado é exemplo de que sólido geométrico?", answer: "Cubo",
          options: [{label:"Paralelepípedo"},{label:"Cubo",correct:true},{label:"Pirâmide"},{label:"Prisma"}],
          explain: "Dado = 6 faces quadradas iguais → cubo." },
        { prompt: "Um Cubo de Rubik clássico tem a forma de...", answer: "Cubo",
          options: [{label:"Cubo",correct:true},{label:"Prisma triangular"},{label:"Pirâmide"},{label:"Paralelepípedo"}],
          explain: "Todas as faces quadradas iguais → cubo." },
        { prompt: "Como se chama o sólido em que todas as 6 faces são quadrados iguais?", answer: "Cubo",
          options: [{label:"Paralelepípedo retângulo"},{label:"Cubo",correct:true},{label:"Prisma quadrangular"},{label:"Pirâmide quadrangular"}],
          explain: "6 faces quadradas iguais → cubo (caso particular de prisma e de paralelepípedo)." }
      ]
    },
    {
      id: "t2.q04", themeId: "t2", level: "facil", type: "mcq",
      template: "Uma caixa de cereais tem a forma de que sólido?",
      hint: "Tem 6 faces retangulares (com 3 pares iguais).",
      variants: [
        { prompt: "Uma caixa de cereais é um exemplo de...", answer: "Paralelepípedo retângulo",
          options: [{label:"Cubo"},{label:"Paralelepípedo retângulo",correct:true},{label:"Pirâmide"},{label:"Cilindro"}],
          explain: "6 faces retangulares (3 pares iguais) → paralelepípedo retângulo." },
        { prompt: "Um tijolo lembra que sólido?", answer: "Paralelepípedo retângulo",
          options: [{label:"Paralelepípedo retângulo",correct:true},{label:"Cubo"},{label:"Prisma triangular"},{label:"Cone"}],
          explain: "Tijolo: 3 dimensões diferentes, 6 faces retangulares." },
        { prompt: "Um livro fechado tem a forma de...", answer: "Paralelepípedo retângulo",
          options: [{label:"Cubo"},{label:"Cilindro"},{label:"Paralelepípedo retângulo",correct:true},{label:"Prisma triangular"}],
          explain: "Livro = paralelepípedo retângulo." }
      ]
    },
    {
      id: "t2.q05", themeId: "t2", level: "facil", type: "mcq",
      template: "Um cone de sinalização de trânsito tem a forma de que sólido?",
      hint: "Base circular + ponta no topo.",
      variants: [
        { prompt: "Um cone de trânsito é um exemplo de...", answer: "Cone",
          options: [{label:"Cilindro"},{label:"Cone",correct:true},{label:"Pirâmide"},{label:"Esfera"}],
          explain: "Base circular + superfície curva que termina num vértice → cone." },
        { prompt: "Uma casquinha de gelado lembra que sólido?", answer: "Cone",
          options: [{label:"Cilindro"},{label:"Esfera"},{label:"Cone",correct:true},{label:"Pirâmide"}],
          explain: "Casquinha = cone (com a 'ponta' para baixo)." },
        { prompt: "Um chapéu de festa pontiagudo é parecido com...", answer: "Cone",
          options: [{label:"Pirâmide"},{label:"Cone",correct:true},{label:"Cilindro"},{label:"Prisma"}],
          explain: "Chapéu de festa com ponta → cone." }
      ]
    },
    {
      id: "t2.q06", themeId: "t2", level: "facil", type: "mcq",
      template: "Uma das Pirâmides do Egito tem a forma de que sólido?",
      hint: "Base quadrangular + 4 faces triangulares.",
      variants: [
        { prompt: "As Pirâmides do Egito têm a forma de que sólido?", answer: "Pirâmide",
          options: [{label:"Cone"},{label:"Cubo"},{label:"Pirâmide",correct:true},{label:"Prisma"}],
          explain: "Têm uma base poligonal (quadrangular) e faces laterais triangulares → pirâmide." },
        { prompt: "Um sólido com base poligonal e faces laterais triangulares que se juntam num vértice chama-se...", answer: "Pirâmide",
          options: [{label:"Cone"},{label:"Pirâmide",correct:true},{label:"Prisma"},{label:"Paralelepípedo"}],
          explain: "Essa é a definição de pirâmide." },
        { prompt: "Um pião de jogo (com faces triangulares e base quadrangular) lembra que sólido?", answer: "Pirâmide",
          options: [{label:"Pirâmide",correct:true},{label:"Cone"},{label:"Cilindro"},{label:"Prisma triangular"}],
          explain: "Faces triangulares a unir num vértice → pirâmide." }
      ]
    },

    // ============ MÉDIO ============
    {
      id: "t2.q07", themeId: "t2", level: "medio", type: "input",
      template: "Quantas faces tem um cubo?",
      hint: "Conta o cubo de Rubik: cima, baixo, frente, trás, esquerda, direita.",
      variants: [
        { prompt: "Quantas faces tem um cubo?", answer: 6, explain: "Um cubo tem 6 faces, todas quadradas e iguais." },
        { prompt: "Um dado tem quantas faces?", answer: 6, explain: "6 faces — cada uma com um número de 1 a 6." },
        { prompt: "Um sólido com todas as faces quadradas iguais tem __ faces.", answer: 6, explain: "É o cubo, com 6 faces." }
      ]
    },
    {
      id: "t2.q08", themeId: "t2", level: "medio", type: "input",
      template: "Quantas arestas tem um cubo?",
      hint: "Conta: 4 arestas em cada face × 6 faces ÷ 2 (porque cada aresta é partilhada).",
      variants: [
        { prompt: "Quantas arestas tem um cubo?", answer: 12, explain: "Um cubo tem 12 arestas, todas com o mesmo comprimento." },
        { prompt: "Um cubo tem __ arestas (preenche).", answer: 12, explain: "12 arestas em total." },
        { prompt: "Quantos segmentos de reta formam as arestas de um cubo?", answer: 12, explain: "12 arestas." }
      ]
    },
    {
      id: "t2.q09", themeId: "t2", level: "medio", type: "input",
      template: "Quantos vértices tem um cubo?",
      hint: "Os 'cantos' do cubo. Pensa nos cantos de uma caixa.",
      variants: [
        { prompt: "Quantos vértices tem um cubo?", answer: 8, explain: "Um cubo tem 8 vértices (os 8 cantos)." },
        { prompt: "Um cubo tem __ vértices.", answer: 8, explain: "São 8: 4 em baixo + 4 em cima." },
        { prompt: "Os 'cantos' de um cubo são __ ao todo.", answer: 8, explain: "8 vértices." }
      ]
    },
    {
      id: "t2.q10", themeId: "t2", level: "medio", type: "mcq",
      template: "Que sólido tem 2 bases circulares e nenhum vértice?",
      hint: "Pensa numa lata de conserva.",
      variants: [
        { prompt: "Que sólido tem 2 bases circulares e zero vértices?", answer: "Cilindro",
          options: [{label:"Cone"},{label:"Esfera"},{label:"Cilindro",correct:true},{label:"Pirâmide"}],
          explain: "Cilindro: 2 bases circulares, sem vértices." },
        { prompt: "Que sólido geométrico tem 0 vértices, 0 arestas planas, e apenas 1 superfície curva?", answer: "Esfera",
          options: [{label:"Cone"},{label:"Cilindro"},{label:"Esfera",correct:true},{label:"Cubo"}],
          explain: "Esfera: só superfície curva, sem faces planas, arestas ou vértices." },
        { prompt: "Que sólido tem 1 base circular e exatamente 1 vértice?", answer: "Cone",
          options: [{label:"Cilindro"},{label:"Cone",correct:true},{label:"Esfera"},{label:"Pirâmide"}],
          explain: "Cone: 1 base circular + 1 vértice (a 'ponta')." }
      ]
    },
    {
      id: "t2.q11", themeId: "t2", level: "medio", type: "mcq",
      template: "Quantas faces tem um paralelepípedo retângulo?",
      hint: "Igual a um cubo: tem 3 pares de faces opostas.",
      variants: [
        { prompt: "Quantas faces tem um paralelepípedo retângulo?", answer: "6",
          options: [{label:"4"},{label:"5"},{label:"6",correct:true},{label:"8"}],
          explain: "6 faces (3 pares de retângulos iguais)." },
        { prompt: "Um tijolo tem __ faces.", answer: "6",
          options: [{label:"6",correct:true},{label:"4"},{label:"8"},{label:"5"}],
          explain: "6 faces retangulares." },
        { prompt: "Quantas faces tem uma caixa de sapatos (paralelepípedo retângulo)?", answer: "6",
          options: [{label:"8"},{label:"5"},{label:"4"},{label:"6",correct:true}],
          explain: "6 faces, sempre." }
      ]
    },
    {
      id: "t2.q12", themeId: "t2", level: "medio", type: "mcq",
      template: "Uma caixa hexagonal corresponde a que sólido?",
      hint: "Olha para a forma da base — é um hexágono.",
      variants: [
        { prompt: "Uma caixa cuja base é um hexágono é que tipo de prisma?", answer: "Prisma hexagonal",
          options: [{label:"Prisma triangular"},{label:"Prisma quadrangular"},{label:"Prisma hexagonal",correct:true},{label:"Prisma pentagonal"}],
          explain: "Base hexagonal → prisma hexagonal." },
        { prompt: "Uma caixa de pizza fina e quadrada é um exemplo de...", answer: "Prisma quadrangular",
          options: [{label:"Prisma triangular"},{label:"Prisma quadrangular",correct:true},{label:"Cubo"},{label:"Pirâmide"}],
          explain: "Base quadrangular → prisma quadrangular (ou paralelepípedo retângulo)." },
        { prompt: "Uma Toblerone (chocolate suíço com secção triangular) é exemplo de...", answer: "Prisma triangular",
          options: [{label:"Pirâmide triangular"},{label:"Prisma triangular",correct:true},{label:"Cone"},{label:"Cilindro"}],
          explain: "Base triangular + 3 faces laterais retangulares → prisma triangular." }
      ]
    },

    // ============ HARD ============
    {
      id: "t2.q13", themeId: "t2", level: "hard", type: "vf",
      template: "A esfera não tem nenhum vértice.",
      hint: "Pensa: uma bola tem 'cantos'?",
      variants: [
        { prompt: "A esfera tem 0 vértices.", answer: true, explain: "Verdadeiro. A esfera só tem 1 superfície curva — sem faces planas, sem arestas, sem vértices." },
        { prompt: "Uma esfera tem 1 vértice (no topo).", answer: false, explain: "Falso. A esfera não tem vértices. É toda curva." },
        { prompt: "A esfera tem 0 arestas.", answer: true, explain: "Verdadeiro. Não tem arestas (não há intersecção de duas faces planas)." }
      ]
    },
    {
      id: "t2.q14", themeId: "t2", level: "hard", type: "vf",
      template: "O cilindro tem 2 vértices (um em cima e outro em baixo).",
      hint: "Olha bem: o cilindro tem 'pontas'?",
      variants: [
        { prompt: "Um cilindro tem 2 vértices.", answer: false, explain: "Falso. O cilindro tem 0 vértices. Tem 2 bases circulares e 1 superfície curva — sem 'pontas'." },
        { prompt: "Um cilindro não tem vértices.", answer: true, explain: "Verdadeiro. 0 vértices, 2 bases circulares, 1 superfície lateral curva." },
        { prompt: "O cone tem 1 vértice.", answer: true, explain: "Verdadeiro. A 'ponta' do cone é o seu único vértice." }
      ]
    },
    {
      id: "t2.q15", themeId: "t2", level: "hard", type: "mcq",
      template: "Que sólido tem 1 base circular, 1 superfície lateral curva e 1 vértice?",
      hint: "Pensa numa casquinha de gelado.",
      variants: [
        { prompt: "Que sólido tem 1 base circular, 1 superfície lateral curva e 1 vértice?", answer: "Cone",
          options: [{label:"Cilindro"},{label:"Esfera"},{label:"Cone",correct:true},{label:"Pirâmide"}],
          explain: "1 base + 1 superfície curva + 1 vértice = cone." },
        { prompt: "Que sólido tem 2 bases circulares e 1 superfície curva (mas nenhum vértice)?", answer: "Cilindro",
          options: [{label:"Cone"},{label:"Cilindro",correct:true},{label:"Esfera"},{label:"Prisma"}],
          explain: "2 bases circulares + superfície curva + 0 vértices = cilindro." },
        { prompt: "Que sólido tem apenas 1 superfície curva fechada (sem faces planas)?", answer: "Esfera",
          options: [{label:"Cilindro"},{label:"Cone"},{label:"Esfera",correct:true},{label:"Prisma"}],
          explain: "Esfera: única superfície curva fechada." }
      ]
    },
    {
      id: "t2.q16", themeId: "t2", level: "hard", type: "mcq",
      template: "Numa pirâmide triangular (tetraedro), quantas faces há?",
      hint: "1 base triangular + faces laterais que se juntam num vértice.",
      variants: [
        { prompt: "Quantas faces tem uma pirâmide triangular?", answer: "4",
          options: [{label:"3"},{label:"4",correct:true},{label:"5"},{label:"6"}],
          explain: "1 base triangular + 3 faces laterais triangulares = 4 faces (chama-se também tetraedro)." },
        { prompt: "Quantas faces tem uma pirâmide quadrangular?", answer: "5",
          options: [{label:"4"},{label:"5",correct:true},{label:"6"},{label:"8"}],
          explain: "1 base quadrangular + 4 faces laterais triangulares = 5 faces." },
        { prompt: "Quantas faces tem uma pirâmide pentagonal?", answer: "6",
          options: [{label:"5"},{label:"6",correct:true},{label:"7"},{label:"10"}],
          explain: "1 base pentagonal + 5 faces laterais triangulares = 6 faces." }
      ]
    },
    {
      id: "t2.q17", themeId: "t2", level: "hard", type: "mcq",
      template: "Numa pirâmide quadrangular, todas as faces laterais são...",
      hint: "Olha para as Pirâmides do Egito.",
      variants: [
        { prompt: "Numa pirâmide quadrangular, as faces laterais são...", answer: "Triângulos",
          options: [{label:"Quadrados"},{label:"Retângulos"},{label:"Triângulos",correct:true},{label:"Hexágonos"}],
          explain: "As faces laterais de qualquer pirâmide são triângulos que se juntam num vértice no topo." },
        { prompt: "Num prisma triangular, as faces laterais são...", answer: "Retângulos",
          options: [{label:"Triângulos"},{label:"Retângulos",correct:true},{label:"Pentágonos"},{label:"Quadrados sempre"}],
          explain: "Num prisma reto, as faces laterais são retângulos (são paralelogramos no caso geral)." },
        { prompt: "Num cubo, as 6 faces são todas...", answer: "Quadrados",
          options: [{label:"Retângulos diferentes"},{label:"Quadrados",correct:true},{label:"Triângulos"},{label:"Paralelogramos quaisquer"}],
          explain: "Por definição, no cubo as 6 faces são quadrados iguais." }
      ]
    },

    // ============ PRO ============
    {
      id: "t2.q18", themeId: "t2", level: "pro", type: "mcq",
      template: "Qual destes sólidos NÃO é um poliedro?",
      hint: "Poliedro = só superfícies planas.",
      variants: [
        { prompt: "Qual destes NÃO é um poliedro?", answer: "Cilindro",
          options: [{label:"Cubo"},{label:"Pirâmide triangular"},{label:"Cilindro",correct:true},{label:"Prisma hexagonal"}],
          explain: "Cilindro tem uma superfície curva → não é poliedro." },
        { prompt: "Qual destes sólidos tem pelo menos uma superfície curva?", answer: "Cone",
          options: [{label:"Pirâmide pentagonal"},{label:"Cubo"},{label:"Cone",correct:true},{label:"Paralelepípedo retângulo"}],
          explain: "Cone: base circular + superfície lateral curva." },
        { prompt: "Qual destes sólidos é um POLIEDRO?", answer: "Prisma triangular",
          options: [{label:"Esfera"},{label:"Cilindro"},{label:"Prisma triangular",correct:true},{label:"Cone"}],
          explain: "Prisma triangular só tem faces planas → é poliedro." }
      ]
    },
    {
      id: "t2.q19", themeId: "t2", level: "pro", type: "mcq",
      template: "Para construir uma pirâmide quadrangular precisas de quantos triângulos e quantos quadrados?",
      hint: "1 base + 4 faces laterais.",
      variants: [
        { prompt: "Para fazer a planificação de uma pirâmide quadrangular, precisas de:", answer: "4 triângulos e 1 quadrado",
          options: [{label:"3 triângulos e 1 quadrado"},{label:"4 triângulos e 1 quadrado",correct:true},{label:"4 triângulos e 2 quadrados"},{label:"5 triângulos"}],
          explain: "1 base quadrada + 4 faces laterais triangulares." },
        { prompt: "Planificação de um prisma triangular usa:", answer: "2 triângulos e 3 retângulos",
          options: [{label:"3 triângulos e 2 retângulos"},{label:"2 triângulos e 3 retângulos",correct:true},{label:"2 quadrados e 3 triângulos"},{label:"3 triângulos e 3 retângulos"}],
          explain: "2 bases triangulares + 3 faces laterais retangulares (no prisma reto)." },
        { prompt: "Planificação de um cilindro usa:", answer: "2 círculos e 1 retângulo",
          options: [{label:"2 círculos e 1 quadrado"},{label:"1 círculo e 1 setor"},{label:"2 círculos e 1 retângulo",correct:true},{label:"1 círculo e 1 retângulo"}],
          explain: "2 bases circulares + 1 retângulo que enrolado forma a superfície lateral." }
      ]
    },
    {
      id: "t2.q20", themeId: "t2", level: "pro", type: "vf",
      template: "Um sólido com 7 faces (1 hexágono + 6 triângulos) é uma pirâmide.",
      hint: "Pirâmide tem 1 base + faces laterais triangulares.",
      variants: [
        { prompt: "Um sólido com 1 base hexagonal e 6 faces triangulares é uma pirâmide hexagonal.", answer: true,
          explain: "Sim! 1 base hexagonal + 6 faces laterais triangulares = pirâmide hexagonal." },
        { prompt: "Um sólido com 2 bases pentagonais e 5 faces retangulares chama-se prisma pentagonal.", answer: true,
          explain: "Verdadeiro. 2 bases iguais (pentagonais) + 5 faces laterais retangulares → prisma pentagonal." },
        { prompt: "Um sólido com 2 bases triangulares e faces laterais retangulares é uma pirâmide triangular.", answer: false,
          explain: "Falso. Isso é um PRISMA triangular, não uma pirâmide. Pirâmide tem só 1 base." }
      ]
    },
    {
      id: "t2.q21", themeId: "t2", level: "pro", type: "mcq",
      template: "Qual é a diferença chave entre um cone e uma pirâmide?",
      hint: "Olha para a forma da BASE.",
      variants: [
        { prompt: "Qual é a principal diferença entre cone e pirâmide?", answer: "O cone tem base circular; a pirâmide tem base poligonal.",
          options: [
            {label:"O cone tem base circular; a pirâmide tem base poligonal.",correct:true},
            {label:"O cone tem mais vértices."},
            {label:"A pirâmide é maior."},
            {label:"O cone tem várias faces."}
          ],
          explain: "Cone = base circular + superfície curva. Pirâmide = base poligonal + faces triangulares planas." },
        { prompt: "Diferença entre cilindro e prisma:", answer: "O cilindro tem bases circulares e superfície curva; o prisma tem bases poligonais e faces planas.",
          options: [
            {label:"O prisma é mais alto."},
            {label:"O cilindro tem bases circulares e superfície curva; o prisma tem bases poligonais e faces planas.",correct:true},
            {label:"O cilindro tem mais arestas."},
            {label:"Não há diferença."}
          ],
          explain: "Cilindro = não poliedro (superfície curva); prisma = poliedro (todas as faces planas)." },
        { prompt: "Cubo e paralelepípedo retângulo: o cubo é...", answer: "Um caso particular: tem todas as faces quadradas iguais.",
          options: [
            {label:"Sempre maior."},
            {label:"Sempre menor."},
            {label:"Um caso particular: tem todas as faces quadradas iguais.",correct:true},
            {label:"Igual em tudo ao paralelepípedo."}
          ],
          explain: "O cubo é um paralelepípedo retângulo especial em que as 3 dimensões são iguais." }
      ]
    }
  ];

  window.QBANK.t2 = Q;
})();
