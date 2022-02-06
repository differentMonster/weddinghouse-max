export const namespaced = true

export const state = () => ({
    cartItem: []
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