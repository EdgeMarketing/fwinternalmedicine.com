import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  ssr: true,
  // Temporarily replace every public page, preserving the original sources.
  hooks: {
    'pages:extend'(pages) {
      pages.splice(0, pages.length, {
        name: 'maintenance',
        path: '/:pathMatch(.*)*',
        file: new URL('./app/maintenance.vue', import.meta.url).pathname,
      })
    },
  },
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: false,
      routes: [], // Maintenance responses must be served with HTTP 503.
    },
  },
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
    },
  },
  css: [
    '~/assets/css/global.css', // ✅ Keep global styles only
  ],
  modules: ['@nuxtjs/tailwindcss', '@vee-validate/nuxt', 'nitro-cloudflare-dev', '@nuxt/content'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    server: {
      hmr: {
        port: 3000, // Make sure this port matches your Nuxt server port
        clientPort: 3000, // Ensure this matches your Nuxt server port as well
      },
    },
  },
  devtools: { enabled: false },
  runtimeConfig: {
    // These values are only available on the server
    cfAccountId: process.env.NUXT_CF_ACCOUNT_ID,
    cfKVNamespaceId: process.env.NUXT_CF_KV_NAMESPACE_ID,
    cfApiToken: process.env.NUXT_CF_API_TOKEN,

    public: {}, // nothing here unless you want it client-exposed
  },
})
