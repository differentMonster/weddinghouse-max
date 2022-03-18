const path = require('path')

// moduleOptions could pass config param from nuxt.config.js
export default function registerModules(moduleOptions) {

    // automactic register all components of the modules
    this.nuxt.hook('components:dirs', (dirs) => {
        // add ./components dir to the list
        dirs.push({
            path: path.resolve(__dirname, 'components')
        })
    })

    // add modules routes to global router list
    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'signin',
            path: '/signin',
            component: path.resolve(__dirname, 'pages/signin.vue')
        })
    })


    // add modules routes to global router list
    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'signup',
            path: '/signup',
            component: path.resolve(__dirname, 'pages/signup.vue')
        })
    })


    // add modules routes to global router list
    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'my-account',
            path: '/my-account',
            component: path.resolve(__dirname, 'pages/my-account.vue')
        })
    })

    // register store plugin
    this.addPlugin(path.resolve(__dirname, 'store/registerUserStore.js'))

}