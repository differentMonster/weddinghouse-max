export default function({
    app,
    store
}) {
    if (window && (window.Cypress || window.cy)) {
        window.app = app;
        window.store = store;
    }
}


// const isCypress = process.client && typeof window.Cypress !== 'undefined'

// export default context => {
//     if (isCypress) {
//         window.nuxtApp = context
//     }
// }