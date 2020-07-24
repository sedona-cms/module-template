export default {
  rootDir: 'dev',

  head: {
    titleTemplate: '%s - Sedona CMS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  modules: ['@sedona-cms/core', '../lib/module.js'],

  buildModules: ['@nuxtjs/bulma'],

  plugins: [{ src: '~/plugins/admin', mode: 'client' }],

  build: {
    extractCSS: true,

    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
}
