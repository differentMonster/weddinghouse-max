export const namespaced = true

const cartState = () => {
    return {
        cartItems: [],
    }
}

export const state = cartState()

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
        commit,
        state,
    }, checkOutItem) {
        let checkCartLength = state.cartItems.length
        await this.$cartalert.orderProcess().then(() => {
            if (checkCartLength === 0) {
                this.$cartalert.emptyCart()
            } else {
                this.$cart.postOrders(checkOutItem)
                this.$cartalert.orderSuccess()
            }
        }).finally(() => {
            commit('resetState')
            this.$router.replace('/')
        })
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
    },
    async resetCartState({
        commit
    }) {
        await commit('resetState')
    }
}

// searching must use product_id to match up woocommerce needs
export const mutations = {
    addItemToCart(state, item) {
        let checkItemId = state.cartItems.find(product => product.product_id === item.product_id)
        if (checkItemId) {
            checkItemId.quantity++
            this.$cartalert.cartUpdate()
        } else {
            state.cartItems.push({
                ...item,
                quantity: 1
            })
            this.$cartalert.addProductSuccess()
        }
    },
    removeCartItem(state, id) {
        const checkItemIndex = state.cartItems.findIndex(product => product.product_id === id)
        state.cartItems.splice(checkItemIndex, 1)
        this.$cartalert.removeProductSuccess()
    },
    increaseItem(state, id) {
        let checkItemId = state.cartItems.find(product => product.product_id === id)

        if (checkItemId) {
            checkItemId.quantity++
            this.$cartalert.cartUpdate()
        }
    },
    decreaseItem(state, id) {
        let checkItemId = state.cartItems.find(product => product.product_id === id)
        if (checkItemId.quantity > 1) {
            checkItemId.quantity--
            this.$cartalert.cartUpdate()
        }
    },
    resetState(state) {
        const initial = cartState()
        Object.keys(initial).forEach(key => {
            state[key] = initial[key]
        })
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}