// GeoMaster Challenge - Dados do Jogo
// Baseado em MSI 5 Parte 2 (Areal Editores)
// Conteúdo educativo para Lucas (11 anos, 5º ano)

const TEMAS = [
  // ==================== TEMA 1: TRIÂNGULOS - CLASSIFICAÇÃO POR LADOS ====================
  {
    id: 1,
    nome: "Triângulos - Classificação por Lados",
    descricao: "Aprende a classificar triângulos conforme o comprimento dos seus lados.",
    icone: "🔺",
    conteudo: `
      <h2>Triângulos: Classificação por Lados</h2>

      <p>Um triângulo é um polígono com <strong>3 lados, 3 ângulos e 3 vértices</strong>.</p>

      <p>Os triângulos podem ser classificados de acordo com o comprimento dos seus lados:</p>

      <h3>1️⃣ Triângulo Equilátero</h3>
      <p><strong>Definição:</strong> Um triângulo que tem os <strong>3 lados com o mesmo comprimento</strong>.</p>
      <p><strong>Característica especial:</strong> Todos os ângulos internos também são iguais (60° cada).</p>
      <p><strong>Exemplo:</strong> Se todos os lados medem 5 cm, é equilátero.</p>

      <h3>2️⃣ Triângulo Isósceles</h3>
      <p><strong>Definição:</strong> Um triângulo que tem <strong>2 lados com o mesmo comprimento</strong>.</p>
      <p><strong>Característica especial:</strong> Os 2 ângulos da base (opostos aos lados iguais) são também iguais.</p>
      <p><strong>Exemplo:</strong> Se dois lados medem 5 cm e um lado mede 3 cm, é isósceles.</p>

      <h3>3️⃣ Triângulo Escaleno</h3>
      <p><strong>Definição:</strong> Um triângulo que tem <strong>3 lados com comprimentos diferentes</strong>.</p>
      <p><strong>Característica especial:</strong> Todos os ângulos internos têm valores diferentes.</p>
      <p><strong>Exemplo:</strong> Um triângulo com lados de 3 cm, 4 cm e 5 cm é escaleno.</p>

      <h3>Resumo:</h3>
      <ul>
        <li><strong>Equilátero:</strong> 3 lados iguais</li>
        <li><strong>Isósceles:</strong> 2 lados iguais</li>
        <li><strong>Escaleno:</strong> 3 lados diferentes</li>
      </ul>
    `,
    questoes: [
      {
        id: 1,
        nivel: "facil",
        pergunta: "Um triângulo com 3 lados de igual comprimento chama-se...",
        opcoes: ["Isósceles", "Equilátero", "Escaleno", "Retângulo"],
        respostaCorreta: 1,
        explicacao: "Um triângulo equilátero tem os 3 lados com exatamente o mesmo comprimento.",
        variantes: [
          { pergunta: "Como se designa o triângulo que possui os três lados congruentes (iguais)?" },
          { pergunta: "Qual é o nome do triângulo que tem todos os lados com igual medida?" }
        ]
      },
      {
        id: 2,
        nivel: "facil",
        pergunta: "Um triângulo com 2 lados iguais chama-se...",
        opcoes: ["Escaleno", "Equilátero", "Isósceles", "Acutângulo"],
        respostaCorreta: 2,
        explicacao: "Um triângulo isósceles tem exatamente 2 lados com o mesmo comprimento.",
        variantes: [
          { pergunta: "Se um triângulo tem apenas dois lados com o mesmo comprimento, que nome recebe?" },
          { pergunta: "Como se chama o triângulo que possui dois lados congruentes?" }
        ]
      },
      {
        id: 3,
        nivel: "facil",
        pergunta: "Um triângulo escaleno é aquele que tem...",
        opcoes: ["2 lados iguais", "3 lados iguais", "3 lados diferentes", "1 ângulo de 90°"],
        respostaCorreta: 2,
        explicacao: "Um triângulo escaleno tem os 3 lados com comprimentos diferentes.",
        variantes: [
          { pergunta: "Qual é a principal característica de um triângulo escaleno?" },
          { pergunta: "Um triângulo com lados de 3 cm, 4 cm e 5 cm é..." }
        ]
      },
      {
        id: 4,
        nivel: "medio",
        pergunta: "Um triângulo tem lados de 5 cm, 5 cm e 3 cm. Como se classifica?",
        opcoes: ["Equilátero", "Isósceles", "Escaleno", "Retângulo"],
        respostaCorreta: 1,
        explicacao: "Como tem 2 lados com a mesma medida (5 cm e 5 cm), é um triângulo isósceles.",
        variantes: [
          { pergunta: "Se as medidas dos lados de um triângulo são 4 cm, 4 cm e 6 cm, qual é a sua classificação?" },
          { pergunta: "Um triângulo com dimensões 7 cm, 7 cm e 9 cm é..." }
        ]
      },
      {
        id: 5,
        nivel: "medio",
        pergunta: "Um triângulo tem lados de 4 cm, 6 cm e 7 cm. Que tipo é?",
        opcoes: ["Equilátero", "Isósceles", "Escaleno", "Isósceles e equilátero"],
        respostaCorreta: 2,
        explicacao: "Como todos os lados têm medidas diferentes (4 cm ≠ 6 cm ≠ 7 cm), é escaleno.",
        variantes: [
          { pergunta: "Um triângulo com lados 2 cm, 5 cm e 8 cm é classificado como..." },
          { pergunta: "Se nenhum lado de um triângulo tem a mesma medida, é..." }
        ]
      },
      {
        id: 6,
        nivel: "hard",
        pergunta: "Um triângulo equilátero é sempre também...",
        opcoes: ["Escaleno", "Isósceles", "Retângulo", "Obtusângulo"],
        respostaCorreta: 1,
        explicacao: "Um triângulo equilátero tem 3 lados iguais. Se 3 lados são iguais, então pelo menos 2 também são iguais, logo é também isósceles.",
        variantes: [
          { pergunta: "Qual das seguintes afirmações é verdadeira: um triângulo equilátero é..." },
          { pergunta: "Se um triângulo é equilátero, pode também ser..." }
        ]
      }
    ]
  },

  // ==================== TEMA 2: TRIÂNGULOS - CLASSIFICAÇÃO POR ÂNGULOS ====================
  {
    id: 2,
    nome: "Triângulos - Classificação por Ângulos",
    descricao: "Aprende a classificar triângulos conforme a medida dos seus ângulos.",
    icone: "📐",
    conteudo: `
      <h2>Triângulos: Classificação por Ângulos</h2>

      <p><strong>Propriedade Fundamental:</strong> A soma dos 3 ângulos internos de um triângulo é sempre <strong>180°</strong>.</p>

      <p>Os triângulos podem ser classificados de acordo com a amplitude (medida) dos seus ângulos:</p>

      <h3>1️⃣ Triângulo Acutângulo</h3>
      <p><strong>Definição:</strong> Um triângulo que tem <strong>todos os 3 ângulos agudos</strong> (menores que 90°).</p>
      <p><strong>Exemplo:</strong> Um triângulo com ângulos de 60°, 60° e 60° é acutângulo.</p>
      <p><strong>Nota:</strong> Um triângulo equilátero é sempre acutângulo.</p>

      <h3>2️⃣ Triângulo Retângulo</h3>
      <p><strong>Definição:</strong> Um triângulo que tem <strong>um ângulo reto (de 90°)</strong>.</p>
      <p><strong>Partes especiais:</strong> O lado oposto ao ângulo reto é chamado <strong>hipotenusa</strong>; os outros dois lados são os <strong>catetos</strong>.</p>
      <p><strong>Exemplo:</strong> Um triângulo com ângulos de 90°, 45° e 45° é retângulo.</p>

      <h3>3️⃣ Triângulo Obtusângulo</h3>
      <p><strong>Definição:</strong> Um triângulo que tem <strong>um ângulo obtuso</strong> (maior que 90° mas menor que 180°).</p>
      <p><strong>Característica especial:</strong> Tem exatamente um ângulo obtuso; os outros dois são agudos.</p>
      <p><strong>Exemplo:</strong> Um triângulo com ângulos de 120°, 40° e 20° é obtusângulo.</p>

      <h3>Resumo:</h3>
      <ul>
        <li><strong>Acutângulo:</strong> Todos os ângulos &lt; 90°</li>
        <li><strong>Retângulo:</strong> Um ângulo = 90°</li>
        <li><strong>Obtusângulo:</strong> Um ângulo &gt; 90°</li>
      </ul>

      <h3>⚠️ Lembrete Importante:</h3>
      <p>Num triângulo não pode haver mais de um ângulo reto ou obtuso, porque a soma seria superior a 180°.</p>
    `,
    questoes: [
      {
        id: 1,
        nivel: "facil",
        pergunta: "Um triângulo com um ângulo de 90° chama-se...",
        opcoes: ["Acutângulo", "Obtusângulo", "Retângulo", "Equilátero"],
        respostaCorreta: 2,
        explicacao: "Um triângulo retângulo tem exatamente um ângulo de 90° (ângulo reto).",
        variantes: [
          { pergunta: "Como se designa um triângulo que possui um ângulo reto?" },
          { pergunta: "Qual é o nome do triângulo que tem um ângulo de 90°?" }
        ]
      },
      {
        id: 2,
        nivel: "facil",
        pergunta: "Um triângulo com todos os ângulos menores que 90° chama-se...",
        opcoes: ["Retângulo", "Obtusângulo", "Acutângulo", "Isósceles"],
        respostaCorreta: 2,
        explicacao: "Um triângulo acutângulo tem os 3 ângulos agudos (todos menores que 90°).",
        variantes: [
          { pergunta: "Como se chama um triângulo que tem todos os ângulos agudos?" },
          { pergunta: "Se todos os ângulos de um triângulo são &lt; 90°, é um triângulo..." }
        ]
      },
      {
        id: 3,
        nivel: "facil",
        pergunta: "Um triângulo com um ângulo maior que 90° chama-se...",
        opcoes: ["Retângulo", "Obtusângulo", "Acutângulo", "Equilátero"],
        respostaCorreta: 1,
        explicacao: "Um triângulo obtusângulo tem exatamente um ângulo obtuso (maior que 90°).",
        variantes: [
          { pergunta: "Qual é o nome do triângulo que tem um ângulo obtuso?" },
          { pergunta: "Se um ângulo de um triângulo mede 120°, o triângulo é..." }
        ]
      },
      {
        id: 4,
        nivel: "medio",
        pergunta: "Um triângulo tem ângulos de 60°, 60° e 60°. Como se classifica?",
        opcoes: ["Retângulo", "Obtusângulo", "Acutângulo", "Escaleno"],
        respostaCorreta: 2,
        explicacao: "Como todos os ângulos são menores que 90°, é um triângulo acutângulo.",
        variantes: [
          { pergunta: "Um triângulo com ângulos de 50°, 50° e 80° é..." },
          { pergunta: "Se todos os ângulos de um triângulo medem 60°, ele é..." }
        ]
      },
      {
        id: 5,
        nivel: "medio",
        pergunta: "Um triângulo tem ângulos de 90°, 45° e 45°. Como se classifica?",
        opcoes: ["Acutângulo", "Obtusângulo", "Retângulo", "Escaleno"],
        respostaCorreta: 2,
        explicacao: "Como tem um ângulo de 90°, é um triângulo retângulo.",
        variantes: [
          { pergunta: "Um triângulo com ângulos de 90°, 30° e 60° é..." },
          { pergunta: "Se um triângulo tem um ângulo de 90°, sua classificação é..." }
        ]
      },
      {
        id: 6,
        nivel: "hard",
        pergunta: "A soma dos ângulos internos de um triângulo é sempre...",
        opcoes: ["90°", "180°", "360°", "270°"],
        respostaCorreta: 1,
        explicacao: "Uma propriedade fundamental da geometria é que a soma dos ângulos internos de qualquer triângulo é sempre 180°.",
        variantes: [
          { pergunta: "Qual é a soma dos 3 ângulos de um triângulo?" },
          { pergunta: "Se um triângulo tem ângulos de 50°, 60° e x°, qual é o valor de x?" }
        ]
      }
    ]
  },

  // ==================== TEMA 3: PROPRIEDADES E CARACTERÍSTICAS DE TRIÂNGULOS ====================
  {
    id: 3,
    nome: "Propriedades de Triângulos",
    descricao: "Explora propriedades e características especiais dos triângulos.",
    icone: "🔍",
    conteudo: `
      <h2>Propriedades e Características de Triângulos</h2>

      <h3>Elementos de um Triângulo</h3>
      <p>Num triângulo ABC encontramos:</p>
      <ul>
        <li><strong>Vértices:</strong> A, B, C (os pontos de encontro dos lados)</li>
        <li><strong>Lados:</strong> AB, BC, AC (os segmentos de reta entre vértices)</li>
        <li><strong>Ângulos:</strong> ∠CAB, ∠ABC, ∠BCA (formados nos vértices)</li>
      </ul>

      <h3>Propriedades Fundamentais</h3>

      <p><strong>1. Soma dos ângulos internos = 180°</strong></p>
      <p>A soma de todos os ângulos de um triângulo é sempre 180 graus.</p>

      <p><strong>2. Desigualdade triangular</strong></p>
      <p>A soma de quaisquer dois lados deve ser maior que o terceiro lado. Exemplo: num triângulo com lados 3, 4 e 5:</p>
      <ul>
        <li>3 + 4 = 7 > 5 ✓</li>
        <li>3 + 5 = 8 > 4 ✓</li>
        <li>4 + 5 = 9 > 3 ✓</li>
      </ul>

      <p><strong>3. Triângulo equilátero = Acutângulo</strong></p>
      <p>Todo triângulo equilátero é também acutângulo, porque seus 3 ângulos medem 60° cada.</p>

      <p><strong>4. Um triângulo não pode ter:</strong></p>
      <ul>
        <li>Mais de um ângulo reto (90°)</li>
        <li>Mais de um ângulo obtuso (&gt;90°)</li>
        <li>Dois lados com soma menor que o terceiro</li>
      </ul>

      <h3>Relações Especiais</h3>
      <table style="width:100%; border-collapse:collapse;">
        <tr style="background:#f0f0f0;">
          <th style="border:1px solid #ccc; padding:10px;">Classificação por Lados</th>
          <th style="border:1px solid #ccc; padding:10px;">Classificação por Ângulos</th>
          <th style="border:1px solid #ccc; padding:10px;">Relação</th>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:10px;">Equilátero (3 iguais)</td>
          <td style="border:1px solid #ccc; padding:10px;">Acutângulo (3 &lt;90°)</td>
          <td style="border:1px solid #ccc; padding:10px;">Sempre verdade</td>
        </tr>
        <tr style="background:#f9f9f9;">
          <td style="border:1px solid #ccc; padding:10px;">Isósceles (2 iguais)</td>
          <td style="border:1px solid #ccc; padding:10px;">Qualquer um</td>
          <td style="border:1px solid #ccc; padding:10px;">Pode variar</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:10px;">Escaleno (3 diferentes)</td>
          <td style="border:1px solid #ccc; padding:10px;">Qualquer um</td>
          <td style="border:1px solid #ccc; padding:10px;">Pode variar</td>
        </tr>
      </table>
    `,
    questoes: [
      {
        id: 1,
        nivel: "facil",
        pergunta: "A soma dos ângulos internos de um triângulo é...",
        opcoes: ["90°", "180°", "270°", "360°"],
        respostaCorreta: 1,
        explicacao: "Uma propriedade fundamental: a soma de todos os ângulos internos de um triângulo é sempre 180°.",
        variantes: [
          { pergunta: "Qual é o total da soma dos 3 ângulos de um triângulo?" },
          { pergunta: "Se dois ângulos de um triângulo medem 70° e 60°, o terceiro mede..." }
        ]
      },
      {
        id: 2,
        nivel: "facil",
        pergunta: "Quantos vértices tem um triângulo?",
        opcoes: ["2", "3", "4", "5"],
        respostaCorreta: 1,
        explicacao: "Um triângulo tem 3 vértices (pontos de encontro dos lados) - A, B e C.",
        variantes: [
          { pergunta: "Um triângulo é composto por quantos pontos (vértices)?" },
          { pergunta: "Quantos cantos (vértices) tem uma figura triangular?" }
        ]
      },
      {
        id: 3,
        nivel: "facil",
        pergunta: "Um triângulo equilátero é sempre...",
        opcoes: ["Retângulo", "Obtusângulo", "Acutângulo", "Isósceles escaleno"],
        respostaCorreta: 2,
        explicacao: "Um triângulo equilátero tem 3 ângulos de 60° cada, todos menores que 90°, portanto é acutângulo.",
        variantes: [
          { pergunta: "Se um triângulo é equilátero, seus ângulos são todos..." },
          { pergunta: "Um triângulo com 3 lados iguais é sempre..." }
        ]
      },
      {
        id: 4,
        nivel: "medio",
        pergunta: "Um triângulo tem ângulos de 50° e 70°. O terceiro ângulo mede...",
        opcoes: ["50°", "60°", "70°", "100°"],
        respostaCorreta: 3,
        explicacao: "Se a soma é 180°, então 180° - 50° - 70° = 60°.",
        variantes: [
          { pergunta: "Se dois ângulos de um triângulo são 45° e 75°, qual é o terceiro?" },
          { pergunta: "Num triângulo, dois ângulos medem 40° e 80°. O terceiro é..." }
        ]
      },
      {
        id: 5,
        nivel: "medio",
        pergunta: "Qual é a desigualdade triangular?",
        opcoes: [
          "A soma de dois lados é menor que o terceiro",
          "A soma de dois lados é maior que o terceiro",
          "A soma de dois lados é igual ao terceiro",
          "Todos os lados têm comprimentos diferentes"
        ],
        respostaCorreta: 1,
        explicacao: "A desigualdade triangular estabelece que a soma de quaisquer dois lados deve ser maior que o terceiro lado.",
        variantes: [
          { pergunta: "Para que 3 segmentos formem um triângulo, qual condição devem cumprir?" },
          { pergunta: "Qual é a regra para verificar se 3 lados podem formar um triângulo?" }
        ]
      },
      {
        id: 6,
        nivel: "hard",
        pergunta: "Um triângulo pode ter dois ângulos obtusos?",
        opcoes: ["Sim, sempre", "Sim, às vezes", "Não, nunca", "Depende do tipo"],
        respostaCorreta: 2,
        explicacao: "Não. Se tivesse 2 ângulos obtusos (cada um > 90°), a soma seria > 180°, o que viola a propriedade fundamental.",
        variantes: [
          { pergunta: "É possível um triângulo ter dois ângulos retos?" },
          { pergunta: "Quantos ângulos obtusos pode ter um triângulo?" }
        ]
      }
    ]
  },

  // ==================== TEMA 4: CUBO E PARALELEPÍPEDO RETÂNGULO ====================
  {
    id: 4,
    nome: "Cubo e Paralelepípedo Retângulo",
    descricao: "Conhece os sólidos geométricos mais comuns: cubo e paralelepípedo.",
    icone: "🎲",
    conteudo: `
      <h2>Cubo e Paralelepípedo Retângulo</h2>

      <h3>1️⃣ CUBO</h3>

      <p><strong>Definição:</strong> Um cubo é um sólido geométrico que tem:</p>
      <ul>
        <li><strong>6 faces:</strong> Todas são quadrados iguais</li>
        <li><strong>12 arestas:</strong> Todas com a mesma medida</li>
        <li><strong>8 vértices:</strong> Pontos onde as arestas se encontram</li>
      </ul>

      <p><strong>Características especiais:</strong></p>
      <ul>
        <li>Todas as faces são quadradas</li>
        <li>Todas as arestas têm igual comprimento</li>
        <li>Todos os ângulos são ângulos retos (90°)</li>
        <li>É um caso especial do paralelepípedo retângulo</li>
      </ul>

      <p><strong>Exemplos de cubos:</strong> Um dado, uma caixa de presente cúbica, um cubo de gelo.</p>

      <h3>2️⃣ PARALELEPÍPEDO RETÂNGULO</h3>

      <p><strong>Definição:</strong> Um paralelepípedo retângulo é um sólido geométrico que tem:</p>
      <ul>
        <li><strong>6 faces:</strong> Todas são retângulos</li>
        <li><strong>12 arestas:</strong> Em grupos de 4 iguais (3 grupos)</li>
        <li><strong>8 vértices:</strong> Pontos onde as arestas se encontram</li>
      </ul>

      <p><strong>Características especiais:</strong></p>
      <ul>
        <li>As faces opostas são paralelas e iguais</li>
        <li>Todos os ângulos são retos (90°)</li>
        <li>Tem 3 dimensões: comprimento, largura e altura</li>
        <li>O cubo é um caso especial onde as 3 dimensões são iguais</li>
      </ul>

      <p><strong>Exemplos de paralelepípedos:</strong> Um livro, uma caixa de sapatos, um tijolo, um edifício retangular.</p>

      <h3>Diferenças Principais</h3>
      <table style="width:100%; border-collapse:collapse;">
        <tr style="background:#f0f0f0;">
          <th style="border:1px solid #ccc; padding:10px;">Propriedade</th>
          <th style="border:1px solid #ccc; padding:10px;">Cubo</th>
          <th style="border:1px solid #ccc; padding:10px;">Paralelepípedo</th>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Faces</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">6 quadrados iguais</td>
          <td style="border:1px solid #ccc; padding:10px;">6 retângulos</td>
        </tr>
        <tr style="background:#f9f9f9;">
          <td style="border:1px solid #ccc; padding:10px;"><strong>Arestas</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">12 iguais</td>
          <td style="border:1px solid #ccc; padding:10px;">12 (3 grupos de 4)</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Dimensões</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">Todas iguais (a = b = c)</td>
          <td style="border:1px solid #ccc; padding:10px;">Podem ser diferentes</td>
        </tr>
        <tr style="background:#f9f9f9;">
          <td style="border:1px solid #ccc; padding:10px;"><strong>Vértices</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">8</td>
          <td style="border:1px solid #ccc; padding:10px;">8</td>
        </tr>
      </table>

      <h3>Propriedade de Euler para Poliedros</h3>
      <p><strong>Fórmula:</strong> V - A + F = 2</p>
      <p>Onde: V = vértices, A = arestas, F = faces</p>
      <p><strong>Verificação para Cubo:</strong> 8 - 12 + 6 = 2 ✓</p>
      <p><strong>Verificação para Paralelepípedo:</strong> 8 - 12 + 6 = 2 ✓</p>
    `,
    questoes: [
      {
        id: 1,
        nivel: "facil",
        pergunta: "Um cubo tem quantas faces?",
        opcoes: ["4", "6", "8", "12"],
        respostaCorreta: 1,
        explicacao: "Um cubo tem 6 faces, e todas elas são quadrados iguais.",
        variantes: [
          { pergunta: "Quantas superfícies (faces) tem um cubo?" },
          { pergunta: "Um cubo é composto por quantos quadrados?" }
        ]
      },
      {
        id: 2,
        nivel: "facil",
        pergunta: "Um cubo tem quantas arestas?",
        opcoes: ["6", "8", "12", "24"],
        respostaCorreta: 2,
        explicacao: "Um cubo tem 12 arestas, e todas têm o mesmo comprimento.",
        variantes: [
          { pergunta: "Quantas linhas (arestas) tem um cubo?" },
          { pergunta: "Um cubo é composto por quantas arestas?" }
        ]
      },
      {
        id: 3,
        nivel: "facil",
        pergunta: "Um cubo tem quantos vértices?",
        opcoes: ["4", "6", "8", "12"],
        respostaCorreta: 2,
        explicacao: "Um cubo tem 8 vértices (cantos/pontos onde as arestas se encontram).",
        variantes: [
          { pergunta: "Quantos cantos (vértices) tem um cubo?" },
          { pergunta: "Um cubo possui quantos pontos de encontro de arestas?" }
        ]
      },
      {
        id: 4,
        nivel: "facil",
        pergunta: "Um paralelepípedo retângulo tem...",
        opcoes: ["6 faces quadradas", "8 faces", "6 faces retangulares", "12 vértices"],
        respostaCorreta: 2,
        explicacao: "Um paralelepípedo retângulo tem 6 faces que são retângulos (não necessariamente quadrados).",
        variantes: [
          { pergunta: "Qual é a forma das faces de um paralelepípedo retângulo?" },
          { pergunta: "Um paralelepípedo tem quantas faces?" }
        ]
      },
      {
        id: 5,
        nivel: "medio",
        pergunta: "Qual é a principal diferença entre um cubo e um paralelepípedo?",
        opcoes: [
          "O cubo tem 6 faces e o paralelepípedo tem 8",
          "No cubo todas as arestas são iguais; no paralelepípedo podem ser diferentes",
          "O cubo tem 8 vértices e o paralelepípedo tem 12",
          "O cubo é bidimensional e o paralelepípedo é tridimensional"
        ],
        respostaCorreta: 1,
        explicacao: "Um cubo é um caso especial do paralelepípedo onde todas as arestas têm a mesma medida (a = b = c).",
        variantes: [
          { pergunta: "Como se diferencia um cubo de um paralelepípedo?" },
          { pergunta: "O que torna o cubo especial comparado ao paralelepípedo?" }
        ]
      },
      {
        id: 6,
        nivel: "hard",
        pergunta: "Usando a fórmula de Euler (V - A + F = 2), um paralelepípedo cumpre...",
        opcoes: ["8 - 12 + 6 = 2", "8 - 12 + 6 = 5", "6 - 8 + 12 = 2", "12 - 8 + 6 = 10"],
        respostaCorreta: 0,
        explicacao: "Para um paralelepípedo: V=8 vértices, A=12 arestas, F=6 faces. Então 8 - 12 + 6 = 2 ✓",
        variantes: [
          { pergunta: "Qual é o resultado da fórmula de Euler para um cubo?" },
          { pergunta: "Se um poliedro tem 8 vértices, 12 arestas e 6 faces, cumpre a fórmula de Euler?" }
        ]
      }
    ]
  },

  // ==================== TEMA 5: PRISMAS ====================
  {
    id: 5,
    nome: "Prismas",
    descricao: "Aprende sobre prismas e seus diferentes tipos e propriedades.",
    icone: "📦",
    conteudo: `
      <h2>Prismas</h2>

      <p><strong>Definição:</strong> Um prisma é um sólido geométrico que tem:</p>
      <ul>
        <li><strong>2 bases iguais e paralelas</strong> (podem ser qualquer polígono)</li>
        <li><strong>Faces laterais:</strong> Retângulos que ligam os lados das bases</li>
        <li><strong>Arestas:</strong> Que ligam os vértices das duas bases</li>
      </ul>

      <p><strong>Características importantes:</strong></p>
      <ul>
        <li>As duas bases são paralelas e congruentes (idênticas)</li>
        <li>As faces laterais são retângulos</li>
        <li>O número de faces laterais = número de lados da base</li>
        <li>O nome do prisma depende da forma da base</li>
      </ul>

      <h3>Tipos de Prismas (conforme a base)</h3>

      <p><strong>1. Prisma Triangular</strong></p>
      <ul>
        <li><strong>Bases:</strong> 2 triângulos</li>
        <li><strong>Faces laterais:</strong> 3 retângulos</li>
        <li><strong>Total de faces:</strong> 5 (2 triângulos + 3 retângulos)</li>
        <li><strong>Arestas:</strong> 9 (3 da base superior + 3 da base inferior + 3 verticais)</li>
        <li><strong>Vértices:</strong> 6</li>
      </ul>

      <p><strong>2. Prisma Quadrangular</strong></p>
      <ul>
        <li><strong>Bases:</strong> 2 quadriláteros</li>
        <li><strong>Faces laterais:</strong> 4 retângulos</li>
        <li><strong>Total de faces:</strong> 6</li>
        <li><strong>Arestas:</strong> 12</li>
        <li><strong>Vértices:</strong> 8</li>
        <li><strong>Caso especial:</strong> Se as bases são quadrados, é um cubo!</li>
      </ul>

      <p><strong>3. Prisma Pentagonal</strong></p>
      <ul>
        <li><strong>Bases:</strong> 2 pentágonos (5 lados)</li>
        <li><strong>Faces laterais:</strong> 5 retângulos</li>
        <li><strong>Total de faces:</strong> 7</li>
        <li><strong>Arestas:</strong> 15</li>
        <li><strong>Vértices:</strong> 10</li>
      </ul>

      <p><strong>4. Prisma Hexagonal</strong></p>
      <ul>
        <li><strong>Bases:</strong> 2 hexágonos (6 lados)</li>
        <li><strong>Faces laterais:</strong> 6 retângulos</li>
        <li><strong>Total de faces:</strong> 8</li>
        <li><strong>Arestas:</strong> 18</li>
        <li><strong>Vértices:</strong> 12</li>
      </ul>

      <h3>Fórmula Geral para Prismas</h3>
      <p>Para um prisma com base de n lados:</p>
      <ul>
        <li><strong>Faces:</strong> n + 2</li>
        <li><strong>Arestas:</strong> 3n</li>
        <li><strong>Vértices:</strong> 2n</li>
      </ul>

      <h3>Exemplos Práticos</h3>
      <ul>
        <li><strong>Prisma triangular:</strong> Telhado de uma casa (vista lateral)</li>
        <li><strong>Prisma quadrangular:</strong> Caixa de sapatos, livro</li>
        <li><strong>Prisma hexagonal:</strong> Lápis comum</li>
      </ul>
    `,
    questoes: [
      {
        id: 1,
        nivel: "facil",
        pergunta: "Um prisma tem sempre...",
        opcoes: ["1 base", "2 bases iguais e paralelas", "3 bases", "Nenhuma base"],
        respostaCorreta: 1,
        explicacao: "Um prisma é definido por ter 2 bases iguais (congruentes) e paralelas.",
        variantes: [
          { pergunta: "Qual é uma característica fundamental de um prisma?" },
          { pergunta: "Quantas bases tem um prisma?" }
        ]
      },
      {
        id: 2,
        nivel: "facil",
        pergunta: "As faces laterais de um prisma são sempre...",
        opcoes: ["Triângulos", "Quadrados", "Retângulos", "Pentágonos"],
        respostaCorreta: 2,
        explicacao: "As faces laterais de um prisma conectam as bases e são sempre retângulos.",
        variantes: [
          { pergunta: "Que forma têm as faces laterais de um prisma?" },
          { pergunta: "Um prisma tem faces laterais..." }
        ]
      },
      {
        id: 3,
        nivel: "facil",
        pergunta: "Um prisma triangular tem quantas faces?",
        opcoes: ["3", "4", "5", "6"],
        respostaCorreta: 2,
        explicacao: "Um prisma triangular tem 2 bases triangulares + 3 faces laterais retangulares = 5 faces.",
        variantes: [
          { pergunta: "Um prisma com bases triangulares tem quantas faces no total?" },
          { pergunta: "Quantas superfícies (faces) tem um prisma triangular?" }
        ]
      },
      {
        id: 4,
        nivel: "facil",
        pergunta: "Um prisma quadrangular tem quantas arestas?",
        opcoes: ["4", "8", "12", "16"],
        respostaCorreta: 2,
        explicacao: "Um prisma quadrangular tem 4 arestas da base superior + 4 da base inferior + 4 arestas verticais = 12.",
        variantes: [
          { pergunta: "Quantas linhas (arestas) tem um prisma quadrangular?" },
          { pergunta: "Um prisma com bases quadriláteras tem quantas arestas?" }
        ]
      },
      {
        id: 5,
        nivel: "medio",
        pergunta: "Qual é a diferença entre um prisma triangular e um pentagonal?",
        opcoes: [
          "O pentagonal tem 3 faces",
          "O pentagonal tem mais arestas e vértices",
          "O triangular é menor",
          "Não há diferença estrutural"
        ],
        respostaCorreta: 1,
        explicacao: "Um prisma pentagonal tem base com 5 lados, resultando em mais faces laterais (5 em vez de 3), mais arestas e mais vértices.",
        variantes: [
          { pergunta: "Como se compara um prisma hexagonal a um prisma triangular?" },
          { pergunta: "O que torna um prisma pentagonal diferente de um triangular?" }
        ]
      },
      {
        id: 6,
        nivel: "hard",
        pergunta: "Um prisma hexagonal tem quantas arestas (usando a fórmula 3n)?",
        opcoes: ["12", "15", "18", "24"],
        respostaCorreta: 2,
        explicacao: "Para um hexágono (6 lados), usando a fórmula 3n: 3 × 6 = 18 arestas.",
        variantes: [
          { pergunta: "Se um prisma tem base de 8 lados, quantas arestas tem?" },
          { pergunta: "Usando a fórmula 3n, quantas arestas tem um prisma pentagonal?" }
        ]
      }
    ]
  },

  // ==================== TEMA 6: PIRÂMIDES ====================
  {
    id: 6,
    nome: "Pirâmides",
    descricao: "Descobre as características e propriedades das pirâmides.",
    icone: "△",
    conteudo: `
      <h2>Pirâmides</h2>

      <p><strong>Definição:</strong> Uma pirâmide é um sólido geométrico que tem:</p>
      <ul>
        <li><strong>1 base:</strong> Um polígono (pode ser qualquer polígono)</li>
        <li><strong>1 vértice:</strong> Um ponto (ápice) acima ou abaixo da base</li>
        <li><strong>Faces laterais:</strong> Triângulos que ligam os lados da base ao vértice</li>
      </ul>

      <p><strong>Características importantes:</strong></p>
      <ul>
        <li>Tem uma única base (diferente do prisma que tem 2)</li>
        <li>Todas as faces laterais são triângulos</li>
        <li>Todos os triângulos encontram-se num único ponto: o vértice (ápice)</li>
        <li>O nome depende da forma da base</li>
      </ul>

      <h3>Tipos de Pirâmides (conforme a base)</h3>

      <p><strong>1. Pirâmide Triangular</strong></p>
      <ul>
        <li><strong>Base:</strong> 1 triângulo</li>
        <li><strong>Faces laterais:</strong> 3 triângulos</li>
        <li><strong>Total de faces:</strong> 4 (1 base triangular + 3 laterais)</li>
        <li><strong>Arestas:</strong> 6 (3 da base + 3 para o vértice)</li>
        <li><strong>Vértices:</strong> 4</li>
        <li><strong>Nota especial:</strong> Também chamada tetraedro</li>
      </ul>

      <p><strong>2. Pirâmide Quadrangular</strong></p>
      <ul>
        <li><strong>Base:</strong> 1 quadrilátero</li>
        <li><strong>Faces laterais:</strong> 4 triângulos</li>
        <li><strong>Total de faces:</strong> 5</li>
        <li><strong>Arestas:</strong> 8</li>
        <li><strong>Vértices:</strong> 5</li>
        <li><strong>Exemplo famoso:</strong> As pirâmides do Egito</li>
      </ul>

      <p><strong>3. Pirâmide Pentagonal</strong></p>
      <ul>
        <li><strong>Base:</strong> 1 pentágono</li>
        <li><strong>Faces laterais:</strong> 5 triângulos</li>
        <li><strong>Total de faces:</strong> 6</li>
        <li><strong>Arestas:</strong> 10</li>
        <li><strong>Vértices:</strong> 6</li>
      </ul>

      <p><strong>4. Pirâmide Hexagonal</strong></p>
      <ul>
        <li><strong>Base:</strong> 1 hexágono</li>
        <li><strong>Faces laterais:</strong> 6 triângulos</li>
        <li><strong>Total de faces:</strong> 7</li>
        <li><strong>Arestas:</strong> 12</li>
        <li><strong>Vértices:</strong> 7</li>
      </ul>

      <h3>Fórmula Geral para Pirâmides</h3>
      <p>Para uma pirâmide com base de n lados:</p>
      <ul>
        <li><strong>Faces:</strong> n + 1</li>
        <li><strong>Arestas:</strong> 2n</li>
        <li><strong>Vértices:</strong> n + 1</li>
      </ul>

      <h3>Diferença Prisma vs. Pirâmide</h3>
      <table style="width:100%; border-collapse:collapse;">
        <tr style="background:#f0f0f0;">
          <th style="border:1px solid #ccc; padding:10px;">Característica</th>
          <th style="border:1px solid #ccc; padding:10px;">Prisma</th>
          <th style="border:1px solid #ccc; padding:10px;">Pirâmide</th>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Bases</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">2 (iguais e paralelas)</td>
          <td style="border:1px solid #ccc; padding:10px;">1</td>
        </tr>
        <tr style="background:#f9f9f9;">
          <td style="border:1px solid #ccc; padding:10px;"><strong>Faces laterais</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">Retângulos</td>
          <td style="border:1px solid #ccc; padding:10px;">Triângulos</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Vértices</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">2n</td>
          <td style="border:1px solid #ccc; padding:10px;">n + 1</td>
        </tr>
        <tr style="background:#f9f9f9;">
          <td style="border:1px solid #ccc; padding:10px;"><strong>Arestas</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">3n</td>
          <td style="border:1px solid #ccc; padding:10px;">2n</td>
        </tr>
      </table>

      <h3>Exemplos Práticos</h3>
      <ul>
        <li><strong>Pirâmide triangular:</strong> Tetraedro, alguns sinos</li>
        <li><strong>Pirâmide quadrangular:</strong> Pirâmides do Egito</li>
        <li><strong>Pirâmide hexagonal:</strong> Algumas lanternas</li>
      </ul>
    `,
    questoes: [
      {
        id: 1,
        nivel: "facil",
        pergunta: "Uma pirâmide tem sempre...",
        opcoes: ["2 bases", "1 base e 1 vértice", "3 bases", "Nenhuma base"],
        respostaCorreta: 1,
        explicacao: "Uma pirâmide tem 1 base (qualquer polígono) e 1 vértice (ponto) no topo.",
        variantes: [
          { pergunta: "Qual é uma característica fundamental de uma pirâmide?" },
          { pergunta: "Quantas bases tem uma pirâmide?" }
        ]
      },
      {
        id: 2,
        nivel: "facil",
        pergunta: "As faces laterais de uma pirâmide são sempre...",
        opcoes: ["Quadrados", "Retângulos", "Triângulos", "Pentágonos"],
        respostaCorreta: 2,
        explicacao: "As faces laterais de uma pirâmide são sempre triângulos que encontram no vértice superior.",
        variantes: [
          { pergunta: "Que forma têm as faces laterais de uma pirâmide?" },
          { pergunta: "Uma pirâmide tem faces laterais..." }
        ]
      },
      {
        id: 3,
        nivel: "facil",
        pergunta: "Uma pirâmide triangular tem quantas faces?",
        opcoes: ["3", "4", "5", "6"],
        respostaCorreta: 1,
        explicacao: "Uma pirâmide triangular tem 1 base triangular + 3 faces laterais triangulares = 4 faces.",
        variantes: [
          { pergunta: "Uma pirâmide com base triangular tem quantas faces?" },
          { pergunta: "Quantas superfícies (faces) tem uma pirâmide triangular?" }
        ]
      },
      {
        id: 4,
        nivel: "facil",
        pergunta: "Uma pirâmide quadrangular tem quantas arestas?",
        opcoes: ["4", "6", "8", "12"],
        respostaCorreta: 2,
        explicacao: "Uma pirâmide quadrangular tem 4 arestas da base + 4 arestas laterais para o vértice = 8.",
        variantes: [
          { pergunta: "Uma pirâmide com base quadrilateral tem quantas arestas?" },
          { pergunta: "Quantas linhas (arestas) tem uma pirâmide quadrangular?" }
        ]
      },
      {
        id: 5,
        nivel: "medio",
        pergunta: "Qual é a principal diferença entre um prisma e uma pirâmide?",
        opcoes: [
          "O prisma tem 2 bases; a pirâmide tem 1",
          "A pirâmide é mais pequena",
          "O prisma tem faces triangulares",
          "Não há diferença"
        ],
        respostaCorreta: 0,
        explicacao: "A diferença principal: prisma tem 2 bases iguais e faces retangulares; pirâmide tem 1 base e faces triangulares.",
        variantes: [
          { pergunta: "Como se diferencia um prisma de uma pirâmide?" },
          { pergunta: "O que torna uma pirâmide diferente de um prisma?" }
        ]
      },
      {
        id: 6,
        nivel: "hard",
        pergunta: "Uma pirâmide com base hexagonal tem quantas arestas (usando 2n)?",
        opcoes: ["6", "12", "18", "24"],
        respostaCorreta: 1,
        explicacao: "Para uma base hexagonal (6 lados), usando a fórmula 2n: 2 × 6 = 12 arestas.",
        variantes: [
          { pergunta: "Se uma pirâmide tem base pentagonal, quantas arestas tem?" },
          { pergunta: "Usando a fórmula 2n, quantas arestas tem uma pirâmide com base de 7 lados?" }
        ]
      }
    ]
  }
];

