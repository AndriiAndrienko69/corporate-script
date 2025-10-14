(function () {
  function initRender() {
    // Read server-provided JSON data safely
    function getSuccessData() {
      const fromQuery = (key) => {
        try {
          const sp = new URLSearchParams(window.location.search || '');
          return sp.get(key) || '';
        } catch (_) { return ''; }
      };

      const el = document.getElementById('success-data');
      let data = { name: '', phone: '' };
      if (el) {
        try {
          data = Object.assign(data, JSON.parse(el.textContent || '{}'));
        } catch (_) {
          // ignore
        }
      }
      // Fallbacks from URL params if missing
      if (!data.name) data.name = fromQuery('name');
      if (!data.phone) data.phone = fromQuery('phone');
      return data;
    }

    // Escape text for injection into attributes/text nodes when using string HTML
    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    const data = getSuccessData();
    const name = escapeHtml(data.name || '');
    const phone = escapeHtml(data.phone || '');

    // Inject markup directly as in original structure
    const html = `
      <div id="particles-js"></div>
      <div class="container">
        <section class="success-header">
          <div class="icon">✅</div>
          <h1 id="thanks">Дякуємо за ваше замовлення!</h1>
          <hr>
          <div class="sub" id="contact">Ми отримали ваше замовлення, і воно обробляється.</div>
          <div class="sub" id="contact2">Спеціаліст зв’яжеться з вами найближчим часом.</div>
        </section>

        <section class="customer">
          <div class="customer-grid" id="customer-grid">
            <div class="pill">
              <svg viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.7-9.8 4.9v2.5h19.6v-2.5c0-3.2-6.5-4.9-9.8-4.9z" />
              </svg>
              <span id="name_display">${name}</span>
            </div>
            <div class="pill">
              <svg viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.2 2.3 3.2 4.3 5.5 5.5l1.8-1.8c.2-.2.6-.3.9-.2 1 .3 2 .5 3.1 .5.5 0 .9.4.9.9v3c0 .5-.4.9-.9.9C9.6 19.6 4.4 14.4 4.4 7.5c0-.5.4-.9.9-.9h3c.5 0 .9.4.9.9 0 1.1.2 2.1.5 3.1.1.3 0 .7-.2.9l-1.9 1.8z" />
              </svg>
              <span id="phone_display">${phone}</span>
            </div>
            <a href="#update-form" class="edit-link" id="edit-link">✏️ Редагувати</a>
          </div>
          <form class="form-edit" id="update-form" method="post" action="api.php?mode=update" style="display:none">
            <input type="text" name="name" value="${name}" placeholder="Ваше ім’я" required id="name_input" />
            <input type="tel" name="phone" value="${phone}" placeholder="Ваш телефон" required id="phone_input" />
            <button type="submit" id="update_btn">Оновити</button>
            <button type="button" id="confirm-ok-btn">Все вірно</button>
          </form>

          <div class="checkmark-success" id="checkmark-success">
            <div class="circle-bg">
              <svg class="checkmark" viewBox="0 0 40 40">
                <path d="M10 21 L18 29 L30 13"></path>
              </svg>
            </div>
          </div>
        </section>

        <section class="steps">
          <div class="step">
            <div class="icon">✔</div>
            <div>Перевірте правильність заповнення</div>
          </div>
          <div class="step">
            <div class="icon">✔</div>
            <div>Відповідайте на дзвінок нашого спеціаліста</div>
          </div>
          <div class="step">
            <div class="icon">✔</div>
            <div>Тримайте телефон поруч</div>
          </div>
          <div class="step">
            <div class="icon">✔</div>
            <div>Дзвінок може бути з невідомого номера</div>
          </div>
        </section>

        <div class="badges">
          <img src="data:image/png;base64,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==" alt="Badges" />
        </div>

        <div class="notice" id="notice">
          <svg viewBox="0 0 24 24">
            <path d="M1 21h22L12 2 1 21zM12 16v-4h0v4zm0 4h0v-2h0v2z" />
          </svg>
          ⚠️ Не пропустіть дзвінок! Будь ласка, тримайте телефон поруч та вимкніть беззвучний режим.
        </div>
      </div>
    `;

    // Insert at the very top of body to mirror original markup position
    document.body.insertAdjacentHTML('afterbegin', html);

    // Wire up small interactions after insertion
    const editLink = document.getElementById('edit-link');
    const form = document.getElementById('update-form');
    const nameInput = form ? form.querySelector('#name_input') : null;
    const phoneInput = form ? form.querySelector('#phone_input') : null;
    const nameDisplay = document.getElementById('name_display');
    const phoneDisplay = document.getElementById('phone_display');
    const checkmark = document.getElementById('checkmark-success');
    const confirmOkBtn = form ? form.querySelector('#confirm-ok-btn') : null;

    // Ensure we have a strong CSS rule to force-hide the form when needed
    (function ensureHideCss() {
      const id = 'success-form-hide-style';
      if (!document.getElementById(id)) {
        const style = document.createElement('style');
        style.id = id;
        style.textContent = `.form-edit.is-hidden{display:none !important}.edit-link.is-hidden{display:none !important}#customer-grid.is-hidden{display:none !important}`;
        document.head.appendChild(style);
      }
    })();

    function hideForm() {
      if (!form) return;
      form.classList.add('is-hidden');
      try { form.setAttribute('hidden', ''); } catch (_) {}
      try { form.style.display = 'none'; } catch (_) {}
    }

    function showForm() {
      if (!form) return;
      form.classList.remove('is-hidden');
      try { form.removeAttribute('hidden'); } catch (_) {}
      try { form.style.display = 'block'; } catch (_) {}
    }

    function hideEditLink() {
      if (!editLink) return;
      editLink.classList.add('is-hidden');
      try { editLink.style.display = 'none'; } catch (_) {}
    }

    function hideCustomerGrid() {
      const grid = document.getElementById('customer-grid');
      if (!grid) return;
      grid.classList.add('is-hidden');
      try { grid.style.display = 'none'; } catch (_) {}
    }

    if (editLink && form) {
      editLink.addEventListener('click', function () {
        showForm();
      });
    }

    // Helper: show checkmark. mode: 'inline' (in place) or 'overlay'
    function showCheckmark(mode = 'inline', autoHide = false) {
      if (!checkmark) return;
      // Reset styles first
      try { checkmark.removeAttribute('style'); } catch (_) {}

      if (mode === 'overlay') {
        Object.assign(checkmark.style, {
          position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '9999'
        });
      } else {
        // Inline: occupy the space of the hidden grid
        Object.assign(checkmark.style, {
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'
        });
      }

      checkmark.classList.add('show');
      if (autoHide) {
        setTimeout(() => {
          checkmark.classList.remove('show');
          try { checkmark.style.display = 'none'; } catch (_) {}
        }, 3500);
      }
    }

    // Inline message utility
    function setFormMessage(msg, type) {
      if (!form) return;
      let el = document.getElementById('update-message');
      if (!el) {
        el = document.createElement('div');
        el.id = 'update-message';
        form.appendChild(el);
      }
      el.textContent = msg || '';
      el.className = type ? `msg ${type}` : 'msg';
    }

    // Handle submit via fetch to avoid navigation to api.php
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('#update_btn');
        const prevText = submitBtn ? submitBtn.textContent : '';
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Оновлюємо...'; }
        setFormMessage('', '');

        try {
          const fd = new FormData(form);
          const resp = await fetch(form.getAttribute('action') || 'api.php?mode=update', {
            method: 'POST',
            body: fd,
            credentials: 'same-origin'
          });

          if (!resp.ok) throw new Error('Помилка оновлення');

          // Update displayed values
          if (nameDisplay && nameInput) nameDisplay.textContent = nameInput.value || '';
          if (phoneDisplay && phoneInput) phoneDisplay.textContent = phoneInput.value || '';

          // Replace the customer grid with the checkmark, keep it visible
          hideCustomerGrid();
          showCheckmark('inline', false);
          setFormMessage('Дані оновлено ✓', 'success');
          setTimeout(() => { hideForm(); hideEditLink(); }, 200);
        } catch (err) {
          setFormMessage('Не вдалось оновити. Спробуйте ще раз.', 'error');
        } finally {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = prevText || 'Оновити'; }
        }
      });
    }

    if (confirmOkBtn) {
      confirmOkBtn.addEventListener('click', () => {
        hideCustomerGrid();
        showCheckmark('inline', false);
        hideForm();
        hideEditLink();
      });
    }

    // Visibility safeguard for steps (in case external CSS/scripts override)
    const steps = document.querySelector('.steps');
    if (steps) {
      const cs = window.getComputedStyle(steps);
      if (cs && (cs.display === 'none' || cs.visibility === 'hidden')) {
        steps.style.display = 'block';
        steps.style.visibility = 'visible';
      }
    }

    // Badges image: prefer external GitHub URL first, then fall back to original data URI, then to server endpoint
    const badges = document.querySelector('.badges');
    const badgesImg = badges ? badges.querySelector('img') : null;
    if (badges && badgesImg) {
      const externalUrl = 'https://raw.githubusercontent.com/AndriiAndrienko69/corporate-script/main/cdn/badges.png';
      const originalSrc = badgesImg.getAttribute('src') || '';
      let triedExternal = false;
      let triedOriginal = false;
      let triedServer = false;

      const tryExternal = () => {
        if (triedExternal) return;
        triedExternal = true;
        try { console.debug('[success] badges: using external URL'); } catch (_) {}
        badgesImg.src = externalUrl;
      };

      const tryOriginal = () => {
        if (triedOriginal) return;
        triedOriginal = true;
        try { console.debug('[success] badges: falling back to original embedded image'); } catch (_) {}
        badgesImg.src = originalSrc;
      };

      const tryServer = () => {
        if (triedServer) return;
        triedServer = true;
        try { console.debug('[success] badges: falling back to badges.php'); } catch (_) {}
        badgesImg.src = 'badges.php';
      };

      const stepFallback = () => {
        if (!triedExternal) {
          tryExternal();
        } else if (!triedOriginal) {
          tryOriginal();
        } else if (!triedServer) {
          tryServer();
        }
      };

      const verifyAndFallback = () => {
        if (!badgesImg.naturalWidth) stepFallback();
      };

      badgesImg.addEventListener('error', stepFallback);

      // Start by trying the external URL to satisfy the requested source
      tryExternal();

      if (badgesImg.complete) {
        // If it "completed" but resulted in a broken image, apply fallback
        setTimeout(verifyAndFallback, 300);
      } else {
        badgesImg.addEventListener('load', () => {
          // Some CSPs can result in load without pixels; verify dimensions
          verifyAndFallback();
        }, { once: true });
        // Also guard against suppressed events
        setTimeout(verifyAndFallback, 1200);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRender);
  } else {
    initRender();
  }
})();
