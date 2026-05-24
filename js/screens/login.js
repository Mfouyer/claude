/* ============================================================
   login.js — Ecrã de login cyberpunk
   Expõe window.LoginScreen = { render(host) }
   ============================================================ */

(function () {
  "use strict";

  function render(host) {
    host.innerHTML = `
      <section class="screen login-screen">
        <div class="login-logo">
          <div class="login-logo-icon">∑</div>
          <h1 class="login-title">MatemáticaRoyale</h1>
          <p class="login-sub">Identifica-te para continuar</p>
        </div>

        <form class="login-form card" id="login-form" novalidate autocomplete="off">
          <div class="login-field">
            <label class="login-label" for="login-name">Nome do Jogador</label>
            <input
              class="login-input"
              type="text"
              id="login-name"
              name="username"
              placeholder="lucas"
              autocapitalize="none"
              autocorrect="off"
              spellcheck="false"
              maxlength="32"
            />
          </div>

          <div class="login-field">
            <label class="login-label" for="login-pin">PIN (4 dígitos)</label>
            <div class="pin-inputs" id="pin-inputs">
              <input class="pin-digit" type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" data-pos="0" aria-label="PIN dígito 1" />
              <input class="pin-digit" type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" data-pos="1" aria-label="PIN dígito 2" />
              <input class="pin-digit" type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" data-pos="2" aria-label="PIN dígito 3" />
              <input class="pin-digit" type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" data-pos="3" aria-label="PIN dígito 4" />
            </div>
          </div>

          <div class="login-error" id="login-error" hidden></div>

          <button class="btn btn-primary btn-block" type="submit" id="login-btn">
            Entrar
          </button>
        </form>

        <p class="login-hint">Novo jogador? O teu perfil é criado automaticamente.</p>
      </section>
    `;

    const form      = host.querySelector("#login-form");
    const nameInput = host.querySelector("#login-name");
    const pinInputs = host.querySelectorAll(".pin-digit");
    const errorEl   = host.querySelector("#login-error");
    const submitBtn = host.querySelector("#login-btn");

    // Foco automático no campo nome
    setTimeout(function () { nameInput.focus(); }, 60);

    // PIN — navegação automática entre dígitos
    pinInputs.forEach(function (input, idx) {
      input.addEventListener("input", function () {
        // Aceitar só dígito, limpar o resto
        input.value = input.value.replace(/\D/g, "").slice(-1);
        if (input.value && idx < pinInputs.length - 1) {
          pinInputs[idx + 1].focus();
        }
      });

      input.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !input.value && idx > 0) {
          pinInputs[idx - 1].focus();
          pinInputs[idx - 1].value = "";
        }
        if (e.key === "Enter") {
          e.preventDefault();
          submitBtn.click();
        }
      });

      input.addEventListener("paste", function (e) {
        e.preventDefault();
        var pasted = (e.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "");
        pinInputs.forEach(function (inp, i) {
          inp.value = pasted[i] || "";
        });
        if (pasted.length > 0) pinInputs[Math.min(pasted.length, pinInputs.length) - 1].focus();
      });
    });

    // Navegar dos campos de nome para o PIN com Tab/Enter
    nameInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        pinInputs[0].focus();
      }
    });

    function showError(msg) {
      errorEl.textContent = msg;
      errorEl.hidden = false;
      errorEl.style.animation = "none";
      void errorEl.offsetWidth;
      errorEl.style.animation = "";
    }

    function hideError() {
      errorEl.hidden = true;
    }

    function getPIN() {
      return Array.from(pinInputs).map(function (inp) { return inp.value; }).join("");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      hideError();

      var username = nameInput.value.trim();
      var pin = getPIN();

      if (!username) {
        showError("Escreve o teu nome de jogador.");
        nameInput.focus();
        return;
      }
      if (pin.length !== 4) {
        showError("O PIN deve ter exatamente 4 dígitos.");
        pinInputs[0].focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "A entrar...";

      window.FirebaseAuth.login(username, pin).then(function (result) {
        if (result.ok) {
          // Login com sucesso — arrancar jogo normalmente
          if (window.AppStart) {
            window.AppStart();
          } else {
            Router.navigate("splash", { hasProgress: false });
          }
        } else {
          showError(result.error || "Erro ao entrar. Tenta novamente.");
          submitBtn.disabled = false;
          submitBtn.textContent = "Entrar";
        }
      }).catch(function () {
        showError("Erro de ligação. Tenta novamente.");
        submitBtn.disabled = false;
        submitBtn.textContent = "Entrar";
      });
    });
  }

  window.Screens = window.Screens || {};
  window.Screens.login = { render: render };
  window.LoginScreen = { render: render };
})();
