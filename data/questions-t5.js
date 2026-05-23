/* ============================================================
   questions-t5.js — Prismas (Definição e Classificação)
   ============================================================ */
(function () {
  "use strict";
  window.QBANK = window.QBANK || {};

  const Q = [
    // ============ FÁCIL ============
    {
      id: "t5.q01", themeId: "t5", level: "facil", type: "mcq",
      template: "Quantas bases tem um prisma?",
      hint: "Duas, paralelas entre si.",
      variants: [
        { prompt: "Quantas bases tem qualquer prisma?", answer: "2",
          options: [{label:"1"},{label:"2",correct:true},{label:"3"},{label:"6"}],
          explain: "Por definição, um prisma tem 2 bases congruentes (iguais) e paralelas entre si." },
        { prompt: "Um prisma tem __ bases iguais e paralelas.", answer: "2",
          options: [{label:"2",correct:true},{label:"3"},{label:"4"},{label:"6"}],
          explain: "Sempre 2 bases." },
        { prompt: "Num prisma triangular, quantas bases há?", answer: "2",
          options: [{label:"1"},{label:"2",correct:true},{label:"3"},{label:"5"}],
          explain: "Como qualquer prisma, tem 2 bases. No prisma triangular as bases são triângulos." }
      ]
    },
    {
      id: "t5.q02", themeId: "t5", level: "facil", type: "mcq",
      template: "As bases de um prisma são...",
      hint: "Iguais e paralelas.",
      variants: [
        { prompt: "As bases de um prisma são entre si...", answer: "Congruentes e paralelas",
          options: [
            {label:"Diferentes e perpendiculares"},
            {label:"Congruentes e paralelas",correct:true},
            {label:"Sempre quadradas"},
            {label:"Sempre triângulos"}
          ],
          explain: "As 2 bases são iguais (congruentes) e paralelas entre si." },
        { prompt: "As faces laterais de um prisma são...", answer: "Paralelogramos",
          options: [{label:"Triângulos"},{label:"Paralelogramos",correct:true},{label:"Círculos"},{label:"Sempre quadrados"}],
          explain: "No prisma geral, as faces laterais são paralelogramos. Nos prismas retos, são retângulos." },
        { prompt: "Num prisma reto, as faces laterais são...", answer: "Retângulos (perpendiculares às bases)",
          options: [
            {label:"Triângulos"},
            {label:"Quadrados sempre"},
            {label:"Retângulos (perpendiculares às bases)",correct:true},
            {label:"Trapézios"}
          ],
          explain: "Num prisma RETO, as faces laterais são retângulos perpendiculares às bases." }
      ]
    },
    {
      id: "t5.q03", themeId: "t5", level: "facil", type: "mcq",
      template: "Como se chama um prisma cujas bases são triângulos?",
      hint: "O nome vem do polígono da base.",
      variants: [
        { prompt: "Um prisma com bases triangulares chama-se...", answer: "Prisma triangular",
          options: [{label:"Prisma quadrangular"},{label:"Prisma triangular",correct:true},{label:"Pirâmide triangular"},{label:"Cilindro"}],
          explain: "O nome do prisma vem do polígono da base — triângulo → prisma triangular." },
        { prompt: "Um prisma com bases pentagonais é...", answer: "Prisma pentagonal",
          options: [{label:"Pirâmide pentagonal"},{label:"Prisma pentagonal",correct:true},{label:"Pentágono"},{label:"Prisma quadrangular"}],
          explain: "Base = pentágono → prisma pentagonal." },
        { prompt: "Um prisma com bases hexagonais é...", answer: "Prisma hexagonal",
          options: [{label:"Pirâmide hexagonal"},{label:"Prisma hexagonal",correct:true},{label:"Hexágono"},{label:"Prisma pentagonal"}],
          explain: "Base = hexágono → prisma hexagonal." }
      ]
    },
    {
      id: "t5.q04", themeId: "t5", level: "facil", type: "vf",
      template: "O cubo é um prisma.",
      hint: "Tem 2 faces paralelas iguais (quadradas), e as outras faces são retângulos (quadrados, neste caso).",
      variants: [
        { prompt: "O cubo é um prisma quadrangular especial.", answer: true,
          explain: "Verdadeiro. O cubo é um prisma quadrangular onde todas as faces são quadrados iguais." },
        { prompt: "O paralelepípedo retângulo é um prisma quadrangular.", answer: true,
          explain: "Verdadeiro. As bases são quadriláteros (retângulos) e as faces laterais são retângulos." },
        { prompt: "Uma pirâmide é um prisma.", answer: false,
          explain: "Falso. A pirâmide tem só 1 base (e faces laterais triangulares). O prisma tem 2 bases." }
      ]
    },
    {
      id: "t5.q05", themeId: "t5", level: "facil", type: "vf",
      template: "Num prisma reto, todas as faces laterais são retângulos.",
      hint: "'Reto' = lateral perpendicular à base.",
      variants: [
        { prompt: "Num prisma reto, as faces laterais são retângulos.", answer: true,
          explain: "Verdadeiro. 'Reto' significa que as faces laterais são perpendiculares às bases — logo, são retângulos." },
        { prompt: "Num prisma oblíquo (inclinado), as faces laterais são paralelogramos (não retângulos).", answer: true,
          explain: "Verdadeiro. Num prisma oblíquo, as faces laterais são paralelogramos quaisquer." },
        { prompt: "Num cubo, as faces laterais são triângulos.", answer: false,
          explain: "Falso. No cubo, as faces (incluindo as laterais) são quadrados." }
      ]
    },
    {
      id: "t5.q06", themeId: "t5", level: "facil", type: "mcq",
      template: "Qual destes NÃO é um prisma?",
      hint: "Pirâmide tem só 1 base.",
      variants: [
        { prompt: "Qual destes NÃO é um prisma?", answer: "Pirâmide quadrangular",
          options: [{label:"Cubo"},{label:"Pirâmide quadrangular",correct:true},{label:"Prisma triangular"},{label:"Paralelepípedo retângulo"}],
          explain: "A pirâmide tem só 1 base e faces laterais triangulares — não é prisma." },
        { prompt: "Qual destes NÃO é um prisma?", answer: "Cilindro",
          options: [{label:"Prisma hexagonal"},{label:"Cilindro",correct:true},{label:"Cubo"},{label:"Prisma triangular"}],
          explain: "O cilindro não é poliedro (tem superfície curva), logo não é prisma." },
        { prompt: "Qual destes É um prisma?", answer: "Prisma pentagonal",
          options: [{label:"Cone"},{label:"Esfera"},{label:"Prisma pentagonal",correct:true},{label:"Pirâmide quadrangular"}],
          explain: "Prisma pentagonal é um prisma (claro!). Os outros não são prismas." }
      ]
    },

    // ============ MÉDIO ============
    {
      id: "t5.q07", themeId: "t5", level: "medio", type: "mcq",
      template: "Como classificas um prisma cujas bases têm 5 lados?",
      hint: "Base com 5 lados = pentágono.",
      variants: [
        { prompt: "Prisma com bases de 5 lados?", answer: "Prisma pentagonal",
          options: [{label:"Prisma quadrangular"},{label:"Prisma pentagonal",correct:true},{label:"Prisma hexagonal"},{label:"Pirâmide pentagonal"}],
          explain: "5 lados = pentágono → prisma pentagonal." },
        { prompt: "Prisma com bases de 6 lados?", answer: "Prisma hexagonal",
          options: [{label:"Prisma pentagonal"},{label:"Prisma hexagonal",correct:true},{label:"Prisma heptagonal"},{label:"Hexágono"}],
          explain: "6 lados = hexágono → prisma hexagonal." },
        { prompt: "Prisma com bases de 8 lados?", answer: "Prisma octogonal",
          options: [{label:"Prisma heptagonal"},{label:"Prisma octogonal",correct:true},{label:"Prisma decagonal"},{label:"Octógono"}],
          explain: "8 lados = octógono → prisma octogonal." }
      ]
    },
    {
      id: "t5.q08", themeId: "t5", level: "medio", type: "vf",
      template: "Todos os paralelepípedos retângulos são prismas quadrangulares.",
      hint: "Paralelepípedo retângulo tem 2 bases retangulares paralelas + faces laterais retangulares.",
      variants: [
        { prompt: "Todos os paralelepípedos retângulos são prismas (quadrangulares).", answer: true,
          explain: "Verdadeiro. O paralelepípedo retângulo é um prisma quadrangular onde as 6 faces são retângulos." },
        { prompt: "Todos os paralelepípedos retângulos são cubos.", answer: false,
          explain: "Falso. Só são cubos os paralelepípedos retângulos com as 3 dimensões iguais (e portanto todas as faces quadradas iguais)." },
        { prompt: "Todos os cubos são paralelepípedos retângulos.", answer: true,
          explain: "Verdadeiro. O cubo é um caso particular de paralelepípedo retângulo (com largura = comprimento = altura)." }
      ]
    },
    {
      id: "t5.q09", themeId: "t5", level: "medio", type: "mcq",
      template: "Num prisma triangular reto, quantas faces há ao todo?",
      hint: "2 bases + faces laterais.",
      variants: [
        { prompt: "Faces de um prisma triangular?", answer: "5",
          options: [{label:"3"},{label:"4"},{label:"5",correct:true},{label:"6"}],
          explain: "2 bases triangulares + 3 faces laterais retangulares = 5 faces." },
        { prompt: "Faces de um prisma quadrangular?", answer: "6",
          options: [{label:"4"},{label:"5"},{label:"6",correct:true},{label:"8"}],
          explain: "2 bases quadrangulares + 4 faces laterais = 6 faces." },
        { prompt: "Faces de um prisma pentagonal?", answer: "7",
          options: [{label:"5"},{label:"6"},{label:"7",correct:true},{label:"10"}],
          explain: "2 bases pentagonais + 5 faces laterais = 7 faces." }
      ]
    },
    {
      id: "t5.q10", themeId: "t5", level: "medio", type: "mcq",
      template: "Como se chama um prisma cujas faces laterais NÃO são perpendiculares às bases?",
      hint: "Inclinado.",
      variants: [
        { prompt: "Prisma cujas faces laterais NÃO são perpendiculares às bases:", answer: "Prisma oblíquo",
          options: [{label:"Prisma reto"},{label:"Prisma oblíquo",correct:true},{label:"Prisma regular"},{label:"Pirâmide"}],
          explain: "Prisma oblíquo (ou inclinado): as faces laterais são paralelogramos inclinados, não retângulos." },
        { prompt: "Prisma cujas faces laterais SÃO perpendiculares às bases:", answer: "Prisma reto",
          options: [{label:"Prisma oblíquo"},{label:"Prisma reto",correct:true},{label:"Prisma irregular"},{label:"Pirâmide"}],
          explain: "Prisma reto: faces laterais perpendiculares às bases (logo, são retângulos)." },
        { prompt: "No 5º ano, quase todos os prismas com que trabalhas são...", answer: "Prismas retos",
          options: [{label:"Prismas oblíquos"},{label:"Prismas retos",correct:true},{label:"Pirâmides"},{label:"Cilindros"}],
          explain: "Quase sempre prismas retos no 5º ano." }
      ]
    },
    {
      id: "t5.q11", themeId: "t5", level: "medio", type: "vf",
      template: "Um prisma pentagonal tem 7 faces.",
      hint: "5 faces laterais + 2 bases.",
      variants: [
        { prompt: "Um prisma pentagonal tem 7 faces.", answer: true,
          explain: "Verdadeiro. 2 bases pentagonais + 5 faces laterais = 7." },
        { prompt: "Um prisma hexagonal tem 6 faces.", answer: false,
          explain: "Falso. Tem 8 faces (2 bases + 6 laterais). 6 são só as faces laterais." },
        { prompt: "Um prisma triangular tem 5 faces.", answer: true,
          explain: "Verdadeiro. 2 bases triangulares + 3 faces laterais = 5." }
      ]
    },
    {
      id: "t5.q12", themeId: "t5", level: "medio", type: "mcq",
      template: "Qual destes objetos é um prisma?",
      hint: "Procura 2 bases iguais paralelas.",
      variants: [
        { prompt: "Qual destes objetos é um prisma?", answer: "Caixa de Toblerone",
          options: [{label:"Bola de futebol"},{label:"Cone de gelado"},{label:"Caixa de Toblerone",correct:true},{label:"Pião pontiagudo"}],
          explain: "A Toblerone tem 2 bases triangulares iguais → prisma triangular." },
        { prompt: "Qual destes NÃO é um prisma?", answer: "Pião pontiagudo",
          options: [{label:"Caixa de cereais"},{label:"Tijolo"},{label:"Pião pontiagudo",correct:true},{label:"Caixa hexagonal de pão-de-ló"}],
          explain: "Pião pontiagudo é uma pirâmide (1 base + vértice no topo) — não é prisma." },
        { prompt: "Qual destes objetos é um prisma hexagonal?", answer: "Caixa de chocolates hexagonal",
          options: [{label:"Bola de Natal"},{label:"Caixa de chocolates hexagonal",correct:true},{label:"Lata cilíndrica"},{label:"Pirâmide do Egito"}],
          explain: "Caixa hexagonal → prisma hexagonal." }
      ]
    },

    // ============ HARD ============
    {
      id: "t5.q13", themeId: "t5", level: "hard", type: "mcq",
      template: "Quais destes três grupos de afirmações sobre prismas é toda verdadeira?",
      hint: "Procura a opção sem erros.",
      variants: [
        { prompt: "Qual é a afirmação CORRETA sobre prismas?", answer: "Têm 2 bases congruentes paralelas e faces laterais paralelogramos",
          options: [
            {label:"Têm 1 base e faces laterais triangulares"},
            {label:"Têm 2 bases congruentes paralelas e faces laterais paralelogramos",correct:true},
            {label:"Têm faces laterais sempre quadradas"},
            {label:"Têm bases curvas"}
          ],
          explain: "Definição de prisma: 2 bases iguais paralelas + faces laterais paralelogramos." },
        { prompt: "Qual é a afirmação CORRETA sobre prismas retos?", answer: "As faces laterais são retângulos perpendiculares às bases",
          options: [
            {label:"As faces laterais são triângulos"},
            {label:"As faces laterais são quadrados sempre"},
            {label:"As faces laterais são retângulos perpendiculares às bases",correct:true},
            {label:"Não têm vértices"}
          ],
          explain: "Prisma reto = faces laterais perpendiculares = retângulos." },
        { prompt: "Que afirmação sobre o cubo é correta?", answer: "É um prisma quadrangular onde todas as faces são quadrados iguais",
          options: [
            {label:"É uma pirâmide"},
            {label:"É um prisma quadrangular onde todas as faces são quadrados iguais",correct:true},
            {label:"Tem 8 faces"},
            {label:"Tem 5 vértices"}
          ],
          explain: "Cubo: prisma quadrangular + todas as 6 faces são quadrados iguais." }
      ]
    },
    {
      id: "t5.q14", themeId: "t5", level: "hard", type: "mcq",
      template: "Uma caixa de Toblerone (prisma triangular) deitada tem qual o número de arestas?",
      hint: "Usa a regra 3n.",
      variants: [
        { prompt: "Arestas de um prisma triangular?", answer: "9",
          options: [{label:"6"},{label:"9",correct:true},{label:"12"},{label:"15"}],
          explain: "3 × n = 3 × 3 = 9 arestas." },
        { prompt: "Arestas de um prisma quadrangular?", answer: "12",
          options: [{label:"8"},{label:"12",correct:true},{label:"16"},{label:"24"}],
          explain: "3 × 4 = 12 arestas." },
        { prompt: "Arestas de um prisma pentagonal?", answer: "15",
          options: [{label:"10"},{label:"12"},{label:"15",correct:true},{label:"25"}],
          explain: "3 × 5 = 15 arestas." }
      ]
    },
    {
      id: "t5.q15", themeId: "t5", level: "hard", type: "vf",
      template: "Todos os cubos são paralelepípedos retângulos.",
      hint: "Cubo é um caso particular.",
      variants: [
        { prompt: "Todos os cubos são paralelepípedos retângulos.", answer: true,
          explain: "Verdadeiro. O cubo é um caso particular de paralelepípedo retângulo (com as 3 dimensões iguais)." },
        { prompt: "Todos os paralelepípedos retângulos são cubos.", answer: false,
          explain: "Falso. Só são cubos se as 3 dimensões forem iguais. Caixa de sapatos é paralelepípedo retângulo mas não é cubo." },
        { prompt: "Todos os cubos são prismas.", answer: true,
          explain: "Verdadeiro. O cubo é um prisma quadrangular (caso particular)." }
      ]
    },
    {
      id: "t5.q16", themeId: "t5", level: "hard", type: "mcq",
      template: "Qual é a forma das faces laterais de um prisma hexagonal reto?",
      hint: "São paralelogramos perpendiculares à base.",
      variants: [
        { prompt: "As faces laterais de um prisma hexagonal reto são...", answer: "Retângulos",
          options: [{label:"Hexágonos"},{label:"Triângulos"},{label:"Retângulos",correct:true},{label:"Paralelogramos inclinados"}],
          explain: "Num prisma reto, as faces laterais são retângulos (independentemente do polígono da base)." },
        { prompt: "As bases de um prisma hexagonal são...", answer: "Hexágonos",
          options: [{label:"Quadrados"},{label:"Hexágonos",correct:true},{label:"Triângulos"},{label:"Pentágonos"}],
          explain: "Por definição, bases hexagonais → prisma hexagonal." },
        { prompt: "Num prisma reto, as bases e as faces laterais formam que ângulo?", answer: "Ângulo reto (90°)",
          options: [{label:"60°"},{label:"Ângulo reto (90°)",correct:true},{label:"Ângulo agudo"},{label:"Não há relação"}],
          explain: "Prisma reto: faces laterais perpendiculares às bases (90°)." }
      ]
    },
    {
      id: "t5.q17", themeId: "t5", level: "hard", type: "vf",
      template: "Existem prismas com bases de qualquer polígono (triângulo, quadrado, pentágono, etc).",
      hint: "Sim — qualquer polígono pode ser base.",
      variants: [
        { prompt: "Pode haver um prisma cuja base é um polígono de 100 lados.", answer: true,
          explain: "Verdadeiro. Chamar-se-ia 'prisma centagonal' ou similar. Qualquer polígono pode ser base de prisma." },
        { prompt: "Pode haver um prisma cuja base é um círculo.", answer: false,
          explain: "Falso. Se a base for circular, não é prisma — é um cilindro (não poliedro)." },
        { prompt: "As duas bases de um prisma são sempre iguais e paralelas.", answer: true,
          explain: "Verdadeiro. É a própria definição de prisma." }
      ]
    },

    // ============ PRO ============
    {
      id: "t5.q18", themeId: "t5", level: "pro", type: "mcq",
      template: "Uma caixa de chocolates tem a forma de prisma com bases hexagonais e altura 10 cm. Quantas faces tem ao todo?",
      hint: "Aplica n + 2.",
      variants: [
        { prompt: "Caixa em forma de prisma hexagonal — quantas faces?", answer: "8",
          options: [{label:"6"},{label:"7"},{label:"8",correct:true},{label:"12"}],
          explain: "n + 2 = 6 + 2 = 8 faces." },
        { prompt: "Caixa em forma de prisma triangular — quantas faces?", answer: "5",
          options: [{label:"3"},{label:"4"},{label:"5",correct:true},{label:"6"}],
          explain: "3 + 2 = 5 faces." },
        { prompt: "Caixa em forma de prisma octogonal — quantas faces?", answer: "10",
          options: [{label:"8"},{label:"9"},{label:"10",correct:true},{label:"16"}],
          explain: "8 + 2 = 10 faces." }
      ]
    },
    {
      id: "t5.q19", themeId: "t5", level: "pro", type: "vf",
      template: "Um prisma cujas bases são quadrados é sempre um cubo.",
      hint: "Depende da altura...",
      variants: [
        { prompt: "Um prisma com bases quadradas é necessariamente um cubo.", answer: false,
          explain: "Falso. Só é cubo se a altura for igual ao lado do quadrado. Caso contrário, é um paralelepípedo retângulo (que NÃO é cubo)." },
        { prompt: "Um prisma com bases retangulares e faces laterais retangulares é um paralelepípedo retângulo.", answer: true,
          explain: "Verdadeiro — definição de paralelepípedo retângulo." },
        { prompt: "Um prisma com bases quadradas e altura DIFERENTE do lado do quadrado é um paralelepípedo retângulo mas não cubo.", answer: true,
          explain: "Verdadeiro. Ex: base 3 cm × 3 cm com altura 5 cm — é paralelepípedo retângulo, não cubo." }
      ]
    },
    {
      id: "t5.q20", themeId: "t5", level: "pro", type: "mcq",
      template: "Que sólido tem 2 bases octogonais e 8 faces laterais?",
      hint: "Bases octogonais → ?",
      variants: [
        { prompt: "Sólido com 2 bases octogonais paralelas e 8 faces laterais:", answer: "Prisma octogonal",
          options: [{label:"Pirâmide octogonal"},{label:"Prisma octogonal",correct:true},{label:"Cilindro"},{label:"Polígono"}],
          explain: "2 bases paralelas iguais (octógonos) + 8 faces laterais → prisma octogonal." },
        { prompt: "Sólido com 1 base octogonal e 8 faces laterais triangulares:", answer: "Pirâmide octogonal",
          options: [{label:"Prisma octogonal"},{label:"Pirâmide octogonal",correct:true},{label:"Cone"},{label:"Cilindro"}],
          explain: "1 base + faces triangulares → pirâmide. Base octogonal → pirâmide octogonal." },
        { prompt: "Sólido com 2 bases circulares e superfície lateral curva:", answer: "Cilindro",
          options: [{label:"Cone"},{label:"Prisma"},{label:"Cilindro",correct:true},{label:"Esfera"}],
          explain: "Definição de cilindro." }
      ]
    },
    {
      id: "t5.q21", themeId: "t5", level: "pro", type: "mcq",
      template: "Quantas das seguintes afirmações são verdadeiras: (1) Todo o cubo é prisma. (2) Todo o paralelepípedo retângulo é prisma. (3) Toda a pirâmide é prisma.",
      hint: "Avalia cada uma separadamente.",
      variants: [
        { prompt: "Quantas das afirmações são verdadeiras? (1) Todo o cubo é prisma. (2) Todo o paralelepípedo retângulo é prisma. (3) Toda a pirâmide é prisma.", answer: "2",
          options: [{label:"0"},{label:"1"},{label:"2",correct:true},{label:"3"}],
          explain: "(1) Verdadeira. (2) Verdadeira. (3) Falsa — pirâmide tem 1 só base, não é prisma. Total: 2 verdadeiras." },
        { prompt: "Quantas das afirmações são verdadeiras? (1) Cubo é poliedro. (2) Cilindro é poliedro. (3) Pirâmide é poliedro.", answer: "2",
          options: [{label:"0"},{label:"1"},{label:"2",correct:true},{label:"3"}],
          explain: "(1) V (só faces planas), (2) F (tem curva), (3) V. Total: 2." },
        { prompt: "Quantas das afirmações são verdadeiras? (1) Cubo tem 6 faces. (2) Cubo é um prisma. (3) Cubo é um paralelepípedo retângulo.", answer: "3",
          options: [{label:"0"},{label:"1"},{label:"2"},{label:"3",correct:true}],
          explain: "Todas verdadeiras. O cubo é um caso particular de prisma e de paralelepípedo retângulo, com 6 faces quadradas iguais." }
      ]
    }
  ];

  window.QBANK.t5 = Q;
})();
