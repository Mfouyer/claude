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
                 A definição diz "pelo menos 2 lados iguais" no isósceles. Isto significa que <strong>todo o triângulo equilátero (3 lados iguais) é também isósceles</strong> — afinal, se tem 3 iguais, também tem 2 iguais! É a famosa pergunta da Marta na pág. 9.</div>`,
          svg: `<svg class="content-svg" viewBox="0 0 280 160" width="280" height="160" aria-hidden="true">
                  <!-- Equilátero -->
                  <polygon points="44,130 14,130 29,104" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <!-- tick marks: all 3 sides equal -->
                  <line x1="21" y1="117" x2="24" y2="120" stroke="#00f0ff" stroke-width="1.5"/>
                  <line x1="36" y1="117" x2="39" y2="114" stroke="#00f0ff" stroke-width="1.5"/>
                  <line x1="29" y1="130" x2="29" y2="126" stroke="#00f0ff" stroke-width="1.5"/>
                  <text x="22" y="148" fill="#00f0ff" font-size="10" text-anchor="middle">Equilátero</text>
                  <text x="22" y="158" fill="#e8eeff" font-size="9" text-anchor="middle">3 lados iguais</text>
                  <!-- Isósceles -->
                  <polygon points="120,130 90,130 105,95" fill="none" stroke="#a3ff12" stroke-width="2"/>
                  <!-- tick marks: 2 equal sides -->
                  <line x1="96" y1="112" x2="99" y2="115" stroke="#a3ff12" stroke-width="1.5"/>
                  <line x1="111" y1="112" x2="114" y2="109" stroke="#a3ff12" stroke-width="1.5"/>
                  <text x="105" y="148" fill="#a3ff12" font-size="10" text-anchor="middle">Isósceles</text>
                  <text x="105" y="158" fill="#e8eeff" font-size="9" text-anchor="middle">2 lados iguais</text>
                  <!-- Escaleno -->
                  <polygon points="200,130 165,130 195,95" fill="none" stroke="#ff00d4" stroke-width="2"/>
                  <text x="185" y="148" fill="#ff00d4" font-size="10" text-anchor="middle">Escaleno</text>
                  <text x="185" y="158" fill="#e8eeff" font-size="9" text-anchor="middle">3 lados diferentes</text>
                  <!-- labels -->
                  <text x="240" y="95" fill="#e8eeff" font-size="9">3 cm</text>
                  <text x="240" y="110" fill="#e8eeff" font-size="9">4 cm</text>
                  <text x="240" y="125" fill="#e8eeff" font-size="9">5 cm</text>
                </svg>`
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
                 </ul></div>`,
          svg: `<svg class="content-svg" viewBox="0 0 280 165" width="280" height="165" aria-hidden="true">
                  <!-- Retângulo: right angle at bottom-left -->
                  <polygon points="20,130 20,80 60,130" fill="none" stroke="#ffd83d" stroke-width="2"/>
                  <rect x="20" y="120" width="10" height="10" fill="none" stroke="#ffd83d" stroke-width="1.5"/>
                  <text x="40" y="150" fill="#ffd83d" font-size="10" text-anchor="middle">Retângulo</text>
                  <text x="40" y="161" fill="#e8eeff" font-size="9" text-anchor="middle">1 ângulo 90°</text>
                  <!-- Acutângulo: all acute -->
                  <polygon points="110,130 85,90 135,90" fill="none" stroke="#a3ff12" stroke-width="2"/>
                  <!-- arc at bottom-left -->
                  <path d="M90,125 A12,12 0 0,1 97,116" fill="none" stroke="#a3ff12" stroke-width="1.2"/>
                  <!-- arc at bottom-right -->
                  <path d="M123,116 A12,12 0 0,1 130,125" fill="none" stroke="#a3ff12" stroke-width="1.2"/>
                  <!-- arc at top -->
                  <path d="M107,97 A8,8 0 0,1 113,97" fill="none" stroke="#a3ff12" stroke-width="1.2"/>
                  <text x="110" y="150" fill="#a3ff12" font-size="10" text-anchor="middle">Acutângulo</text>
                  <text x="110" y="161" fill="#e8eeff" font-size="9" text-anchor="middle">todos &lt; 90°</text>
                  <!-- Obtusângulo: one obtuse angle -->
                  <polygon points="165,130 220,130 175,100" fill="none" stroke="#ff00d4" stroke-width="2"/>
                  <!-- arc at obtuse vertex (left) -->
                  <path d="M172,120 A18,18 0 0,1 178,118" fill="none" stroke="#ff00d4" stroke-width="1.2"/>
                  <text x="195" y="150" fill="#ff00d4" font-size="10" text-anchor="middle">Obtusângulo</text>
                  <text x="195" y="161" fill="#e8eeff" font-size="9" text-anchor="middle">1 ângulo &gt; 90°</text>
                </svg>`
        },
        {
          title: "🤝 Combinar as duas classificações",
          body: `<p>Um triângulo tem sempre <strong>dois nomes</strong> ao mesmo tempo: um pelos lados e outro pelos ângulos.</p>
                 <p><em>Exemplo:</em> um triângulo com lados 5 cm, 5 cm e 3 cm e um ângulo reto chama-se <strong>isósceles retângulo</strong>.</p>
                 <div class="nota">A resposta correta à pergunta da Marta no livro é <strong>SIM, concordo</strong>: um triângulo pode ser equilátero <em>e</em> isósceles ao mesmo tempo — porque ter "3 lados iguais" também significa ter "pelo menos 2 iguais".</div>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Two overlapping circles: LADOS / ÂNGULOS -->
                  <ellipse cx="85" cy="80" rx="72" ry="55" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="5,3"/>
                  <ellipse cx="175" cy="80" rx="72" ry="55" fill="none" stroke="#ff00d4" stroke-width="2" stroke-dasharray="5,3"/>
                  <!-- Labels -->
                  <text x="55" y="55" fill="#00f0ff" font-size="10" text-anchor="middle">pelos</text>
                  <text x="55" y="67" fill="#00f0ff" font-size="10" text-anchor="middle">LADOS</text>
                  <text x="205" y="55" fill="#ff00d4" font-size="10" text-anchor="middle">pelos</text>
                  <text x="205" y="67" fill="#ff00d4" font-size="10" text-anchor="middle">ÂNGULOS</text>
                  <!-- Intersection label -->
                  <text x="130" y="76" fill="#ffd83d" font-size="9" text-anchor="middle">isósceles</text>
                  <text x="130" y="88" fill="#ffd83d" font-size="9" text-anchor="middle">retângulo</text>
                  <!-- Left side examples -->
                  <text x="58" y="90" fill="#e8eeff" font-size="8" text-anchor="middle">equilátero</text>
                  <text x="58" y="100" fill="#e8eeff" font-size="8" text-anchor="middle">acutângulo</text>
                  <!-- Right side examples -->
                  <text x="200" y="90" fill="#e8eeff" font-size="8" text-anchor="middle">escaleno</text>
                  <text x="200" y="100" fill="#e8eeff" font-size="8" text-anchor="middle">obtusângulo</text>
                  <text x="130" y="140" fill="#a3ff12" font-size="9" text-anchor="middle">Todo triângulo tem 2 nomes!</text>
                </svg>`
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
                 </table>`,
          svg: `<svg class="content-svg" viewBox="0 0 280 160" width="280" height="160" aria-hidden="true">
                  <!-- Cubo isométrico -->
                  <polygon points="20,60 50,44 80,60 80,96 50,112 20,96" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <line x1="50" y1="44" x2="50" y2="80" stroke="#00f0ff" stroke-width="1" stroke-dasharray="3,2"/>
                  <line x1="50" y1="80" x2="80" y2="96" stroke="#00f0ff" stroke-width="1" stroke-dasharray="3,2"/>
                  <line x1="50" y1="80" x2="20" y2="96" stroke="#00f0ff" stroke-width="1" stroke-dasharray="3,2"/>
                  <text x="50" y="128" fill="#00f0ff" font-size="9" text-anchor="middle">Cubo</text>
                  <!-- Pirâmide -->
                  <polygon points="120,108 150,108 165,80 105,80" fill="none" stroke="#ffd83d" stroke-width="1.8"/>
                  <line x1="135" y1="42" x2="120" y2="108" stroke="#ffd83d" stroke-width="1.8"/>
                  <line x1="135" y1="42" x2="150" y2="108" stroke="#ffd83d" stroke-width="1.8"/>
                  <line x1="135" y1="42" x2="165" y2="80" stroke="#ffd83d" stroke-width="1.8"/>
                  <line x1="135" y1="42" x2="105" y2="80" stroke="#ffd83d" stroke-width="1.8"/>
                  <text x="135" y="128" fill="#ffd83d" font-size="9" text-anchor="middle">Pirâmide</text>
                  <!-- Cilindro -->
                  <ellipse cx="210" cy="55" rx="25" ry="9" fill="none" stroke="#a3ff12" stroke-width="1.8"/>
                  <ellipse cx="210" cy="105" rx="25" ry="9" fill="none" stroke="#a3ff12" stroke-width="1.8"/>
                  <line x1="185" y1="55" x2="185" y2="105" stroke="#a3ff12" stroke-width="1.8"/>
                  <line x1="235" y1="55" x2="235" y2="105" stroke="#a3ff12" stroke-width="1.8"/>
                  <text x="210" y="128" fill="#a3ff12" font-size="9" text-anchor="middle">Cilindro</text>
                  <!-- Esfera -->
                  <circle cx="262" cy="78" r="22" fill="none" stroke="#ff00d4" stroke-width="1.8"/>
                  <ellipse cx="262" cy="78" rx="22" ry="7" fill="none" stroke="#ff00d4" stroke-width="1" stroke-dasharray="3,2"/>
                  <text x="262" y="116" fill="#ff00d4" font-size="9" text-anchor="middle">Esfera</text>
                </svg>`
        },
        {
          title: "🔑 Faces, Arestas e Vértices",
          body: `<p>Em alguns sólidos geométricos podemos identificar três elementos:</p>
                 <ul>
                   <li><strong>Face</strong> — cada um dos polígonos planos que formam a superfície do sólido.</li>
                   <li><strong>Aresta</strong> — o segmento de reta onde duas faces se encontram.</li>
                   <li><strong>Vértice</strong> — o ponto onde três ou mais arestas se encontram.</li>
                 </ul>
                 <div class="nota">Cuidado! A <strong>esfera</strong> não tem faces planas, arestas ou vértices — só tem uma superfície curva. O <strong>cilindro</strong> tem 2 bases circulares mas <strong>zero vértices</strong>. O <strong>cone</strong> tem 1 base e <strong>1 vértice</strong> (a "ponta").</div>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Cubo isométrico com labels face/aresta/vértice -->
                  <!-- Front face -->
                  <polygon points="70,50 150,50 150,130 70,130" fill="none" stroke="#e8eeff" stroke-width="1.8"/>
                  <!-- Top face -->
                  <polygon points="70,50 100,30 180,30 150,50" fill="none" stroke="#e8eeff" stroke-width="1.8"/>
                  <!-- Right face -->
                  <polygon points="150,50 180,30 180,110 150,130" fill="none" stroke="#e8eeff" stroke-width="1.8"/>
                  <!-- FACE label: arrow to front face center -->
                  <circle cx="110" cy="90" r="3" fill="#00f0ff"/>
                  <line x1="110" y1="90" x2="28" y2="90" stroke="#00f0ff" stroke-width="1.2"/>
                  <text x="25" y="88" fill="#00f0ff" font-size="10" text-anchor="end">Face</text>
                  <!-- ARESTA label: arrow to top-front edge -->
                  <circle cx="110" cy="50" r="3" fill="#ffd83d"/>
                  <line x1="110" y1="50" x2="110" y2="18" stroke="#ffd83d" stroke-width="1.2"/>
                  <text x="110" y="14" fill="#ffd83d" font-size="10" text-anchor="middle">Aresta</text>
                  <!-- VÉRTICE label: arrow to top-right vertex -->
                  <circle cx="150" cy="50" r="4" fill="#ff00d4"/>
                  <line x1="154" y1="46" x2="200" y2="22" stroke="#ff00d4" stroke-width="1.2"/>
                  <text x="202" y="20" fill="#ff00d4" font-size="10" text-anchor="start">Vértice</text>
                </svg>`
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
                 </ul>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Pilha = cilindro -->
                  <ellipse cx="32" cy="50" rx="18" ry="6" fill="none" stroke="#a3ff12" stroke-width="1.8"/>
                  <ellipse cx="32" cy="100" rx="18" ry="6" fill="none" stroke="#a3ff12" stroke-width="1.8"/>
                  <line x1="14" y1="50" x2="14" y2="100" stroke="#a3ff12" stroke-width="1.8"/>
                  <line x1="50" y1="50" x2="50" y2="100" stroke="#a3ff12" stroke-width="1.8"/>
                  <text x="32" y="122" fill="#a3ff12" font-size="8.5" text-anchor="middle">Pilha</text>
                  <text x="32" y="133" fill="#e8eeff" font-size="8" text-anchor="middle">cilindro</text>
                  <!-- Dado = cubo -->
                  <polygon points="88,55 118,55 118,95 88,95" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <polygon points="88,55 100,44 130,44 118,55" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <polygon points="118,55 130,44 130,84 118,95" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <!-- dots -->
                  <circle cx="98" cy="68" r="2.5" fill="#00f0ff"/>
                  <circle cx="108" cy="75" r="2.5" fill="#00f0ff"/>
                  <circle cx="108" cy="68" r="2.5" fill="#00f0ff"/>
                  <text x="109" y="113" fill="#00f0ff" font-size="8.5" text-anchor="middle">Dado</text>
                  <text x="109" y="124" fill="#e8eeff" font-size="8" text-anchor="middle">cubo</text>
                  <!-- Chapéu = cone -->
                  <line x1="175" y1="40" x2="155" y2="110" stroke="#ffd83d" stroke-width="1.8"/>
                  <line x1="175" y1="40" x2="195" y2="110" stroke="#ffd83d" stroke-width="1.8"/>
                  <ellipse cx="175" cy="110" rx="20" ry="7" fill="none" stroke="#ffd83d" stroke-width="1.8"/>
                  <text x="175" y="130" fill="#ffd83d" font-size="8.5" text-anchor="middle">Chapéu</text>
                  <text x="175" y="141" fill="#e8eeff" font-size="8" text-anchor="middle">cone</text>
                  <!-- Bola = esfera -->
                  <circle cx="232" cy="75" r="24" fill="none" stroke="#ff00d4" stroke-width="1.8"/>
                  <ellipse cx="232" cy="75" rx="24" ry="8" fill="none" stroke="#ff00d4" stroke-width="1" stroke-dasharray="3,2"/>
                  <text x="232" y="113" fill="#ff00d4" font-size="8.5" text-anchor="middle">Bola</text>
                  <text x="232" y="124" fill="#e8eeff" font-size="8" text-anchor="middle">esfera</text>
                </svg>`
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
                 </table>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Visual bar chart: Faces/Arestas/Vértices for Cubo -->
                  <text x="130" y="14" fill="#e8eeff" font-size="10" text-anchor="middle" font-weight="700">Cubo: F=6  A=12  V=8</text>
                  <!-- Bar: Faces = 6 -->
                  <rect x="30" y="115" width="40" height="30" fill="#00f0ff" rx="3"/>
                  <rect x="30" y="65" width="40" height="50" fill="#00f0ff" opacity="0.35" rx="3"/>
                  <text x="50" y="60" fill="#00f0ff" font-size="12" text-anchor="middle" font-weight="700">6</text>
                  <text x="50" y="155" fill="#00f0ff" font-size="9" text-anchor="middle">Faces</text>
                  <!-- Bar: Arestas = 12 -->
                  <rect x="110" y="55" width="40" height="90" fill="#ffd83d" rx="3"/>
                  <text x="130" y="50" fill="#ffd83d" font-size="12" text-anchor="middle" font-weight="700">12</text>
                  <text x="130" y="155" fill="#ffd83d" font-size="9" text-anchor="middle">Arestas</text>
                  <!-- Bar: Vértices = 8 -->
                  <rect x="190" y="95" width="40" height="50" fill="#ff00d4" rx="3"/>
                  <rect x="190" y="75" width="40" height="20" fill="#ff00d4" opacity="0.35" rx="3"/>
                  <text x="210" y="70" fill="#ff00d4" font-size="12" text-anchor="middle" font-weight="700">8</text>
                  <text x="210" y="155" fill="#ff00d4" font-size="9" text-anchor="middle">Vértices</text>
                  <!-- baseline -->
                  <line x1="18" y1="145" x2="242" y2="145" stroke="#e8eeff" stroke-width="1" opacity="0.4"/>
                </svg>`
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
                 <p><strong>Planificação do cone:</strong> 1 círculo (base) + 1 setor circular (que enrolado faz a superfície lateral).</p>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 160" width="260" height="160" aria-hidden="true">
                  <!-- Planificação do cubo em cruz -->
                  <!-- top square -->
                  <rect x="90" y="18" width="36" height="36" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <!-- middle row: left, center, right, far-right -->
                  <rect x="18" y="54" width="36" height="36" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <rect x="54" y="54" width="36" height="36" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <rect x="90" y="54" width="36" height="36" fill="none" stroke="#ffd83d" stroke-width="2.2"/>
                  <rect x="126" y="54" width="36" height="36" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <!-- bottom square -->
                  <rect x="90" y="90" width="36" height="36" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <!-- Label -->
                  <text x="108" y="146" fill="#ffd83d" font-size="9" text-anchor="middle">face oposta</text>
                  <!-- Arrow indicating fold -->
                  <text x="190" y="72" fill="#e8eeff" font-size="9" text-anchor="start">6 quadrados</text>
                  <text x="190" y="84" fill="#e8eeff" font-size="9" text-anchor="start">= planificação</text>
                  <text x="190" y="96" fill="#a3ff12" font-size="9" text-anchor="start">do cubo</text>
                  <line x1="180" y1="80" x2="162" y2="80" stroke="#e8eeff" stroke-width="1" marker-end="url(#arr)"/>
                </svg>`
        },
        {
          title: "🎲 O caso da tarefa 2 (pág. 57)",
          body: `<p>No livro vês uma planificação de cubo com símbolos nas faces (triângulo, quadrado, círculo) e 4 alunos mostram os seus cubos construídos. Tens de descobrir qual deles é o "impostor" — aquele que <strong>não</strong> pode ter sido feito a partir daquela planificação.</p>
                 <p>O truque é olhar para que faces ficam <strong>opostas</strong> e quais ficam <strong>adjacentes</strong> (vizinhas). Como ao dobrar a cruz duas faces ficam opostas e nunca se vêem ao mesmo tempo, se um cubo mostra duas faces que <strong>não podem ser vistas em conjunto</strong>, é falso.</p>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Planificação simples com símbolos -->
                  <!-- top: triângulo -->
                  <rect x="90" y="15" width="36" height="36" fill="none" stroke="#e8eeff" stroke-width="1.5"/>
                  <polygon points="108,23 100,43 116,43" fill="none" stroke="#a3ff12" stroke-width="1.8"/>
                  <!-- mid-left: circle -->
                  <rect x="18" y="51" width="36" height="36" fill="none" stroke="#e8eeff" stroke-width="1.5"/>
                  <circle cx="36" cy="69" r="10" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <!-- mid-center: quadrado (base) -->
                  <rect x="54" y="51" width="36" height="36" fill="none" stroke="#e8eeff" stroke-width="1.5"/>
                  <rect x="63" y="60" width="18" height="18" fill="none" stroke="#ffd83d" stroke-width="1.8"/>
                  <!-- mid-right: estrela -->
                  <rect x="90" y="51" width="36" height="36" fill="none" stroke="#e8eeff" stroke-width="1.5"/>
                  <text x="108" y="74" fill="#ff00d4" font-size="16" text-anchor="middle">★</text>
                  <!-- mid-far-right: cross -->
                  <rect x="126" y="51" width="36" height="36" fill="none" stroke="#e8eeff" stroke-width="1.5"/>
                  <line x1="144" y1="59" x2="144" y2="79" stroke="#ffd83d" stroke-width="2"/>
                  <line x1="134" y1="69" x2="154" y2="69" stroke="#ffd83d" stroke-width="2"/>
                  <!-- bottom: dot -->
                  <rect x="90" y="87" width="36" height="36" fill="none" stroke="#e8eeff" stroke-width="1.5"/>
                  <circle cx="108" cy="105" r="5" fill="#ff00d4"/>
                  <!-- opostas: top ↔ bottom -->
                  <line x1="55" y1="33" x2="55" y2="105" stroke="#ffd83d" stroke-width="1" stroke-dasharray="4,3"/>
                  <text x="10" y="33" fill="#ffd83d" font-size="8">opostas</text>
                  <text x="10" y="43" fill="#ffd83d" font-size="8">▲ ↔ •</text>
                  <!-- note -->
                  <text x="175" y="60" fill="#e8eeff" font-size="8.5" text-anchor="start">Faces opostas</text>
                  <text x="175" y="72" fill="#e8eeff" font-size="8.5" text-anchor="start">nunca se vêem</text>
                  <text x="175" y="84" fill="#e8eeff" font-size="8.5" text-anchor="start">ao mesmo tempo!</text>
                </svg>`
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
                 <div class="highlight">📌 Elementos de um poliedro: <strong>faces</strong> (os polígonos planos), <strong>arestas</strong> (os segmentos onde duas faces se encontram) e <strong>vértices</strong> (os pontos onde três ou mais arestas se encontram).</div>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Cubo = poliedro -->
                  <polygon points="42,50 102,50 102,110 42,110" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <polygon points="42,50 62,34 122,34 102,50" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <polygon points="102,50 122,34 122,94 102,110" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <text x="72" y="130" fill="#00f0ff" font-size="9" text-anchor="middle">Cubo</text>
                  <text x="72" y="141" fill="#a3ff12" font-size="9" text-anchor="middle">POLIEDRO ✓</text>
                  <text x="72" y="152" fill="#e8eeff" font-size="8" text-anchor="middle">todas as faces planas</text>
                  <!-- Pirâmide = poliedro -->
                  <polygon points="155,110 205,110 180,55" fill="none" stroke="#ffd83d" stroke-width="2"/>
                  <line x1="155" y1="110" x2="178" y2="95" stroke="#ffd83d" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <line x1="205" y1="110" x2="178" y2="95" stroke="#ffd83d" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <line x1="180" y1="55" x2="178" y2="95" stroke="#ffd83d" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <ellipse cx="178" cy="96" rx="22" ry="8" fill="none" stroke="#ffd83d" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <text x="180" y="130" fill="#ffd83d" font-size="9" text-anchor="middle">Pirâmide</text>
                  <text x="180" y="141" fill="#a3ff12" font-size="9" text-anchor="middle">POLIEDRO ✓</text>
                  <text x="180" y="152" fill="#e8eeff" font-size="8" text-anchor="middle">todas as faces planas</text>
                  <!-- divider -->
                  <line x1="130" y1="25" x2="130" y2="118" stroke="#e8eeff" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.4"/>
                </svg>`
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
                 <div class="cuidado">⚠️ A esfera <strong>não tem vértices</strong>, mas o cone <strong>tem 1 vértice</strong> (a ponta). O cilindro tem <strong>zero vértices</strong>!</div>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Cilindro -->
                  <ellipse cx="38" cy="45" rx="24" ry="9" fill="none" stroke="#ff00d4" stroke-width="1.8"/>
                  <ellipse cx="38" cy="100" rx="24" ry="9" fill="none" stroke="#ff00d4" stroke-width="1.8"/>
                  <line x1="14" y1="45" x2="14" y2="100" stroke="#ff00d4" stroke-width="1.8"/>
                  <line x1="62" y1="45" x2="62" y2="100" stroke="#ff00d4" stroke-width="1.8"/>
                  <!-- curva label -->
                  <path d="M66,72 Q82,72 82,72" fill="none" stroke="#ffd83d" stroke-width="1"/>
                  <text x="84" y="75" fill="#ffd83d" font-size="8">curva!</text>
                  <text x="38" y="120" fill="#ff00d4" font-size="9" text-anchor="middle">Cilindro</text>
                  <text x="38" y="131" fill="#e8eeff" font-size="8" text-anchor="middle">0 vértices</text>
                  <!-- Cone -->
                  <line x1="140" y1="35" x2="116" y2="108" stroke="#00f0ff" stroke-width="1.8"/>
                  <line x1="140" y1="35" x2="164" y2="108" stroke="#00f0ff" stroke-width="1.8"/>
                  <ellipse cx="140" cy="108" rx="24" ry="9" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <!-- vértice dot -->
                  <circle cx="140" cy="35" r="4" fill="#ffd83d"/>
                  <text x="150" y="32" fill="#ffd83d" font-size="8">vértice!</text>
                  <text x="140" y="128" fill="#00f0ff" font-size="9" text-anchor="middle">Cone</text>
                  <text x="140" y="139" fill="#e8eeff" font-size="8" text-anchor="middle">1 vértice</text>
                  <!-- Esfera -->
                  <circle cx="222" cy="72" r="28" fill="none" stroke="#a3ff12" stroke-width="1.8"/>
                  <ellipse cx="222" cy="72" rx="28" ry="9" fill="none" stroke="#a3ff12" stroke-width="1" stroke-dasharray="3,2"/>
                  <text x="222" y="115" fill="#a3ff12" font-size="9" text-anchor="middle">Esfera</text>
                  <text x="222" y="126" fill="#e8eeff" font-size="8" text-anchor="middle">0 vértices</text>
                </svg>`
        },
        {
          title: "⚽ Casos famosos",
          body: `<p><strong>Bola de futebol clássica:</strong> apesar de ser arredondada, a sua superfície é feita de <strong>pentágonos e hexágonos</strong> cosidos. Pedagogicamente, no nível do 5º ano, considera-se uma <strong>aproximação à esfera</strong> — mas matematicamente seria um poliedro (chamado icosaedro truncado).</p>
                 <p><strong>Gelado em cone com bola:</strong> a casquinha é um <strong>cone</strong>; a bola de gelado é uma <strong>esfera</strong>. Os dois juntos são dois não poliedros.</p>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Bola de futebol: circle com padrão hexagonal simplificado -->
                  <circle cx="70" cy="72" r="48" fill="none" stroke="#e8eeff" stroke-width="2"/>
                  <!-- simplified pentagon patches -->
                  <polygon points="70,38 86,50 80,68 60,68 54,50" fill="none" stroke="#00f0ff" stroke-width="1.5"/>
                  <polygon points="55,50 54,68 38,78 26,64 36,50" fill="none" stroke="#00f0ff" stroke-width="1.2" opacity="0.6"/>
                  <polygon points="86,50 104,50 114,64 102,78 86,68" fill="none" stroke="#00f0ff" stroke-width="1.2" opacity="0.6"/>
                  <text x="70" y="133" fill="#e8eeff" font-size="9" text-anchor="middle">Bola de futebol</text>
                  <text x="70" y="145" fill="#a3ff12" font-size="8.5" text-anchor="middle">≈ esfera (5º ano)</text>
                  <!-- Gelado = cone + esfera -->
                  <!-- cone -->
                  <line x1="185" y1="115" x2="165" y2="75" stroke="#ffd83d" stroke-width="2"/>
                  <line x1="185" y1="115" x2="205" y2="75" stroke="#ffd83d" stroke-width="2"/>
                  <line x1="165" y1="75" x2="205" y2="75" stroke="#ffd83d" stroke-width="2"/>
                  <!-- bola de gelado = esfera -->
                  <circle cx="185" cy="58" r="20" fill="none" stroke="#ff00d4" stroke-width="2"/>
                  <ellipse cx="185" cy="58" rx="20" ry="7" fill="none" stroke="#ff00d4" stroke-width="1" stroke-dasharray="3,2"/>
                  <!-- labels -->
                  <text x="218" y="60" fill="#ff00d4" font-size="8.5">esfera</text>
                  <text x="218" y="100" fill="#ffd83d" font-size="8.5">cone</text>
                  <line x1="217" y1="58" x2="205" y2="58" stroke="#ff00d4" stroke-width="1"/>
                  <line x1="217" y1="98" x2="207" y2="90" stroke="#ffd83d" stroke-width="1"/>
                  <text x="185" y="140" fill="#e8eeff" font-size="9" text-anchor="middle">2 não poliedros!</text>
                </svg>`
        },
        {
          title: "🔢 Número mínimo de faces?",
          body: `<p>O livro lança o desafio: <em>pode existir um poliedro com apenas 2 faces?</em></p>
                 <div class="highlight">A resposta é <strong>NÃO</strong>. Para formar um sólido fechado precisamos de pelo menos <strong>4 faces</strong>. O poliedro com menos faces é a <strong>pirâmide triangular</strong> (também chamada tetraedro), que tem 4 faces triangulares.</div>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Tetraedro: pirâmide triangular com 4 faces -->
                  <!-- base triangle -->
                  <polygon points="90,125 170,125 130,65" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <!-- back vertex connected -->
                  <line x1="90" y1="125" x2="143" y2="95" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4,3"/>
                  <line x1="170" y1="125" x2="143" y2="95" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4,3"/>
                  <line x1="130" y1="65" x2="143" y2="95" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4,3"/>
                  <!-- face labels -->
                  <text x="130" y="145" fill="#e8eeff" font-size="9" text-anchor="middle">Pirâmide triangular</text>
                  <text x="130" y="156" fill="#00f0ff" font-size="9" text-anchor="middle">(Tetraedro)</text>
                  <!-- 4 faces badge -->
                  <rect x="185" y="55" width="58" height="52" rx="8" fill="none" stroke="#ffd83d" stroke-width="1.5"/>
                  <text x="214" y="76" fill="#ffd83d" font-size="22" text-anchor="middle" font-weight="700">4</text>
                  <text x="214" y="92" fill="#ffd83d" font-size="9" text-anchor="middle">faces</text>
                  <text x="214" y="103" fill="#e8eeff" font-size="8" text-anchor="middle">mínimo!</text>
                  <!-- X for less -->
                  <text x="20" y="75" fill="#ff00d4" font-size="11" font-weight="700">2 faces?</text>
                  <text x="20" y="90" fill="#ff00d4" font-size="20" font-weight="700">✗</text>
                  <text x="20" y="108" fill="#e8eeff" font-size="9">impossível</text>
                </svg>`
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
                 <div class="nota">No 5º ano, quase todos os prismas com que vais trabalhar são <strong>prismas retos</strong>.</div>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Prisma reto triangular -->
                  <!-- base triangle front -->
                  <polygon points="40,120 110,120 75,80" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <!-- top triangle -->
                  <polygon points="55,55 125,55 90,15" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <!-- lateral edges (vertical = reto) -->
                  <line x1="40" y1="120" x2="55" y2="55" stroke="#00f0ff" stroke-width="2"/>
                  <line x1="110" y1="120" x2="125" y2="55" stroke="#00f0ff" stroke-width="2"/>
                  <line x1="75" y1="80" x2="90" y2="15" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4,3"/>
                  <!-- 90° angle mark on lateral edge -->
                  <rect x="40" y="110" width="9" height="10" fill="none" stroke="#ffd83d" stroke-width="1.5"/>
                  <text x="16" y="108" fill="#ffd83d" font-size="9">90°</text>
                  <!-- Face lateral label -->
                  <text x="80" y="100" fill="#a3ff12" font-size="8.5" text-anchor="middle">face lateral</text>
                  <text x="80" y="111" fill="#a3ff12" font-size="8.5" text-anchor="middle">= retângulo</text>
                  <!-- label -->
                  <text x="80" y="140" fill="#e8eeff" font-size="9" text-anchor="middle">Prisma reto triangular</text>
                  <!-- oblique prisma for contrast -->
                  <polygon points="170,120 220,120 200,90" fill="none" stroke="#e8eeff" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
                  <polygon points="185,60 235,60 215,30" fill="none" stroke="#e8eeff" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
                  <line x1="170" y1="120" x2="185" y2="60" stroke="#e8eeff" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
                  <line x1="220" y1="120" x2="235" y2="60" stroke="#e8eeff" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
                  <text x="200" y="140" fill="#e8eeff" font-size="8.5" text-anchor="middle" opacity="0.6">oblíquo (não no 5º)</text>
                </svg>`
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
                 </ul></div>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Prisma triangular (n=3) base -->
                  <polygon points="28,130 58,130 43,108" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <text x="43" y="145" fill="#00f0ff" font-size="8.5" text-anchor="middle">triangular</text>
                  <text x="43" y="155" fill="#e8eeff" font-size="8" text-anchor="middle">n=3</text>
                  <!-- Prisma quadrangular (n=4) base = square -->
                  <rect x="74" y="108" width="30" height="22" fill="none" stroke="#ffd83d" stroke-width="2"/>
                  <text x="89" y="145" fill="#ffd83d" font-size="8.5" text-anchor="middle">quadrangular</text>
                  <text x="89" y="155" fill="#e8eeff" font-size="8" text-anchor="middle">n=4</text>
                  <!-- Prisma pentagonal (n=5) base -->
                  <polygon points="143,108 153,115 149,127 137,127 133,115" fill="none" stroke="#a3ff12" stroke-width="2"/>
                  <text x="143" y="145" fill="#a3ff12" font-size="8.5" text-anchor="middle">pentagonal</text>
                  <text x="143" y="155" fill="#e8eeff" font-size="8" text-anchor="middle">n=5</text>
                  <!-- Prisma hexagonal (n=6) base -->
                  <polygon points="200,109 211,114 211,124 200,129 189,124 189,114" fill="none" stroke="#ff00d4" stroke-width="2"/>
                  <text x="200" y="145" fill="#ff00d4" font-size="8.5" text-anchor="middle">hexagonal</text>
                  <text x="200" y="155" fill="#e8eeff" font-size="8" text-anchor="middle">n=6</text>
                  <!-- Arrow: base determines name -->
                  <text x="130" y="22" fill="#e8eeff" font-size="10" text-anchor="middle" font-weight="700">base do prisma → nome</text>
                  <line x1="130" y1="27" x2="130" y2="97" stroke="#e8eeff" stroke-width="0.8" opacity="0.4" stroke-dasharray="3,3"/>
                  <text x="130" y="48" fill="#ffd83d" font-size="10" text-anchor="middle">Cubo</text>
                  <text x="130" y="62" fill="#e8eeff" font-size="9" text-anchor="middle">= prisma</text>
                  <text x="130" y="74" fill="#e8eeff" font-size="9" text-anchor="middle">quadrangular</text>
                  <rect x="100" y="35" width="60" height="48" rx="6" fill="none" stroke="#ffd83d" stroke-width="1.2" stroke-dasharray="3,2"/>
                </svg>`
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
                 </div>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Central n -->
                  <circle cx="130" cy="75" r="28" fill="none" stroke="#e8eeff" stroke-width="2"/>
                  <text x="130" y="70" fill="#ffd83d" font-size="22" text-anchor="middle" font-weight="700">n</text>
                  <text x="130" y="88" fill="#e8eeff" font-size="8.5" text-anchor="middle">lados da base</text>
                  <!-- Arestas = 3n -->
                  <rect x="8" y="18" width="78" height="36" rx="8" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <text x="47" y="36" fill="#00f0ff" font-size="13" text-anchor="middle" font-weight="700">3 × n</text>
                  <text x="47" y="49" fill="#e8eeff" font-size="8.5" text-anchor="middle">Arestas</text>
                  <line x1="86" y1="36" x2="105" y2="60" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="3,2"/>
                  <!-- Vértices = 2n -->
                  <rect x="174" y="18" width="78" height="36" rx="8" fill="none" stroke="#a3ff12" stroke-width="2"/>
                  <text x="213" y="36" fill="#a3ff12" font-size="13" text-anchor="middle" font-weight="700">2 × n</text>
                  <text x="213" y="49" fill="#e8eeff" font-size="8.5" text-anchor="middle">Vértices</text>
                  <line x1="174" y1="36" x2="155" y2="60" stroke="#a3ff12" stroke-width="1.2" stroke-dasharray="3,2"/>
                  <!-- Faces = n+2 -->
                  <rect x="91" y="116" width="78" height="36" rx="8" fill="none" stroke="#ff00d4" stroke-width="2"/>
                  <text x="130" y="134" fill="#ff00d4" font-size="13" text-anchor="middle" font-weight="700">n + 2</text>
                  <text x="130" y="147" fill="#e8eeff" font-size="8.5" text-anchor="middle">Faces</text>
                  <line x1="130" y1="103" x2="130" y2="116" stroke="#ff00d4" stroke-width="1.2" stroke-dasharray="3,2"/>
                </svg>`
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
                 </table>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Line chart: Arestas(3n), Vértices(2n), Faces(n+2) for n=3..6 -->
                  <!-- Axes -->
                  <line x1="40" y1="130" x2="240" y2="130" stroke="#e8eeff" stroke-width="1" opacity="0.5"/>
                  <line x1="40" y1="20" x2="40" y2="130" stroke="#e8eeff" stroke-width="1" opacity="0.5"/>
                  <!-- X labels: n=3,4,5,6 -->
                  <text x="80" y="143" fill="#e8eeff" font-size="9" text-anchor="middle">n=3</text>
                  <text x="130" y="143" fill="#e8eeff" font-size="9" text-anchor="middle">n=4</text>
                  <text x="180" y="143" fill="#e8eeff" font-size="9" text-anchor="middle">n=5</text>
                  <text x="230" y="143" fill="#e8eeff" font-size="9" text-anchor="middle">n=6</text>
                  <!-- scale: max=18 → maps to y=20; 0 → y=130; step = 110/18 ≈ 6.1 -->
                  <!-- Arestas 3n: 9,12,15,18 → y: 130-9*6.1=75, 130-12*6.1=57, 130-15*6.1=39, 130-18*6.1=20 -->
                  <polyline points="80,75 130,57 180,39 230,20" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <text x="235" y="18" fill="#00f0ff" font-size="8.5">3n</text>
                  <!-- Vértices 2n: 6,8,10,12 → y: 130-6*6.1=93, 130-8*6.1=81, 130-10*6.1=69, 130-12*6.1=57 -->
                  <polyline points="80,93 130,81 180,69 230,57" fill="none" stroke="#a3ff12" stroke-width="2"/>
                  <text x="235" y="55" fill="#a3ff12" font-size="8.5">2n</text>
                  <!-- Faces n+2: 5,6,7,8 → y: 130-5*6.1=99.5, 130-6*6.1=93.4, 130-7*6.1=87.3, 130-8*6.1=81.2 -->
                  <polyline points="80,100 130,94 180,88 230,82" fill="none" stroke="#ff00d4" stroke-width="2"/>
                  <text x="235" y="80" fill="#ff00d4" font-size="8.5">n+2</text>
                  <!-- dots -->
                  <circle cx="80" cy="75" r="3" fill="#00f0ff"/>
                  <circle cx="130" cy="57" r="3" fill="#00f0ff"/>
                  <circle cx="180" cy="39" r="3" fill="#00f0ff"/>
                  <circle cx="230" cy="20" r="3" fill="#00f0ff"/>
                  <circle cx="80" cy="93" r="3" fill="#a3ff12"/>
                  <circle cx="130" cy="81" r="3" fill="#a3ff12"/>
                  <circle cx="180" cy="69" r="3" fill="#a3ff12"/>
                  <circle cx="230" cy="57" r="3" fill="#a3ff12"/>
                  <circle cx="80" cy="100" r="3" fill="#ff00d4"/>
                  <circle cx="130" cy="94" r="3" fill="#ff00d4"/>
                  <circle cx="180" cy="88" r="3" fill="#ff00d4"/>
                  <circle cx="230" cy="82" r="3" fill="#ff00d4"/>
                  <text x="40" y="15" fill="#e8eeff" font-size="9">Nº</text>
                </svg>`
        },
        {
          title: "🧩 Aplicações dos exercícios",
          body: `<p><strong>Pergunta 4 (pág. 65):</strong> "Será possível construir um prisma com 11 vértices?"</p>
                 <p>Como o número de vértices é sempre <strong>2n</strong>, é sempre <strong>par</strong>. 11 é ímpar → <strong>impossível</strong>! Um prisma só pode ter 4, 6, 8, 10, 12, 14... vértices.</p>

                 <p><strong>Pergunta 5 (pág. 65):</strong> "Quantas arestas tem um prisma cujas bases são polígonos com 50 lados?"</p>
                 <p>n = 50 → arestas = 3 × 50 = <strong>150 arestas</strong>.</p>

                 <p><strong>Pergunta 3 (pág. 65):</strong> "Qual é o número mínimo de vértices de um prisma?"</p>
                 <p>O menor polígono é o triângulo (n = 3) → 2 × 3 = <strong>6 vértices</strong>. É a resposta!</p>

                 <div class="cuidado">⚠️ Atenção: <strong>n é o número de lados da base</strong>, não o número de faces do sólido inteiro!</div>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Q: 11 vértices? -->
                  <rect x="10" y="12" width="110" height="58" rx="8" fill="none" stroke="#ff00d4" stroke-width="1.8"/>
                  <text x="65" y="30" fill="#e8eeff" font-size="9" text-anchor="middle">11 vértices?</text>
                  <text x="65" y="45" fill="#e8eeff" font-size="9" text-anchor="middle">2n → sempre par</text>
                  <text x="65" y="58" fill="#ff00d4" font-size="11" text-anchor="middle" font-weight="700">✗ impossível</text>
                  <!-- sequence: 4,6,8,10,12... -->
                  <text x="65" y="80" fill="#e8eeff" font-size="8.5" text-anchor="middle">4, 6, 8, 10, 12...</text>
                  <!-- Q: n=50 arestas? -->
                  <rect x="140" y="12" width="110" height="58" rx="8" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <text x="195" y="30" fill="#e8eeff" font-size="9" text-anchor="middle">n = 50</text>
                  <text x="195" y="44" fill="#e8eeff" font-size="9" text-anchor="middle">Arestas = 3 × 50</text>
                  <text x="195" y="60" fill="#00f0ff" font-size="12" text-anchor="middle" font-weight="700">= 150</text>
                  <!-- Q: mínimo vértices -->
                  <rect x="75" y="95" width="110" height="52" rx="8" fill="none" stroke="#a3ff12" stroke-width="1.8"/>
                  <text x="130" y="112" fill="#e8eeff" font-size="9" text-anchor="middle">mínimo: n=3 (triângulo)</text>
                  <text x="130" y="127" fill="#e8eeff" font-size="9" text-anchor="middle">2 × 3 =</text>
                  <text x="176" y="127" fill="#a3ff12" font-size="12" font-weight="700">6</text>
                  <text x="130" y="140" fill="#a3ff12" font-size="9" text-anchor="middle">vértices (mínimo!)</text>
                </svg>`
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
                 <p>Como caso particular, o cubo é também um <strong>paralelepípedo retângulo</strong> (com largura = comprimento = altura).</p>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Cubo isométrico grande -->
                  <polygon points="55,50 145,50 145,140 55,140" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <polygon points="55,50 80,28 170,28 145,50" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <polygon points="145,50 170,28 170,118 145,140" fill="none" stroke="#00f0ff" stroke-width="2"/>
                  <!-- tick marks: all edges equal -->
                  <line x1="98" y1="50" x2="101" y2="47" stroke="#ffd83d" stroke-width="1.5"/>
                  <line x1="102" y1="50" x2="105" y2="47" stroke="#ffd83d" stroke-width="1.5"/>
                  <line x1="55" y1="95" x2="59" y2="95" stroke="#ffd83d" stroke-width="1.5"/>
                  <line x1="55" y1="99" x2="59" y2="99" stroke="#ffd83d" stroke-width="1.5"/>
                  <!-- Labels -->
                  <text x="175" y="45" fill="#ffd83d" font-size="9">6 faces iguais</text>
                  <text x="175" y="58" fill="#00f0ff" font-size="9">12 arestas iguais</text>
                  <text x="175" y="71" fill="#a3ff12" font-size="9">8 vértices</text>
                  <!-- Face count dots -->
                  <text x="100" y="100" fill="#00f0ff" font-size="9" text-anchor="middle">face</text>
                  <!-- aresta label with arrow -->
                  <line x1="145" y1="95" x2="175" y2="85" stroke="#00f0ff" stroke-width="0.8"/>
                  <!-- vértice dot -->
                  <circle cx="145" cy="50" r="4" fill="#a3ff12"/>
                  <line x1="149" y1="46" x2="175" y2="68" stroke="#a3ff12" stroke-width="0.8"/>
                </svg>`
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
                 </ul>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Paralelepípedo retângulo isométrico -->
                  <polygon points="30,55 130,55 130,130 30,130" fill="none" stroke="#ffd83d" stroke-width="2"/>
                  <polygon points="30,55 55,38 155,38 130,55" fill="none" stroke="#ffd83d" stroke-width="2"/>
                  <polygon points="130,55 155,38 155,113 130,130" fill="none" stroke="#ffd83d" stroke-width="2"/>
                  <!-- dimension arrows -->
                  <!-- comprimento: bottom edge -->
                  <line x1="30" y1="138" x2="130" y2="138" stroke="#00f0ff" stroke-width="1.5"/>
                  <line x1="30" y1="135" x2="30" y2="141" stroke="#00f0ff" stroke-width="1.5"/>
                  <line x1="130" y1="135" x2="130" y2="141" stroke="#00f0ff" stroke-width="1.5"/>
                  <text x="80" y="150" fill="#00f0ff" font-size="8.5" text-anchor="middle">comprimento</text>
                  <!-- altura: left edge -->
                  <line x1="18" y1="55" x2="18" y2="130" stroke="#a3ff12" stroke-width="1.5"/>
                  <line x1="15" y1="55" x2="21" y2="55" stroke="#a3ff12" stroke-width="1.5"/>
                  <line x1="15" y1="130" x2="21" y2="130" stroke="#a3ff12" stroke-width="1.5"/>
                  <text x="12" y="96" fill="#a3ff12" font-size="8.5" text-anchor="middle" transform="rotate(-90, 12, 96)">altura</text>
                  <!-- largura: top-right diagonal edge -->
                  <line x1="130" y1="32" x2="155" y2="32" stroke="#ff00d4" stroke-width="1.5"/>
                  <text x="160" y="35" fill="#ff00d4" font-size="8.5">largura</text>
                  <!-- 3 pairs note -->
                  <text x="175" y="65" fill="#e8eeff" font-size="8.5">3 pares de</text>
                  <text x="175" y="76" fill="#e8eeff" font-size="8.5">faces iguais</text>
                  <text x="175" y="90" fill="#ffd83d" font-size="8.5">6 faces</text>
                  <text x="175" y="102" fill="#ffd83d" font-size="8.5">12 arestas</text>
                  <text x="175" y="114" fill="#ffd83d" font-size="8.5">8 vértices</text>
                </svg>`
        },
        {
          title: "🧮 Problemas com somas de arestas",
          body: `<p>Um cubo tem <strong>12 arestas todas iguais</strong>. Se nos disserem que a soma de todas as arestas é, por exemplo, <strong>72 cm</strong>, então cada aresta mede:</p>
                 <div class="highlight">72 ÷ 12 = <strong>6 cm</strong></div>
                 <p>Num paralelepípedo retângulo, há <strong>4 arestas iguais</strong> de cada uma das 3 dimensões. Total: 4×(comprimento + largura + altura).</p>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- Cubo com arestas coloridas por grupo -->
                  <!-- 4 arestas verticais -->
                  <line x1="50" y1="45" x2="50" y2="115" stroke="#ff00d4" stroke-width="3"/>
                  <line x1="120" y1="45" x2="120" y2="115" stroke="#ff00d4" stroke-width="3"/>
                  <line x1="70" y1="28" x2="70" y2="98" stroke="#ff00d4" stroke-width="3" stroke-dasharray="5,3"/>
                  <line x1="140" y1="28" x2="140" y2="98" stroke="#ff00d4" stroke-width="3"/>
                  <!-- 4 arestas horizontais (frente/trás topo/base) -->
                  <line x1="50" y1="45" x2="120" y2="45" stroke="#00f0ff" stroke-width="3"/>
                  <line x1="50" y1="115" x2="120" y2="115" stroke="#00f0ff" stroke-width="3"/>
                  <line x1="70" y1="28" x2="140" y2="28" stroke="#00f0ff" stroke-width="3" stroke-dasharray="5,3"/>
                  <line x1="70" y1="98" x2="140" y2="98" stroke="#00f0ff" stroke-width="3" stroke-dasharray="5,3"/>
                  <!-- 4 arestas profundidade -->
                  <line x1="50" y1="45" x2="70" y2="28" stroke="#a3ff12" stroke-width="3"/>
                  <line x1="120" y1="45" x2="140" y2="28" stroke="#a3ff12" stroke-width="3"/>
                  <line x1="50" y1="115" x2="70" y2="98" stroke="#a3ff12" stroke-width="3" stroke-dasharray="5,3"/>
                  <line x1="120" y1="115" x2="140" y2="98" stroke="#a3ff12" stroke-width="3"/>
                  <!-- Formula box -->
                  <rect x="155" y="35" width="98" height="82" rx="8" fill="none" stroke="#ffd83d" stroke-width="1.5"/>
                  <text x="204" y="55" fill="#ffd83d" font-size="10" text-anchor="middle" font-weight="700">Cubo:</text>
                  <text x="204" y="70" fill="#e8eeff" font-size="9" text-anchor="middle">12 arestas iguais</text>
                  <text x="204" y="85" fill="#e8eeff" font-size="9" text-anchor="middle">72 ÷ 12 =</text>
                  <text x="204" y="100" fill="#00f0ff" font-size="14" text-anchor="middle" font-weight="700">6 cm</text>
                  <text x="204" y="113" fill="#a3ff12" font-size="8" text-anchor="middle">cada aresta</text>
                </svg>`
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
                 <p>Total <strong>com chocolate</strong> = 8 + 8 + 9 = <strong>25 cubinhos</strong>.<br>Total <strong>sem chocolate</strong> = 27 − 25 = <strong>2 cubinhos</strong>.</p>`,
          svg: `<svg class="content-svg" viewBox="0 0 260 155" width="260" height="155" aria-hidden="true">
                  <!-- 3x3 grid representing layers -->
                  <!-- Camada 1 (baixo) -->
                  <text x="18" y="25" fill="#e8eeff" font-size="8.5" font-weight="700">C1 (baixo)</text>
                  <text x="18" y="36" fill="#a3ff12" font-size="8">8 choc + 1 sem</text>
                  <!-- 3x3 grid C1: 8 filled, 1 empty -->
                  <rect x="10" y="40" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="28" y="40" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="46" y="40" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="10" y="58" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="28" y="58" width="16" height="16" fill="none" stroke="#e8eeff" stroke-width="1.5" rx="2"/>
                  <rect x="46" y="58" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="10" y="76" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="28" y="76" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="46" y="76" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <!-- Camada 2 (meio) -->
                  <text x="82" y="25" fill="#e8eeff" font-size="8.5" font-weight="700">C2 (meio)</text>
                  <text x="82" y="36" fill="#a3ff12" font-size="8">8 choc + 1 sem</text>
                  <rect x="74" y="40" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="92" y="40" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="110" y="40" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="74" y="58" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="92" y="58" width="16" height="16" fill="none" stroke="#e8eeff" stroke-width="1.5" rx="2"/>
                  <rect x="110" y="58" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="74" y="76" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="92" y="76" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="110" y="76" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <!-- Camada 3 (topo) -->
                  <text x="146" y="25" fill="#e8eeff" font-size="8.5" font-weight="700">C3 (topo)</text>
                  <text x="146" y="36" fill="#a3ff12" font-size="8">9 com choc!</text>
                  <rect x="138" y="40" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="156" y="40" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="174" y="40" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="138" y="58" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="156" y="58" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="174" y="58" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="138" y="76" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="156" y="76" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <rect x="174" y="76" width="16" height="16" fill="#ffd83d" rx="2"/>
                  <!-- Result -->
                  <rect x="200" y="38" width="55" height="68" rx="8" fill="none" stroke="#00f0ff" stroke-width="1.8"/>
                  <text x="227" y="58" fill="#ffd83d" font-size="9" text-anchor="middle">8+8+9</text>
                  <text x="227" y="73" fill="#00f0ff" font-size="14" text-anchor="middle" font-weight="700">=25</text>
                  <text x="227" y="87" fill="#e8eeff" font-size="8" text-anchor="middle">com choc</text>
                  <text x="227" y="98" fill="#ff00d4" font-size="11" text-anchor="middle" font-weight="700">2 sem</text>
                  <!-- legend -->
                  <rect x="10" y="108" width="12" height="12" fill="#ffd83d" rx="2"/>
                  <text x="26" y="119" fill="#e8eeff" font-size="8.5">com chocolate</text>
                  <rect x="90" y="108" width="12" height="12" fill="none" stroke="#e8eeff" stroke-width="1.5" rx="2"/>
                  <text x="106" y="119" fill="#e8eeff" font-size="8.5">sem chocolate</text>
                </svg>`
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
