import Vue from 'vue'
import {
    CartAlert
} from "@/modules/cart/plugins/getCart.js";


export default ({
    app
}, inject) => {
    const setCartAlert = new CartAlert()
    inject('cartalert', setCartAlert)
}