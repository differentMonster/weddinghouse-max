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
        script: [
            /* **jquery js*/
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js',
                ssr: false
            },
            // { src: 'jquery/jquery-1.12.4.min.js', ssr: false },
            /* **bootstrap4 js */
            {
                src: 'bootstrap4/js/bootstrap.min.js',
            },
            /* **owl carousel js */
            {
                src: 'owl-carousel/js/owl.carousel.min.js'
            },
            /* **images loaded js */
            {
                src: 'images-loaded/imagesloaded.pkgd.js',
            },
            /* **mansory js */
            {
                src: 'masonry/masonry.pkgd.min.js'
            },
            /* **jquery ui js */
            {
                src: 'jquery/jquery-ui/jquery-ui.min.js',
            },
            /* **match height js */
            {
                src: 'jquery/jquery-match-height/jquery.matchHeight-min.js'
            },
            /* **wedding house + supro main js */
            {
                src: 'wedding-house/js/index.js',
            },
            /* **light gallery js */
            {
                src: 'lightGallery-master/dist/js/lightgallery-all.min.js'
            },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main-customize.css',
        /* **supro font-awesome */
        '@/static/font-awesome/css/font-awesome.min.css',
        /* **supro bootstrap */
        '@static/bootstrap4/css/bootstrap.min.css',
        /* **owl carousel*/
        '@static/owl-carousel/css/owl.carousel.css',
        /* **light gallery */
        '@static/lightGallery-master/dist/css/lightgallery.min.css',
        /* **jquery ui */
        '@static/jquery/jquery-ui/jquery-ui.min.css',
        /* **supro icons */
        '@static/wedding-house/fonts/Linearicons/Linearicons/Font/demo-files/demo.css',
        /* **wedding house basic css */
        '@static/wedding-house/css/style.css',
        /* **wedding house css */
        '@static/wedding-house/css/home-default.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        [
            '~/modules/wp-api/index',
            {
                endpoint: `${wpUrl}/wp-json/`,
            },
        ],
        '~/modules/my-account',
        '~/modules/products'
    ],

    axios: {
        baseURL: 'http://localhost:3080',
        proxyHeaders: false,
        credentials: false
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
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ],
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    exclude: /(node_modules)/
                })
            }
        }

    }
}