/* ============================================================
   content.js — Conteúdo pedagógico por tema
   Base: MSI 5 Parte 2 (Areal Editores)
   Cada tema: id, name, icon, intro, sections[]
   ============================================================ */
(function () {
  "use strict";

  const TEMAS = [
    /* =====================================================
       T1 — Triângulos
       Pág. 9 do livro (Areal). Classificação por lados e por
       ângulos + tarefa Marta (equilátero ⇒ isósceles)
       ===================================================== */
    {
      id: "t1",
      name: "Triângulos",
      icon: "🔺",
      paginas: "Pág. 9",
      intro: `<p>Um <strong>triângulo</strong> é um polígono com <strong>3 lados, 3 vértices e 3 ângulos</strong>.</p>
              <p>Os triângulos podem ser <em>classificados de duas maneiras</em>: pelos seus <strong>lados</strong> e pelos seus <strong>ângulos</strong>. Vamos aprender as duas!</p>`,
      sections: [
        {
          title: "🔹 Vértices, lados e ângulos",
          body: `<p>Quando temos um triângulo chamado <strong>[ABC]</strong>:</p>
                 <ul>
                   <li>Os <strong>vértices</strong> são os pontos: A, B e C.</li>
                   <li>Os <strong>lados</strong> são os segmentos de reta: [AB], [BC] e [AC].</li>
                   <li>Os <strong>ângulos internos</strong> são: ângulo CBA, ângulo ACB e ângulo BAC.</li>
                 </ul>
                 <div class="nota">💡 <strong>Curiosidade:</strong> A soma dos três ângulos internos de qualquer triângulo é sempre 180°.</div>`,
          svg: `<svg class="content-svg" viewBox="0 0 200 140" width="240" height="170" aria-hidden="true">
                  <polygon points="40,120 160,120 110,30" fill="#ffd83d" stroke="#1f2347" stroke-width="2"/>
                  <text x="32" y="135" fill="#f4f5ff" font-size="14" font-weight="700">A</text>
                  <text x="160" y="135" fill="#f4f5ff" font-size="14" font-weight="700">B</text>
                  <text x="104" y="22" fill="#f4f5ff" font-size="14" font-weight="700">C</text>
                </svg>`
        },
        {
          title: "📏 Classificação pelos LADOS",
          body: `<p>Olhando para o comprimento dos lados, há <strong>3 tipos</strong>:</p>

                 <div class="highlight">
                   <h4>1️⃣ Triângulo Equilátero</h4>
                   <p>Tem os <strong>3 lados com o mesmo comprimento</strong>.</p>
                   <p>Os 3 ângulos internos também são iguais (60° cada).</p>
                   <p><em>Exemplo:</em> lados de 5 cm, 5 cm e 5 cm.</p>
                 </div>

                 <div class="highlight">
                   <h4>2️⃣ Triângulo Isósceles</h4>
                   <p>Tem <strong>pelo menos dois lados com o mesmo comprimento</strong>.</p>
                   <p><em>Exemplo:</em> lados de 5 cm, 5 cm e 3 cm.</p>
                 </div>

                 <div class="highlight">
                   <h4>3️⃣ Triângulo Escaleno</h4>
                   <p>Tem os <strong>3 lados todos diferentes</strong>.</p>
                   <p><em>Exemplo:</em> lados de 3 cm, 4 cm e 5 cm.</p>
                 </div>

                 <div class="cuidado">⚠️ <strong>Atenção, pegadinha do livro!</strong>
                 A definição diz "pelo menos 2 lados iguais" no isósceles. Isto significa que <strong>todo o triângulo equilátero (3 lados iguais) é também isósceles</strong> — afinal, se tem 3 iguais, também tem 2 iguais! É a famosa pergunta da Marta na pág. 9.</div>`
        },
        {
          title: "📐 Classificação pelos ÂNGULOS",
          body: `<p>Olhando para a amplitude dos ângulos, também há <strong>3 tipos</strong>:</p>

                 <div class="highlight">
                   <h4>1️⃣ Triângulo Retângulo</h4>
                   <p>Tem <strong>um ângulo reto (90°)</strong>. Os outros dois ângulos são agudos.</p>
                   <p>É o triângulo que parece ter um "L" num dos cantos.</p>
                 </div>

                 <div class="highlight">
                   <h4>2️⃣ Triângulo Acutângulo</h4>
                   <p><strong>Todos os ângulos são agudos</strong> (menores que 90°).</p>
                 </div>

                 <div class="highlight">
                   <h4>3️⃣ Triângulo Obtusângulo</h4>
                   <p>Tem <strong>um ângulo obtuso</strong> (maior que 90° e menor que 180°).</p>
                 </div>

                 <div class="nota">🧠 <strong>Truque para lembrar:</strong>
                 <ul>
                   <li><strong>A</strong>cutângulo → todos os ângulos são <strong>A</strong>gudos.</li>
                   <li><strong>O</strong>btusângulo → tem um ângulo <strong>O</strong>btuso.</li>
                   <li>Retângulo → tem um ângulo <strong>R</strong>eto.</li>
                 </ul></div>`
        },
        {
          title: "🤝 Combinar as duas classificações",
          body: `<p>Um triângulo tem sempre <strong>dois nomes</strong> ao mesmo tempo: um pelos lados e outro pelos ângulos.</p>
                 <p><em>Exemplo:</em> um triângulo com lados 5 cm, 5 cm e 3 cm e um ângulo reto chama-se <strong>isósceles retângulo</strong>.</p>
                 <div class="nota">A resposta correta à pergunta da Marta no livro é <strong>SIM, concordo</strong>: um triângulo pode ser equilátero <em>e</em> isósceles ao mesmo tempo — porque ter "3 lados iguais" também significa ter "pelo menos 2 iguais".</div>`
        }
      ]
    },

    /* =====================================================
       T2 — Sólidos Geométricos (identificação)
       Pág. 56-58
       ===================================================== */
    {
      id: "t2",
      name: "Sólidos Geométricos",
      icon: "🧊",
      paginas: "Pág. 56-58",
      intro: `<p>Os <strong>sólidos geométricos</strong> são figuras a três dimensões (3D): têm comprimento, largura e altura. Vamos conhecer os principais!</p>`,
      sections: [
        {
          title: "📦 Os 7 sólidos básicos",
          body: `<p>O livro apresenta-te <strong>7 sólidos</strong> que tens de saber identificar:</p>
                 <table class="content-table">
                   <thead><tr><th>Sólido</th><th>Descrição</th><th>Exemplo no dia-a-dia</th></tr></thead>
                   <tbody>
                     <tr><td><strong>Paralelepípedo retângulo</strong></td><td>Como uma caixa de sapatos, com 6 faces retangulares.</td><td>Caixa de cereais, livro, tijolo</td></tr>
                     <tr><td><strong>Cubo</strong></td><td>Como um dado: 6 faces todas iguais (quadradas).</td><td>Dado, cubo de Rubik</td></tr>
                     <tr><td><strong>Prisma</strong></td><td>Duas bases iguais e paralelas, com faces laterais a uni-las.</td><td>Caixa em forma de prisma, Toblerone (prisma triangular)</td></tr>
                     <tr><td><strong>Pirâmide</strong></td><td>Uma base poligonal e faces laterais triangulares que se juntam num vértice no topo.</td><td>Pirâmides do Egito, chapéu de festa pontiagudo</td></tr>
                     <tr><td><strong>Cilindro</strong></td><td>Duas bases circulares unidas por uma superfície curva.</td><td>Lata de refrigerante, pilha</td></tr>
                     <tr><td><strong>Cone</strong></td><td>Uma base circular e uma superfície curva que termina num vértice.</td><td>Cone de sinalização de trânsito, casquinha de gelado</td></tr>
                     <tr><td><strong>Esfera</strong></td><td>Toda redonda, só com uma superfície curva.</td><td>Bola de futebol, laranja, bola de bowling</td></tr>
                   </tbody>
                 </table>`
        },
        {
          title: "🔑 Faces, Arestas e Vértices",
          body: `<p>Em alguns sólidos geométricos podemos identificar três elementos:</p>
                 <ul>
                   <li><strong>Face</strong> — cada um dos polígonos planos que formam a superfície do sólido.</li>
                   <li><strong>Aresta</strong> — o segmento de reta onde duas faces se encontram.</li>
                   <li><strong>Vértice</strong> — o ponto onde três ou mais arestas se encontram.</li>
                 </ul>
                 <div class="nota">Cuidado! A <strong>esfera</strong> não tem faces planas, arestas ou vértices — só tem uma superfície curva. O <strong>cilindro</strong> tem 2 bases circulares mas <strong>zero vértices</strong>. O <strong>cone</strong> tem 1 base e <strong>1 vértice</strong> (a "ponta").</div>`
        },
        {
          title: "🎯 Associar objetos a sólidos",
          body: `<p>No livro há um exercício muito útil: olhas para objetos do dia-a-dia (pilha, dado, chapéu de festa, bola...) e tens de dizer que sólido geométrico te lembram.</p>
                 <ul>
                   <li>Pilha → <strong>cilindro</strong></li>
                   <li>Dado → <strong>cubo</strong></li>
                   <li>Caixa de presente retangular → <strong>paralelepípedo retângulo</strong></li>
                   <li>Bola de bowling → <strong>esfera</strong></li>
                   <li>Chapéu de festa pontiagudo → <strong>cone</strong></li>
                   <li>Cubo de Rubik com 4 cores → <strong>pirâmide</strong> (se for pirâmide!) ou <strong>cubo</strong></li>
                   <li>Caixa hexagonal → <strong>prisma hexagonal</strong></li>
                 </ul>`
        }
      ]
    },

    /* =====================================================
       T3 — Elementos & Planificações
       Pág. 56-57
       ===================================================== */
    {
      id: "t3",
      name: "Elementos & Planificações",
      icon: "📐",
      paginas: "Pág. 56-57",
      intro: `<p>Agora vamos olhar com lupa para os elementos dos sólidos e perceber como "abrir" um sólido para o ver no plano — chama-se <strong>planificação</strong>.</p>`,
      sections: [
        {
          title: "🔢 Contar elementos: o cubo como exemplo",
          body: `<p>Um <strong>cubo</strong> tem:</p>
                 <ul>
                   <li><strong>6 faces</strong> (todas quadradas, todas iguais)</li>
                   <li><strong>12 arestas</strong> (todas com o mesmo comprimento)</li>
                   <li><strong>8 vértices</strong></li>
                 </ul>
                 <p>Repara que <strong>6 + 8 = 12 + 2</strong>. Isto não é coincidência — existe uma fórmula chamada relação de Euler (<em>faces + vértices = arestas + 2</em>) que vais aprender em anos seguintes!</p>`,
          svg: `<svg class="content-svg" viewBox="0 0 200 160" width="220" height="180" aria-hidden="true">
                  <polygon points="40,40 130,40 130,130 40,130" fill="#9b6cff" stroke="#1f2347" stroke-width="2"/>
                  <polygon points="40,40 70,20 160,20 130,40" fill="#7a52d6" stroke="#1f2347" stroke-width="2"/>
                  <polygon points="130,40 160,20 160,110 130,130" fill="#6f43c0" stroke="#1f2347" stroke-width="2"/>
                </svg>`
        },
        {
          title: "📊 Tabela rápida — quantos elementos têm os sólidos?",
          body: `<table class="content-table">
                   <thead><tr><th>Sólido</th><th>Faces</th><th>Arestas</th><th>Vértices</th></tr></thead>
                   <tbody>
                     <tr><td>Cubo</td><td>6</td><td>12</td><td>8</td></tr>
                     <tr><td>Paralelepípedo retângulo</td><td>6</td><td>12</td><td>8</td></tr>
                     <tr><td>Prisma triangular</td><td>5</td><td>9</td><td>6</td></tr>
                     <tr><td>Pirâmide quadrangular</td><td>5</td><td>8</td><td>5</td></tr>
                     <tr><td>Pirâmide triangular (tetraedro)</td><td>4</td><td>6</td><td>4</td></tr>
                     <tr><td>Cilindro</td><td>2 (bases) + superfície curva</td><td>2 (curvas)</td><td>0</td></tr>
                     <tr><td>Cone</td><td>1 (base) + superfície curva</td><td>1 (curva)</td><td>1</td></tr>
                     <tr><td>Esfera</td><td>0 planas, 1 curva</td><td>0</td><td>0</td></tr>
                   </tbody>
                 </table>`
        },
        {
          title: "✂️ Planificação — abrir o sólido",
          body: `<p>Uma <strong>planificação</strong> é o que se obtém quando "abrimos" um sólido geométrico e o estendemos no plano. É a "pele" do sólido.</p>
                 <p><strong>Planificação do cubo:</strong> são <strong>6 quadrados</strong> unidos pelas arestas, dispostos de várias formas possíveis (cruz, T, L...).</p>
                 <div class="nota">💡 Há <strong>11 maneiras diferentes</strong> de planificar um cubo! Mas nem todas as combinações de 6 quadrados resultam num cubo — para resultar num cubo, ao dobrar tem de fechar perfeitamente.</div>
                 <p><strong>Planificação do paralelepípedo retângulo:</strong> 6 retângulos (3 pares iguais).</p>
                 <p><strong>Planificação da pirâmide quadrangular:</strong> 1 quadrado (a base) + 4 triângulos (as faces laterais).</p>
                 <p><strong>Planificação do prisma triangular:</strong> 2 triângulos (as bases) + 3 retângulos (as faces laterais).</p>
                 <p><strong>Planificação do cilindro:</strong> 2 círculos (bases) + 1 retângulo (que enrolado faz a superfície lateral).</p>
                 <p><strong>Planificação do cone:</strong> 1 círculo (base) + 1 setor circular (que enrolado faz a superfície lateral).</p>`
        },
        {
          title: "🎲 O caso da tarefa 2 (pág. 57)",
          body: `<p>No livro vês uma planificação de cubo com símbolos nas faces (triângulo, quadrado, círculo) e 4 alunos mostram os seus cubos construídos. Tens de descobrir qual deles é o "impostor" — aquele que <strong>não</strong> pode ter sido feito a partir daquela planificação.</p>
                 <p>O truque é olhar para que faces ficam <strong>opostas</strong> e quais ficam <strong>adjacentes</strong> (vizinhas). Como ao dobrar a cruz duas faces ficam opostas e nunca se vêem ao mesmo tempo, se um cubo mostra duas faces que <strong>não podem ser vistas em conjunto</strong>, é falso.</p>`
        }
      ]
    },

    /* =====================================================
       T4 — Poliedros vs Não Poliedros
       Pág. 59-63
       ===================================================== */
    {
      id: "t4",
      name: "Poliedros vs Não Poliedros",
      icon: "💎",
      paginas: "Pág. 59-63",
      intro: `<p>Já conheces os sólidos. Agora vamos separá-los em dois grandes grupos: os <strong>poliedros</strong> e os <strong>não poliedros</strong>.</p>`,
      sections: [
        {
          title: "🪨 O que é um Poliedro?",
          body: `<p>Um <strong>poliedro</strong> é um sólido geométrico cujas superfícies são <strong>todas planas</strong> (são polígonos).</p>
                 <p>A palavra <em>poliedro</em> vem do grego <strong>poly</strong> (muitas) + <strong>edros</strong> (faces) — ou seja, "de muitas faces".</p>
                 <p>São poliedros: <strong>cubo, paralelepípedo, prismas, pirâmides</strong>.</p>
                 <div class="highlight">📌 Elementos de um poliedro: <strong>faces</strong> (os polígonos planos), <strong>arestas</strong> (os segmentos onde duas faces se encontram) e <strong>vértices</strong> (os pontos onde três ou mais arestas se encontram).</div>`
        },
        {
          title: "🥎 O que é um Não Poliedro?",
          body: `<p>Um <strong>não poliedro</strong> é um sólido que tem <strong>pelo menos uma superfície curva</strong>.</p>
                 <p>São não poliedros: <strong>cilindro, cone, esfera</strong>.</p>
                 <table class="content-table">
                   <thead><tr><th>Não Poliedro</th><th>O que tem</th></tr></thead>
                   <tbody>
                     <tr><td>Cilindro</td><td>2 bases circulares planas + 1 superfície lateral curva</td></tr>
                     <tr><td>Cone</td><td>1 base circular plana + 1 superfície lateral curva + 1 vértice</td></tr>
                     <tr><td>Esfera</td><td>Apenas 1 superfície curva (sem base, sem vértice)</td></tr>
                   </tbody>
                 </table>
                 <div class="cuidado">⚠️ A esfera <strong>não tem vértices</strong>, mas o cone <strong>tem 1 vértice</strong> (a ponta). O cilindro tem <strong>zero vértices</strong>!</div>`
        },
        {
          title: "⚽ Casos famosos",
          body: `<p><strong>Bola de futebol clássica:</strong> apesar de ser arredondada, a sua superfície é feita de <strong>pentágonos e hexágonos</strong> cosidos. Pedagogicamente, no nível do 5º ano, considera-se uma <strong>aproximação à esfera</strong> — mas matematicamente seria um poliedro (chamado icosaedro truncado).</p>
                 <p><strong>Gelado em cone com bola:</strong> a casquinha é um <strong>cone</strong>; a bola de gelado é uma <strong>esfera</strong>. Os dois juntos são dois não poliedros.</p>`
        },
        {
          title: "🔢 Número mínimo de faces?",
          body: `<p>O livro lança o desafio: <em>pode existir um poliedro com apenas 2 faces?</em></p>
                 <div class="highlight">A resposta é <strong>NÃO</strong>. Para formar um sólido fechado precisamos de pelo menos <strong>4 faces</strong>. O poliedro com menos faces é a <strong>pirâmide triangular</strong> (também chamada tetraedro), que tem 4 faces triangulares.</div>`
        }
      ]
    },

    /* =====================================================
       T5 — Prismas (definição e classificação)
       Pág. 66
       ===================================================== */
    {
      id: "t5",
      name: "Prismas — Definição",
      icon: "🟧",
      paginas: "Pág. 66",
      intro: `<p>Os <strong>prismas</strong> são uma família muito importante de poliedros. Vamos perceber bem o que define um prisma.</p>`,
      sections: [
        {
          title: "📘 Definição",
          body: `<p>Um <strong>prisma</strong> é um poliedro com:</p>
                 <ul>
                   <li><strong>Duas faces congruentes paralelas entre si</strong> — chamamos-lhes <strong>bases do prisma</strong>.</li>
                   <li>As <strong>outras faces (faces laterais) são paralelogramos</strong>.</li>
                 </ul>
                 <p>"Congruentes" significa "exatamente iguais em forma e tamanho".</p>`,
          svg: `<svg class="content-svg" viewBox="0 0 220 140" width="240" height="160" aria-hidden="true">
                  <polygon points="30,30 130,30 170,55 70,55" fill="#45c4ff" stroke="#1f2347" stroke-width="2"/>
                  <polygon points="30,30 30,110 70,135 70,55" fill="#3aa3d6" stroke="#1f2347" stroke-width="2"/>
                  <polygon points="70,55 170,55 170,135 70,135" fill="#5cd4ff" stroke="#1f2347" stroke-width="2"/>
                </svg>`
        },
        {
          title: "📦 Prismas retos",
          body: `<p>Quando as faces laterais são <strong>perpendiculares às bases</strong> (formam um ângulo reto), chamamos-lhe <strong>prisma reto</strong>.</p>
                 <p>Num prisma reto, as faces laterais são <strong>retângulos</strong> (não paralelogramos quaisquer).</p>
                 <div class="nota">No 5º ano, quase todos os prismas com que vais trabalhar são <strong>prismas retos</strong>.</div>`
        },
        {
          title: "🏷️ Classificação dos Prismas",
          body: `<p>Os prismas <strong>classificam-se pelo polígono que forma as bases</strong>:</p>
                 <table class="content-table">
                   <thead><tr><th>Polígono da base</th><th>Nome do prisma</th><th>Nº lados da base (n)</th></tr></thead>
                   <tbody>
                     <tr><td>Triângulo</td><td>Prisma triangular</td><td>3</td></tr>
                     <tr><td>Quadrilátero</td><td>Prisma quadrangular</td><td>4</td></tr>
                     <tr><td>Pentágono</td><td>Prisma pentagonal</td><td>5</td></tr>
                     <tr><td>Hexágono</td><td>Prisma hexagonal</td><td>6</td></tr>
                     <tr><td>Heptágono</td><td>Prisma heptagonal</td><td>7</td></tr>
                     <tr><td>Octógono</td><td>Prisma octogonal</td><td>8</td></tr>
                   </tbody>
                 </table>
                 <div class="highlight">📌 <strong>Casos especiais importantes:</strong>
                 <ul>
                   <li>O <strong>cubo</strong> é um <strong>prisma quadrangular</strong> (todas as faces são quadrados iguais).</li>
                   <li>O <strong>paralelepípedo retângulo</strong> é também um <strong>prisma quadrangular</strong> (as 6 faces são retângulos).</li>
                 </ul></div>`
        }
      ]
    },

    /* =====================================================
       T6 — Prismas (relações 3n / 2n / n+2)
       Pág. 67
       ===================================================== */
    {
      id: "t6",
      name: "Prismas — Relações",
      icon: "🧮",
      paginas: "Pág. 67",
      intro: `<p>Há fórmulas super úteis que nos permitem saber, sem contar, <strong>quantas arestas, vértices e faces</strong> tem um prisma — basta saber o número de lados da base.</p>`,
      sections: [
        {
          title: "🔑 As 3 fórmulas mágicas",
          body: `<p>Vamos chamar <strong>n</strong> ao número de lados do polígono da base.</p>
                 <div class="highlight">
                   <h4>📐 Arestas</h4>
                   <p>Nº total de arestas = <strong>3 × n</strong></p>
                   <p><em>Porquê?</em> Cada base tem <em>n</em> arestas (são 2 bases × n = 2n arestas das bases) + <em>n</em> arestas laterais a unir as duas bases. Total: 2n + n = <strong>3n</strong>.</p>
                 </div>
                 <div class="highlight">
                   <h4>📍 Vértices</h4>
                   <p>Nº total de vértices = <strong>2 × n</strong></p>
                   <p><em>Porquê?</em> Cada base tem <em>n</em> vértices, e são 2 bases. Total: <strong>2n</strong>.</p>
                 </div>
                 <div class="highlight">
                   <h4>🟦 Faces</h4>
                   <p>Nº total de faces = <strong>n + 2</strong></p>
                   <p><em>Porquê?</em> Há <em>n</em> faces laterais (uma por cada lado do polígono da base) + 2 bases. Total: <strong>n + 2</strong>.</p>
                 </div>`
        },
        {
          title: "📋 Tabela-resumo",
          body: `<table class="content-table">
                   <thead><tr><th>Prisma</th><th>n</th><th>Arestas (3n)</th><th>Vértices (2n)</th><th>Faces (n+2)</th></tr></thead>
                   <tbody>
                     <tr><td>Triangular</td><td>3</td><td>9</td><td>6</td><td>5</td></tr>
                     <tr><td>Quadrangular</td><td>4</td><td>12</td><td>8</td><td>6</td></tr>
                     <tr><td>Pentagonal</td><td>5</td><td>15</td><td>10</td><td>7</td></tr>
                     <tr><td>Hexagonal</td><td>6</td><td>18</td><td>12</td><td>8</td></tr>
                     <tr><td>Heptagonal</td><td>7</td><td>21</td><td>14</td><td>9</td></tr>
                     <tr><td>Octogonal</td><td>8</td><td>24</td><td>16</td><td>10</td></tr>
                   </tbody>
                 </table>`
        },
        {
          title: "🧩 Aplicações dos exercícios",
          body: `<p><strong>Pergunta 4 (pág. 65):</strong> "Será possível construir um prisma com 11 vértices?"</p>
                 <p>Como o número de vértices é sempre <strong>2n</strong>, é sempre <strong>par</strong>. 11 é ímpar → <strong>impossível</strong>! Um prisma só pode ter 4, 6, 8, 10, 12, 14... vértices.</p>

                 <p><strong>Pergunta 5 (pág. 65):</strong> "Quantas arestas tem um prisma cujas bases são polígonos com 50 lados?"</p>
                 <p>n = 50 → arestas = 3 × 50 = <strong>150 arestas</strong>.</p>

                 <p><strong>Pergunta 3 (pág. 65):</strong> "Qual é o número mínimo de vértices de um prisma?"</p>
                 <p>O menor polígono é o triângulo (n = 3) → 2 × 3 = <strong>6 vértices</strong>. É a resposta!</p>

                 <div class="cuidado">⚠️ Atenção: <strong>n é o número de lados da base</strong>, não o número de faces do sólido inteiro!</div>`
        }
      ]
    },

    /* =====================================================
       T7 — Cubo & Paralelepípedo
       Pág. 60, 63
       ===================================================== */
    {
      id: "t7",
      name: "Cubo & Paralelepípedo",
      icon: "🟦",
      paginas: "Pág. 60, 63",
      intro: `<p>O cubo e o paralelepípedo retângulo são <em>os prismas que mais usas no dia-a-dia</em>. Vamos olhar bem para os seus elementos.</p>`,
      sections: [
        {
          title: "🟦 O Cubo",
          body: `<p>Um <strong>cubo</strong> é um prisma quadrangular muito especial: <strong>todas as 6 faces são quadrados iguais</strong>.</p>
                 <ul>
                   <li>6 faces (todas quadradas, todas com a mesma área)</li>
                   <li>12 arestas (todas com o mesmo comprimento)</li>
                   <li>8 vértices</li>
                 </ul>
                 <p>Como caso particular, o cubo é também um <strong>paralelepípedo retângulo</strong> (com largura = comprimento = altura).</p>`
        },
        {
          title: "🔠 Cubo com letras [ABCDEFGH]",
          body: `<p>No livro vês um cubo com vértices nomeados por letras. É muito importante conseguires identificar:</p>
                 <ul>
                   <li><strong>Pares de faces opostas (paralelas):</strong> são 3 pares — base inferior e base superior, frente e trás, esquerda e direita.</li>
                   <li><strong>Pares de faces perpendiculares:</strong> uma face é perpendicular a 4 outras faces (todas exceto a face oposta).</li>
                   <li><strong>Arestas paralelas a uma dada aresta:</strong> num cubo, cada aresta tem 3 outras arestas paralelas a ela (totalizando 4 paralelas, agrupadas em 3 conjuntos de 4).</li>
                   <li><strong>Arestas perpendiculares a uma dada aresta:</strong> as que se cruzam em ângulo reto com ela.</li>
                 </ul>`,
          svg: `<svg class="content-svg" viewBox="0 0 220 180" width="240" height="200" aria-hidden="true">
                  <polygon points="40,50 140,50 140,150 40,150" fill="#45c4ff" stroke="#f4f5ff" stroke-width="2"/>
                  <polygon points="40,50 70,30 170,30 140,50" fill="#3aa3d6" stroke="#f4f5ff" stroke-width="2"/>
                  <polygon points="140,50 170,30 170,130 140,150" fill="#2c87b3" stroke="#f4f5ff" stroke-width="2"/>
                  <text x="30" y="50" fill="#f4f5ff" font-size="12" font-weight="700">A</text>
                  <text x="143" y="50" fill="#f4f5ff" font-size="12" font-weight="700">B</text>
                  <text x="143" y="165" fill="#f4f5ff" font-size="12" font-weight="700">C</text>
                  <text x="30" y="165" fill="#f4f5ff" font-size="12" font-weight="700">D</text>
                  <text x="62" y="28" fill="#f4f5ff" font-size="12" font-weight="700">E</text>
                  <text x="172" y="28" fill="#f4f5ff" font-size="12" font-weight="700">F</text>
                  <text x="172" y="138" fill="#f4f5ff" font-size="12" font-weight="700">G</text>
                  <text x="62" y="138" fill="#f4f5ff" font-size="12" font-weight="700">H</text>
                </svg>`
        },
        {
          title: "📦 O Paralelepípedo Retângulo",
          body: `<p>Um <strong>paralelepípedo retângulo</strong> é um prisma quadrangular onde as <strong>6 faces são retângulos</strong> (com 3 pares de faces iguais).</p>
                 <p>Tem três dimensões diferentes: <strong>comprimento, largura e altura</strong>.</p>
                 <ul>
                   <li>6 faces (3 pares iguais)</li>
                   <li>12 arestas (3 grupos de 4 arestas iguais)</li>
                   <li>8 vértices</li>
                 </ul>`
        },
        {
          title: "🧮 Problemas com somas de arestas",
          body: `<p>Um cubo tem <strong>12 arestas todas iguais</strong>. Se nos disserem que a soma de todas as arestas é, por exemplo, <strong>72 cm</strong>, então cada aresta mede:</p>
                 <div class="highlight">72 ÷ 12 = <strong>6 cm</strong></div>
                 <p>Num paralelepípedo retângulo, há <strong>4 arestas iguais</strong> de cada uma das 3 dimensões. Total: 4×(comprimento + largura + altura).</p>`
        },
        {
          title: "🍰 O bolo cúbico e os 27 cubinhos",
          body: `<p>Imagina um <strong>bolo cubo</strong>, coberto de chocolate em todas as faces <strong>exceto na base</strong>. Se o partires em <strong>27 cubinhos iguais</strong> (3 × 3 × 3), quantos cubinhos têm chocolate?</p>
                 <p>Olhar por camadas (de baixo para cima):</p>
                 <ul>
                   <li><strong>Camada 1 (em baixo):</strong> só os de fora têm chocolate (nas laterais). Os 9 cubinhos da camada têm chocolate nos das bordas — ou seja <strong>8 com chocolate</strong>, só o do meio é que <strong>não tem</strong>.</li>
                   <li><strong>Camada 2 (meio):</strong> os 8 das bordas têm chocolate (das laterais), o do meio não. <strong>8 com chocolate</strong>.</li>
                   <li><strong>Camada 3 (topo):</strong> todos os 9 têm chocolate (no topo e/ou laterais). <strong>9 com chocolate</strong>.</li>
                 </ul>
                 <p>Total <strong>com chocolate</strong> = 8 + 8 + 9 = <strong>25 cubinhos</strong>.<br>Total <strong>sem chocolate</strong> = 27 − 25 = <strong>2 cubinhos</strong>.</p>`
        }
      ]
    }
  ];

  // Index para acesso rápido
  const BY_ID = Object.fromEntries(TEMAS.map(t => [t.id, t]));

  window.CONTENT = {
    list: TEMAS,
    byId: id => BY_ID[id]
  };
})();
