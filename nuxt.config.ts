// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/ui",
    "'@vite-pwa/nuxt'",
  ],
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
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
});
