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
        title: 'frontend',
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
                content: ''
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: 'favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Cormorant+Garamond:300i,400,400i,500,500i,600,600i,700&display=swap'
            }
        ],
        script: []
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        /* **main-customize */
        '@/assets/css/main-customize.css',
        /* **supro font-awesome */
        '@/node_modules/font-awesome/css/font-awesome.min.css',
        /* **supro bootstrap */
        '@/node_modules/bootstrap//dist/css/bootstrap.min.css',
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

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/classWooCommerceOrigin.js',
        '@/modules/shop/plugins/classWooCommerceProducts.js',
        '@/modules/my-account/plugins/classWooCommerceCustomers.js',
        '@/modules/cart/plugins/classWooCommerceCart.js',
        {
            src: '@/plugins/cypress.js',
            mode: 'client'
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        ['@nuxtjs/bootstrap-vue', {
            css: false
        }],
        '~/modules/my-account',
        '~/modules/shop',
        '~/modules/cart',
        '@nuxtjs/style-resources',
    ],
    axios: {
        baseURL: 'http://localhost:3080',
    },
    auth: {
        strategies: {
            local: {
                token: {
                    property: 'token',
                    global: true,
                    required: true,
                    type: 'Bearer'
                },
                user: {
                    property: false,
                    autoFetch: false
                },
                endpoints: {
                    login: {
                        url: 'http://localhost:3080/wp-json/jwt-auth/v1/token',
                        method: 'post',
                    },
                    user: {
                        url: 'http://localhost:3080/wp-json/wp/v2/users/me',
                        method: 'post',
                    },
                    logout: false
                }
            }
        },
        redirect: {
            home: '/',
            login: '/my-account',
            logout: '/auth/logout'
        }
    },
    router: {
        middleware: ['auth']
    },
    styleResources: {
        scss: [
            '@/assets/scss/variables.scss',
        ]
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}