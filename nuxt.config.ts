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
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "tr",
        name: "Turkish",
        file: "tr.json",
      },
      {
        code: "ger",
        name: "German",
        file: "ger.json",
      },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
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
