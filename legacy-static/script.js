/* ============================================================
   العبسي الأهلية للمقاولات والتشطيبات
   Alabsi Alahliah Building Construction Co.
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP = '96550008180';
  var EMAIL    = 'alabsi.company.2022@gmail.com';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ==========================================================
     1. TRANSLATIONS
     Every key maps to exactly one element that holds only text,
     so switching language can never clobber nested markup.
     ========================================================== */
  var I18N = {
    ar: {
      'doc-title': 'العبسي الأهلية للمقاولات والتشطيبات | شركة إنشاءات في الكويت',
      'doc-desc': 'شركة العبسي الأهلية للمقاولات والتشطيبات في الشويخ، الكويت. مقاولات عامة، تصميم وتخطيط، تشطيبات داخلية وتأثيث — بأعلى معايير الجودة والسلامة.',

      'skip': 'تخطَّ إلى المحتوى',
      'brand-name': 'العبسي الأهلية',
      'brand-tag': 'للمقاولات والتشطيبات',

      'nav-home': 'الرئيسية',
      'nav-services': 'خدماتنا',
      'nav-process': 'آلية العمل',
      'nav-projects': 'مشاريعنا',
      'nav-about': 'من نحن',
      'nav-contact': 'تواصل معنا',

      'hero-eyebrow': 'أكثر من 8 أعوام في قطاع الإنشاءات بالكويت',
      'hero-title-1': 'نبني الحاضر',
      'hero-title-2': 'لنشيّد المستقبل',
      'hero-lead': 'شركة العبسي الأهلية للمقاولات والتشطيبات — نلتزم بأعلى معايير الجودة والسلامة لنقدّم مشاريع متكاملة تدوم وتُحدث أثراً.',
      'hero-cta-1': 'اطلب عرض سعر',
      'hero-cta-2': 'تصفّح مشاريعنا',
      'stat-1': 'مشروع منجز',
      'stat-2': 'رضا العملاء',
      'stat-3': 'سنوات خبرة',

      'values-h': 'قيمنا',
      'value-1-t': 'الجودة',      'value-1-d': 'أعلى المعايير في التنفيذ',
      'value-2-t': 'الاحترافية',  'value-2-d': 'فريق متخصص ذو خبرة',
      'value-3-t': 'الالتزام',    'value-3-d': 'نلتزم بالمواعيد والوعود',
      'value-4-t': 'الثقة',       'value-4-d': 'شراكات طويلة المدى',

      'services-kicker': 'خدماتنا',
      'services-h': 'من الفكرة الأولى إلى تسليم المفتاح',
      'services-sub': 'أربع خدمات متكاملة تغطي دورة حياة المشروع بالكامل، تحت إشراف فريق واحد ومسؤولية واحدة.',
      'srv-1-t': 'التصميم والتخطيط',
      'srv-1-d': 'تصميم معماري وداخلي مخصص، مع نماذج ثلاثية الأبعاد ومخططات تنفيذية تفصيلية.',
      'srv-2-t': 'المقاولات العامة',
      'srv-2-d': 'إدارة كاملة للمشروع، وأعمال بناء وتنفيذ، وتنسيق مع مقاولين فرعيين موثوقين.',
      'srv-3-t': 'التشطيبات الداخلية',
      'srv-3-d': 'تشطيبات أنيقة، أعمال نجارة مخصصة، إضاءة، وديكور منسّق لكل مساحة.',
      'srv-4-t': 'التأثيث والتصميم',
      'srv-4-d': 'توريد متميز، قطع مصنوعة حسب الطلب، وتنسيق يعكس شخصية المكان وأصحابه.',

      'process-kicker': 'آلية العمل',
      'process-h': 'أربع مراحل واضحة، بلا مفاجآت',
      'process-sub': 'تعرف من اليوم الأول ما الذي سيحدث، ومتى، وعلى يد من.',
      'step-1-t': 'الاستشارة والمعاينة',
      'step-1-d': 'نزور الموقع، نستمع لمتطلباتك، ونحدد نطاق العمل والميزانية التقريبية.',
      'step-2-t': 'التصميم والتسعير',
      'step-2-d': 'مخططات وتصاميم تفصيلية، مع عرض سعر مفصّل وجدول زمني معتمد قبل البدء.',
      'step-3-t': 'التنفيذ والإشراف',
      'step-3-d': 'فريق ميداني وإشراف هندسي، مع متابعة يومية لمعايير الجودة والسلامة وتقارير تقدّم دورية.',
      'step-4-t': 'التسليم والمتابعة',
      'step-4-d': 'تسليم منظّم وفق قائمة فحص متفق عليها، ومتابعة ما بعد التسليم.',

      'projects-kicker': 'مشاريعنا',
      'projects-h': 'أعمال تتحدث عن نفسها',
      'projects-sub': 'نماذج مختارة من مشاريع سكنية وتجارية وضيافة نفّذناها.',
      'filter-all': 'الكل', 'filter-res': 'سكني', 'filter-com': 'تجاري', 'filter-hos': 'ضيافة',
      'prj-1-t': 'فيلا أرمونيا', 'prj-1-d': 'طراز متوسطي حديث مع أعمال حجرية مخصصة.', 'prj-1-tag': 'سكني',
      'prj-2-t': 'مكتب زين', 'prj-2-d': 'مساحة عمل بسيطة بتصميم حيوي ومرن.', 'prj-2-tag': 'تجاري',
      'prj-3-t': 'بنتهاوس ٣٦٠', 'prj-3-d': 'ديكورات فاخرة مع إطلالات بانورامية على المدينة.', 'prj-3-tag': 'سكني',
      'prj-4-t': 'فندق بوتيك', 'prj-4-d': 'تجديد شامل وتشطيب لتجربة إقامة من فئة الخمس نجوم.', 'prj-4-tag': 'ضيافة',
      'projects-empty': 'لا توجد مشاريع في هذا القطاع حالياً.',

      'about-kicker': 'من نحن',
      'about-h': 'شركة كويتية تبني بمسؤولية',
      'about-p1': 'مع أكثر من ٨ أعوام من الخبرة، رسّخت العبسي الأهلية للمقاولات والتشطيبات مكانتها في مجال البناء والتشطيبات الداخلية في الكويت.',
      'about-p2': 'نجمع بين الحرفية التقليدية والأساليب الحديثة في الإدارة والتنفيذ، لنقدّم مساحات تجمع بين الوظيفة والجمال وتصمد أمام الزمن.',
      'feat-1': 'مواد عالية الجودة',
      'feat-2': 'فريق هندسي متخصص',
      'feat-3': 'تسليم في الوقت المحدد',
      'feat-4': 'التزام بمعايير السلامة',
      'about-cta': 'تحدّث إلى فريقنا',

      'contact-kicker': 'تواصل معنا',
      'contact-h': 'احكِ لنا عن مشروعك',
      'contact-sub': 'املأ النموذج وسنعود إليك، أو تواصل معنا مباشرة عبر واتساب.',
      'f-name': 'الاسم', 'f-name-err': 'يرجى كتابة الاسم.',
      'f-phone': 'رقم الهاتف', 'f-phone-err': 'يرجى كتابة رقم هاتف صحيح.',
      'f-type': 'نوع المشروع',
      'opt-res': 'سكني', 'opt-com': 'تجاري', 'opt-hos': 'ضيافة',
      'opt-fin': 'تشطيبات وديكور', 'opt-oth': 'أخرى',
      'f-msg': 'تفاصيل المشروع',
      'f-msg-hint': 'الموقع، المساحة التقريبية، والمدة المرغوبة إن وُجدت.',
      'f-send-wa': 'إرسال عبر واتساب',
      'f-send-mail': 'إرسال بالبريد',
      'f-note': 'يفتح النموذج تطبيق واتساب أو البريد لديك مع الرسالة جاهزة — لا نحفظ بياناتك على الموقع.',
      'form-error': 'يرجى تصحيح الحقول المميّزة أدناه.',

      'cc-wa': 'واتساب', 'cc-phone': 'اتصال مباشر',
      'cc-mail': 'البريد الإلكتروني', 'cc-loc': 'الموقع', 'cc-loc-v': 'الشويخ، الكويت',

      'footer-desc': 'خدمات مقاولات وتشطيبات للمشاريع السكنية والتجارية في الكويت.',
      'footer-links': 'روابط سريعة',
      'footer-contact': 'بيانات التواصل',
      'footer-cta-h': 'جاهز للبدء؟',
      'footer-cta-p': 'أرسل لنا تفاصيل مشروعك وسنعود إليك بعرض واضح.',
      'footer-cta-b': 'اطلب عرض سعر',
      'footer-copy': '© ٢٠٢٦ العبسي الأهلية للمقاولات والتشطيبات. جميع الحقوق محفوظة.',

      /* aria-labels + form message template */
      'aria-nav': 'التنقل الرئيسي',
      'aria-menu-open': 'فتح القائمة',
      'aria-menu-close': 'إغلاق القائمة',
      'aria-lang': 'اختيار اللغة',
      'aria-filters': 'تصفية المشاريع حسب القطاع',
      'aria-wa': 'تواصل عبر واتساب',
      'aria-top': 'العودة إلى الأعلى',
      'aria-brand': 'العبسي الأهلية — الرئيسية',
      'msg-subject': 'طلب عرض سعر — العبسي الأهلية',
      'msg-greeting': 'مرحباً فريق العبسي الأهلية،',
      'msg-l-name': 'الاسم', 'msg-l-phone': 'الهاتف',
      'msg-l-type': 'نوع المشروع', 'msg-l-msg': 'التفاصيل',
      'msg-closing': 'أرجو التواصل معي. شكراً لكم.'
    },

    en: {
      'doc-title': 'Alabsi Alahliah Building Construction Co. | Contracting in Kuwait',
      'doc-desc': 'Alabsi Alahliah Building Construction Co., Shuwaikh, Kuwait. General contracting, design and planning, interior finishing and furnishing — held to the highest standards of quality and safety.',

      'skip': 'Skip to content',
      'brand-name': 'Alabsi Alahliah',
      'brand-tag': 'Building Construction Co.',

      'nav-home': 'Home',
      'nav-services': 'Services',
      'nav-process': 'How we work',
      'nav-projects': 'Projects',
      'nav-about': 'About',
      'nav-contact': 'Contact us',

      'hero-eyebrow': '8+ years building in Kuwait',
      'hero-title-1': 'We build today,',
      'hero-title-2': 'to shape tomorrow',
      'hero-lead': 'Alabsi Alahliah Building Construction — committed to the highest standards of quality and safety, delivering complete projects built to last.',
      'hero-cta-1': 'Request a quote',
      'hero-cta-2': 'View our projects',
      'stat-1': 'Projects delivered',
      'stat-2': 'Client satisfaction',
      'stat-3': 'Years of experience',

      'values-h': 'Our values',
      'value-1-t': 'Quality',         'value-1-d': 'The highest standards on site',
      'value-2-t': 'Professionalism', 'value-2-d': 'A specialised, experienced team',
      'value-3-t': 'Commitment',      'value-3-d': 'We keep to schedules and promises',
      'value-4-t': 'Trust',           'value-4-d': 'Long-term partnerships',

      'services-kicker': 'Services',
      'services-h': 'From first sketch to handing over the keys',
      'services-sub': 'Four connected services covering the full project lifecycle, under one team and one line of responsibility.',
      'srv-1-t': 'Design & planning',
      'srv-1-d': 'Tailored architectural and interior design, with 3D visualisation and detailed construction drawings.',
      'srv-2-t': 'General contracting',
      'srv-2-d': 'Full project management, construction and execution, coordinated with trusted subcontractors.',
      'srv-3-t': 'Interior finishing',
      'srv-3-d': 'Refined finishes, bespoke joinery, lighting and coordinated decor for every space.',
      'srv-4-t': 'Furnishing & styling',
      'srv-4-d': 'Premium sourcing, made-to-order pieces, and styling that reflects the character of the space.',

      'process-kicker': 'How we work',
      'process-h': 'Four clear stages, no surprises',
      'process-sub': 'From day one you know what happens, when, and who is responsible.',
      'step-1-t': 'Consultation & site visit',
      'step-1-d': 'We visit the site, listen to your requirements, and define the scope and indicative budget.',
      'step-2-t': 'Design & quotation',
      'step-2-d': 'Detailed drawings and designs, with an itemised quote and an agreed schedule before work begins.',
      'step-3-t': 'Execution & supervision',
      'step-3-d': 'A site team under engineering supervision, with daily quality and safety checks and regular progress reports.',
      'step-4-t': 'Handover & follow-up',
      'step-4-d': 'An organised handover against an agreed snag list, plus follow-up after completion.',

      'projects-kicker': 'Projects',
      'projects-h': 'Work that speaks for itself',
      'projects-sub': 'Selected residential, commercial and hospitality projects we have delivered.',
      'filter-all': 'All', 'filter-res': 'Residential', 'filter-com': 'Commercial', 'filter-hos': 'Hospitality',
      'prj-1-t': 'Villa Armonia', 'prj-1-d': 'Modern Mediterranean with bespoke stonework.', 'prj-1-tag': 'Residential',
      'prj-2-t': 'Zen Office', 'prj-2-d': 'A minimal, flexible workspace with a light touch.', 'prj-2-tag': 'Commercial',
      'prj-3-t': 'Penthouse 360', 'prj-3-d': 'Luxury interiors with panoramic city views.', 'prj-3-tag': 'Residential',
      'prj-4-t': 'Boutique Hotel', 'prj-4-d': 'Full renovation and fit-out for a five-star stay.', 'prj-4-tag': 'Hospitality',
      'projects-empty': 'No projects in this sector yet.',

      'about-kicker': 'About us',
      'about-h': 'A Kuwaiti company that builds responsibly',
      'about-p1': 'With more than 8 years of experience, Alabsi Alahliah Building Construction has established itself in construction and interior finishing across Kuwait.',
      'about-p2': 'We combine traditional craftsmanship with modern management and execution methods, delivering spaces that are functional, beautiful, and built to last.',
      'feat-1': 'High-quality materials',
      'feat-2': 'Specialised engineering team',
      'feat-3': 'On-time delivery',
      'feat-4': 'Committed to safety standards',
      'about-cta': 'Talk to our team',

      'contact-kicker': 'Contact us',
      'contact-h': 'Tell us about your project',
      'contact-sub': 'Fill in the form and we will get back to you, or reach us directly on WhatsApp.',
      'f-name': 'Name', 'f-name-err': 'Please enter your name.',
      'f-phone': 'Phone number', 'f-phone-err': 'Please enter a valid phone number.',
      'f-type': 'Project type',
      'opt-res': 'Residential', 'opt-com': 'Commercial', 'opt-hos': 'Hospitality',
      'opt-fin': 'Finishing & decor', 'opt-oth': 'Other',
      'f-msg': 'Project details',
      'f-msg-hint': 'Location, approximate area, and your preferred timeline if you have one.',
      'f-send-wa': 'Send via WhatsApp',
      'f-send-mail': 'Send by email',
      'f-note': 'The form opens WhatsApp or your email app with the message ready — nothing is stored on this site.',
      'form-error': 'Please correct the highlighted fields below.',

      'cc-wa': 'WhatsApp', 'cc-phone': 'Call us',
      'cc-mail': 'Email', 'cc-loc': 'Location', 'cc-loc-v': 'Shuwaikh, Kuwait',

      'footer-desc': 'Contracting and finishing services for residential and commercial projects in Kuwait.',
      'footer-links': 'Quick links',
      'footer-contact': 'Contact details',
      'footer-cta-h': 'Ready to start?',
      'footer-cta-p': 'Send us your project details and we will come back with a clear proposal.',
      'footer-cta-b': 'Request a quote',
      'footer-copy': '© 2026 Alabsi Alahliah Building Construction Co. All rights reserved.',

      'aria-nav': 'Main navigation',
      'aria-menu-open': 'Open menu',
      'aria-menu-close': 'Close menu',
      'aria-lang': 'Choose language',
      'aria-filters': 'Filter projects by sector',
      'aria-wa': 'Contact us on WhatsApp',
      'aria-top': 'Back to top',
      'aria-brand': 'Alabsi Alahliah — home',
      'msg-subject': 'Quote request — Alabsi Alahliah',
      'msg-greeting': 'Hello Alabsi Alahliah team,',
      'msg-l-name': 'Name', 'msg-l-phone': 'Phone',
      'msg-l-type': 'Project type', 'msg-l-msg': 'Details',
      'msg-closing': 'Please get in touch. Thank you.'
    }
  };

  var lang = 'ar';
  function t(key) {
    var dict = I18N[lang] || I18N.ar;
    return dict[key] !== undefined ? dict[key] : (I18N.ar[key] || '');
  }

  /* ---- element shortcuts ---- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var header     = $('#header');
  var nav        = $('#nav');
  var menuToggle = $('#menuToggle');
  var navScrim   = $('#navScrim');
  var progress   = $('#scrollProgress');
  var toTop      = $('#toTop');

  /* ==========================================================
     2. LANGUAGE
     ========================================================== */
  var ARIA_TARGETS = [
    ['#nav', 'aria-nav'],
    ['.lang-switch', 'aria-lang'],
    ['.filters', 'aria-filters'],
    ['.fab-wa', 'aria-wa'],
    ['#toTop', 'aria-top'],
    ['.site-header .brand', 'aria-brand']
  ];

  function setLanguage(next) {
    lang = (next === 'en') ? 'en' : 'ar';
    var rtl = lang === 'ar';

    document.documentElement.lang = lang;
    document.documentElement.dir  = rtl ? 'rtl' : 'ltr';

    // Text nodes
    $$('[data-i18n]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n'));
      if (!val) return;
      // Labels carry a trailing required marker that must survive.
      var req = el.querySelector('.req');
      if (req) {
        el.textContent = val + ' ';
        el.appendChild(req);
      } else {
        el.textContent = val;
      }
    });

    // Document metadata
    document.title = t('doc-title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('doc-desc'));

    // aria-labels
    ARIA_TARGETS.forEach(function (pair) {
      var el = $(pair[0]);
      if (el) el.setAttribute('aria-label', t(pair[1]));
    });
    syncMenuLabel();

    // Language buttons
    $$('.lang-btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    try { localStorage.setItem('alabsi-lang', lang); } catch (e) { /* private mode */ }
  }

  $$('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem('alabsi-lang'); } catch (e) { /* ignore */ }
  if (saved !== 'ar' && saved !== 'en') {
    // No stored choice: follow the browser, defaulting to Arabic.
    var nav0 = (navigator.language || 'ar').toLowerCase();
    saved = nav0.indexOf('ar') === 0 ? 'ar' : 'en';
  }
  setLanguage(saved);

  /* ==========================================================
     3. MOBILE NAVIGATION
     ========================================================== */
  function syncMenuLabel() {
    if (!menuToggle) return;
    var open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-label', t(open ? 'aria-menu-close' : 'aria-menu-open'));
  }

  function setNav(open) {
    if (!nav || !menuToggle) return;
    nav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('nav-open', open);
    if (navScrim) navScrim.hidden = !open;
    syncMenuLabel();
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      setNav(menuToggle.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (navScrim) navScrim.addEventListener('click', function () { setNav(false); });

  $$('.nav a, .nav .btn').forEach(function (a) {
    a.addEventListener('click', function () { setNav(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav && nav.classList.contains('is-open')) {
      setNav(false);
      menuToggle.focus();
    }
  });

  // Reset the drawer when we cross back to the desktop layout.
  var wide = window.matchMedia('(min-width: 861px)');
  function onWide(e) { if (e.matches) setNav(false); }
  if (wide.addEventListener) wide.addEventListener('change', onWide);
  else if (wide.addListener) wide.addListener(onWide);

  /* ==========================================================
     4. HEADER STATE, SCROLL PROGRESS, BACK TO TOP
     ========================================================== */
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (header) header.classList.toggle('is-scrolled', y > 24);

    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? Math.min(y / max, 1) * 100 : 0) + '%';
    }

    if (toTop) toTop.hidden = y < 600;

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    });
  }

  /* ==========================================================
     5. SCROLL SPY — highlight the section you are reading
     ========================================================== */
  var navLinks = $$('.nav-link');
  var sections = navLinks
    .map(function (l) { return document.querySelector(l.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (l) {
          var on = l.getAttribute('href') === '#' + entry.target.id;
          l.classList.toggle('is-active', on);
          if (on) { l.setAttribute('aria-current', 'true'); }
          else { l.removeAttribute('aria-current'); }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ==========================================================
     6. SCROLL REVEAL
     ========================================================== */
  var revealables = $$('.reveal');

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealables.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ==========================================================
     7. STAT COUNTERS
     ========================================================== */
  var counters = $$('[data-count]');

  function runCounters() {
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;

      if (reduceMotion.matches) { el.textContent = String(target); return; }

      var duration = 1400;
      var start = null;

      function tick(now) {
        if (start === null) start = now;
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(eased * target));
        if (p < 1) window.requestAnimationFrame(tick);
      }
      window.requestAnimationFrame(tick);
    });
  }

  var statsBlock = $('.stats');
  if (statsBlock && counters.length) {
    if ('IntersectionObserver' in window) {
      var statObs = new IntersectionObserver(function (entries, obs) {
        if (entries[0].isIntersecting) { runCounters(); obs.disconnect(); }
      }, { threshold: 0.4 });
      statObs.observe(statsBlock);
    } else {
      runCounters();
    }
  }

  /* ==========================================================
     8. PROJECT FILTERS
     ========================================================== */
  var chips   = $$('.chip');
  var projects = $$('.project');
  var emptyMsg = $('#projectsEmpty');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.getAttribute('data-filter');
      var shown = 0;

      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });

      projects.forEach(function (p) {
        var match = filter === 'all' || p.getAttribute('data-sector') === filter;
        p.hidden = !match;
        if (match) shown++;
      });

      if (emptyMsg) emptyMsg.hidden = shown !== 0;
    });
  });

  /* ==========================================================
     9. PROJECT PHOTOS
     Until real photos exist at images/project-N.jpg the tile
     falls back to a blueprint pattern instead of a broken icon.
     ========================================================== */
  $$('.project-media img').forEach(function (img) {
    function fallback() { img.parentElement.classList.add('is-placeholder'); }
    if (img.complete && img.naturalWidth === 0) fallback();
    img.addEventListener('error', fallback);
  });

  /* ==========================================================
     10. QUOTE FORM
     No backend: composes a message and hands it to WhatsApp
     or the visitor's mail client.
     ========================================================== */
  var form     = $('#quoteForm');
  var errorBox = $('#formError');

  function fieldOf(input) { return input.closest('.field'); }

  function showError(input, errId, show) {
    var wrap = fieldOf(input);
    var msg  = document.getElementById(errId);
    if (wrap) wrap.classList.toggle('has-error', show);
    if (msg) msg.hidden = !show;
    input.setAttribute('aria-invalid', show ? 'true' : 'false');
    if (show) input.setAttribute('aria-describedby', errId);
    else input.removeAttribute('aria-describedby');
  }

  function validate() {
    var name  = $('#f-name');
    var phone = $('#f-phone');
    var ok = true;

    var nameBad = name.value.trim().length < 2;
    showError(name, 'f-name-err', nameBad);
    if (nameBad) ok = false;

    var digits = phone.value.replace(/\D/g, '');
    var phoneBad = digits.length < 6;
    showError(phone, 'f-phone-err', phoneBad);
    if (phoneBad) ok = false;

    if (errorBox) {
      errorBox.textContent = ok ? '' : t('form-error');
      errorBox.hidden = ok;
      // WCAG: send focus to the summary, not past it into a field.
      if (!ok) errorBox.focus();
    }
    return ok;
  }

  function composeMessage() {
    var typeSelect = $('#f-type');
    var typeLabel  = typeSelect.options[typeSelect.selectedIndex].textContent.trim();
    var details    = $('#f-msg').value.trim();

    var lines = [
      t('msg-greeting'),
      '',
      t('msg-l-name') + ': ' + $('#f-name').value.trim(),
      t('msg-l-phone') + ': ' + $('#f-phone').value.trim(),
      t('msg-l-type') + ': ' + typeLabel
    ];
    if (details) lines.push(t('msg-l-msg') + ': ' + details);
    lines.push('', t('msg-closing'));

    return lines.join('\n');
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) return;
      window.open(
        'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(composeMessage()),
        '_blank',
        'noopener'
      );
    });

    // Clear an error as soon as the visitor starts fixing it.
    ['f-name', 'f-phone'].forEach(function (id) {
      var input = document.getElementById(id);
      if (!input) return;
      input.addEventListener('input', function () {
        var wrap = fieldOf(input);
        if (wrap && wrap.classList.contains('has-error')) validate();
      });
    });

    var mailBtn = $('#sendMail');
    if (mailBtn) {
      mailBtn.addEventListener('click', function () {
        if (!validate()) return;
        window.location.href = 'mailto:' + EMAIL +
          '?subject=' + encodeURIComponent(t('msg-subject')) +
          '&body=' + encodeURIComponent(composeMessage());
      });
    }
  }

  /* ==========================================================
     11. SMOOTH SCROLL WITH STICKY-HEADER OFFSET
     ========================================================== */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href || href === '#') return;

    var target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    var offset = (header ? header.offsetHeight : 74) + 16;
    var top = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: top, behavior: reduceMotion.matches ? 'auto' : 'smooth' });

    // Move keyboard focus with the viewport, not just the scrollbar.
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });

})();
