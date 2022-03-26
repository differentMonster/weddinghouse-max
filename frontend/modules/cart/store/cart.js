import {
    WooComRestApi
} from "~/plugins/woocommerce.js";
import {
    CartAlert
} from "@/modules/cart/plugins/getCart.js"

const setCartAlert = new CartAlert()

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
    }, checkoutItem) {
        await commit('setOrders', checkoutItem)
    },
    async increaseCartItem({
        commit
    }, id) {
        await commit('increaseItem', id)
    },
    async decreaseCartItem({
        commit
    }, id) {
        await commit('decreaseItem', id)
    }
}

// searching must use product_id to match up woocommerce needs
export const mutations = {
    setOrders(state, checkoutItem) {
        let checkCartLength = state.cartItems.length

        try {
            setCartAlert.OrderProcess().then(() => {
                if (checkCartLength === 0 || null) {
                    setCartAlert.EmptyCart()
                    // throw new Error('WooCommerceCart Cart is empty, please select buying product and try again')
                } else {
                    const response = WooComRestApi.post("orders", checkoutItem)
                    const responseMessages = 'WooCommerceCart add Orders = succesful'
                    setCartAlert.OrderSuccess()
                    return [response.data, responseMessages]
                }
            })
        } catch (error) {
            throw new Error('WooCommerceCart add Orders' + checkoutItem + '=' + ' ' + error)
        }
    },
    addItemToCart(state, item) {
        let checkItemId = state.cartItems.find(product => product.product_id === item.product_id)
        if (checkItemId) {
            checkItemId.quantity++
            setCartAlert.CartUpdate()
        } else {
            state.cartItems.push({
                ...item,
                quantity: 1
            })
            setCartAlert.addProductSuccess()
        }
    },
    removeCartItem(state, id) {
        const CheckItemIndex = state.cartItems.findIndex(product => product.product_id === id)
        state.cartItems.splice(CheckItemIndex, 1)
        setCartAlert.removeProductSuccess()
    },
    increaseItem(state, id) {
        let checkItemId = state.cartItems.find(product => product.product_id === id)

        if (checkItemId) {
            checkItemId.quantity++
            setCartAlert.CartUpdate()
        }
    },
    decreaseItem(state, id) {
        let checkItemId = state.cartItems.find(product => product.product_id === id)
        if (checkItemId.quantity > 1) {
            checkItemId.quantity--
            setCartAlert.CartUpdate()
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