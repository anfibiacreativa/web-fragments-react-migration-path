// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  app: {
    buildAssetsDir: '/_fragment/nuxt-ai/assets/',
    head: {
      title: 'Nuxt Slogan Generator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  nitro: {
    // preset: "cloudflare-module",
    // cloudflare: {
    //   nodeCompat: true
    // },
    output: {
      dir: 'dist',
      publicDir: 'dist/public',
    },
    publicAssets: [
      {
        dir: 'dist/public/_fragment/nuxt-ai/assets',
        baseURL: '/_fragment/nuxt-ai/assets/',
      },
    ],
  },
  // modules: ["nitro-cloudflare-dev"]
})
