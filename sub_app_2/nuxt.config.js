export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  mode: 'spa',

  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sub_app_2',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    [
      '@nuxtjs/router', // here
      //
      { keepDefaultRouter: true, path: './router', fileName: 'index.js' },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@femessage/nuxt-micro-frontend',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  MFE: { force: true },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
