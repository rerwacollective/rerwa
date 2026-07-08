# RERWA Collective — Website

The official website for **RERWA Co. Ltd**, a purpose-driven company that helps people
discover who they are, why they are here, and how to contribute — through formation,
not just information.

**Live site:** [rerwacollective.org](https://rerwacollective.org)
**Tagline:** *Principled people. Meaningful lives.*

---

## Structure

```
rerwa/
├── index.html          # Who We Are (home)
├── what-we-do.html     # What We Do (areas of impact + programs)
├── contact.html        # Contact (with enquiry form)
├── CNAME               # Custom domain for GitHub Pages
├── css/
│   ├── style.css       # Design tokens, components, layout
│   └── responsive.css  # Breakpoints & mobile navigation
├── js/
│   └── main.js         # Nav toggle, active link, contact form
├── images/
│   ├── rerwa-logo.svg
│   ├── favicon.ico
│   ├── favicon_32.png
│   └── favicon_192.png
├── README.md
├── CHANGELOG.md
└── LICENSE
```

## Brand

| Element | Value |
|---|---|
| Navy | `#1a2350` |
| Gold | `#b8862f` |
| Cream | `#f5f3ee` |
| Headings | Cormorant Garamond |
| Body | Inter |

All colours, spacing, and typography are centralised as CSS custom properties at the
top of `css/style.css` (`:root { … }`). **To rebrand, edit those variables in one place.**

## Editing

- **Content:** edit the relevant `.html` file directly.
- **Styling:** edit `css/style.css` (never add inline styles to the HTML).
- **Layout at different screen sizes:** edit `css/responsive.css`.
- **Behaviour (menu, form):** edit `js/main.js`.

## Contact form setup

The contact form posts to a Google Apps Script that writes each enquiry to a Google
Sheet and emails `info@rerwacollective.org`. To activate it:

1. Deploy the Apps Script as a Web App (see the separate setup guide).
2. Open `js/main.js` and replace `PASTE_YOUR_WEB_APP_URL_HERE` with your Web App URL.
3. Commit and push.

Until then, the form displays a friendly "not connected yet" message.

## Deployment

Hosted on **GitHub Pages** with the custom domain in `CNAME`.
Any push to the `main` branch republishes the site automatically within ~1 minute.

> **Do not delete `CNAME`** — it holds the `rerwacollective.org` custom domain.

## Accessibility & performance

- Semantic HTML5 (`<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`)
- Skip-to-content link, ARIA labels, keyboard-friendly navigation
- `prefers-reduced-motion` respected
- Fonts loaded with `preconnect` + `display=swap`
- Open Graph metadata for social sharing

## Ownership

This repository belongs to **RERWA Co. Ltd**. Maintained under the RERWA GitHub
organisation. Enable 2FA on all accounts with access.
