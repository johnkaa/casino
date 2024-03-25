// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/image", "@nuxtjs/google-fonts", "@nuxt/ui"],
  css: ["normalize.css/normalize.css", "@/assets/scss/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/variables/index";`,
        },
      },
    },
  },
  ui: {
    notifications: {
      position: "bottom-0 top-auto",
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
});
