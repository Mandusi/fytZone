export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
        },
        text: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
          muted: "rgb(var(--color-text-light) / <alpha-value>)",
        },
        blue: "rgb(var(--color-blue) / <alpha-value>)",
        gradientStart: "rgb(var(--color-gradient-start) / <alpha-value>)",
        gradientEnd: "rgb(var(--color-gradient-end) / <alpha-value>)",

        border: "rgb(var(--color-border) / <alpha-value>)",
      },
    },
  },

  plugins: [],
};
