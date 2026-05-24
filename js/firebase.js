/* ============================================================
   firebase.js — Inicialização Firebase + autenticação manual
   Expõe:
     window.FirebaseReady  — Promise que resolve quando Firestore está pronto
     window.FirebaseAuth   — { login, logout, currentUser }
   ============================================================ */

(function () {
  "use strict";

  const LS_KEY = "mathRoyale.user";

  // Promise pública — resolve com db quando Firestore estiver pronto,
  // ou resolve com null se falhar (modo offline)
  let _resolveReady;
  window.FirebaseReady = new Promise(function (resolve) {
    _resolveReady = resolve;
  });

  // Referência global ao db — preenchida após init
  window._FirebaseDB = null;

  // ---- Config Firebase ----
  const firebaseConfig = {
    apiKey: "AIzaSyCqN1ErjgBALaSkktl-SvldXJdR4Nmw5OA",
    authDomain: "matematica-royale.firebaseapp.com",
    projectId: "matematica-royale",
    storageBucket: "matematica-royale.firebasestorage.app",
    messagingSenderId: "367681819550",
    appId: "1:367681819550:web:66c0811a50231cff293c8f"
  };

  // ---- Importação dinâmica via CDN module ----
  const BASE = "https://www.gstatic.com/firebasejs/10.12.2";

  Promise.all([
    import(BASE + "/firebase-app.js"),
    import(BASE + "/firebase-firestore.js")
  ]).then(function (mods) {
    var appMod = mods[0];
    var fsMod  = mods[1];

    var app = appMod.initializeApp(firebaseConfig);
    var db  = fsMod.getFirestore(app);

    window._FirebaseDB = db;
    // Expor as funções do SDK que firebase-sync.js e admin.js precisam
    window._FirestoreSDK = {
      doc:             fsMod.doc,
      collection:      fsMod.collection,
      query:           fsMod.query,
      where:           fsMod.where,
      orderBy:         fsMod.orderBy,
      limit:           fsMod.limit,
      getDoc:          fsMod.getDoc,
      getDocs:         fsMod.getDocs,
      setDoc:          fsMod.setDoc,
      updateDoc:       fsMod.updateDoc,
      serverTimestamp: fsMod.serverTimestamp
    };

    _resolveReady(db);
  }).catch(function (err) {
    console.warn("[Firebase] Falha ao carregar SDK — modo offline.", err);
    _resolveReady(null);
  });

  // ---- Auth ----
  const FirebaseAuth = {

    // Lê utilizador do localStorage
    currentUser: function () {
      try {
        const raw = localStorage.getItem(LS_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },

    // login(username, pin) → Promise<{ ok, user, error }>
    login: function (username, pin) {
      username = (username || "").trim().toLowerCase();
      pin = (pin || "").trim();

      if (!username || !pin) {
        return Promise.resolve({ ok: false, error: "Preenche o nome e o PIN." });
      }

      return window.FirebaseReady.then(function (db) {
        if (!db) {
          // Offline: aceitar qualquer utilizador guardado no LS
          const cached = FirebaseAuth.currentUser();
          if (cached && cached.username === username) {
            return { ok: true, user: cached };
          }
          // Offline sem cache: permitir login simplificado
          const user = { username: username, role: "player" };
          try { localStorage.setItem(LS_KEY, JSON.stringify(user)); } catch (_) {}
          return { ok: true, user: user };
        }

        const sdk = window._FirestoreSDK;
        const docRef = sdk.doc(db, "users", username);

        return sdk.getDoc(docRef).then(function (snap) {
          if (snap.exists()) {
            const data = snap.data();
            if (String(data.pin) !== String(pin)) {
              return { ok: false, error: "PIN incorreto." };
            }
            const user = { username: username, role: data.role || "player" };
            try { localStorage.setItem(LS_KEY, JSON.stringify(user)); } catch (_) {}
            // Atualizar lastLogin
            sdk.updateDoc(docRef, { lastLogin: sdk.serverTimestamp ? sdk.serverTimestamp() : Date.now() }).catch(function () {});
            return { ok: true, user: user };
          } else {
            // Criar novo utilizador
            const newUser = {
              name: username,
              pin: pin,
              createdAt: Date.now(),
              role: "player"
            };
            return sdk.setDoc(docRef, newUser).then(function () {
              const user = { username: username, role: "player" };
              try { localStorage.setItem(LS_KEY, JSON.stringify(user)); } catch (_) {}
              return { ok: true, user: user };
            });
          }
        });
      }).catch(function (err) {
        console.warn("[FirebaseAuth] Erro login:", err);
        // Fallback offline
        const user = { username: username, role: "player" };
        try { localStorage.setItem(LS_KEY, JSON.stringify(user)); } catch (_) {}
        return { ok: true, user: user };
      });
    },

    // logout() — limpa LS e redireciona para o ecrã de login
    logout: function () {
      try { localStorage.removeItem(LS_KEY); } catch (_) {}
      // O router vai mostrar o ecrã de login
      if (window.Router) {
        Router.navigate("login");
      } else {
        window.location.reload();
      }
    }
  };

  window.FirebaseAuth = FirebaseAuth;
})();
