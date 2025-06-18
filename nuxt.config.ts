// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:true,
  runtimeConfig: {
    public:{
      APP_SERVER: process.env.APP_SERVER || "stage",
      APP_URL: process.env.APP_URL || "http://localhost:3000/",
    }
  },
  image: {
    domains: ['a.storyblok.com'],
  },
  typescript: {
    strict: true,
    shim: false,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-svgo",
    "@nuxt/icon",
    "@storyblok/nuxt",
    "@formkit/nuxt",
  ],
  tailwindcss: {
    viewer: false,
  },
  storyblok: {
    accessToken:
      process.env.APP_SERVER === "stage"
        ? process.env.STORYBLOK_PREVIEW_TOKEN
        : process.env.STORYBLOK_PUBLIC_TOKEN,
    bridge: process.env.APP_SERVER === "stage",
    apiOptions: {
      region: "eu",
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
});
