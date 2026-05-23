/* ============================================================
   scene3d.js — Ilustrações 3D com Three.js (CDN)
   Cria mini-cenas 3D temáticas nos ecrãs de conteúdo.
   Cada tema tem um ou mais objetos 3D rotativos.
   ============================================================ */
(function () {
  "use strict";

  // Paleta neon (mesma do CSS)
  const CYAN    = 0x00f0ff;
  const MAGENTA = 0xff00d4;
  const LIME    = 0xa3ff12;
  const PURPLE  = 0x8b5cf6;
  const BLUE    = 0x4d6fff;
  const WHITE   = 0xe8eeff;

  // Materiais base
  function wireMat(color) {
    return new THREE.MeshBasicMaterial({ color, wireframe: true });
  }
  function neonMat(color, opacity) {
    return new THREE.MeshPhongMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: opacity || 0.85,
      shininess: 100
    });
  }
  function edgeMat(color) {
    return new THREE.LineBasicMaterial({ color, linewidth: 2 });
  }

  // Cria arestas (wireframe limpo) a partir de geometria
  function makeEdges(geo, color) {
    const edges = new THREE.EdgesGeometry(geo);
    return new THREE.LineSegments(edges, edgeMat(color));
  }

  // Renderer partilhado — cada canvas tem o seu
  function createRenderer(canvas, w, h) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    return renderer;
  }

  // Camera ortho-style perspectiva
  function createCamera(w, h) {
    const cam = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    cam.position.set(3, 2.5, 4);
    cam.lookAt(0, 0, 0);
    return cam;
  }

  // Luzes
  function addLights(scene) {
    const ambient = new THREE.AmbientLight(0x222244, 1.2);
    scene.add(ambient);
    const pt1 = new THREE.PointLight(CYAN, 1.5, 20);
    pt1.position.set(4, 4, 4);
    scene.add(pt1);
    const pt2 = new THREE.PointLight(MAGENTA, 0.8, 20);
    pt2.position.set(-4, -2, -2);
    scene.add(pt2);
  }

  /* ─────────────────────────────────────────────
     BUILDERS — um por tema
     ─────────────────────────────────────────────*/

  // T1 — Triângulos: triângulo 2D rotativo + etiquetas de ângulo
  function buildT1(scene) {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.5);
    shape.lineTo(-1.3, -0.9);
    shape.lineTo(1.3, -0.9);
    shape.closePath();
    const geo = new THREE.ShapeGeometry(shape);
    const face = new THREE.Mesh(geo, neonMat(CYAN, 0.18));
    scene.add(face);
    const edges = makeEdges(new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 1.5, 0),
      new THREE.Vector3(-1.3, -0.9, 0),
      new THREE.Vector3(1.3, -0.9, 0),
      new THREE.Vector3(0, 1.5, 0)
    ]), CYAN);
    scene.add(edges);

    // Segundo triângulo — isósceles, ligeiramente atrás
    const shape2 = new THREE.Shape();
    shape2.moveTo(0, 2.0);
    shape2.lineTo(-0.9, -0.6);
    shape2.lineTo(0.9, -0.6);
    shape2.closePath();
    const geo2 = new THREE.ShapeGeometry(shape2);
    const face2 = new THREE.Mesh(geo2, neonMat(MAGENTA, 0.10));
    face2.position.z = -0.5;
    face2.position.x = 0.5;
    scene.add(face2);

    return { rotY: 0.008, rotX: 0.003 };
  }

  // T2/T3 — Sólidos Geométricos: conjunto de sólidos
  function buildSolids(scene) {
    const group = new THREE.Group();

    // Cubo central
    const cubeGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const cubeFace = new THREE.Mesh(cubeGeo, neonMat(BLUE, 0.22));
    const cubeEdge = makeEdges(cubeGeo, CYAN);
    group.add(cubeFace, cubeEdge);

    // Esfera à direita
    const sphGeo = new THREE.SphereGeometry(0.7, 16, 12);
    const sphFace = new THREE.Mesh(sphGeo, neonMat(MAGENTA, 0.18));
    sphFace.position.set(2.4, 0, 0);
    const sphEdge = makeEdges(sphGeo, MAGENTA);
    sphEdge.position.set(2.4, 0, 0);
    group.add(sphFace, sphEdge);

    // Cone à esquerda
    const coneGeo = new THREE.ConeGeometry(0.65, 1.5, 16);
    const coneFace = new THREE.Mesh(coneGeo, neonMat(LIME, 0.18));
    coneFace.position.set(-2.4, 0, 0);
    const coneEdge = makeEdges(coneGeo, LIME);
    coneEdge.position.set(-2.4, 0, 0);
    group.add(coneFace, coneEdge);

    scene.add(group);
    return { group, rotY: 0.010, rotX: 0.003 };
  }

  // T4 — Poliedros: diamante (octaedro) vs esfera
  function buildT4(scene) {
    // Octaedro = poliedro
    const octGeo = new THREE.OctahedronGeometry(1.2);
    const octFace = new THREE.Mesh(octGeo, neonMat(CYAN, 0.22));
    const octEdge = makeEdges(octGeo, CYAN);
    const polyGroup = new THREE.Group();
    polyGroup.add(octFace, octEdge);
    polyGroup.position.set(-1.5, 0, 0);
    scene.add(polyGroup);

    // Torus = não poliedro (superfície curva)
    const torGeo = new THREE.TorusGeometry(0.7, 0.25, 14, 28);
    const torFace = new THREE.Mesh(torGeo, neonMat(MAGENTA, 0.20));
    const torEdge = makeEdges(torGeo, MAGENTA);
    const npolyGroup = new THREE.Group();
    npolyGroup.add(torFace, torEdge);
    npolyGroup.position.set(1.5, 0, 0);
    scene.add(npolyGroup);

    return { groups: [polyGroup, npolyGroup], rotY: 0.009, rotX: 0.004 };
  }

  // T5/T6 — Prismas: um prisma triangular + prisma quadrangular
  function buildPrismas(scene) {
    // Prisma triangular
    const triPrismGeo = new THREE.CylinderGeometry(1, 1, 2, 3, 1);
    const triPrismFace = new THREE.Mesh(triPrismGeo, neonMat(BLUE, 0.22));
    const triPrismEdge = makeEdges(triPrismGeo, CYAN);
    const g1 = new THREE.Group();
    g1.add(triPrismFace, triPrismEdge);
    g1.position.set(-1.8, 0, 0);
    scene.add(g1);

    // Prisma hexagonal
    const hexPrismGeo = new THREE.CylinderGeometry(1, 1, 1.8, 6, 1);
    const hexPrismFace = new THREE.Mesh(hexPrismGeo, neonMat(PURPLE, 0.20));
    const hexPrismEdge = makeEdges(hexPrismGeo, MAGENTA);
    const g2 = new THREE.Group();
    g2.add(hexPrismFace, hexPrismEdge);
    g2.position.set(1.8, 0, 0);
    scene.add(g2);

    return { groups: [g1, g2], rotY: 0.008, rotX: 0.003 };
  }

  // T7 — Cubo & Paralelepípedo
  function buildCubeAndBox(scene) {
    // Cubo
    const cubeGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const cubeFace = new THREE.Mesh(cubeGeo, neonMat(CYAN, 0.20));
    const cubeEdge = makeEdges(cubeGeo, CYAN);
    const g1 = new THREE.Group();
    g1.add(cubeFace, cubeEdge);
    g1.position.set(-1.8, 0, 0);
    scene.add(g1);

    // Paralelepípedo retângulo
    const boxGeo = new THREE.BoxGeometry(2.2, 1.0, 1.2);
    const boxFace = new THREE.Mesh(boxGeo, neonMat(PURPLE, 0.20));
    const boxEdge = makeEdges(boxGeo, MAGENTA);
    const g2 = new THREE.Group();
    g2.add(boxFace, boxEdge);
    g2.position.set(1.8, 0, 0);
    scene.add(g2);

    return { groups: [g1, g2], rotY: 0.009, rotX: 0.004 };
  }

  /* ─────────────────────────────────────────────
     MAPA themeId → builder
     ─────────────────────────────────────────────*/
  const THEME_BUILDERS = {
    t1: buildT1,
    t2: buildSolids,
    t3: buildSolids,
    t4: buildT4,
    t5: buildPrismas,
    t6: buildPrismas,
    t7: buildCubeAndBox
  };

  /* ─────────────────────────────────────────────
     API pública — mount(container, themeId)
     container: elemento DOM onde inserir o canvas
     themeId: "t1".."t7"
     Retorna { destroy } para limpar quando o ecrã mudar
     ─────────────────────────────────────────────*/
  function mount(container, themeId) {
    if (typeof THREE === "undefined") return { destroy: () => {} };
    const builder = THEME_BUILDERS[themeId];
    if (!builder) return { destroy: () => {} };

    const W = Math.min(container.clientWidth || 320, 360);
    const H = Math.round(W * 0.55);

    const canvas = document.createElement("canvas");
    canvas.className = "scene-3d";
    canvas.width = W;
    canvas.height = H;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    container.appendChild(canvas);

    const renderer = createRenderer(canvas, W, H);
    const scene = new THREE.Scene();
    const camera = createCamera(W, H);
    addLights(scene);

    const result = builder(scene);
    let animId = null;
    let running = true;

    function tick() {
      if (!running) return;
      animId = requestAnimationFrame(tick);

      if (result.group) {
        result.group.rotation.y += result.rotY || 0.008;
        result.group.rotation.x += result.rotX || 0;
      }
      if (result.groups) {
        result.groups.forEach((g, i) => {
          g.rotation.y += (result.rotY || 0.008) * (i % 2 === 0 ? 1 : -1);
          g.rotation.x += (result.rotX || 0.003);
        });
      }
      // builder T1 usa scene directamente (shapes) — rotacionar a cena
      if (!result.group && !result.groups) {
        scene.rotation.y += result.rotY || 0.008;
      }

      renderer.render(scene, camera);
    }
    tick();

    return {
      destroy() {
        running = false;
        if (animId) cancelAnimationFrame(animId);
        renderer.dispose();
        canvas.remove();
      }
    };
  }

  window.Scene3D = { mount };
})();
