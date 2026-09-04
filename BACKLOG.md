# Backlog

Things worth doing, roughly in priority order. Nothing here is in progress — it is a
list to talk through, not a plan that has been agreed.

Each item says **why** it matters and **where** the change goes, so any of them can be
picked up cold.

---

## 1. Blockers — these break things that are live right now

### The domain is still a placeholder

`site: 'https://alabsi-alahliah.com'` in [`astro.config.mjs`](astro.config.mjs) is
invented. It generates every canonical URL, every `hreflang`, every sitemap entry, and
the absolute `og:image` URL.

If that is not the real domain, then **link previews cannot work at all** — the scraper
is being told to fetch the card from a host that may not resolve — and search engines
are being given canonical URLs pointing somewhere else.

`public/robots.txt` hardcodes the same domain a second time. Both must change together.

After changing it, re-scrape through
[Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/). WhatsApp
and Facebook cache previews hard and will keep serving the old one for a long time.

### Social profile links are dead

All four are `'#'` in `CONTACT.social` ([`src/i18n/ui.js`](src/i18n/ui.js)). Two costs:
the footer icons are dead links, and they are filtered out of the `sameAs` field in the
structured data, so Google is not being told which social profiles belong to this
company. That is a real local-SEO signal being left on the floor.

### `netlify.toml` describes the wrong host

The site deploys on Vercel. [`netlify.toml`](netlify.toml) and the deployment table in
[`README.md`](README.md) both describe Netlify. Harmless today, actively misleading the
first time someone tries to debug a deploy.

