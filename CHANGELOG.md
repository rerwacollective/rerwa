# Changelog

All notable changes to the RERWA website are recorded here.
Format based on [Keep a Changelog](https://keepachangelog.com/).

## [2.0.0] — 2026-07

### Changed
- **Architecture overhaul.** Removed all page-level inline CSS and centralised
  styling into shared stylesheets (`css/style.css`, `css/responsive.css`).
- Introduced a JavaScript layer (`js/main.js`) for mobile navigation, active-link
  highlighting, and contact-form handling.
- Rebuilt all pages with semantic HTML5 and improved accessibility (skip link,
  ARIA labels, keyboard support).
- Organised assets into `css/`, `js/`, and `images/` folders.

### Added
- Design-token system (CSS custom properties) for one-place rebranding.
- Rich metadata: descriptions, Open Graph tags, author.
- Performance improvements: font `preconnect` + `display=swap`.
- `README.md`, `CHANGELOG.md`, and `LICENSE`.
- Responsive mobile navigation with a toggle menu.

### Removed
- The "Resources" tab (to return when there is content to fill it).
- Duplicated CSS across individual HTML pages.

## [1.0.0] — 2026-07

### Added
- Initial RERWA website: Who We Are, What We Do, Contact.
- Brand identity: the Ascending Mark logo, navy/gold palette.
- Custom domain `rerwacollective.org` via GitHub Pages.
- Contact form wired to Google Sheets via Apps Script.
