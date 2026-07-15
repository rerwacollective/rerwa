# RERWA Collective — rerwacollective.org

Static site for RERWA Co. Ltd, deployed via GitHub Pages with the custom domain `rerwacollective.org` (see `CNAME`).

Built to the **Website Content & Developer Guide v2.0 (July 2026)**. See `CHANGELOG.md` for what's implemented and what's pending.

## Structure
- `index.html`, `who-we-are.html`, `our-approach.html`, `what-we-do.html`, `research-insights.html`, `contact.html`, `404.html`
- `our-approach/*.html` — reserved capacity-domain pages (noindex, unlinked)
- `css/style.css` (tokens + components) · `css/responsive.css` (mobile diagram conversions)
- `js/main.js` — progressive enhancement only

## Pending activation
1. **Logo** — replace `images/rerwa-logo.svg` when the compass-needle R is delivered.
2. **Photography** — swap each `.photo` placeholder for a real `<img>`; the brief is in its `data-direction` attribute.
3. **Contact form delivery** — set `data-endpoint` on `#contact-form` (Google Apps Script web app or Formspree) so messages reach info@rerwacollective.org.
4. **Testimonials / statistics** — components exist; remove `.is-reserved` once real quotes and numbers exist.
5. **Research & Insights** — duplicate the commented `<article class="resource">` template per publication; tag by capacity domain so domain pages can surface content later.
