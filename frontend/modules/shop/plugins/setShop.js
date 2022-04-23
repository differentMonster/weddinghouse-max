import Vue from 'vue'
import {
    Shop
} from "@/modules/shop/plugins/getShop.js";


export default ({
    app
}, inject) => {
    const initShop = new Shop()
    inject('shop', initShop)
}