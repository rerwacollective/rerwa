/* ============================================================
   RERWA Co. — Main JavaScript
   Progressive enhancement: nav toggle, active link, form handling.
   The site works fully without JS; this layer improves the experience.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 1. Mobile navigation toggle ---------- */
  function initNav() {
    var toggle = document.querySelector('.nav__toggle');
    var links  = document.querySelector('.nav__links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is tapped (mobile)
    links.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav__link')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 2. Mark the current page in the nav ---------- */
  function initActiveLink() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ---------- 3. Contact form submission ---------- */
  /* Set your Google Apps Script Web App URL here to activate the form. */
  var RERWA_FORM_ENDPOINT = 'PASTE_YOUR_WEB_APP_URL_HERE';

  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var btn    = form.querySelector('button[type="submit"]');
      var data   = new FormData(form);

      function show(msg, color) {
        status.style.display = 'block';
        status.style.color = color;
        status.textContent = msg;
      }

      if (!data.get('name') || !data.get('email') || !data.get('message')) {
        show('Please fill in your name, email, and message.', '#b8862f');
        return;
      }
      if (RERWA_FORM_ENDPOINT.indexOf('PASTE_') === 0) {
        show('Form not connected yet — add the Web App URL in js/main.js.', '#b8862f');
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Sending…';

      fetch(RERWA_FORM_ENDPOINT, { method: 'POST', body: data })
        .then(function () {
          show('Thank you — your message has been sent. We\'ll be in touch soon.', '#1e7a46');
          form.reset();
        })
        .catch(function () {
          show('Sorry, something went wrong. Please email info@rerwacollective.org.', '#b8862f');
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = 'Send message';
        });
    });
  }

  /* ---------- Init on DOM ready ---------- */
document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initActiveLink();
    initContactForm();
  });
