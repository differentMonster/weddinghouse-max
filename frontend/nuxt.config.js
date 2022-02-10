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
            // {
            //     src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js',
            //     ssr: false
            // },
            // { src: 'jquery/jquery-1.12.4.min.js', ssr: false },
            /* **bootstrap4 js */
            // {
            //     src: '@/static/bootstrap4/js/bootstrap.min.js',
            // },
            /* **owl carousel js */
            // {
            //     src: '@/static/owl-carousel/js/owl.carousel.min.js'
            // },
            // /* **images loaded js */
            // {
            //     src: '@/static/images-loaded/imagesloaded.pkgd.js',
            // },
            // /* **mansory js */
            // {
            //     src: '@/static/masonry/masonry.pkgd.min.js'
            // },
            // /* **match height js */
            // {
            //     src: '@/static/jquery/jquery-match-height/jquery.matchHeight-min.js'
            // },
            // /* **slick js */
            // {
            //     src: '@/static/slick/slick/slick.min.js',
            // },
            // /* **jquery bar rating js */
            // {
            //     src: '@/static/jquery/jquery-bar-rating/dist/jquery.barrating.min.js'
            // },
            /* **light gallery js */
            // {
            //     src: '@/static/lightGallery-master/dist/js/lightgallery-all.min.js'
            // },
            /* **jquery ui js */
            // {
            //     src: '@/static/jquery/jquery-ui/jquery-ui.min.js',
            // },
            // /* **sticky sidebar js */
            // {
            //     src: '@/static/sticky-sidebar/dist/sticky-sidebar.min.js'
            // },
            // /* **select2 js */
            // {
            //     src: '@/static/select2/dist/js/select2.full.min.js',
            //     defer: true
            // },
            // /* **slick animation js */
            // {
            //     src: '@/static/slick-animation/slick-animation.min.js'
            // },
            // /* **isotope js */
            // {
            //     src: '@/static/isotope/isotope.pkgd.min.js'
            // },
            // /* **slim scroll js */
            // {
            //     src: '@/static/jquery/jquery.slimscroll.min.js'
            // },
            // /* **sticky sidebar js */
            // {
            //     src: '@/static/sticky-sidebar/dist/sticky-sidebar.min.js'
            // },
            /* **wedding house + supro main js */
            // {
            //     src: '@/static/wedding-house/js/main.js',
            // },
        ]
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
            src: '~/plugins/cypress.js',
            mode: 'client'
        },
        /* **images-loaded js */
        // {
        //     src: '@/static/images-loaded/imagesloaded.pkgd.js',
        //     mode: 'client'
        // },
        /* **mansory js */
        // {
        //     src: '~/static/masonry/masonry.pkgd.min.js',
        //     mode: 'client'
        // },
        /* **match-height js */
        // {
        //     src: '~/static/jquery/jquery-match-height/jquery.matchHeight-min.js',
        //     mode: 'client'
        // },
        /* **slick js */
        // {
        //     src: '~/static/slick/slick/slick.min.js',
        //     mode: 'client'
        // },
        /* **jquery-bar rating js */
        {
            src: '~/static/jquery/jquery-bar-rating/dist/jquery.barrating.min.js',
            mode: 'client'
        },
        /* **sticky sidebar js */
        // {
        //     src: '~static/sticky-sidebar/dist/sticky-sidebar.min.js',
        //     mode: 'client'
        // },
        /* **slick animation js */
        // {
        //     src: '~/static/slick-animation/slick-animation.min.js',
        //     mode: 'client'
        // },
        /* **isotope js */
        // {
        //     src: '@/static/isotope/isotope.pkgd.min.js',
        //     mode: 'client'
        // },
        /* **slim scroll js */
        // {
        //     src: '~/static/jquery/jquery.slimscroll.min.js',
        //     mode: 'client'
        // },
        /* **sticky sidebar js */
        // {
        //     src: '~/static/sticky-sidebar/dist/sticky-sidebar.min.js',
        //     mode: 'client'
        // },
        /* **owl-carousel js */
        /* **dependency: home - image slider */
        // {
        //     src: '@/plugins/owl-carousel.js',
        //     // ssr: false
        //     defer: true
        // },
        /* **light-gallery js */
        /* **dependency: home - image slider */
        // {
        //     src: '@/plugins/lightgallery.js',
        //     // ssr: false
        //     defer: true
        // },
        /* **jquery-ui js */
        /* **dependency: home - image slider */
        // {
        //     src: '@/plugins/jquery-ui.js',
        //     // ssr: false
        //     defer: true
        // },
        /* **select2 js */
        /* **dependency: home - image slider */
        // {
        //     src: '@/plugins/select2.js',
        //     // ssr: false
        //     defer: true
        // },
        /* **wedding-house + supro main js */
        /* **dependency: home - image slider */
        {
            src: '@/plugins/supro.js',
            ssr: false
        }
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
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // vendor: ['owl-carousel.js', 'lightgallery.js', 'select2.js', 'jquery-ui.js', 'weddinghouse.js'],
        vendor: ['jquery', 'bootstrap', 'supro.js'],
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