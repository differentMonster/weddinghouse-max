import Vue from 'vue'
import {
    Shop
} from "@/modules/shop/plugins/getShop.js";


export default ({
    app
}, inject) => {
    const setShop = new Shop()
    inject('shop', setShop)
}