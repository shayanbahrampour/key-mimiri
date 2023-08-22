import fa from './lang/fa';
import en from './lang/en';

const projectName = 'Cobel';
const isProduction = process.env.NODE_ENV === 'production';

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
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'omsapplication-tap-highlight', content: 'no' },

      { name: 'twitter:title', content: '' },
      { name: 'twitter:image', content: '/images/icons/apple-touch-icon.png' },
      { name: 'twitter:image:alt', content: 'Cobel' },
      { name: 'twitter:description', content: '' },

      { hid: 'keyword', property: 'keyword', content: '' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:title', property: 'og:title', content: '' },
      { hid: 'og:keyword', property: 'og:keyword', content: '' },
      { hid: 'og:description', name: 'og:description', content: '' },
      { name: 'og:image', content: '/images/icons/apple-touch-icon.png' },
      { name: 'og:image:secure_url', content: '/images/icons/apple-touch-icon.png' },
      { property: 'og:image', content: '/images/icons/apple-touch-icon.png' },
      { property: 'og:type', content: 'website' },
      { property: 'og:name', content: projectName },
      { property: 'og:site_name', content: projectName },

      { property: 'HandheldFriendly', content: 'true' },
      { property: 'format-detection', content: 'telephone=no' },

      // Chrome, Firefox OS and Opera
      { hid: 'themeColor', name: 'theme-color', content: '#000' },
      { name: 'msapplication-navbutton-color', content: '#000' },

      // Apple devices
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },

      { name: 'apple-mobile-web-app-title', content: projectName },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },

      { name: 'msapplication-TileColor', content: '#97245B' },
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
    color: '#97245B',
    duration: 10000
  },
  loadingIndicator: {
    color: '#97245B',
    name: 'cube-grid'
  },
  toast: {
    duration: 1000,
    position: 'top-center',
    iconPack: 'custom-class'
  },
  router: {
    middleware: 'scroll'
  },
  css: ['@/assets/scss/app.scss', '@mdi/font/css/materialdesignicons.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/mixins/index',
    '@/plugins/axios',
    '@/plugins/filters',
    '@/plugins/device',
    '@/plugins/dayjs',
    '@/plugins/video.client',
    '@/plugins/swiper.client',
    '@/plugins/vue-pdf.client',
    '@/plugins/dynamic-domain'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/dayjs',
    '@nuxtjs/toast',
    ['@nuxtjs/robots', { UserAgent: '*', Disallow: '/' }],
    [
      '@nuxtjs/google-gtag',
      {
        id: 'G-ESS8P8H60C',
        config: {
          anonymize_ip: true,
          send_page_view: true
        }
      }
    ]
  ],

  // Optional
  dayjs: {
    locales: ['en', 'fa'],
    defaultLocale: 'fa',
    defaultTimeZone: 'Asia/Tehran',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'weekday',
      'timezone',
      'relativeTime',
      'advancedFormat'
    ]
  },

  i18n: {
    locales: ['en', 'fa'],
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
  build: {
    extractCSS: isProduction,
    optimizeCSS: isProduction
  }
};
