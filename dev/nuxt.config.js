export default {
  rootDir: 'dev',

  modules: ['@sedona-cms/core', '../lib/module.js'],

  plugins: [{ src: '~/plugins/admin', mode: 'client' }],

  build: {
    extractCSS: true,
  },
}