// Continuação no próximo fragmento...
console.log('Dados carregados: ' + TEMAS.length + ' temas');

// ==================== TEMA 7: CILINDRO ====================
const tema7 = {
  id: 7,
  nome: "Cilindro",
  descricao: "Conhece o cilindro: um sólido de revolução com 2 bases circulares.",
  icone: "🥫",
  conteudo: `
    <h2>Cilindro</h2>

    <p><strong>Definição:</strong> Um cilindro é um sólido geométrico que tem:</p>
    <ul>
      <li><strong>2 bases circulares:</strong> Iguais e paralelas</li>
      <li><strong>1 superfície lateral:</strong> Curva que conecta as duas bases</li>
      <li><strong>Uma altura:</strong> Distância perpendicular entre as bases</li>
    </ul>

    <p><strong>Características especiais:</strong></p>
    <ul>
      <li>As duas bases são círculos iguais</li>
      <li>A superfície lateral é curva</li>
      <li>É formado pela rotação de um retângulo</li>
      <li>Tem um eixo de simetria (a linha que liga os centros das bases)</li>
    </ul>

    <h3>Elementos do Cilindro</h3>
    <ul>
      <li><strong>Raio (r):</strong> Distância do centro ao contorno de uma base</li>
      <li><strong>Diâmetro (d):</strong> Dobro do raio (d = 2r)</li>
      <li><strong>Altura (h):</strong> Distância entre as duas bases</li>
      <li><strong>Geratriz:</strong> Qualquer segmento da superfície lateral paralelo ao eixo</li>
    </ul>

    <h3>Como o Cilindro é Formado</h3>
    <p>Se rodarmos um retângulo em torno de um dos seus lados, criamos um cilindro:</p>
    <ul>
      <li>O lado em torno do qual rodamos torna-se o <strong>eixo</strong></li>
      <li>O lado oposto traça a <strong>superfície lateral</strong></li>
      <li>Os outros dois lados criam os <strong>círculos das bases</strong></li>
    </ul>

    <h3>Exemplos Práticos de Cilindros</h3>
    <ul>
      <li>Uma lata de refrigerante</li>
      <li>Um rolo de papel higiénico</li>
      <li>Um copo cilíndrico</li>
      <li>Um tubo de cola</li>
      <li>Uma vela cilíndrica</li>
    </ul>

    <h3>Diferença do Cilindro para outros Sólidos</h3>
    <p>Ao contrário dos poliedros (cubo, prisma, pirâmide):</p>
    <ul>
      <li>Tem <strong>superfícies curvas</strong>, não planas</li>
      <li><strong>Não tem arestas</strong> (as linhas onde as superfícies se encontram não são retas)</li>
      <li><strong>Não tem vértices</strong> (cantos angulosos)</li>
    </ul>
  `,
  questoes: [
    {
      id: 1,
      nivel: "facil",
      pergunta: "Um cilindro tem quantas bases?",
      opcoes: ["1", "2", "3", "Nenhuma"],
      respostaCorreta: 1,
      explicacao: "Um cilindro tem 2 bases circulares iguais e paralelas.",
      variantes: [
        { pergunta: "Qual é o número de bases de um cilindro?" },
        { pergunta: "Um cilindro é composto por quantos círculos?" }
      ]
    },
    {
      id: 2,
      nivel: "facil",
      pergunta: "As bases de um cilindro são sempre...",
      opcoes: ["Quadradas", "Retangulares", "Circulares", "Triangulares"],
      respostaCorreta: 2,
      explicacao: "As bases de um cilindro são círculos iguais.",
      variantes: [
        { pergunta: "Que forma têm as bases de um cilindro?" },
        { pergunta: "Um cilindro tem bases..." }
      ]
    },
    {
      id: 3,
      nivel: "facil",
      pergunta: "Um cilindro é formado pela rotação de um...",
      opcoes: ["Triângulo", "Retângulo", "Círculo", "Quadrado"],
      respostaCorreta: 1,
      explicacao: "Quando um retângulo roda em torno de um dos seus lados, cria um cilindro.",
      variantes: [
        { pergunta: "Qual figura geométrica, ao rodar, cria um cilindro?" },
        { pergunta: "Se girarmos um retângulo em torno de um lado, obtemos..." }
      ]
    }
  ]
};

