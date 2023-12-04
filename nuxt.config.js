export default {
    server: {
        host: 'localhost'
    },

    target: 'server',
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Site title | page name',
        htmlAttrs: {
            lang: 'fr'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'},
            {hid: 'description', name: 'description', content: 'Site description meta description'},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            { rel: 'preload', as:'font', href: '/fonts/font-exemple.woff', crossorigin: '' }
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    // On importe le fichier scss global (Il faut sass-loader 10 sinon bugs)
    css: [
        {
            src: '~/assets/styles/styles.scss', lang: 'scss'
        }
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {src:'~/plugins/swiper.js', mode: 'client'}
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    // Ca permet d'exposer les variables scss global dans tous les composants
    modules: [
        '@nuxtjs/style-resources'
    ],

    styleResources: {
        scss: [
            './assets/styles/settings/settings.scss'
        ]
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
