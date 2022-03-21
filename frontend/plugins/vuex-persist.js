import VuexPersistence from 'vuex-persist'

export default ({
    store
}) => {
    new VuexPersistence({
        key: 'pkmn-vuex',
        storage: window.localStorage,
        reducer: state => ({
            cart: state.cart,
            auth: state.auth
        }),
    }).plugin(store);
}