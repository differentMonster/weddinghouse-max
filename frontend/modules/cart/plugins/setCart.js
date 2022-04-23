import Vue from 'vue'
import {
    Cart,
    CartAlert
} from "@/modules/cart/plugins/getCart.js";


export default ({
    app
}, inject) => {
    const initCart = new Cart()
    const initCartAlert = new CartAlert()
    inject('cart', initCart)
    inject('cartalert', initCartAlert)
}