import * as cartStore from '../modules/cart/store/cart.js'

export default async ({
    store
}) => {
    return await store.registerModule('cart', cartStore, {
        namespaced: cartStore.namespaced,
    })
}