// ==================== TEMA 8: CONE ====================
const tema8 = {
  id: 8,
  nome: "Cone",
  descricao: "Descobre o cone: um sólido de revolução com 1 base circular e 1 vértice.",
  icone: "🍦",
  conteudo: `
    <h2>Cone</h2>

    <p><strong>Definição:</strong> Um cone é um sólido geométrico que tem:</p>
    <ul>
      <li><strong>1 base circular:</strong> Na base do sólido</li>
      <li><strong>1 vértice:</strong> Um ponto (ápice) no topo</li>
      <li><strong>1 superfície lateral:</strong> Curva que conecta a base ao vértice</li>
    </ul>

    <p><strong>Características especiais:</strong></p>
    <ul>
      <li>Tem 1 base circular (diferente do cilindro que tem 2)</li>
      <li>A superfície lateral é curva</li>
      <li>É formado pela rotação de um triângulo retângulo</li>
      <li>Tem um vértice bem definido (ápice)</li>
    </ul>

    <h3>Elementos do Cone</h3>
    <ul>
      <li><strong>Raio (r):</strong> Distância do centro da base ao contorno</li>
      <li><strong>Altura (h):</strong> Distância perpendicular da base ao vértice</li>
      <li><strong>Geratriz (g):</strong> Qualquer segmento da superfície lateral do vértice ao contorno da base</li>
      <li><strong>Eixo:</strong> Linha que passa pelo vértice e pelo centro da base</li>
    </ul>

    <h3>Como o Cone é Formado</h3>
    <p>Se rodarmos um triângulo retângulo em torno de um dos seus catetos, criamos um cone:</p>
    <ul>
      <li>O cateto em torno do qual rodamos torna-se o <strong>eixo</strong> e corresponde à altura</li>
      <li>O outro cateto traça a <strong>base circular</strong></li>
      <li>A hipotenusa descreve a <strong>superfície lateral</strong> (geratriz)</li>
    </ul>

    <h3>Exemplos Práticos de Cones</h3>
    <ul>
      <li>Um cone de trânsito</li>
      <li>Um cone de gelado</li>
      <li>Uma vela cônica</li>
      <li>Um chapéu de festa em forma de cone</li>
      <li>Um funil</li>
    </ul>

    <h3>Diferença: Cone vs. Cilindro</h3>
    <table style="width:100%; border-collapse:collapse;">
      <tr style="background:#f0f0f0;">
        <th style="border:1px solid #ccc; padding:10px;">Aspecto</th>
        <th style="border:1px solid #ccc; padding:10px;">Cilindro</th>
        <th style="border:1px solid #ccc; padding:10px;">Cone</th>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:10px;"><strong>Bases</strong></td>
        <td style="border:1px solid #ccc; padding:10px;">2 círculos iguais</td>
        <td style="border:1px solid #ccc; padding:10px;">1 círculo</td>
      </tr>
      <tr style="background:#f9f9f9;">
        <td style="border:1px solid #ccc; padding:10px;"><strong>Vértice</strong></td>
        <td style="border:1px solid #ccc; padding:10px;">Nenhum</td>
        <td style="border:1px solid #ccc; padding:10px;">1 (ápice)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:10px;"><strong>Superfície lateral</strong></td>
        <td style="border:1px solid #ccc; padding:10px;">Cilíndrica (reta)</td>
        <td style="border:1px solid #ccc; padding:10px;">Cônica (inclinada)</td>
      </tr>
    </table>
  `,
  questoes: [
    {
      id: 1,
      nivel: "facil",
      pergunta: "Um cone tem quantas bases?",
      opcoes: ["0", "1", "2", "3"],
      respostaCorreta: 1,
      explicacao: "Um cone tem apenas 1 base circular, localizada na base do sólido.",
      variantes: [
        { pergunta: "Qual é o número de bases de um cone?" },
        { pergunta: "Quantos círculos tem um cone?" }
      ]
    },
    {
      id: 2,
      nivel: "facil",
      pergunta: "Um cone tem sempre um...",
      opcoes: ["Cilindro", "Vértice (ápice)", "Paralelepípedo", "Prisma"],
      respostaCorreta: 1,
      explicacao: "Um cone tem um vértice (ponto) no topo, chamado ápice.",
      variantes: [
        { pergunta: "Qual é a característica especial no topo de um cone?" },
        { pergunta: "Um cone termina num..." }
      ]
    },
    {
      id: 3,
      nivel: "facil",
      pergunta: "Um cone é formado pela rotação de um...",
      opcoes: ["Círculo", "Quadrado", "Triângulo retângulo", "Retângulo"],
      respostaCorreta: 2,
      explicacao: "Quando um triângulo retângulo roda em torno de um dos seus catetos, cria um cone.",
      variantes: [
        { pergunta: "Qual figura geométrica, ao rodar, cria um cone?" },
        { pergunta: "Se girarmos um triângulo retângulo, obtemos..." }
      ]
    }
  ]
};