Worth replacing with a `vercel.json` carrying security headers
(`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, HSTS). Vercel already
handles `/_astro/` immutable caching on its own.

### There is no 404 page

`src/pages/` has no `404.astro`. A bad URL currently gets Vercel's generic page — no
logo, no navigation, no Arabic, wrong text direction. One small file fixes it, and it
needs an Arabic and an English version like every other route.

---

## 2. Placeholder content that must be replaced before any marketing

### The project photos are stock

`public/images/` holds Unsplash photography, correctly licensed for commercial use, but
**it is not this company's work** — and the site presents it as the portfolio, under
real project names like فيلا أرمونيا. Reverse image search is trivial. Fine as a
placeholder, a credibility problem the moment a client looks closely.

### The before/after slider needs real paired photos

This is the weakest section on the site. The whole point of the control is dragging
between two frames of **the same spot**, and stock photography cannot provide that — the
current pairs are different buildings that merely rhyme.

When shooting the real ones: same position, same lens, same height, ideally same time of
day. Here it is the difference between the feature working and not.

### The captions are examples, not real jobs

`beforeAfter.items` in [`src/i18n/ui.js`](src/i18n/ui.js) still carries sample captions.
So do the four project entries — `location`, `year`, `scope` and `gallery` are
deliberately empty and render nothing until filled in.

---

## 3. Quick wins

| Item | Why |
|---|---|
| **Google Maps embed** in the contact section | A Kuwaiti contractor lives or dies on "where are you". Today there is only a text link to a *search* for Shuwaikh, not an actual pin. A static `<iframe>` with `loading="lazy"` costs nothing. |
| **Opening hours + `priceRange`** in the JSON-LD | [`Base.astro`](src/layouts/Base.astro) has neither. `openingHoursSpecification` is what produces the "Open now" line in local results; `priceRange` is a recommended field for `LocalBusiness` types. |
| **Self-host the Arabic font** | The Google Fonts stylesheet is render-blocking and costs two preconnects. A subset of IBM Plex Sans Arabic served locally with `font-display: swap` is a real LCP win on Kuwaiti mobile networks. |
| **Trust and credentials strip** | Commercial licence number, Chamber of Commerce membership, insurance. In this market that converts harder than any copy currently on the page. |
| **`BreadcrumbList` schema** + a visible breadcrumb on project pages | Cheap, and it changes how the result renders in search. |
| **Web app manifest** | Installable, proper Android icon and splash screen. About fifteen lines. |
| **Privacy page** | The contact form promises "nothing is stored on this site". A one-page notice backs that up, and Google reads it as a trust signal. |

---

## 4. Bigger additions

1. **Service detail pages** — `/services/<slug>/`, built exactly like the existing
   project pages. Right now one homepage competes for "تشطيبات داخلية الكويت",
   "مقاولات عامة الكويت" and "تصميم داخلي الكويت" simultaneously. Four dedicated pages,
   each with `Service` schema, is the single biggest SEO gain available here.

2. **Cost estimator** — client-side only: area in m² × finish tier → an indicative KWD
   range, then a button that prefills the WhatsApp message using the pattern already in
   [`site.js`](src/scripts/site.js). The best lead magnet available without a backend.

3. **Testimonials** — driven from `ui.js` like everything else. Do **not** add
   `aggregateRating` structured data unless the reviews are genuinely real; that is the
   kind of thing that earns a manual penalty.

4. **Blog via Astro content collections** — "كم تكلفة تشطيب شقة في الكويت؟", "الفرق بين
   المقاول العام والمقاول الفرعي". Pure static, and it feeds the long-tail queries the
   keyword list is already chasing.

5. **Downloadable company profile PDF** — one file in `public/`, one link. Contractors
   get asked for this constantly.

6. **Per-project OG images** — every page currently shares one card. A project page
   sharing its own photo on WhatsApp is a meaningfully better link preview.

7. **Lightbox for project galleries** — the `gallery` field already exists in the data
   model, just empty.

8. **A real form endpoint** (Web3Forms / Formspree free tier) alongside WhatsApp — still
   no server, but it stops losing desktop visitors who have neither WhatsApp Web nor a
   configured mail client.

9. **Vercel Web Analytics** — one script tag, works on a static build.

10. **Location pages** (`/areas/hawalli/` and so on) — good local SEO, but only if each
    page gets genuinely distinct content. Thin duplicates hurt more than they help.

---

## 5. Decisions already taken — context, so we do not go in circles

- **The preloader bar is a fixed 3-second timer, deliberately.** It is decoration on a
  static pre-rendered page, so a real progress figure would tell the visitor nothing. It
  is not broken and should not be "fixed" back into progress tracking.
- **It shows once per browsing session.** If it seems not to appear, that is
  `sessionStorage` doing its job — try a new tab. `SESSION_ONCE` in
  [`Preloader.astro`](src/components/Preloader.astro) flips it.
- **Two open trade-offs on it.** It adds perceived latency to a site that is already
  fast and may affect LCP, which matters given how much SEO work is in this repo — worth
  watching in Search Console after a few weeks live. And the 3-second hold applies to
  visitors with `prefers-reduced-motion` set, who get no benefit from it. `DURATION_MS`
  is one number if either becomes a problem.
- **The og card is fitted, not cropped.** The poster carries the logo and strapline as
  baked pixels, so any crop destroys them. Kept at 1200×630 with blurred sides.

---

## 6. Housekeeping

### The hero and about assets are swapped

Confirmed by hash, not guessed:

| File | Actually contains |
|---|---|
| `src/assets/hero.png` | `images/about-us.png` |
| `src/assets/about.png` | `images/hero.png` |

So the About section is displaying the **hero poster** — which is why it carries baked-in
branding and text where a photograph would be expected.

Left alone on purpose: it is possible this was chosen deliberately during the Astro
migration, since a text-free render behind hero copy is the better call. Worth a
decision either way. Two-line change.

### The about image alt text no longer matches the image

`about.imageAlt` in [`src/i18n/ui.js`](src/i18n/ui.js) reads "أحد مشاريع العبسي الأهلية"
/ "A project by Alabsi Alahliah" — but the image is a branded poster, not a project
photo. Either fix the alt text in both locales, or swap the image for an actual project
photo, which would make the existing wording correct again.

### README drift

Written before the recent changes, so parts are now untrue: the deployment table
describes Netlify, the project layout says project photos do not exist yet, and the
before/after section still says it shows blueprint placeholders.

### Dependency advisories

`npm audit` reports 3 (1 low, 2 high). Worth understanding before reacting:

- **sharp `<0.35.0`** — inherited libvips CVEs. Build-time only; it processes images
  during `npm run build` and does not ship to visitors.
- **esbuild** — arbitrary file read via the **dev server on Windows**. Local development
  only.
- **astro `<=7.0.9`** — flagged through the above.

None of them affect the deployed static output, which is why this is housekeeping rather
than a blocker. `npm audit fix --force` wants a major Astro bump, so it needs a build
check afterwards rather than being run blind.

### Tooling gaps

`npm run check` is defined in `package.json` but `@astrojs/check` and `typescript` are
not installed and there is no `tsconfig.json`. There is no test suite and no linter.
Fine for a site this size — worth knowing so nobody hunts for them.
