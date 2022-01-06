// this path must be relative to .nuxt since it registered at Runtime
import * as myAccountStore from '../modules/my-account/store/myaccount.js'

export default async ({
    store
}) => {
    return await store.registerModule('my-account', myAccountStore, {
        namespaced: myAccountStore.namespaced,
    })
}