export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Denandrias',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
          hid: 'og:title',
          name: 'og:title',
          content: 'Denandrias',
      },
      {
          hid: 'og:image',
          property: 'og:image',
          content: '/denandrias-intergalactic.gif',
      },
      {
          hid: 'og:description',
          property: 'og:description',
          content: 'A collection of ordered text files that explains steps when I learn DevOps.',
      },
      {
          hid: 'og:url',
          property: 'og:url',
          content: '//www.dunderburken.com/',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  target: 'static'
}
