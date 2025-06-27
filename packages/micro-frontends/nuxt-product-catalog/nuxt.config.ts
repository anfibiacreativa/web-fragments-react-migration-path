import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  ssr: true,
  app: {
    buildAssetsDir: '/_fragment/nuxt/assets/',
    head: {
      title: 'Nuxt Product Catalog',
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
  routeRules: {
    '/': { redirect: '/store/catalog' },
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
        dir: 'dist/public/_fragment/nuxt/assets',
        baseURL: '/_fragment/nuxt/assets/',
      },
    ],
  },
  css: ['~/assets/styles.css'],
  // modules: ["nitro-cloudflare-dev"]
});
