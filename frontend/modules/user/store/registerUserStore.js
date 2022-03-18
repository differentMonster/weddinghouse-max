// this path must be relative to .nuxt since it registered at Runtime
import * as userStore from '../modules/user/store/user.js'

export default async ({
    store
}) => {
    return await store.registerModule('user', userStore, {
        namespaced: userStore.namespaced,
    })
}