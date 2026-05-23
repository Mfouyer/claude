/* ============================================================
   questions-t4.js — Poliedros vs Não Poliedros
   ============================================================ */
(function () {
  "use strict";
  window.QBANK = window.QBANK || {};

  const Q = [
    // ============ FÁCIL ============
    {
      id: "t4.q01", themeId: "t4", level: "facil", type: "mcq",
      template: "O que é um poliedro?",
      hint: "Pensa em 'muitas faces planas'.",
      variants: [
        { prompt: "O que é um poliedro?", answer: "Um sólido com TODAS as superfícies planas (polígonos)",
          options: [
            {label:"Um sólido com pelo menos 3 lados"},
            {label:"Um sólido com TODAS as superfícies planas (polígonos)",correct:true},
            {label:"Um sólido todo redondo"},
            {label:"Um sólido com superfícies curvas"}
          ],
          explain: "Poliedro = sólido com TODAS as faces planas (polígonos). 'Poly' = muitas, 'edros' = faces." },
        { prompt: "O que é um sólido NÃO poliedro?", answer: "Um sólido com pelo menos uma superfície curva",
          options: [
            {label:"Um sólido com todas as faces iguais"},
            {label:"Um sólido sem faces"},
            {label:"Um sólido com pelo menos uma superfície curva",correct:true},
            {label:"Um sólido sem vértices"}
          ],
          explain: "Não poliedro = sólido que tem pelo menos uma superfície curva (como o cilindro, cone ou esfera)." },
        { prompt: "A palavra 'poliedro' vem do grego e significa...", answer: "'De muitas faces'",
          options: [
            {label:"'De muitas faces'",correct:true},
            {label:"'De três lados'"},
            {label:"'Sólido redondo'"},
            {label:"'Forma curva'"}
          ],
          explain: "'Poly' (muitas) + 'edros' (faces) = 'de muitas faces'." }
      ]
    },
    {
      id: "t4.q02", themeId: "t4", level: "facil", type: "mcq",
      template: "Qual destes sólidos É um poliedro?",
      hint: "Tem de ter SÓ faces planas (sem curvas).",
      variants: [
        { prompt: "Qual destes é um poliedro?", answer: "Cubo",
          options: [{label:"Cilindro"},{label:"Esfera"},{label:"Cubo",correct:true},{label:"Cone"}],
          explain: "O cubo tem só faces planas → é poliedro. Os outros têm superfícies curvas." },
        { prompt: "Qual destes é um poliedro?", answer: "Pirâmide quadrangular",
          options: [{label:"Cilindro"},{label:"Pirâmide quadrangular",correct:true},{label:"Esfera"},{label:"Cone"}],
          explain: "Pirâmide tem só faces triangulares e a base poligonal → poliedro." },
        { prompt: "Qual destes é um poliedro?", answer: "Prisma hexagonal",
          options: [{label:"Esfera"},{label:"Cilindro"},{label:"Prisma hexagonal",correct:true},{label:"Cone"}],
          explain: "Prisma hexagonal tem só faces planas → poliedro." }
      ]
    },
    {
      id: "t4.q03", themeId: "t4", level: "facil", type: "mcq",
      template: "Qual destes sólidos NÃO é um poliedro?",
      hint: "Não poliedro = tem uma superfície curva.",
      variants: [
        { prompt: "Qual destes NÃO é um poliedro?", answer: "Esfera",
          options: [{label:"Cubo"},{label:"Esfera",correct:true},{label:"Pirâmide"},{label:"Prisma triangular"}],
          explain: "A esfera tem 1 superfície curva → não poliedro." },
        { prompt: "Qual destes NÃO é um poliedro?", answer: "Cilindro",
          options: [{label:"Pirâmide pentagonal"},{label:"Cilindro",correct:true},{label:"Cubo"},{label:"Paralelepípedo retângulo"}],
          explain: "O cilindro tem 1 superfície lateral curva → não poliedro." },
        { prompt: "Qual destes NÃO é um poliedro?", answer: "Cone",
          options: [{label:"Cubo"},{label:"Prisma"},{label:"Cone",correct:true},{label:"Pirâmide"}],
          explain: "O cone tem 1 superfície lateral curva → não poliedro." }
      ]
    },
    {
      id: "t4.q04", themeId: "t4", level: "facil", type: "vf",
      template: "Todos os prismas são poliedros.",
      hint: "Os prismas têm só faces planas?",
      variants: [
        { prompt: "Todos os prismas são poliedros.", answer: true,
          explain: "Verdadeiro. Os prismas só têm faces planas (bases poligonais + faces laterais paralelogramos)." },
        { prompt: "Todas as pirâmides são poliedros.", answer: true,
          explain: "Verdadeiro. As pirâmides têm só faces planas." },
        { prompt: "Todos os cilindros são poliedros.", answer: false,
          explain: "Falso. O cilindro tem uma superfície lateral curva → NÃO é poliedro." }
      ]
    },
    {
      id: "t4.q05", themeId: "t4", level: "facil", type: "vf",
      template: "A esfera tem 1 superfície curva e nada mais.",
      hint: "Bola lisa.",
      variants: [
        { prompt: "A esfera tem só 1 superfície curva.", answer: true,
          explain: "Verdadeiro. Não tem bases, nem vértices, nem arestas." },
        { prompt: "O cone tem 1 base circular e 1 vértice.", answer: true,
          explain: "Verdadeiro. 1 base, 1 superfície lateral curva e 1 vértice (a 'ponta')." },
        { prompt: "O cilindro tem 1 base circular.", answer: false,
          explain: "Falso. O cilindro tem 2 bases circulares." }
      ]
    },
    {
      id: "t4.q06", themeId: "t4", level: "facil", type: "mcq",
      template: "Que sólidos são considerados não poliedros (no 5º ano)?",
      hint: "Os 3 que têm superfície curva.",
      variants: [
        { prompt: "Os 3 sólidos não poliedros mais comuns são...", answer: "Cilindro, cone, esfera",
          options: [
            {label:"Cubo, prisma, pirâmide"},
            {label:"Cilindro, cone, esfera",correct:true},
            {label:"Esfera, pirâmide, cubo"},
            {label:"Prisma, paralelepípedo, esfera"}
          ],
          explain: "Os 3 não poliedros típicos do 5º ano: cilindro, cone, esfera." },
        { prompt: "Os poliedros mais comuns são...", answer: "Cubo, paralelepípedo, prismas, pirâmides",
          options: [
            {label:"Cilindro e esfera"},
            {label:"Cubo, paralelepípedo, prismas, pirâmides",correct:true},
            {label:"Cone e cilindro"},
            {label:"Só o cubo"}
          ],
          explain: "Cubos, paralelepípedos, prismas e pirâmides são todos poliedros." },
        { prompt: "Qual destes grupos é todo de NÃO poliedros?", answer: "Cilindro, cone, esfera",
          options: [{label:"Cubo, cilindro, esfera"},{label:"Cilindro, cone, esfera",correct:true},{label:"Cone, prisma, esfera"},{label:"Pirâmide, cone, esfera"}],
          explain: "Cilindro, cone e esfera têm pelo menos uma superfície curva → todos não poliedros." }
      ]
    },

    // ============ MÉDIO ============
    {
      id: "t4.q07", themeId: "t4", level: "medio", type: "vf",
      template: "A base de um cone é um círculo.",
      hint: "É plana? Que forma tem?",
      variants: [
        { prompt: "A base de um cone é um círculo.", answer: true,
          explain: "Verdadeiro. O cone tem 1 base circular plana." },
        { prompt: "As bases de um cilindro são quadrados.", answer: false,
          explain: "Falso. As bases de um cilindro são círculos." },
        { prompt: "A esfera tem uma base poligonal.", answer: false,
          explain: "Falso. A esfera não tem bases — só tem 1 superfície curva fechada." }
      ]
    },
    {
      id: "t4.q08", themeId: "t4", level: "medio", type: "mcq",
      template: "Quantas faces planas tem um cone?",
      hint: "A base é plana. E a 'lateral'?",
      variants: [
        { prompt: "Quantas faces planas tem um cone?", answer: "1",
          options: [{label:"0"},{label:"1",correct:true},{label:"2"},{label:"3"}],
          explain: "Só a base é plana (1 face plana — um círculo). A superfície lateral é curva, não é considerada 'face'." },
        { prompt: "Quantas faces planas tem um cilindro?", answer: "2",
          options: [{label:"1"},{label:"2",correct:true},{label:"3"},{label:"0"}],
          explain: "2 bases planas (círculos). A lateral é curva." },
        { prompt: "Quantas faces planas tem uma esfera?", answer: "0",
          options: [{label:"0",correct:true},{label:"1"},{label:"2"},{label:"infinitas"}],
          explain: "A esfera não tem faces planas — só 1 superfície curva." }
      ]
    },
    {
      id: "t4.q09", themeId: "t4", level: "medio", type: "mcq",
      template: "Quantos vértices tem um cone?",
      hint: "Conta a 'ponta'.",
      variants: [
        { prompt: "Quantos vértices tem um cone?", answer: "1",
          options: [{label:"0"},{label:"1",correct:true},{label:"2"},{label:"3"}],
          explain: "O cone tem exatamente 1 vértice — a 'ponta' onde se reúne toda a superfície lateral." },
        { prompt: "Quantos vértices tem um cilindro?", answer: "0",
          options: [{label:"0",correct:true},{label:"1"},{label:"2"},{label:"4"}],
          explain: "0 vértices. O cilindro tem 2 bases circulares mas nenhuma 'ponta'." },
        { prompt: "Quantos vértices tem uma esfera?", answer: "0",
          options: [{label:"0",correct:true},{label:"1"},{label:"2"},{label:"infinitos"}],
          explain: "Nenhum. A esfera é toda curva." }
      ]
    },
    {
      id: "t4.q10", themeId: "t4", level: "medio", type: "input",
      template: "Qual é o número MÍNIMO de faces que um poliedro pode ter?",
      hint: "O sólido com menos faces é o tetraedro (pirâmide triangular).",
      variants: [
        { prompt: "Qual é o número mínimo de faces de um poliedro?", answer: 4, explain: "4 faces. O sólido com menos faces é o tetraedro (pirâmide triangular): 1 base + 3 faces laterais." },
        { prompt: "Pode existir um poliedro com 2 faces?", answer: 0, explain: "Não pode (resposta = 0 ou 'não'). Para formar um sólido fechado precisas de pelo menos 4 faces." },
        { prompt: "Pode existir um poliedro com 3 faces?", answer: 0, explain: "Não. 3 faces não conseguem formar um sólido fechado — precisas de pelo menos 4." }
      ]
    },
    {
      id: "t4.q11", themeId: "t4", level: "medio", type: "mcq",
      template: "Uma bola de futebol clássica (com pentágonos e hexágonos) é, matematicamente...",
      hint: "É feita só de polígonos planos cosidos.",
      variants: [
        { prompt: "A bola de futebol clássica é feita de pentágonos e hexágonos. Quanto a polígonos:", answer: "Tem pentágonos e hexágonos visíveis",
          options: [
            {label:"Tem só triângulos"},
            {label:"Tem pentágonos e hexágonos visíveis",correct:true},
            {label:"Tem só quadrados"},
            {label:"Tem círculos"}
          ],
          explain: "A bola clássica tem 12 pentágonos pretos + 20 hexágonos brancos." },
        { prompt: "Pedagogicamente (no 5º ano), uma bola de futebol é uma aproximação de que sólido?", answer: "Esfera",
          options: [{label:"Cilindro"},{label:"Esfera",correct:true},{label:"Cone"},{label:"Cubo"}],
          explain: "No 5º ano consideramos a bola como aproximação à esfera." },
        { prompt: "Que polígonos predominam visualmente na bola de futebol?", answer: "Hexágonos e pentágonos",
          options: [
            {label:"Quadrados e hexágonos"},
            {label:"Triângulos e quadrados"},
            {label:"Hexágonos e pentágonos",correct:true},
            {label:"Octógonos e pentágonos"}
          ],
          explain: "Os polígonos visíveis na bola de futebol são pentágonos (pretos) e hexágonos (brancos)." }
      ]
    },
    {
      id: "t4.q12", themeId: "t4", level: "medio", type: "mcq",
      template: "Um sólido tem 2 bases circulares e 1 superfície curva — quantos vértices tem?",
      hint: "É um cilindro.",
      variants: [
        { prompt: "Um cilindro tem __ vértices.", answer: "0",
          options: [{label:"0",correct:true},{label:"1"},{label:"2"},{label:"4"}],
          explain: "0 vértices — sem 'pontas'." },
        { prompt: "Um cone tem __ vértices.", answer: "1",
          options: [{label:"0"},{label:"1",correct:true},{label:"2"},{label:"3"}],
          explain: "1 vértice (a ponta)." },
        { prompt: "Uma esfera tem __ vértices.", answer: "0",
          options: [{label:"0",correct:true},{label:"1"},{label:"2"},{label:"infinitos"}],
          explain: "0 — sem pontas, sem arestas, sem faces planas." }
      ]
    },
    {
      id: "t4.q13", themeId: "t4", level: "medio", type: "vf",
      template: "Um sólido com superfície curva é sempre um não poliedro.",
      hint: "Por definição.",
      variants: [
        { prompt: "Se um sólido tem ao menos uma superfície curva, é não poliedro.", answer: true,
          explain: "Verdadeiro — por definição, poliedro = só superfícies planas. Curva → não poliedro." },
        { prompt: "Um poliedro pode ter uma face curva.", answer: false,
          explain: "Falso. Por definição, poliedro só tem faces planas (polígonos)." },
        { prompt: "Todos os não poliedros têm vértices.", answer: false,
          explain: "Falso. A esfera é um não poliedro e tem 0 vértices. O cilindro também tem 0." }
      ]
    },
    {
      id: "t4.q14", themeId: "t4", level: "medio", type: "mcq",
      template: "Que NÃO poliedro tem o maior número de elementos curvos?",
      hint: "Esfera é toda curva.",
      variants: [
        { prompt: "Que não poliedro é mais 'arredondado' (todo curvo)?", answer: "Esfera",
          options: [{label:"Cilindro"},{label:"Cone"},{label:"Esfera",correct:true},{label:"Não há diferença"}],
          explain: "A esfera é toda uma única superfície curva. Cilindro e cone têm bases planas." },
        { prompt: "Que não poliedro tem 2 bases planas?", answer: "Cilindro",
          options: [{label:"Cilindro",correct:true},{label:"Cone"},{label:"Esfera"},{label:"Prisma"}],
          explain: "Cilindro: 2 bases circulares planas + lateral curva." },
        { prompt: "Que não poliedro tem 1 base plana + 1 vértice?", answer: "Cone",
          options: [{label:"Cilindro"},{label:"Cone",correct:true},{label:"Esfera"},{label:"Pirâmide"}],
          explain: "Cone: 1 base + 1 vértice (a pirâmide tem mais que 1 face plana, é poliedro)." }
      ]
    },

    // ============ HARD ============
    {
      id: "t4.q15", themeId: "t4", level: "hard", type: "mcq",
      template: "Numa caixa hexagonal fechada (prisma hexagonal), quantas faces planas vês?",
      hint: "2 bases + faces laterais.",
      variants: [
        { prompt: "Faces de um prisma hexagonal?", answer: "8",
          options: [{label:"6"},{label:"7"},{label:"8",correct:true},{label:"12"}],
          explain: "2 bases hexagonais + 6 faces laterais retangulares = 8 faces." },
        { prompt: "Arestas de um prisma hexagonal?", answer: "18",
          options: [{label:"12"},{label:"15"},{label:"18",correct:true},{label:"24"}],
          explain: "3 × 6 = 18 arestas." },
        { prompt: "Vértices de um prisma hexagonal?", answer: "12",
          options: [{label:"6"},{label:"10"},{label:"12",correct:true},{label:"18"}],
          explain: "2 × 6 = 12 vértices." }
      ]
    },
    {
      id: "t4.q16", themeId: "t4", level: "hard", type: "mcq",
      template: "Um sólido tem só superfícies planas, 5 faces e 5 vértices. Que sólido é?",
      hint: "Pirâmide com base quadrada.",
      variants: [
        { prompt: "Sólido com 5 faces e 5 vértices?", answer: "Pirâmide quadrangular",
          options: [{label:"Prisma triangular"},{label:"Pirâmide quadrangular",correct:true},{label:"Cubo"},{label:"Cone"}],
          explain: "Pirâmide quadrangular: 1 base quadrada + 4 faces triangulares = 5 faces. 4 vértices da base + 1 do topo = 5 vértices." },
        { prompt: "Sólido com 5 faces, 9 arestas, 6 vértices?", answer: "Prisma triangular",
          options: [{label:"Prisma triangular",correct:true},{label:"Pirâmide quadrangular"},{label:"Cubo"},{label:"Pirâmide pentagonal"}],
          explain: "Prisma triangular: 2 bases triangulares + 3 faces laterais = 5 faces. 2 × 3 = 6 vértices. 3 × 3 = 9 arestas." },
        { prompt: "Sólido com 4 faces, 6 arestas, 4 vértices?", answer: "Pirâmide triangular (tetraedro)",
          options: [{label:"Cubo"},{label:"Pirâmide triangular (tetraedro)",correct:true},{label:"Prisma triangular"},{label:"Pirâmide quadrangular"}],
          explain: "Tetraedro: 4 faces triangulares, 4 vértices, 6 arestas." }
      ]
    },
    {
      id: "t4.q17", themeId: "t4", level: "hard", type: "vf",
      template: "Todos os poliedros têm pelo menos 4 faces.",
      hint: "Já viste a resposta do desafio do livro.",
      variants: [
        { prompt: "Um poliedro tem sempre pelo menos 4 faces.", answer: true,
          explain: "Verdadeiro. O menor poliedro é o tetraedro com 4 faces." },
        { prompt: "Um poliedro pode ter exatamente 3 faces.", answer: false,
          explain: "Falso. 3 faces não conseguem fechar um sólido — precisas de pelo menos 4." },
        { prompt: "Pode existir um poliedro com 100 faces.", answer: true,
          explain: "Verdadeiro. Por exemplo, um prisma 98-agonal tem 98 + 2 = 100 faces." }
      ]
    },
    {
      id: "t4.q18", themeId: "t4", level: "hard", type: "vf",
      template: "Se cortares uma laranja a meio, cada metade é um não poliedro.",
      hint: "A 'casca' continua curva.",
      variants: [
        { prompt: "Meia esfera ('hemisfério') ainda é um não poliedro.", answer: true,
          explain: "Verdadeiro. Continua a ter superfície curva (a calota da esfera) → não poliedro." },
        { prompt: "Um cone cortado em duas partes paralelas à base gera dois sólidos: ambos são não poliedros.", answer: true,
          explain: "Verdadeiro. Ambos continuam a ter superfície curva — o de cima é outro cone mais pequeno; o de baixo é um tronco de cone." },
        { prompt: "Um cubo cortado a meio com um plano paralelo às faces gera dois paralelepípedos retângulos.", answer: true,
          explain: "Verdadeiro. Cada metade é um paralelepípedo retângulo (poliedro)." }
      ]
    },
    {
      id: "t4.q19", themeId: "t4", level: "hard", type: "mcq",
      template: "Um gelado em cone com bola tem...",
      hint: "Dois não poliedros juntos.",
      variants: [
        { prompt: "Um gelado em casquinha (cone + bola) é composto por que sólidos?", answer: "Cone + esfera (ambos não poliedros)",
          options: [
            {label:"Cilindro + esfera"},
            {label:"Cone + esfera (ambos não poliedros)",correct:true},
            {label:"Cone + pirâmide"},
            {label:"Cilindro + cone"}
          ],
          explain: "A casquinha é um cone (não poliedro), a bola de gelado é uma esfera (não poliedro)." },
        { prompt: "Qual a relação entre cone e cilindro?", answer: "Ambos têm superfície lateral curva",
          options: [
            {label:"São o mesmo sólido"},
            {label:"Ambos têm superfície lateral curva",correct:true},
            {label:"Ambos são poliedros"},
            {label:"Não têm relação"}
          ],
          explain: "Cone e cilindro têm ambos uma superfície lateral curva (são não poliedros)." },
        { prompt: "Em comum entre cone, cilindro e esfera:", answer: "Têm pelo menos uma superfície curva",
          options: [
            {label:"Têm o mesmo número de vértices"},
            {label:"Têm pelo menos uma superfície curva",correct:true},
            {label:"Têm a mesma altura"},
            {label:"São poliedros"}
          ],
          explain: "O que os define como NÃO poliedros é terem superfície curva." }
      ]
    },
    {
      id: "t4.q20", themeId: "t4", level: "hard", type: "mcq",
      template: "Que sólido NÃO pertence ao grupo dos NÃO poliedros?",
      hint: "Qual deles tem só faces planas?",
      variants: [
        { prompt: "Que sólido NÃO é não poliedro (ou seja, É poliedro)?", answer: "Prisma pentagonal",
          options: [{label:"Cone"},{label:"Esfera"},{label:"Prisma pentagonal",correct:true},{label:"Cilindro"}],
          explain: "Prisma pentagonal só tem faces planas → é poliedro (não pertence ao grupo dos não poliedros)." },
        { prompt: "Que sólido NÃO é poliedro?", answer: "Esfera",
          options: [{label:"Cubo"},{label:"Esfera",correct:true},{label:"Pirâmide hexagonal"},{label:"Prisma quadrangular"}],
          explain: "A esfera tem superfície curva → não poliedro." },
        { prompt: "Qual destes sólidos tem 0 arestas planas?", answer: "Esfera",
          options: [{label:"Esfera",correct:true},{label:"Cone"},{label:"Cilindro"},{label:"Cubo"}],
          explain: "A esfera não tem arestas. (Cone e cilindro têm 'arestas curvas' que delimitam a base, dependendo da definição.)" }
      ]
    },

    // ============ PRO ============
    {
      id: "t4.q21", themeId: "t4", level: "pro", type: "mcq",
      template: "Considera estes objetos: pilha, dado, prenda em forma de cubo, bola de bowling, chapéu de festa pontiagudo. Quantos são poliedros?",
      hint: "Conta quantos têm SÓ superfícies planas.",
      variants: [
        { prompt: "Dos objetos: pilha (cilindro), dado (cubo), prenda cúbica (cubo), bola de bowling (esfera), chapéu pontiagudo (cone) — quantos são poliedros?", answer: "2",
          options: [{label:"1"},{label:"2",correct:true},{label:"3"},{label:"4"}],
          explain: "Poliedros: dado (cubo) + prenda cúbica (cubo) = 2. Não poliedros: pilha, bola, chapéu = 3." },
        { prompt: "Dos objetos: bola de futebol (esfera, aproximação), Toblerone (prisma triangular), lata de refrigerante (cilindro), pirâmide do Egito (pirâmide), casquinha de gelado (cone) — quantos são poliedros?", answer: "2",
          options: [{label:"1"},{label:"2",correct:true},{label:"3"},{label:"4"}],
          explain: "Poliedros: Toblerone (prisma) + pirâmide = 2. Não poliedros: bola, lata, cone = 3." },
        { prompt: "Dos objetos: livro (paralelepípedo), pião quadrangular (pirâmide quadrangular), bola de Natal (esfera), lata atum (cilindro), caixa hexagonal (prisma hexagonal) — quantos são poliedros?", answer: "3",
          options: [{label:"2"},{label:"3",correct:true},{label:"4"},{label:"5"}],
          explain: "Poliedros: livro + pião + caixa hexagonal = 3. Não poliedros: bola + lata = 2." }
      ]
    },
    {
      id: "t4.q22", themeId: "t4", level: "pro", type: "vf",
      template: "Um sólido com 3 faces planas pode existir.",
      hint: "3 faces fecham um sólido?",
      variants: [
        { prompt: "Pode existir um sólido apenas com 3 faces planas (sem superfícies curvas)?", answer: false,
          explain: "Falso. Com 3 faces planas não consegues fechar um sólido — precisas de pelo menos 4." },
        { prompt: "O tetraedro é o poliedro com menos faces.", answer: true,
          explain: "Verdadeiro. O tetraedro (pirâmide triangular) tem 4 faces, é o poliedro com menos faces possíveis." },
        { prompt: "Não há limite máximo para o número de faces de um poliedro.", answer: true,
          explain: "Verdadeiro. Podes ter prismas com bases de muitos lados, ou poliedros muito complexos com centenas/milhares de faces." }
      ]
    },
    {
      id: "t4.q23", themeId: "t4", level: "pro", type: "mcq",
      template: "Qual destas afirmações sobre o cone é VERDADEIRA?",
      hint: "Pensa: o cone tem 1 base, 1 vértice, e uma superfície lateral curva.",
      variants: [
        { prompt: "Qual destas afirmações sobre o CONE é verdadeira?", answer: "Tem 1 base circular e 1 vértice",
          options: [
            {label:"Tem 2 bases circulares"},
            {label:"Tem 1 base circular e 1 vértice",correct:true},
            {label:"Tem 0 vértices"},
            {label:"É um poliedro"}
          ],
          explain: "Cone: 1 base (circular) + 1 vértice + 1 superfície lateral curva." },
        { prompt: "Qual destas afirmações sobre o CILINDRO é verdadeira?", answer: "Tem 2 bases circulares e 0 vértices",
          options: [
            {label:"Tem 1 base e 1 vértice"},
            {label:"Tem 2 bases circulares e 0 vértices",correct:true},
            {label:"É um poliedro"},
            {label:"Tem só superfícies planas"}
          ],
          explain: "Cilindro: 2 bases circulares + 1 superfície lateral curva + 0 vértices." },
        { prompt: "Qual destas afirmações sobre a ESFERA é verdadeira?", answer: "Tem 0 faces planas, 0 arestas, 0 vértices",
          options: [
            {label:"Tem 1 base"},
            {label:"Tem 1 vértice"},
            {label:"Tem 0 faces planas, 0 arestas, 0 vértices",correct:true},
            {label:"Tem 2 superfícies curvas"}
          ],
          explain: "Esfera: 1 única superfície curva, sem nada plano, sem arestas, sem vértices." }
      ]
    },
    {
      id: "t4.q24", themeId: "t4", level: "pro", type: "mcq",
      template: "Um sólido tem 1 superfície curva e nada mais. Que sólido é?",
      hint: "Sem bases, sem arestas, sem vértices.",
      variants: [
        { prompt: "Sólido só com 1 superfície curva (sem outras superfícies, sem arestas, sem vértices):", answer: "Esfera",
          options: [{label:"Cone"},{label:"Cilindro"},{label:"Esfera",correct:true},{label:"Toro (donut)"}],
          explain: "Esfera. Tudo curvo, sem mais nada." },
        { prompt: "Sólido com 2 bases congruentes paralelas, faces laterais paralelogramos:", answer: "Prisma",
          options: [{label:"Cilindro"},{label:"Prisma",correct:true},{label:"Pirâmide"},{label:"Cone"}],
          explain: "Essa é a definição de prisma." },
        { prompt: "Sólido com 1 base poligonal e faces laterais que se juntam num vértice:", answer: "Pirâmide",
          options: [{label:"Prisma"},{label:"Pirâmide",correct:true},{label:"Cone"},{label:"Paralelepípedo"}],
          explain: "Essa é a definição de pirâmide." }
      ]
    }
  ];

  window.QBANK.t4 = Q;
})();
