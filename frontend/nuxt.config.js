import axios from 'axios';
const {
    resolve
} = require('path')
const webpack = require('webpack')
const wpUrl = process.env.NUXTPRESS_WP_URL ? process.env.NUXTPRESS_WP_URL : 'http://localhost:3080';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    env: {
        NUXTPRESS_WP_URL: wpUrl,
    },
    head: {
        title: 'weddinghouse',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'eCommerce website'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: 'favicon.ico'
        }],
        script: []
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        /* **main-customize */
        '@/assets/css/main-customize.css',
        /* **animate css */
        "@node_modules/animate.css/animate.compat.css",
        /* **supro font-awesome */
        '@/node_modules/font-awesome/css/font-awesome.min.css',
        /* **supro bootstrap */
        '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
        /* **slick */
        '@/static/slick/slick/slick.css',
        /* **owl-carousel*/
        '@/static/owl-carousel/css/owl.carousel.css',
        /* **lightgallery */
        '@/static/lightGallery-master/dist/css/lightgallery.min.css',
        /* **jquery bar rating*/
        '@/static/jquery/jquery-bar-rating/dist/themes/fontawesome-stars.css',
        /* **jquery-ui */
        '@/static/jquery/jquery-ui/jquery-ui.min.css',
        /* **select2 - infite scroll */
        '@/static/select2/dist/css/select2.min.css',
        /* **supro icons */
        '@/static/wedding-house/fonts/Linearicons/Linearicons/Font/demo-files/demo.css',
        /* **wedding-house basic css */
        '@/static/wedding-house/css/style.css',
        /* **wedding-house css */
        '@/static/wedding-house/css/home-default.css',
    ],
    pageTransition: "fade",
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/woocommerce.js',
        '@/modules/shop/plugins/setShop.js',
        '@/modules/user/plugins/setUser.js',
        '@/modules/cart/plugins/setCart.js',
        '@/plugins/bootstrap-vue.js',
        '@/plugins/medium-zoom.js',
        '@/plugins/vue-sweetalert2.js',
        '@/plugins/vee-validate.js',
        {
            src: '@/plugins/cypress.js',
            mode: 'client'
        },
        {
            src: '@/plugins/vuex-persist',
            ssr: false
        }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    // components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxt/image',
        '@/modules/user',
        '@/modules/shop',
        '@/modules/cart',
        '@nuxtjs/style-resources',
        'nuxt-font-loader'
    ],
    axios: {
        // baseURL: wpUrl,
        baseURL: 'http://localhost:3080',

    },
    auth: {
        plugins: ['@/plugins/auth.js'],
        strategies: {
            local: {
                token: {
                    property: 'token',
                    global: true,
                    required: true,
                    type: 'Bearer'
                },
                resetOnError: true, // kick the user if any error happnes w/ the auth
                // rewriteRedirects: false,
                user: {
                    property: false,
                    // autoFetch: false, // no need to fetch the user, will be done in gql
                },
                endpoints: {
                    login: {
                        url: 'http://localhost:3080/wp-json/jwt-auth/v1/token',
                        method: 'post',
                    },
                    user: {
                        url: 'http://localhost:3080/wp-json/wp/v2/users/me',
                        method: 'get',
                    },
                    logout: false
                }
            }
        },
        redirect: {
            home: '/',
            login: '/signin',
            logout: '/signin',
            callback: false, // not used here in our case
        }
    },
    router: {
        middleware: ['auth']
    },
    styleResources: {
        scss: [
            '@/assets/scss/main.scss',
            '@/assets/scss/abstracts/*.scss',
        ]
    },
    fontLoader: {
        // Paste a new custom link here (for example Typekit)
        url: 'https://fonts.googleapis.com/css?family=Cormorant+Garamond:300i,400,400i,500,500i,600,600i,700&display=swap',
        prefetch: true,
        preconnect: true
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vee-validate/dist/rules"],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}