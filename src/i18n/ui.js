/**
 * All site copy, in both languages.
 * This is the single place to edit wording — components read from here,
 * so Arabic and English can never drift out of sync structurally.
 */

export const LOCALES = ['ar', 'en'];
export const DEFAULT_LOCALE = 'ar';

export const CONTACT = {
  whatsapp: '96550008180',
  phoneDisplay: '+965 5000 8180',
  phoneHref: '+96550008180',
  email: 'alabsi.company.2022@gmail.com',
  mapsUrl: 'https://maps.google.com/?q=Shuwaikh,+Kuwait',
  social: {
    instagram: '#',
    linkedin: '#',
    facebook: '#',
    x: '#',
  },
};

export const ui = {
  ar: {
    dir: 'rtl',
    htmlLang: 'ar',
    localeName: 'العربية',

    meta: {
      title: 'العبسي الأهلية للمقاولات والتشطيبات | شركة إنشاءات في الكويت',
      description:
        'شركة العبسي الأهلية للمقاولات والتشطيبات في الشويخ، الكويت. مقاولات عامة، تصميم وتخطيط، تشطيبات داخلية وتأثيث — بأعلى معايير الجودة والسلامة.',
      keywords:
        'مقاولات الكويت, شركة مقاولات في الكويت, مقاولات عامة الكويت, شركة إنشاءات الكويت, مقاول بناء الكويت, تشطيبات داخلية الكويت, تشطيب شقق الكويت, ترميم فلل الكويت, ديكور داخلي الكويت, تصميم داخلي الكويت, تنفيذ مشاريع الكويت, بناء وترميم الكويت, مقاولات الشويخ, شركة مقاولات كويتية, العبسي الأهلية',
      ogLocale: 'ar_KW',
    },

    skip: 'تخطَّ إلى المحتوى',

    brand: {
      name: 'العبسي الأهلية',
      tagline: 'للمقاولات والتشطيبات',
      legalName: 'العبسي الأهلية للمقاولات والتشطيبات',
      homeAria: 'العبسي الأهلية — الرئيسية',
    },

    nav: {
      aria: 'التنقل الرئيسي',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
      langAria: 'اختيار اللغة',
      links: [
        { href: '#home', label: 'الرئيسية' },
        { href: '#services', label: 'خدماتنا' },
        { href: '#process', label: 'آلية العمل' },
        { href: '#projects', label: 'مشاريعنا' },
        { href: '#about', label: 'من نحن' },
      ],
      contact: 'تواصل معنا',
    },

    hero: {
      eyebrow: 'أكثر من 8 أعوام في قطاع الإنشاءات بالكويت',
      titleTop: 'نبني الحاضر',
      titleAccent: 'لنشيّد المستقبل',
      lead: 'شركة العبسي الأهلية للمقاولات والتشطيبات — نلتزم بأعلى معايير الجودة والسلامة لنقدّم مشاريع متكاملة تدوم وتُحدث أثراً.',
      ctaPrimary: 'اطلب عرض سعر',
      ctaSecondary: 'تصفّح مشاريعنا',
      imageAlt: '',
      stats: [
        { count: 150, suffix: '+', label: 'مشروع منجز' },
        { count: 98, suffix: '%', label: 'رضا العملاء' },
        { count: 8, suffix: '+', label: 'سنوات خبرة' },
      ],
    },

    values: {
      heading: 'قيمنا',
      items: [
        { icon: 'shield', title: 'الجودة', text: 'أعلى المعايير في التنفيذ' },
        { icon: 'helmet', title: 'الاحترافية', text: 'فريق متخصص ذو خبرة' },
        { icon: 'clock', title: 'الالتزام', text: 'نلتزم بالمواعيد والوعود' },
        { icon: 'handshake', title: 'الثقة', text: 'شراكات طويلة المدى' },
      ],
    },

    services: {
      kicker: 'خدماتنا',
      heading: 'من الفكرة الأولى إلى تسليم المفتاح',
      sub: 'أربع خدمات متكاملة تغطي دورة حياة المشروع بالكامل، تحت إشراف فريق واحد ومسؤولية واحدة.',
      items: [
        {
          icon: 'ruler',
          title: 'التصميم والتخطيط',
          text: 'تصميم معماري وداخلي مخصص، مع نماذج ثلاثية الأبعاد ومخططات تنفيذية تفصيلية.',
        },
        {
          icon: 'building',
          title: 'المقاولات العامة',
          text: 'إدارة كاملة للمشروع، وأعمال بناء وتنفيذ، وتنسيق مع مقاولين فرعيين موثوقين.',
        },
        {
          icon: 'brush',
          title: 'التشطيبات الداخلية',
          text: 'تشطيبات أنيقة، أعمال نجارة مخصصة، إضاءة، وديكور منسّق لكل مساحة.',
        },
        {
          icon: 'sofa',
          title: 'التأثيث والتصميم',
          text: 'توريد متميز، قطع مصنوعة حسب الطلب، وتنسيق يعكس شخصية المكان وأصحابه.',
        },
      ],
    },

    process: {
      kicker: 'آلية العمل',
      heading: 'أربع مراحل واضحة، بلا مفاجآت',
      sub: 'تعرف من اليوم الأول ما الذي سيحدث، ومتى، وعلى يد من.',
      steps: [
        {
          title: 'الاستشارة والمعاينة',
          text: 'نزور الموقع، نستمع لمتطلباتك، ونحدد نطاق العمل والميزانية التقريبية.',
        },
        {
          title: 'التصميم والتسعير',
          text: 'مخططات وتصاميم تفصيلية، مع عرض سعر مفصّل وجدول زمني معتمد قبل البدء.',
        },
        {
          title: 'التنفيذ والإشراف',
          text: 'فريق ميداني وإشراف هندسي، مع متابعة يومية لمعايير الجودة والسلامة وتقارير تقدّم دورية.',
        },
        {
          title: 'التسليم والمتابعة',
          text: 'تسليم منظّم وفق قائمة فحص متفق عليها، ومتابعة ما بعد التسليم.',
        },
      ],
    },

    projects: {
      kicker: 'مشاريعنا',
      heading: 'أعمال تتحدث عن نفسها',
      sub: 'نماذج مختارة من مشاريع سكنية وتجارية وضيافة نفّذناها.',
      filtersAria: 'تصفية المشاريع حسب القطاع',
      filters: [
        { key: 'all', label: 'الكل' },
        { key: 'residential', label: 'سكني' },
        { key: 'commercial', label: 'تجاري' },
        { key: 'hospitality', label: 'ضيافة' },
      ],
      empty: 'لا توجد مشاريع في هذا القطاع حالياً.',
      items: [
        {
          image: '/images/project-1.jpg',
          sector: 'residential',
          tag: 'سكني',
          title: 'فيلا أرمونيا',
          text: 'طراز متوسطي حديث مع أعمال حجرية مخصصة.',
        },
        {
          image: '/images/project-2.jpg',
          sector: 'commercial',
          tag: 'تجاري',
          title: 'مكتب زين',
          text: 'مساحة عمل بسيطة بتصميم حيوي ومرن.',
        },
        {
          image: '/images/project-3.jpg',
          sector: 'residential',
          tag: 'سكني',
          title: 'بنتهاوس ٣٦٠',
          text: 'ديكورات فاخرة مع إطلالات بانورامية على المدينة.',
        },
        {
          image: '/images/project-4.jpg',
          sector: 'hospitality',
          tag: 'ضيافة',
          title: 'فندق بوتيك',
          text: 'تجديد شامل وتشطيب لتجربة إقامة من فئة الخمس نجوم.',
        },
      ],
    },

    about: {
      kicker: 'من نحن',
      heading: 'شركة كويتية تبني بمسؤولية',
      paragraphs: [
        'مع أكثر من ٨ أعوام من الخبرة، رسّخت العبسي الأهلية للمقاولات والتشطيبات مكانتها في مجال البناء والتشطيبات الداخلية في الكويت.',
        'نجمع بين الحرفية التقليدية والأساليب الحديثة في الإدارة والتنفيذ، لنقدّم مساحات تجمع بين الوظيفة والجمال وتصمد أمام الزمن.',
      ],
      features: [
        'مواد عالية الجودة',
        'فريق هندسي متخصص',
        'تسليم في الوقت المحدد',
        'التزام بمعايير السلامة',
      ],
      cta: 'تحدّث إلى فريقنا',
      imageAlt: 'أحد مشاريع العبسي الأهلية للمقاولات والتشطيبات',
    },

    contact: {
      kicker: 'تواصل معنا',
      heading: 'احكِ لنا عن مشروعك',
      sub: 'املأ النموذج وسنعود إليك، أو تواصل معنا مباشرة عبر واتساب.',
      name: 'الاسم',
      nameError: 'يرجى كتابة الاسم.',
      phone: 'رقم الهاتف',
      phoneError: 'يرجى كتابة رقم هاتف صحيح.',
      type: 'نوع المشروع',
      types: [
        { value: 'residential', label: 'سكني' },
        { value: 'commercial', label: 'تجاري' },
        { value: 'hospitality', label: 'ضيافة' },
        { value: 'finishing', label: 'تشطيبات وديكور' },
        { value: 'other', label: 'أخرى' },
      ],
      message: 'تفاصيل المشروع',
      messageHint: 'الموقع، المساحة التقريبية، والمدة المرغوبة إن وُجدت.',
      sendWhatsapp: 'إرسال عبر واتساب',
      sendMail: 'إرسال بالبريد',
      note: 'يفتح النموذج تطبيق واتساب أو البريد لديك مع الرسالة جاهزة — لا نحفظ بياناتك على الموقع.',
      formError: 'يرجى تصحيح الحقول المميّزة أدناه.',
      cards: {
        whatsapp: 'واتساب',
        phone: 'اتصال مباشر',
        email: 'البريد الإلكتروني',
        location: 'الموقع',
        locationValue: 'الشويخ، الكويت',
      },
      /* Template for the composed WhatsApp / email message */
      msg: {
        subject: 'طلب عرض سعر — العبسي الأهلية',
        greeting: 'مرحباً فريق العبسي الأهلية،',
        labelName: 'الاسم',
        labelPhone: 'الهاتف',
        labelType: 'نوع المشروع',
        labelMessage: 'التفاصيل',
        closing: 'أرجو التواصل معي. شكراً لكم.',
      },
    },

    footer: {
      desc: 'خدمات مقاولات وتشطيبات للمشاريع السكنية والتجارية في الكويت.',
      links: 'روابط سريعة',
      contact: 'بيانات التواصل',
      ctaHeading: 'جاهز للبدء؟',
      ctaText: 'أرسل لنا تفاصيل مشروعك وسنعود إليك بعرض واضح.',
      ctaButton: 'اطلب عرض سعر',
      copy: '© ٢٠٢٦ العبسي الأهلية للمقاولات والتشطيبات. جميع الحقوق محفوظة.',
    },

    fab: {
      whatsapp: 'تواصل عبر واتساب',
      top: 'العودة إلى الأعلى',
    },
  },

  /* ---------------------------------------------------------------- */

  en: {
    dir: 'ltr',
    htmlLang: 'en',
    localeName: 'EN',

    meta: {
      title: 'Alabsi Alahliah Building Construction Co. | Contracting in Kuwait',
      description:
        'Alabsi Alahliah Building Construction Co., Shuwaikh, Kuwait. General contracting, design and planning, interior finishing and furnishing — held to the highest standards of quality and safety.',
      keywords:
        'construction company Kuwait, general contracting Kuwait, contracting company Kuwait, building contractor Kuwait, interior finishing Kuwait, fit-out Kuwait, interior design Kuwait, villa construction Kuwait, renovation Kuwait, civil works Kuwait, turnkey projects Kuwait, Shuwaikh contractor, Kuwaiti construction company, Alabsi Alahliah',
      ogLocale: 'en_US',
    },

    skip: 'Skip to content',

    brand: {
      name: 'Alabsi Alahliah',
      tagline: 'Building Construction Co.',
      legalName: 'Alabsi Alahliah Building Construction Co.',
      homeAria: 'Alabsi Alahliah — home',
    },

    nav: {
      aria: 'Main navigation',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      langAria: 'Choose language',
      links: [
        { href: '#home', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '#process', label: 'How we work' },
        { href: '#projects', label: 'Projects' },
        { href: '#about', label: 'About' },
      ],
      contact: 'Contact us',
    },

    hero: {
      eyebrow: '8+ years building in Kuwait',
      titleTop: 'We build today,',
      titleAccent: 'to shape tomorrow',
      lead: 'Alabsi Alahliah Building Construction — committed to the highest standards of quality and safety, delivering complete projects built to last.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'View our projects',
      imageAlt: '',
      stats: [
        { count: 150, suffix: '+', label: 'Projects delivered' },
        { count: 98, suffix: '%', label: 'Client satisfaction' },
        { count: 8, suffix: '+', label: 'Years of experience' },
      ],
    },

    values: {
      heading: 'Our values',
      items: [
        { icon: 'shield', title: 'Quality', text: 'The highest standards on site' },
        { icon: 'helmet', title: 'Professionalism', text: 'A specialised, experienced team' },
        { icon: 'clock', title: 'Commitment', text: 'We keep to schedules and promises' },
        { icon: 'handshake', title: 'Trust', text: 'Long-term partnerships' },
      ],
    },

    services: {
      kicker: 'Services',
      heading: 'From first sketch to handing over the keys',
      sub: 'Four connected services covering the full project lifecycle, under one team and one line of responsibility.',
      items: [
        {
          icon: 'ruler',
          title: 'Design & planning',
          text: 'Tailored architectural and interior design, with 3D visualisation and detailed construction drawings.',
        },
        {
          icon: 'building',
          title: 'General contracting',
          text: 'Full project management, construction and execution, coordinated with trusted subcontractors.',
        },
        {
          icon: 'brush',
          title: 'Interior finishing',
          text: 'Refined finishes, bespoke joinery, lighting and coordinated decor for every space.',
        },
        {
          icon: 'sofa',
          title: 'Furnishing & styling',
          text: 'Premium sourcing, made-to-order pieces, and styling that reflects the character of the space.',
        },
      ],
    },

    process: {
      kicker: 'How we work',
      heading: 'Four clear stages, no surprises',
      sub: 'From day one you know what happens, when, and who is responsible.',
      steps: [
        {
          title: 'Consultation & site visit',
          text: 'We visit the site, listen to your requirements, and define the scope and indicative budget.',
        },
        {
          title: 'Design & quotation',
          text: 'Detailed drawings and designs, with an itemised quote and an agreed schedule before work begins.',
        },
        {
          title: 'Execution & supervision',
          text: 'A site team under engineering supervision, with daily quality and safety checks and regular progress reports.',
        },
        {
          title: 'Handover & follow-up',
          text: 'An organised handover against an agreed snag list, plus follow-up after completion.',
        },
      ],
    },

    projects: {
      kicker: 'Projects',
      heading: 'Work that speaks for itself',
      sub: 'Selected residential, commercial and hospitality projects we have delivered.',
      filtersAria: 'Filter projects by sector',
      filters: [
        { key: 'all', label: 'All' },
        { key: 'residential', label: 'Residential' },
        { key: 'commercial', label: 'Commercial' },
        { key: 'hospitality', label: 'Hospitality' },
      ],
      empty: 'No projects in this sector yet.',
      items: [
        {
          image: '/images/project-1.jpg',
          sector: 'residential',
          tag: 'Residential',
          title: 'Villa Armonia',
          text: 'Modern Mediterranean with bespoke stonework.',
        },
        {
          image: '/images/project-2.jpg',
          sector: 'commercial',
          tag: 'Commercial',
          title: 'Zen Office',
          text: 'A minimal, flexible workspace with a light touch.',
        },
        {
          image: '/images/project-3.jpg',
          sector: 'residential',
          tag: 'Residential',
          title: 'Penthouse 360',
          text: 'Luxury interiors with panoramic city views.',
        },
        {
          image: '/images/project-4.jpg',
          sector: 'hospitality',
          tag: 'Hospitality',
          title: 'Boutique Hotel',
          text: 'Full renovation and fit-out for a five-star stay.',
        },
      ],
    },

    about: {
      kicker: 'About us',
      heading: 'A Kuwaiti company that builds responsibly',
      paragraphs: [
        'With more than 8 years of experience, Alabsi Alahliah Building Construction has established itself in construction and interior finishing across Kuwait.',
        'We combine traditional craftsmanship with modern management and execution methods, delivering spaces that are functional, beautiful, and built to last.',
      ],
      features: [
        'High-quality materials',
        'Specialised engineering team',
        'On-time delivery',
        'Committed to safety standards',
      ],
      cta: 'Talk to our team',
      imageAlt: 'A project by Alabsi Alahliah Building Construction Co.',
    },

    contact: {
      kicker: 'Contact us',
      heading: 'Tell us about your project',
      sub: 'Fill in the form and we will get back to you, or reach us directly on WhatsApp.',
      name: 'Name',
      nameError: 'Please enter your name.',
      phone: 'Phone number',
      phoneError: 'Please enter a valid phone number.',
      type: 'Project type',
      types: [
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' },
        { value: 'hospitality', label: 'Hospitality' },
        { value: 'finishing', label: 'Finishing & decor' },
        { value: 'other', label: 'Other' },
      ],
      message: 'Project details',
      messageHint: 'Location, approximate area, and your preferred timeline if you have one.',
      sendWhatsapp: 'Send via WhatsApp',
      sendMail: 'Send by email',
      note: 'The form opens WhatsApp or your email app with the message ready — nothing is stored on this site.',
      formError: 'Please correct the highlighted fields below.',
      cards: {
        whatsapp: 'WhatsApp',
        phone: 'Call us',
        email: 'Email',
        location: 'Location',
        locationValue: 'Shuwaikh, Kuwait',
      },
      msg: {
        subject: 'Quote request — Alabsi Alahliah',
        greeting: 'Hello Alabsi Alahliah team,',
        labelName: 'Name',
        labelPhone: 'Phone',
        labelType: 'Project type',
        labelMessage: 'Details',
        closing: 'Please get in touch. Thank you.',
      },
    },

    footer: {
      desc: 'Contracting and finishing services for residential and commercial projects in Kuwait.',
      links: 'Quick links',
      contact: 'Contact details',
      ctaHeading: 'Ready to start?',
      ctaText: 'Send us your project details and we will come back with a clear proposal.',
      ctaButton: 'Request a quote',
      copy: '© 2026 Alabsi Alahliah Building Construction Co. All rights reserved.',
    },

    fab: {
      whatsapp: 'Contact us on WhatsApp',
      top: 'Back to top',
    },
  },
};

/** Returns the copy bundle for a locale, falling back to the default. */
export function useTranslations(lang) {
  return ui[lang] ?? ui[DEFAULT_LOCALE];
}

/** Path to the same page in the other locale. */
export function altPath(lang) {
  return lang === 'en' ? '/' : '/en/';
}
