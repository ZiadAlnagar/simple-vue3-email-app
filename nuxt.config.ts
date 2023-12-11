export default defineNuxtConfig({
  devtools: { enabled: false },
  typescript: {
    typeCheck: true,
  },
  css: ["assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";',
        },
      },
    },
  },
  router: {
    options: { scrollBehaviorType: "smooth" },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/eslint-module"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  eslint: {
    lintOnStart: false,
  },
});
