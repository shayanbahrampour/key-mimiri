import locales from './lang';
import fa from './lang/fa';
import en from './lang/en';

const projectName = 'مان';
const bgColor = '#97245B';

export default {
  ssr: true,
  target: 'server',
  server: {
    port: process.env.PORT,
    host: process.env.HOST
  },
  env: {
    version: process.env.npm_package_version
  },
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { name: 'twitter:image', content: '/icon.png' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'omsapplication-tap-highlight', content: 'no' },
      { property: 'HandheldFriendly', content: 'true' },
      { property: 'og:image', content: '/images/icons/apple-touch-icon.png' },
      { property: 'og:locale', content: 'fa_IR' },
      { property: 'og:type', content: 'website' },
      { property: 'og:name', content: projectName },
      { property: 'og:site_name', content: projectName },

      // Chrome, Firefox OS and Opera
      { hid: 'themeColor', name: 'theme-color', content: '#000' },
      { name: 'msapplication-navbutton-color', content: '#000' },

      // Apple devices
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },

      { name: 'apple-mobile-web-app-title', content: projectName },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },

      { name: 'msapplication-TileColor', content: bgColor },
      { name: 'msapplication-TileImage', content: '/images/icons/mstile-150x150.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/icons/favicon.ico' },
      { rel: 'mask-icon', color: '#fff', href: '/images/icons/safari-pinned-tab.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/icons/favicon-16x16.png' }
    ]
  },
  loading: {
    rtl: true,
    height: '5px',
    color: '#ff9100',
    duration: 10000
  },
  loadingIndicator: {
    color: '#568ad7',
    name: 'cube-grid'
  },
  router: {
    middleware: 'scroll'
  },
  css: ['@/assets/scss/app.scss', '@fortawesome/fontawesome-free/css/all.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios', '@/plugins/mixins', '@/plugins/filters', '@/plugins/dynamic-domain'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/i18n', ['@nuxtjs/robots', { UserAgent: '*', Disallow: '/' }]],

  i18n: {
    locales,
    defaultDirection: 'ltr',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { fa, en }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    defaultAssets: false,
    customVariables: ['@/assets/scss/vuetify.scss'],
    optionsPath: './vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