// ==================== TEMA 9: ESFERA ====================
const tema9 = {
  id: 9,
  nome: "Esfera",
  descricao: "Aprende sobre a esfera: um sólido de revolução perfeito e simétrico.",
  icone: "⚽",
  conteudo: `
    <h2>Esfera</h2>

    <p><strong>Definição:</strong> Uma esfera é um sólido geométrico que:</p>
    <ul>
      <li><strong>Não tem faces planas:</strong> É totalmente curva</li>
      <li><strong>Não tem bases:</strong> Ao contrário de cilindro e cone</li>
      <li><strong>Tem um centro:</strong> Ponto equidistante de todos os pontos da superfície</li>
      <li><strong>Tem um raio:</strong> Distância do centro a qualquer ponto da superfície</li>
    </ul>

    <p><strong>Características especiais:</strong></p>
    <ul>
      <li>É perfeitamente simétrica em todas as direções</li>
      <li>Todos os pontos da sua superfície estão à mesma distância do centro</li>
      <li>É formada pela rotação de um semicírculo em torno do seu diâmetro</li>
      <li>É o único sólido que rola perfeitamente em qualquer direção</li>
    </ul>

    <h3>Elementos da Esfera</h3>
    <ul>
      <li><strong>Centro:</strong> O ponto central da esfera</li>
      <li><strong>Raio (r):</strong> Distância do centro a qualquer ponto da superfície</li>
      <li><strong>Diâmetro (d):</strong> Distância através da esfera passando pelo centro (d = 2r)</li>
      <li><strong>Circunferência máxima:</strong> A maior circunferência que pode ser traçada (passa pelo diâmetro)</li>
    </ul>

    <h3>Como a Esfera é Formada</h3>
    <p>Se rodarmos um semicírculo em torno do seu diâmetro, criamos uma esfera:</p>
    <ul>
      <li>O diâmetro torna-se o eixo de rotação</li>
      <li>A curva semicircular descreve a superfície esférica</li>
    </ul>

    <h3>Exemplos Práticos de Esferas</h3>
    <ul>
      <li>Uma bola de futebol</li>
      <li>Uma bola de ténis</li>
      <li>Um globo terrestre</li>
      <li>A Terra (aproximadamente)</li>
      <li>A Lua (aproximadamente)</li>
      <li>Uma bola de bilhar</li>
    </ul>

    <h3>Diferença: Esfera vs. Outros Sólidos</h3>
    <p>A esfera é única porque:</p>
    <ul>
      <li><strong>Não tem arestas:</strong> Diferente de poliedros</li>
      <li><strong>Não tem vértices:</strong> Nenhum ponto angular</li>
      <li><strong>Não tem bases:</strong> Diferente de cilindro e cone</li>
      <li><strong>Tem simetria perfeita:</strong> Em todas as direções</li>
    </ul>

    <h3>Propriedade Importante</h3>
    <p><strong>Circunferência máxima:</strong> A "cintura" de uma esfera (maior circunferência) tem comprimento = 2πr</p>
  `,
  questoes: [
    {
      id: 1,
      nivel: "facil",
      pergunta: "Uma esfera tem quantas bases?",
      opcoes: ["1", "2", "0", "Múltiplas"],
      respostaCorreta: 2,
      explicacao: "Uma esfera não tem bases, ao contrário do cilindro e do cone.",
      variantes: [
        { pergunta: "Qual é o número de bases de uma esfera?" },
        { pergunta: "Uma esfera tem..." }
      ]
    },
    {
      id: 2,
      nivel: "facil",
      pergunta: "Uma esfera é formada pela rotação de um...",
      opcoes: ["Círculo", "Semicírculo", "Triângulo", "Retângulo"],
      respostaCorreta: 1,
      explicacao: "Quando um semicírculo roda em torno do seu diâmetro, cria uma esfera.",
      variantes: [
        { pergunta: "Qual figura geométrica, ao rodar, cria uma esfera?" },
        { pergunta: "Se girarmos um semicírculo em torno do diâmetro, obtemos..." }
      ]
    },
    {
      id: 3,
      nivel: "facil",
      pergunta: "Todos os pontos da superfície de uma esfera estão à mesma distância do...",
      opcoes: ["Raio", "Diâmetro", "Centro", "Circunferência"],
      respostaCorreta: 2,
      explicacao: "Por definição, o centro é o ponto equidistante de todos os pontos da superfície.",
      variantes: [
        { pergunta: "Como se chama a distância igual de todos os pontos da esfera?" },
        { pergunta: "O que define a esfera como o ponto central?" }
      ]
    }
  ]
};

