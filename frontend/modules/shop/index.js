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
            name: 'shop',
            path: '/shop',
            component: path.resolve(__dirname, 'pages/index.vue')
        })
    })


    // add modules routes teaset list
    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'teaset',
            path: '/shop/teaset',
            component: path.resolve(__dirname, 'pages/teaset/index.vue')
        })
    })

    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'teaset_id',
            path: '/shop/teaset/:id',
            component: path.resolve(__dirname, 'pages/teaset/_id.vue')
        })
    })

    // add modules routes cheongsam list
    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'cheongsam',
            path: '/shop/cheongsam',
            component: path.resolve(__dirname, 'pages/cheongsam/index.vue')
        })
    })


    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'cheongsam_id',
            path: '/shop/cheongsam/:id',
            component: path.resolve(__dirname, 'pages/cheongsam/_id.vue')
        })
    })

    // register store plugin
    this.addPlugin(path.resolve(__dirname, 'store/registerShopStore.js'))

}