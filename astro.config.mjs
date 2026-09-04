// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, hreflang and the sitemap.
  // Change this to the real domain once it is live.
  site: 'https://alabsi-alahliah.com',

  // Emits sitemap-index.xml with per-language alternates for both locales.
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar-KW', en: 'en' } },
    }),
  ],

  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      // Arabic is served from "/" (no /ar/ prefix); English from "/en/".
      prefixDefaultLocale: false,
    },
  },

  image: {
    // sharp turns the 2 MB source PNGs into ~60-120 KB WebP at build time.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
});