// Adicionar temas ao array
TEMAS.push(tema7, tema8, tema9);

console.log('Temas 7-9 adicionados. Total: ' + TEMAS.length);

// ==================== TEMAS 10-15 SIMPLIFICADOS ====================
// Por questões de espaço, os temas 10-15 têm estrutura mais concisa

TEMAS.push(
  // TEMA 10: Arestas, Vértices e Faces
  {
    id: 10,
    nome: "Arestas, Vértices e Faces",
    descricao: "Compreende os elementos fundamentais dos poliedros.",
    icone: "📊",
    conteudo: `<h2>Arestas, Vértices e Faces</h2>
      <p><strong>Três elementos fundamentais de um poliedro:</strong></p>
      <h3>1️⃣ Faces (F)</h3>
      <p>Superfícies planas que formam o poliedro. Exemplo: um cubo tem 6 faces quadradas.</p>
      <h3>2️⃣ Arestas (A)</h3>
      <p>Linhas retas onde duas faces se encontram. Exemplo: um cubo tem 12 arestas.</p>
      <h3>3️⃣ Vértices (V)</h3>
      <p>Pontos onde três ou mais arestas se encontram. Exemplo: um cubo tem 8 vértices.</p>
      <h3>Fórmula de Euler</h3>
      <p><strong>V - A + F = 2</strong> (para qualquer poliedro)</p>`,
    questoes: [
      { id: 1, nivel: "facil", pergunta: "Um vértice é...", opcoes: ["Uma aresta", "Uma face", "Um ponto de encontro", "Uma linha"], respostaCorreta: 2, explicacao: "Um vértice é um ponto onde 3 ou mais arestas se encontram.", variantes: [{ pergunta: "Como se chama um canto de um poliedro?" }] },
      { id: 2, nivel: "facil", pergunta: "Uma aresta é...", opcoes: ["Uma superfície", "Uma linha", "Um ponto", "Um ângulo"], respostaCorreta: 1, explicacao: "Uma aresta é a linha reta onde duas faces se encontram.", variantes: [{ pergunta: "Como se chama a linha de encontro de duas faces?" }] },
      { id: 3, nivel: "medio", pergunta: "Um cubo tem 8 vértices, 12 arestas. Quantas faces?", opcoes: ["4", "6", "8", "12"], respostaCorreta: 1, explicacao: "Usando V - A + F = 2: 8 - 12 + F = 2, então F = 6.", variantes: [{ pergunta: "Usando a fórmula de Euler, calcule as faces." }] }
    ]
  },

  // TEMA 11: Planificações de Sólidos
  {
    id: 11,
    nome: "Planificações de Sólidos",
    descricao: "Aprende a visualizar sólidos 3D em representação 2D.",
    icone: "📄",
    conteudo: `<h2>Planificações (Nets) de Sólidos</h2>
      <p><strong>Planificação:</strong> Representação em 2D (plana) de um sólido 3D.</p>
      <p>Quando "desdobramos" um sólido, vemos todas as faces num desenho plano.</p>
      <h3>Exemplos:</h3>
      <ul>
        <li><strong>Cubo:</strong> Forma de cruz com 6 quadrados</li>
        <li><strong>Cilindro:</strong> 2 círculos + 1 retângulo</li>
        <li><strong>Cone:</strong> 1 círculo + 1 setor circular</li>
        <li><strong>Pirâmide:</strong> 1 base + faces triangulares</li>
      </ul>`,
    questoes: [
      { id: 1, nivel: "facil", pergunta: "Uma planificação é...", opcoes: ["Um desenho 3D", "Um desenho 2D de um sólido aberto", "Um modelo real", "Uma fotografia"], respostaCorreta: 1, explicacao: "Planificação é a representação 2D (plana) de um sólido 3D aberto.", variantes: [{ pergunta: "Como se chama o desenho plano de um sólido desdobrado?" }] },
      { id: 2, nivel: "medio", pergunta: "Um cubo, quando planificado, tem...", opcoes: ["4 quadrados", "6 quadrados", "8 quadrados", "12 quadrados"], respostaCorreta: 1, explicacao: "Um cubo tem 6 faces, todas quadradas. Quando planificado, vemos 6 quadrados.", variantes: [{ pergunta: "Quantos quadrados tem a planificação de um cubo?" }] }
    ]
  },

  // TEMA 12: Correspondência 3D-2D
  {
    id: 12,
    nome: "Correspondência entre Sólido 3D e Planificação 2D",
    descricao: "Aprende a reconhecer sólidos a partir das suas planificações.",
    icone: "🔄",
    conteudo: `<h2>Correspondência entre 3D e 2D</h2>
      <p>É importante conseguir visualizar como uma planificação (2D) se transforma num sólido (3D).</p>
      <h3>Dicas para reconhecer sólidos:</h3>
      <ul>
        <li>Conta quantas faces tem a planificação</li>
        <li>Observa a forma das faces</li>
        <li>Visualiza como as faces se dobram e encontram</li>
        <li>Compara com sólidos que já conheces</li>
      </ul>`,
    questoes: [
      { id: 1, nivel: "medio", pergunta: "Uma planificação com 2 círculos e 1 retângulo forma um...", opcoes: ["Cone", "Cilindro", "Esfera", "Prisma"], respostaCorreta: 1, explicacao: "Um cilindro tem 2 bases circulares e 1 superfície lateral retangular.", variantes: [{ pergunta: "Que sólido é formado por 2 círculos e 1 retângulo?" }] }
    ]
  },

  // TEMA 13: Identificação de Sólidos em Contexto Real
  {
    id: 13,
    nome: "Identificação de Sólidos em Contexto Real",
    descricao: "Reconhece sólidos geométricos em objetos do dia a dia.",
    icone: "🏢",
    conteudo: `<h2>Sólidos Geométricos no Dia a Dia</h2>
      <p>Os sólidos geométricos aparecem em muitos objetos à nossa volta:</p>
      <h3>Exemplos:</h3>
      <ul>
        <li><strong>Cubo/Paralelepípedo:</strong> Caixas, edifícios, livros</li>
        <li><strong>Cilindro:</strong> Latas, copos, tubagens</li>
        <li><strong>Cone:</strong> Cones de trânsito, gelados, chapéus de festa</li>
        <li><strong>Esfera:</strong> Bolas, globo terrestre, frutos</li>
        <li><strong>Prisma:</strong> Lápis, toblerone, telhados</li>
        <li><strong>Pirâmide:</strong> Pirâmides do Egito, alguns edifícios modernos</li>
      </ul>`,
    questoes: [
      { id: 1, nivel: "facil", pergunta: "Uma lata de refrigerante tem a forma de...", opcoes: ["Cubo", "Cilindro", "Cone", "Esfera"], respostaCorreta: 1, explicacao: "Uma lata cilíndrica tem 2 bases circulares e uma superfície lateral curva.", variantes: [{ pergunta: "Que sólido geométrico descreve uma lata?" }] }
    ]
  },

  // TEMA 14: Comparação e Classificação de Sólidos
  {
    id: 14,
    nome: "Comparação e Classificação de Sólidos",
    descricao: "Aprende as diferenças entre tipos de sólidos geométricos.",
    icone: "⚖️",
    conteudo: `<h2>Comparação e Classificação de Sólidos</h2>
      <h3>Poliedros vs. Não-poliedros</h3>
      <p><strong>Poliedros:</strong> Sólidos com faces planas (cubo, prisma, pirâmide)</p>
      <p><strong>Não-poliedros:</strong> Sólidos com superfícies curvas (cilindro, cone, esfera)</p>
      <h3>Características importantes:</h3>
      <ul>
        <li>Poliedros têm arestas retas e vértices pontiagudos</li>
        <li>Não-poliedros têm superfícies curvas</li>
        <li>Cada grupo tem propriedades únicas</li>
      </ul>`,
    questoes: [
      { id: 1, nivel: "medio", pergunta: "Uma esfera é um...", opcoes: ["Poliedro", "Não-poliedro", "Prisma", "Pirâmide"], respostaCorreta: 1, explicacao: "Uma esfera é um não-poliedro porque tem uma superfície curva contínua, sem faces planas.", variantes: [{ pergunta: "É uma esfera um poliedro?" }] }
    ]
  },

  // TEMA 15: Problemas Práticos com Sólidos Geométricos
  {
    id: 15,
    nome: "Problemas Práticos com Sólidos",
    descricao: "Resolve problemas aplicando conhecimentos sobre sólidos geométricos.",
    icone: "🧩",
    conteudo: `<h2>Problemas Práticos com Sólidos Geométricos</h2>
      <p>Os sólidos geométricos são usados em muitas situações práticas:</p>
      <h3>Exemplos de aplicação:</h3>
      <ul>
        <li><strong>Embalagem:</strong> Calcular quanto espaço uma caixa (paralelepípedo) ocupa</li>
        <li><strong>Construção:</strong> Entender a estabilidade de estruturas (pirâmides, cones)</li>
        <li><strong>Recipientes:</strong> Calcular capacidade (cilindros, cones, esferas)</li>
        <li><strong>Desporto:</strong> Compreender propriedades de bolas (esferas)</li>
      </ul>`,
    questoes: [
      { id: 1, nivel: "hard", pergunta: "Qual sólido oferece mais estabilidade como base para uma construção?", opcoes: ["Cone", "Esfera", "Cubo/Paralelepípedo", "Cilindro"], respostaCorreta: 2, explicacao: "Um cubo ou paralelepípedo oferece máxima estabilidade por ter uma base plana e larga.", variantes: [{ pergunta: "Que propriedade torna um sólido adequado para estruturas?" }] }
    ]
  }
);

console.log('✅ Todos os ' + TEMAS.length + ' temas carregados com sucesso!');

// Configurações de jogo
const GAME_CONFIG = {
  vidas_iniciais: 3,
  gems_facil: 10,
  gems_medio: 20,
  gems_hard: 30,
  gems_pro: 50,
  gems_bonus_tema_perfeito: 100,
  questoes_corretas_para_vida_extra: 5,
  max_tentativas_questao: 3,
  porcentagem_desbloqueio_proximo_nivel: 70,
  idioma: 'pt-PT'
};

console.log('Configurações do jogo carregadas.');
