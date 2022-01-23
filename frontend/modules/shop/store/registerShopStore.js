// this path must be relative to .nuxt since it registered at Runtime
import * as shopStore from '../modules/shop/store/shop.js'

export default async ({
    store
}) => {
    return await store.registerModule('shop', shopStore, {
        namespaced: shopStore.namespaced,
    })
}