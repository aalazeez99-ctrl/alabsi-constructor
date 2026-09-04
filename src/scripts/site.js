/**
 * Client-side behaviour for the Alabsi Alahliah site.
 *
 * Astro bundles this as a deferred module, so the DOM is already parsed.
 * Language switching is NOT here — each locale is its own server-rendered
 * page, so there is nothing to translate at runtime.
 */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const header = $('#header');
const nav = $('#nav');
const menuToggle = $('#menuToggle');
const navScrim = $('#navScrim');
const progress = $('#scrollProgress');
const toTop = $('#toTop');

/* ------------------------------------------------------------------
   1. MOBILE NAVIGATION
   ------------------------------------------------------------------ */
function setNav(open) {
  if (!nav || !menuToggle) return;

  nav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute(
    'aria-label',
    menuToggle.dataset[open ? 'labelClose' : 'labelOpen'] || ''
  );
  document.body.classList.toggle('nav-open', open);
  if (navScrim) navScrim.hidden = !open;
}

menuToggle?.addEventListener('click', () => {
  setNav(menuToggle.getAttribute('aria-expanded') !== 'true');
});

navScrim?.addEventListener('click', () => setNav(false));

$$('.nav a, .nav .btn').forEach((el) =>
  el.addEventListener('click', () => setNav(false))
);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav?.classList.contains('is-open')) {
    setNav(false);
    menuToggle?.focus();
  }
});

// Close the drawer when the layout returns to desktop.
const wide = window.matchMedia('(min-width: 861px)');
wide.addEventListener('change', (e) => {
  if (e.matches) setNav(false);
});

/* ------------------------------------------------------------------
   2. HEADER STATE / SCROLL PROGRESS / BACK TO TOP
   ------------------------------------------------------------------ */
let ticking = false;

