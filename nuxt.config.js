
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'to be or not to be,it is ...',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    'iview/dist/styles/iview.css',
    { src: "mavon-editor/dist/css/index.css" },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/axios',
    { src: "@/plugins/vue-markdown.js", ssr: false },
    { src: "@/plugins/vue-particles",ssr:false},
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
    '@nuxtjs/axios',
  ],
  axios:{
    proxy:true,
  },
  proxy:{
    '/app':{
      target:'http://localhost:8081',
      changeOrigin:true,
      pathRewrite:{
        '^/app':'/'
      },
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
