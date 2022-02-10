import {
    WooComRestApi
} from "~/plugins/classWooCommerceOrigin.js";

export const namespaced = true

export const state = () => ({
    cartItem: [],
})

export const getters = {
    getCart: (state) => state.cartItem,
    getCartTotal: (state) =>
        state.cartItem.length < 1 ?
        '0' : state.cartItem.map((el) => el.price * el.quantity).reduce((a, b) => a + b),
}

export const actions = {
    async addItemToCart({
        commit
    }, cartItem) {
        await commit('setCartItem', cartItem)
    },
    async deleteCartItem({
        commit
    }, id) {
        await commit('removeCartItem', id)
    },
    async addOrders({
        commit
    }, checkoutCart) {
        if (Object.keys(checkoutCart).length === 0 || null) {
            throw new Error('WooCommerceCart Cart is empty, please select buying product and try again')
        } else {
            try {
                const response = await WooComRestApi.post("orders", checkoutCart)
                const responseConsole = 'WooCommerceCart add Orders = succesful'
                return [response.data, responseConsole]
            } catch {
                throw new Error('WooCommerceCart add Orders' + data + '=' + ' ' + error)
            }
        }
    }
}

export const mutations = {
    setCartItem: (state, item) => state.cartItem.push(item),
    removeCartItem: (state, id) =>
        state.cartItem.splice(
            state.cartItem.findIndex((el) => el.id === id),
            1
        ),
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}