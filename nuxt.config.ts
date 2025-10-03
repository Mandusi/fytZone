export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/i18n",
  ],
  css: ["~/assets/css/main.css"],
  ui: {
    prefix: "Nuxt",
  },

  i18n: {
    locales: [
      { code: "en", language: "en-US" },
      { code: "tr", language: "tr-TR" },
    ],
    defaultLocale: "en",
  },
});
