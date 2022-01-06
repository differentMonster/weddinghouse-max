// this path must be relative to .nuxt since it registered at Runtime
import * as productsStore from '../modules/products/store/products.js'

export default async ({
    store
}) => {
    return await store.registerModule('products', productsStore, {
        namespaced: productsStore.namespaced,
    })
}