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

    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'shop_id',
            path: '/shop/:id',
            component: path.resolve(__dirname, 'pages/_id.vue')
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


    // add modules routes cheongsam list
    this.extendRoutes((routes) => {
        routes.unshift({
            name: 'cheongsam',
            path: '/shop/cheongsam',
            component: path.resolve(__dirname, 'pages/cheongsam/index.vue')
        })
    })

    // register store plugin
    this.addPlugin(path.resolve(__dirname, 'store/registerShopStore.js'))

}