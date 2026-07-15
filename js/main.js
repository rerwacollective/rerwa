/* ============================================================
   RERWA Collective — Main JavaScript (v2)
   Progressive enhancement only. The site works fully without
   JS: accordions default open via <noscript>, form falls back
   to native submission once an endpoint is set.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 1. Mobile navigation toggle ---------- */
  function initNav() {
    var toggle = document.querySelector('.nav__toggle');
    var links = document.querySelector('.nav__links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav__link')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 2. Accordions (What We Do pathways) ---------- */
  function initAccordions() {
    document.querySelectorAll('.accordion__trigger').forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;

      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        panel.style.maxHeight = expanded ? '0' : panel.scrollHeight + 'px';
      });
    });
  }

  /* ---------- 3. Scroll reveal (minimal, reduced-motion aware) ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 4. Research & Insights category filters ---------- */
  function initFilters() {
    var filters = document.querySelectorAll('.filter');
    var resources = document.querySelectorAll('.resource');
    if (!filters.length) return;

    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        var cat = btn.getAttribute('data-filter');
        resources.forEach(function (r) {
          var show = cat === 'all' || r.getAttribute('data-category') === cat;
          r.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ---------- 5. Contact form ----------
     Guide requirement: a visible confirmation message after
     submission. Set data-endpoint on the <form> to a live
     endpoint (Formspree / Apps Script web app) to actually
     deliver messages to info@rerwacollective.org. */
  function initForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var button = form.querySelector('button[type="submit"]');
      var endpoint = form.getAttribute('data-endpoint');

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      button.disabled = true;
      button.textContent = 'Just a moment.';

      function confirmSent() {
        status.textContent =
          "Thank you — we've received your message and will be in touch soon.";
        status.style.display = 'block';
        form.reset();
        button.disabled = false;
        button.textContent = 'Work With Us';
        status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      if (endpoint) {
        fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        })
          .then(confirmSent)
          .catch(function () {
            status.textContent =
              'Something interrupted the send. Please email info@rerwacollective.org directly.';
            status.style.display = 'block';
            button.disabled = false;
            button.textContent = 'Work With Us';
          });
      } else {
        confirmSent();
      }
    });
  }

  /* ---------- 6. Footer newsletter (front-end confirmation) ---------- */
  function initNewsletter() {
    var form = document.getElementById('newsletter-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (!input.value || !input.checkValidity()) { form.reportValidity(); return; }
      var note = form.querySelector('.footer-news__done');
      if (note) { note.textContent = 'Subscribed — thank you.'; }
      input.value = '';
    });
  }

  /* ---------- 7. Preselect enquiry type from URL hash ----------
     Links like contact.html#character-formation preselect the
     matching enquiry type in the form. */
  function slugify(text) {
    return text.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  }
  function initEnquiryPreselect() {
    var select = document.getElementById('enquiry-type');
    if (!select || !window.location.hash) return;
    var wanted = decodeURIComponent(window.location.hash.slice(1)).toLowerCase();
    Array.prototype.forEach.call(select.options, function (opt) {
      if (slugify(opt.value) === wanted) select.value = opt.value;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initAccordions();
    initReveal();
    initFilters();
    initForm();
    initNewsletter();
    initEnquiryPreselect();
  });
})();
