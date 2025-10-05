export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
  ],
  css: ["~/assets/css/main.css"],
  ssr: false,

  i18n: {
    locales: [
      { code: "en", language: "English" },
      { code: "tr", language: "Turkish" },
    ],
    defaultLocale: "en",
  },

  colorMode: {
    preference: "system",
    storageKey: "nuxt-color-mode",
    classSuffix: "",
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },
});
