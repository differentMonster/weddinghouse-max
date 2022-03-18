import {
    WooComRestApi
} from "~/plugins/woocommerce.js";

class Cart {
    constructor() {

    }

    async addProductToCart(data) {
        console.log(data.length)
        // try {
        //     const response = await WooComRestApi.post("orders", data)
        //     const responseConsole = 'WooCommerceCart add Orders = succesful'
        //     return [response.data, responseConsole]
        // } catch {
        //     throw new Error('WooCommerceCart add Orders' + data + '=' + ' ' + error)
        // }
    }
}

export {
    Cart
}