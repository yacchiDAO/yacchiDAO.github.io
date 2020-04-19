
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/yacchi_portfolio/'
  }
} : {}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:url', content: 'https://yacchidao.github.io/yacchi_portfolio/' },
      { property: 'og:title', content: process.env.npm_package_name || '' },
      { property: 'og:image', content: '/yacchi_portfolio/favicon.ico' },
      { property: 'og:description', content: 'やっちのポートフォリオサイトです' },
      { hid: 'description', name: 'description', content: 'やっちのポートフォリオサイトです'  },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@yacchi_otaku' },
      { property: 'og:description', content: 'やっちのポートフォリオサイトです' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/yacchi_portfolio/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  ...routerBase
}
