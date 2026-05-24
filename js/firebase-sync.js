/* ============================================================
   firebase-sync.js — Sincronização de sessões e progresso
   Expõe window.FirebaseSync com:
     startSession(username, themeId)
     recordAnswer(correct, questionText, themeId)
     endSession()
     syncProgress(username)
   Falha silenciosamente se Firebase offline.
   ============================================================ */

(function () {
  "use strict";

  let _activeSessionId = null;
  let _sessionData = null;

  function db() { return window._FirebaseDB || null; }
  function sdk() { return window._FirestoreSDK || null; }

  function isReady() {
    return !!(db() && sdk());
  }

  // Gera ID de sessão simples
  function genId() {
    return Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
  }

  const FirebaseSync = {

    // Inicia uma nova sessão de jogo
    startSession: function (username, themeId) {
      _activeSessionId = genId();
      _sessionData = {
        username: username || "unknown",
        themeId: themeId || null,
        startTime: Date.now(),
        questionsAnswered: 0,
        questionsCorrect: 0,
        questionsWrong: 0,
        xpGained: 0
      };

      if (!isReady()) return;

      var s = sdk();
      var d = db();
      var docRef = s.doc(d, "sessions", _activeSessionId);
      s.setDoc(docRef, Object.assign({}, _sessionData, {
        startTime: s.serverTimestamp ? s.serverTimestamp() : _sessionData.startTime,
        endTime: null,
        durationSeconds: null
      })).catch(function (err) {
        console.warn("[FirebaseSync] Erro ao criar sessão:", err);
      });
    },

    // Regista uma resposta na sessão activa
    recordAnswer: function (correct, questionText, themeId) {
      if (!_sessionData) return;

      _sessionData.questionsAnswered += 1;
      if (correct) {
        _sessionData.questionsCorrect += 1;
        _sessionData.xpGained += 20;
      } else {
        _sessionData.questionsWrong += 1;
        _sessionData.xpGained += 5;
      }

      if (!isReady() || !_activeSessionId) return;

      var s = sdk();
      var d = db();
      var docRef = s.doc(d, "sessions", _activeSessionId);

      var update = {
        questionsAnswered: _sessionData.questionsAnswered,
        questionsCorrect:  _sessionData.questionsCorrect,
        questionsWrong:    _sessionData.questionsWrong,
        xpGained:          _sessionData.xpGained
      };

      // Guardar pergunta errada para o top-5
      if (!correct && questionText) {
        update.lastWrongQuestion = questionText;
      }

      s.updateDoc(docRef, update).catch(function (err) {
        console.warn("[FirebaseSync] Erro ao registar resposta:", err);
      });
    },

    // Termina a sessão activa
    endSession: function () {
      if (!_sessionData || !_activeSessionId) return;

      var now = Date.now();
      var duration = Math.round((now - _sessionData.startTime) / 1000);
      var sid = _activeSessionId;
      var sd  = Object.assign({}, _sessionData);

      _activeSessionId = null;
      _sessionData = null;

      if (!isReady()) return;

      var s = sdk();
      var d = db();
      var docRef = s.doc(d, "sessions", sid);

      s.updateDoc(docRef, {
        endTime: s.serverTimestamp ? s.serverTimestamp() : now,
        durationSeconds: duration
      }).then(function () {
        // Sincronizar progresso após fechar sessão
        return FirebaseSync.syncProgress(sd.username);
      }).catch(function (err) {
        console.warn("[FirebaseSync] Erro ao terminar sessão:", err);
      });
    },

    // Agrega sessões e escreve progress/{username}
    syncProgress: function (username) {
      if (!isReady() || !username) return Promise.resolve();

      var s = sdk();
      var d = db();

      // Ler todas as sessões do utilizador
      var sessionsRef = s.collection(d, "sessions");
      var q = s.query(sessionsRef, s.where("username", "==", username));

      return s.getDocs(q).then(function (snap) {
        var totalSessions    = 0;
        var totalTimeSeconds = 0;
        var totalCorrect     = 0;
        var totalWrong       = 0;
        var themeStats       = { t1: 0, t2: 0, t3: 0, t4: 0, t5: 0, t6: 0, t7: 0 };
        var wrongMap         = {}; // questionText → count
        var lastSession      = null;

        snap.forEach(function (docSnap) {
          var data = docSnap.data();
          if (!data.endTime) return; // sessão ainda em curso

          totalSessions    += 1;
          totalTimeSeconds += data.durationSeconds || 0;
          totalCorrect     += data.questionsCorrect || 0;
          totalWrong       += data.questionsWrong || 0;

          // Acumular por tema
          if (data.themeId && themeStats.hasOwnProperty(data.themeId)) {
            themeStats[data.themeId] += data.questionsAnswered || 0;
          }

          // Rastrear última sessão (pelo startTime numérico)
          var st = typeof data.startTime === "number" ? data.startTime :
                   (data.startTime && data.startTime.toMillis ? data.startTime.toMillis() : 0);
          if (!lastSession || st > lastSession.ts) {
            lastSession = { ts: st, themeId: data.themeId, correct: data.questionsCorrect || 0, wrong: data.questionsWrong || 0 };
          }

          // Perguntas erradas
          if (data.lastWrongQuestion) {
            wrongMap[data.lastWrongQuestion] = (wrongMap[data.lastWrongQuestion] || 0) + 1;
          }
        });

        // Top-5 perguntas mais erradas
        var wrongArr = Object.keys(wrongMap).map(function (k) {
          return { question: k, count: wrongMap[k] };
        });
        wrongArr.sort(function (a, b) { return b.count - a.count; });
        var top5Wrong = wrongArr.slice(0, 5);

        var progressRef = s.doc(d, "progress", username);
        return s.setDoc(progressRef, {
          totalSessions:    totalSessions,
          totalTimeSeconds: totalTimeSeconds,
          totalCorrect:     totalCorrect,
          totalWrong:       totalWrong,
          themeStats:       themeStats,
          wrongQuestions:   top5Wrong,
          lastSession:      lastSession,
          updatedAt:        Date.now()
        });
      }).catch(function (err) {
        console.warn("[FirebaseSync] Erro ao sincronizar progresso:", err);
      });
    }
  };

  window.FirebaseSync = FirebaseSync;
})();
