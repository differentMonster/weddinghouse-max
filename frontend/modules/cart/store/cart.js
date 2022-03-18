import {
    WooComRestApi
} from "~/plugins/woocommerce.js";

export const namespaced = true

export const state = () => ({
    cartItems: [],
})

export const getters = {
    getCart: (state) => state.cartItems,
    getCartTotal: (state) =>
        state.cartItems.length < 1 ?
        '0' : state.cartItems.map((el) => el.price * el.quantity).reduce((a, b) => a + b),
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
                const responseMessages = 'WooCommerceCart add Orders = succesful'
                return [response.data, responseMessages]
            } catch {
                throw new Error('WooCommerceCart add Orders' + data + '=' + ' ' + error)
            }
        }
    }
}

export const mutations = {
    setCartItem: (state, item) => state.cartItems.push(item),
    removeCartItem: (state, id) =>
        state.cartItems.splice(
            state.cartItems.findIndex((el) => el.id === id),
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