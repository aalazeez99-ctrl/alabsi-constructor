# العبسي الأهلية للمقاولات والتشطيبات

**Alabsi Alahliah Building Construction Co.** — bilingual (Arabic / English) marketing
site, built with [Astro](https://astro.build). Outputs plain static files, so it deploys
to any free static host.

---

## Getting started

Node.js 18.20+ (20+ recommended) is required — download it from <https://nodejs.org>.

```bash
npm install     # once
npm run dev     # http://localhost:4321 with live reload
npm run build   # production build -> dist/
npm run preview # serve dist/ locally to check the real build
```

`dist/` is what you upload. Netlify and Cloudflare Pages read `netlify.toml` and build
it for you on push.

---

## Project layout

```
public/                served as-is, never processed
  logo.png             the company logo - DO NOT modify or replace
  robots.txt
  images/
    project-1..4.jpg   <- add real project photos here (see below)
    ba-*-before/after  <- before/after pairs (see below)

src/
  assets/              images the build optimises into WebP
    hero.png           hero background
    about.png          about-section photo
    og.png             social preview, re-encoded to JPEG at build
  components/          one file per section of the page
  i18n/ui.js           ALL site copy, Arabic + English
  layouts/Base.astro   <head>, header, footer, structured data
  pages/
    index.astro                ->  /
    en/index.astro             ->  /en/
    projects/[slug].astro      ->  /projects/<slug>/
    en/projects/[slug].astro   ->  /en/projects/<slug>/
  scripts/site.js      client-side behaviour
  styles/global.css    design tokens + all styling

legacy-static/         the pre-Astro version, kept for reference
```

---

## Editing content

**All wording lives in `src/i18n/ui.js`** — Arabic and English side by side. Change text
there and it updates everywhere it appears. Nothing else needs editing for a copy change.

Phone number, email, address and social links are at the top of that same file, in the
`CONTACT` object. Change them once and every reference across the site follows.

### Adding project photos

The four project tiles currently show a blueprint placeholder because no photos exist
yet. Drop real images into `public/images/` named:

```
project-1.jpg   project-2.jpg   project-3.jpg   project-4.jpg
```

They appear automatically. Roughly 4:3 and at least 800px wide works best. Titles,
descriptions and sector tags for each are in `src/i18n/ui.js` under `projects.items`.

---

## Design system

The palette is derived from `logo.png` — brand teal, one accent colour, neutral greys.
All tokens are CSS custom properties at the top of `src/styles/global.css`; change a
token there and it propagates everywhere.

Every directional rule uses CSS **logical properties** (`margin-inline-start`,
`inset-inline-end`, …), so the entire layout mirrors between Arabic (RTL) and English
(LTR) with no duplicated CSS.

Typeface is **IBM Plex Sans Arabic**, which covers both Arabic and Latin with matched
metrics — the two languages sit at the same optical size and weight.

Icons are an inline SVG sprite in `src/components/Icons.astro`. There is no icon font
and no external icon request.

---

## Notes

- **`logo.png` is never touched by the build.** It sits in `public/` and is copied
  byte-for-byte to the output. It is also the favicon.
- The contact form has no backend. It composes a message and opens WhatsApp or the
  visitor's mail app. Nothing is stored, and no server is needed.
- Arabic is the default language at `/`; English is at `/en/`. Both are real pages with
  their own `<title>`, description and `hreflang` tags, so search engines index each
  one separately.

---

## Deploying

Any static host works. `dist/` is the folder to upload.

| Host | Setup |
|---|---|
| Netlify | Connect the repo — `netlify.toml` handles the rest |
| Cloudflare Pages | Build command `npm run build`, output directory `dist` |
| GitHub Pages | Run `npm run build`, publish `dist/` |
| Any FTP host | Run `npm run build`, upload the contents of `dist/` |

---

## SEO

Targeted at **Kuwait**, in both Arabic and English.

What is in place:

- **Ten indexable pages** — `/` and `/en/` plus a page per project in each language, each with its own
  `<title>`, description, keywords and canonical URL, cross-linked with `hreflang`
  (`ar`, `en`, `x-default`). A JavaScript-only language toggle can never do this;
  search engines only ever see one version.
- **Keywords** per language, in `src/i18n/ui.js` under `meta.keywords`. Kuwait-focused —
  مقاولات الكويت، شركة مقاولات في الكويت، تشطيبات داخلية الكويت، ترميم فلل الكويت، مقاولات الشويخ
  / construction company Kuwait, general contracting Kuwait, fit-out Kuwait,
  Shuwaikh contractor.
- **Structured data** (`GeneralContractor` JSON-LD) with address, phone, email, geo
  coordinates, the six Kuwait governorates as `areaServed`, and a service catalogue
  generated from the services section. This is what actually drives rich results and
  Google Maps / local-pack eligibility — the keywords tag itself is ignored by Google
  and is included mainly for regional and internal search tools.
- **Geo meta tags** (`geo.region KW-KU`, `geo.position`, `ICBM`).
- **Open Graph + Twitter cards**, with the preview card re-encoded to a compressed
  JPEG at build so WhatsApp will actually render it (see below).
- `sitemap-index.xml` generated at build, with `robots.txt` pointing at it.
- Semantic headings (one `h1` per page), descriptive `alt` text, and real
  server-rendered text — no content hidden behind JavaScript.

### Before going live

1. Set the real domain in `astro.config.mjs` (`site:`) **and** in `public/robots.txt`.
   Canonical URLs, `hreflang` and the sitemap are all generated from it.
2. Replace the `geo` coordinates in `src/layouts/Base.astro` with the exact office
   location — they currently point at the Shuwaikh district generally.
3. Fill in the real social profile URLs in `CONTACT.social` (`src/i18n/ui.js`). They
   feed the `sameAs` field, which links the site to the company's profiles.
4. Submit the sitemap in Google Search Console, and claim the Google Business Profile
   for the Shuwaikh address — for a local contractor that is the single highest-impact
   step, more than anything on the page itself.

---

## Sections added after the first pass

### Before / after slider

Drag-to-reveal comparison, in `src/components/BeforeAfter.astro`. The control is a
real `<input type="range">` laid transparently over the image, so dragging, touch and
full keyboard control come from the browser rather than hand-written pointer code.

**It currently shows blueprint placeholders** because no photos exist. Add pairs to
`public/images/`:

```
ba-1-before.jpg   ba-1-after.jpg
ba-2-before.jpg   ba-2-after.jpg
```

Shoot both from the same position — the effect only works when the two frames line up.
Titles and captions are in `src/i18n/ui.js` under `beforeAfter.items`, and **the two
placeholder captions there are examples: replace them with real jobs.**

### Project detail pages

Each project now has its own page: `/projects/<slug>/` and `/en/projects/<slug>/`.
That takes the site from 2 indexable pages to 10, each targeting a real search term.

Optional fields per project in `src/i18n/ui.js` are **empty on purpose** — each block
is guarded, so an empty field renders nothing rather than an empty label. Fill them in
as you confirm the details:

```js
location: '',      // e.g. 'الشويخ، الكويت'
year: '',          // e.g. '2024'
scope: [],         // e.g. ['أعمال إنشائية', 'تشطيبات داخلية']
gallery: [],       // e.g. ['/images/villa-1.jpg', '/images/villa-2.jpg']
```

Slugs must stay identical between the Arabic and English lists — that pairing is what
links each page to its translation.

### FAQ

`src/components/Faq.astro`, built on native `<details>` so it works with JavaScript
off. It emits `FAQPage` structured data, which makes Google eligible to show these
questions directly in the results.

**Verify every answer before going live.** They were written only from what the site
already says (the process and services sections) and deliberately avoid any claim about
pricing, warranty or turnaround that had not already been made. If something is wrong
for your business, fix the wording in `src/i18n/ui.js` under `faq.items`.

### Depth, without WebGL

A Three.js scene was considered and rejected. The design data rates that style
`mobile-friendly: not-recommended`, `cost:high`, `risk:high` — the wrong trade for a
site whose job is getting phone calls from people on mobile data.

Instead: a fixed `rotateX` lift on cards and a hero image that drifts at a quarter of
scroll speed. Transform-only, GPU-composited, hover-capable pointers only, and both
switch off under `prefers-reduced-motion`. The genuinely 3D content on this site should
be your own renders — you already sell them as a service.

---

## Social preview (og:image)

If a shared link shows no image, there are two independent causes:

1. **The domain in `astro.config.mjs` must be the real one.** `og:image` is an absolute
   URL; if it points at a domain that does not resolve, the scraper fetches nothing.
2. **File size.** WhatsApp silently drops previews above roughly 300 KB. The source
   card is a ~1.1 MB PNG, so it is never served directly — `Base.astro` runs it through
   sharp into a ~80 KB JPEG at build time. This only happens when you actually run
   `npm run build`.

And if the image shows but is **cut off**, it is the shape. Facebook, WhatsApp and
LinkedIn render large cards at **1.91:1** and centre-crop anything else.
`src/assets/og.png` is authored 1200x630 to match; a 3:2 card loses about 86px off the
top and bottom, which on this design is exactly where the logo and the strapline sit.
**Keep any replacement at 1200x630.** The `og:image:height` tag is derived from the
file, so a wrong ratio is visible in the built HTML.

That file is `images/hero.png` **fitted** whole into the 1200x630 frame — not cropped
to fill it — sitting on a blurred blow-up of itself so the sides read as a soft frame
rather than two hard bars. The poster carries the logo, headline and strapline as baked
pixels, so any crop destroys them; fit, never fill. Astro's `getImage()` cannot do this
(it ignores `fit: 'contain'` and `background`), which is why the shaping is baked into
the asset instead of the build.

After changing the domain, re-scrape the URL in
[Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/) — WhatsApp
and Facebook cache previews aggressively and will keep showing the old (missing) one.