function onScroll() {
  const y = window.scrollY;

  header?.classList.toggle('is-scrolled', y > 24);

  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.min(y / max, 1) * 100 : 0}%`;
  }

  if (toTop) toTop.hidden = y < 600;

  ticking = false;
}

window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true }
);
onScroll();

toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
});

/* ------------------------------------------------------------------
   3. SCROLL SPY
   ------------------------------------------------------------------ */
/* On sub-pages the nav points at "/#services" rather than "#services".
   That is not a valid selector, so only same-page anchors are spied on —
   passing the cross-page form to querySelector would throw. */
const navLinks = $$('.nav-link');
const sections = navLinks
  .map((l) => l.getAttribute('href'))
  .filter((href) => href?.startsWith('#') && href.length > 1)
  .map((href) => document.querySelector(href))
  .filter(Boolean);

if (sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of navLinks) {
          const on = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('is-active', on);
          if (on) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        }
      }
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((s) => spy.observe(s));
}

/* ------------------------------------------------------------------
   4. SCROLL REVEAL
   Reduced motion renders everything in its final state immediately.
   ------------------------------------------------------------------ */
const revealables = $$('.reveal');

if (reduceMotion.matches) {
  revealables.forEach((el) => el.classList.add('is-in'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealables.forEach((el) => revealObserver.observe(el));
}

/* ------------------------------------------------------------------
   5. STAT COUNTERS
   ------------------------------------------------------------------ */
const counters = $$('[data-count]');
const statsBlock = $('.stats');

function runCounters() {
  for (const el of counters) {
    const target = Number.parseInt(el.dataset.count, 10) || 0;

    if (reduceMotion.matches) {
      el.textContent = String(target);
      continue;
    }

    const duration = 1400;
    let start = null;

    const tick = (now) => {
      if (start === null) start = now;
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}

if (statsBlock && counters.length) {
  const statObs = new IntersectionObserver(
    (entries, obs) => {
      if (entries[0].isIntersecting) {
        runCounters();
        obs.disconnect();
      }
    },
    { threshold: 0.4 }
  );
  statObs.observe(statsBlock);
}

/* ------------------------------------------------------------------
   6. PROJECT FILTERS
   ------------------------------------------------------------------ */
const chips = $$('.chip');
const projects = $$('.project');
const emptyMsg = $('#projectsEmpty');

for (const chip of chips) {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    let shown = 0;

    for (const c of chips) {
      const on = c === chip;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', String(on));
    }

    for (const p of projects) {
      const match = filter === 'all' || p.dataset.sector === filter;
      p.hidden = !match;
      if (match) shown += 1;
    }

    if (emptyMsg) emptyMsg.hidden = shown !== 0;
  });
}

/* ------------------------------------------------------------------
   7. PROJECT PHOTO FALLBACK
   Until real photos exist at public/images/project-N.jpg the tile shows
   a blueprint pattern rather than a broken-image icon.
   ------------------------------------------------------------------ */
for (const img of $$('.project-media img')) {
  const fallback = () => img.parentElement?.classList.add('is-placeholder');
  if (img.complete && img.naturalWidth === 0) fallback();
  img.addEventListener('error', fallback);
}

/* ------------------------------------------------------------------
   8. QUOTE FORM
   No backend: composes a message and hands it to WhatsApp or the
   visitor's mail client. Copy comes from the server-rendered JSON so
   translations live in exactly one file.
   ------------------------------------------------------------------ */
const form = $('#quoteForm');

if (form) {
  const errorBox = $('#formError');
  const configEl = $('#formConfig');

  let cfg = {};
  try {
    cfg = JSON.parse(configEl?.textContent || '{}');
  } catch {
    cfg = {};
  }

  const showError = (input, errId, show) => {
    input.closest('.field')?.classList.toggle('has-error', show);
    const msg = document.getElementById(errId);
    if (msg) msg.hidden = !show;
    input.setAttribute('aria-invalid', String(show));
    if (show) input.setAttribute('aria-describedby', errId);
    else input.removeAttribute('aria-describedby');
  };

  const validate = () => {
    const name = $('#f-name');
    const phone = $('#f-phone');
    let ok = true;

    const nameBad = name.value.trim().length < 2;
    showError(name, 'f-name-err', nameBad);
    if (nameBad) ok = false;

    const phoneBad = phone.value.replace(/\D/g, '').length < 6;
    showError(phone, 'f-phone-err', phoneBad);
    if (phoneBad) ok = false;

    if (errorBox) {
      errorBox.textContent = ok ? '' : cfg.formError || '';
      errorBox.hidden = ok;
      // WCAG: focus the summary, not past it into a field.
      if (!ok) errorBox.focus();
    }

    return ok;
  };

  const composeMessage = () => {
    const typeSelect = $('#f-type');
    const typeLabel = typeSelect.options[typeSelect.selectedIndex].textContent.trim();
    const details = $('#f-msg').value.trim();
    const m = cfg.msg || {};

    const lines = [
      m.greeting,
      '',
      `${m.labelName}: ${$('#f-name').value.trim()}`,
      `${m.labelPhone}: ${$('#f-phone').value.trim()}`,
      `${m.labelType}: ${typeLabel}`,
    ];

    if (details) lines.push(`${m.labelMessage}: ${details}`);
    lines.push('', m.closing);

    return lines.join('\n');
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(
      `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(composeMessage())}`,
      '_blank',
      'noopener'
    );
  });

  $('#sendMail')?.addEventListener('click', () => {
    if (!validate()) return;
    const subject = encodeURIComponent(cfg.msg?.subject || '');
    const body = encodeURIComponent(composeMessage());
    window.location.href = `mailto:${cfg.email}?subject=${subject}&body=${body}`;
  });

  // Clear an error as soon as the visitor starts fixing it.
  for (const id of ['f-name', 'f-phone']) {
    const input = document.getElementById(id);
    input?.addEventListener('input', () => {
      if (input.closest('.field')?.classList.contains('has-error')) validate();
    });
  }
}

/* ------------------------------------------------------------------
   9. SMOOTH SCROLL WITH STICKY-HEADER OFFSET
   ------------------------------------------------------------------ */
document.addEventListener('click', (e) => {
  const link = e.target.closest?.('a[href^="#"]');
  if (!link) return;

  const href = link.getAttribute('href');
  // Bare "#" has no target; anything not starting with "#" is a real
  // navigation (e.g. "/#services" from a project page) — let it through.
  if (!href || href === '#' || !href.startsWith('#')) return;

  const target = document.querySelector(href);
  if (!target) return;

  e.preventDefault();

  const offset = (header?.offsetHeight ?? 74) + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: reduceMotion.matches ? 'auto' : 'smooth' });

  // Move keyboard focus with the viewport, not just the scrollbar.
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
});

/* ------------------------------------------------------------------
   10. BEFORE / AFTER SLIDER
   The <input type="range"> already gives us dragging, touch and full
   keyboard control for free. All this does is mirror its value into a
   custom property that drives the clip-path and the handle position.
   ------------------------------------------------------------------ */
for (const stage of $$('.ba-stage')) {
  const range = stage.querySelector('.ba-range');
  if (!range) continue;

  const sync = () => stage.style.setProperty('--pos', `${range.value}%`);
  range.addEventListener('input', sync);
  sync();
}

/* Before/after photos fall back to the blueprint pattern too, so a
   missing pair reads as "not supplied yet" rather than as broken. */
for (const img of $$('.ba-layer img')) {
  const fallback = () => img.parentElement?.classList.add('is-placeholder');
  if (img.complete && img.naturalWidth === 0) fallback();
  img.addEventListener('error', fallback);
}

/* Project detail hero image uses the same convention. */
for (const img of $$('.pp-media img')) {
  const fallback = () => img.parentElement?.classList.add('is-placeholder');
  if (img.complete && img.naturalWidth === 0) fallback();
  img.addEventListener('error', fallback);
}

/* ------------------------------------------------------------------
   11. HERO PARALLAX
   Depth without WebGL: the hero image drifts at a fraction of the
   scroll rate. Transform only, capped, and skipped entirely under
   reduced motion — guideline: parallax must never be forced.
   ------------------------------------------------------------------ */
const heroMedia = $('.hero-media');

if (heroMedia && !reduceMotion.matches) {
  const MAX_DRIFT = 90;      // px, so the image never pulls away from its frame
  const RATE = 0.25;
  let parallaxTicking = false;

  const applyParallax = () => {
    const drift = Math.min(window.scrollY * RATE, MAX_DRIFT);
    heroMedia.style.setProperty('--parallax', `${drift}px`);
    parallaxTicking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      // Stop doing any work once the hero is off screen.
      if (window.scrollY > window.innerHeight) return;
      if (!parallaxTicking) {
        parallaxTicking = true;
        requestAnimationFrame(applyParallax);
      }
    },
    { passive: true }
  );

  applyParallax();
}
