# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the real dist/ build
npm run check    # astro check
```

There is no test suite and no linter configured. `npm run check` requires
`@astrojs/check` + `typescript`, which are not in `package.json` — Astro will offer to
install them on first run. There is no `tsconfig.json`.

Some things only exist in a real build, so `npm run dev` is not sufficient to verify
them: `src/assets/*` WebP conversion, and the `og:image` JPEG re-encode.

## What this is

A bilingual (Arabic / English) static marketing site for a Kuwaiti contracting company,
built with Astro. Fully pre-rendered — no server, no API routes, no database, no
framework components (no React/Vue/Svelte). Deployed on **Vercel**.

`netlify.toml` and the deployment table in `README.md` are stale: they describe Netlify,
not the actual host.

`legacy-static/` is the pre-Astro hand-written version, kept for reference only. It is
not part of the build — never edit it as a way of changing the site.

## Architecture

### All copy lives in `src/i18n/ui.js`

This is the most important convention in the repo. The `ui` object holds two bundles,
`ar` and `en`, with **structurally identical shapes**. Components contain no
user-facing string literals — every page passes a `t` bundle down as a prop.

Consequences:

- Adding or renaming any content field means editing **both** locales. A component
  reading `t.foo.bar` will silently render nothing on the locale that lacks it.
- Arrays must keep matching lengths and ordering across locales.
- `CONTACT` (phone, WhatsApp, email, maps URL, social) also lives here and is imported
  directly by components rather than threaded through `t`.

### Locale routing

`astro.config.mjs` sets `defaultLocale: 'ar'` with `prefixDefaultLocale: false`, so:

| Route | Locale |
|---|---|
| `/` | Arabic |
| `/en/` | English |
| `/projects/<slug>/` | Arabic |
| `/en/projects/<slug>/` | English |

Each locale is a real pre-rendered page with its own `<title>`, description, canonical
and `hreflang` — deliberately not a JavaScript language toggle. Page files are
near-duplicates, one per locale, differing only in the hardcoded `lang` and import
depth. Keep them in sync when adding a section.

Helpers in `src/i18n/ui.js`: `useTranslations(lang)`, `altPath(lang)` (the other
locale's home), `projectPath(lang, slug)`.

**Project slugs must be identical between the `ar` and `en` project lists.**
`pages/projects/[slug].astro` generates paths from its own locale's items, and pairs
each page with its translation via `projectPath(otherLang, slug)`. A slug that exists
in only one locale produces a page whose language switch 404s.

### `src/layouts/Base.astro` owns everything in `<head>`

Meta, canonical, `hreflang`, Open Graph, geo tags, and the `GeneralContractor` JSON-LD
(built partly from `t.services.items`). Sub-pages customise it through three props:
`title`, `description`, `altHref`.

Two mechanisms in here are easy to break:

- **`navPrefix`** — nav links are same-page anchors (`#services`). On a sub-page those
  point at nothing, so Base computes a prefix (`/` or `/en/`) and Header/Footer prepend
  it. Any new component with anchor links needs the same treatment.
- **`og:image`** — the source `src/assets/og.png` is ~1.7 MB. WhatsApp silently drops
  previews above roughly 300 KB, so Base runs it through `getImage()` into a ~1200px
  JPEG at build time. Never point `og:image` at a raw PNG.

`site:` in `astro.config.mjs` is currently the placeholder `alabsi-alahliah.com` and
drives every canonical, `hreflang`, sitemap entry and the absolute `og:image` URL.
`public/robots.txt` hardcodes the same domain separately.

### Two image pipelines

- `src/assets/*` — imported as modules, optimised to WebP by sharp at build.
- `public/*` — copied byte-for-byte. **`logo.png` must never be modified or
  re-encoded**; it is both the brand mark and the favicon.

Project photos and before/after pairs are referenced by absolute path
(`/images/project-1.jpg`, `/images/ba-1-before.jpg`). **`public/images/` does not exist
yet.** `src/scripts/site.js` catches the load failure and adds `.is-placeholder` to the
wrapper, which renders a blueprint pattern. Missing photos are the expected current
state, not a bug to fix — and any new photo slot should use the same fallback hook.

Optional per-project fields (`location`, `year`, `scope`, `gallery`) are intentionally
empty strings/arrays; `ProjectDetail.astro` guards each block so an empty value renders
nothing rather than an empty label.

### RTL / LTR

The layout mirrors automatically because **all directional CSS uses logical
properties** (`margin-inline-start`, `inset-inline-end`, `padding-block`, …). Do not
introduce `left`/`right`/`margin-left` — there is no RTL override stylesheet to catch
it.

Directional icons flip via `<Icon name="arrow" dir />`. The before/after slider is the
one deliberate exception: its `<input type="range">` is forced `dir="ltr"` because the
`clip-path` driving it is physical, not logical.

### `src/scripts/site.js`

One deferred module, plain DOM APIs, no framework. Organised as numbered sections (nav,
scroll, scrollspy, reveal, counters, filters, image fallback, quote form, smooth scroll,
before/after, parallax). Everything is null-guarded so the same bundle runs on pages
that lack a given section.

Strings the script needs at runtime are **server-rendered into the page as JSON** and
parsed (see `#formConfig` in `Contact.astro`) rather than duplicated in JS — this is
what keeps `ui.js` the single source of copy. Follow this pattern for any new runtime
text.

`prefers-reduced-motion` is checked before counters, reveals, smooth scroll and
parallax. Preserve that in new motion code.

### Contact form has no backend

It validates client-side, composes a message from the `t.contact.msg` template, and
opens `wa.me/…?text=` or a `mailto:` URL. Nothing is submitted or stored. The form's own
copy states this, so adding a real endpoint means updating `t.contact.note` too.

### Styling and icons

A single `src/styles/global.css` — no Tailwind, no CSS modules, no per-component
`<style>` blocks. Design tokens (teal palette sampled from the logo, 8px spacing scale,
radii, shadows, easings) are custom properties at the top of the file; change a token
there rather than hardcoding a value.

Icons are one inline SVG sprite in `Icons.astro`, rendered once per page via Base.
`<Icon name="phone" />` references `#i-phone`. Adding an icon means adding a `<symbol
id="i-…">` to the sprite — there is no icon font and no external icon request.

### Preloader

`src/components/Preloader.astro` is the one place that deliberately breaks the
"behaviour lives in `site.js`" rule. `site.js` is a deferred module, so it only runs
once the document has parsed — which is exactly the window the loading screen has to
cover. Its script is therefore `is:inline` and sits directly under its own markup, as
the first thing in `<body>`.

Three properties are load-bearing:

- The overlay is `display: none` in CSS and only becomes visible once the script adds
  `.is-loading` to `<html>`. With JavaScript off it never appears, so no visitor is
  left under a cover that cannot lift itself.
- Progress is measured (DOM parse → `document.fonts.ready` → the share of
  `document.images` that have settled → `window.load`), not a fake timer. A `MAX_MS`
  failsafe forces completion so the site always opens.
- It shows once per session via `sessionStorage`. Project pages are separate documents,
  so without this the overlay would replay on every internal link. `SESSION_ONCE` in
  the component flips that.

The bar fills with `width`, not `transform: scaleX()`, because a block grows from the
inline-start edge and so mirrors correctly in Arabic with no direction handling —
`transform-origin` has no logical equivalent.
