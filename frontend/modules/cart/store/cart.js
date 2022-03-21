import {
    WooComRestApi
} from "~/plugins/woocommerce.js";

export const namespaced = true

export const state = () => ({
    cartItems: [],
})

export const getters = {
    getCart: (state) => state.cartItems,
    getCartLength: (state) => state.cartItems.length,
    getCartTotal: (state) =>
        state.cartItems.length < 1 ?
        '0' : state.cartItems.map((el) => el.price * el.quantity).reduce((a, b) => a + b),
}

export const actions = {
    async addTesting({
        commit
    }, item) {
        await commit('addTesting', item)
    },
    async addToCart({
        commit
    }, cartItem) {
        await commit('addItemToCart', cartItem)
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

// searching must use product_id to match up woocommerce needs
export const mutations = {
    setTesting(state, item) {
        console.log('testing store')
    },
    addItemToCart(state, item) {
        let checkItemId = state.cartItems.find(product => product.product_id === item.product_id)
        if (checkItemId) {
            checkItemId.quantity++
        } else {
            state.cartItems.push({
                ...item,
                quantity: 1
            })
        }

    },
    removeCartItem(state, id) {
        let checkItemId = state.cartItems.find((product) => product.product_id === id)

        if (checkItemId.quantity > 1) {
            checkItemId.quantity--
        } else {
            const CheckItemIndex = state.cartItems.findIndex(product => product.product_id === id)
            state.cartItems.splice(CheckItemIndex, 1)
        }
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}