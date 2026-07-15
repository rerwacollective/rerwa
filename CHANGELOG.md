# Changelog

## v2.0 — July 2026 (full rebuild)
Implements the RERWA Website Content & Developer Guide v2.0, aligned to the RERWA Charter.

### Structure
- Six pages: Home (`index.html`), `who-we-are.html`, `our-approach.html`, `what-we-do.html`, `research-insights.html`, `contact.html` — plus `404.html`.
- Unified navigation on every page (Home · Who We Are · Our Approach · What We Do · Research & Insights · Contact) with **Work With Us** as the persistent button. Fixes the previously inconsistent nav.
- Four capacity-domain pages reserved at `/our-approach/{individual,professional,organizational,societal}-capacity` — built, `noindex`, and out of navigation until real content exists (guide Part 8).
- Footer rebuilt: Explore / Engage / Connect columns, newsletter signup, vision tagline, Kigali, copyright.

### Design
- New design language: cream backgrounds, navy + gold accents, generous white space, minimal animation. Typeface: Gill Sans stack with **Cabin** (a Gill/Johnston-derived face) as the web substitute.
- Component library per guide Part 7: equal cards, interconnected circles (four domains), process diagrams (horizontal → vertical on mobile), pull-quotes with gold left border, full-width CTA bands, and **reserved** testimonial + statistics-band components (hidden via `.is-reserved` until real quotes/numbers exist).
- Logo is one reusable component (`images/rerwa-logo.svg`); the compass-needle R swap is a single-file replacement.
- Photography placeholders carry each section's photography direction in `data-direction`; replace with real imagery when sourced.

### Content & SEO
- All copy replaced with the guide's final content; "purpose-driven" phrasing removed sitewide.
- Page titles, meta descriptions, and keywords match the guide's SEO table; canonical URLs added; sitemap updated to six pages.
- CTA labels follow the guide: Work With Us, Explore the Framework, See How We Work, Read Our Story.
- Microcopy: form success message, 404 copy, and loading state per guide Part 7.

### Functionality
- Contact form with the seven enquiry types; enquiry cards and deep links (e.g. `contact.html#character-formation`) preselect the enquiry type; visible confirmation after submission. **Set `data-endpoint` on the form to a live endpoint (Apps Script web app / Formspree) to deliver messages.**
- What We Do pathways as accessible accordions (each anchored for a future dedicated page).
- Research & Insights: category filters, CMS-field-aligned resource template in markup, honest "first publications in preparation" state.
- Accessibility: skip link, focus states, labelled fields, correct heading hierarchy, `prefers-reduced-motion` respected, keyboard-operable accordions and filters.

## v1.x
- Initial three-page site (index / what-we-do / contact), GA4 (G-T71RK4QW1S), custom domain.
