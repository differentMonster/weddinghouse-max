import axios from 'axios';

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
            href: '/favicon.ico'
        }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        [
            '~/modules/wp-api/index',
            {
                endpoint: `${wpUrl}/wp-json/`,
            },
        ],
        '@nuxtjs/auth-next'
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
            login: '/auth/login',
            logout: '/auth/logout'
        }
    },
    router: {
        middleware: ['auth']
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}