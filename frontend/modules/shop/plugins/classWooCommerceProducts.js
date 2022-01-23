import {
    WooComRestApi
} from "~/plugins/classWooCommerceOrigin.js";

export class WooCommerceProducts {
    constructor() {

    }

    async getProducts() {
        try {
            const response = await WooComRestApi.get("products")
            const responseConsole = 'WooCommerceProducts get products = successful';
            return [response.data, responseConsole]
        } catch {
            throw new Error('WooCommerceProducts get products =' + ' ' + error)
        }
    }

    async getProduct(id) {
        try {
            const response = await WooComRestApi.get("products/" + id)
            const responseConsole = 'WooCommerceProducts get product = successful';
            return [response.data, responseConsole]
        } catch {
            throw new Error('WooCommerceProducts get product' + id + '=' + ' ' + error)
        }
    }


    async getProductsByCategory(slug) {
        try {
            const response = await WooComRestApi.get("products")
            const responseData = this.getProductsFilterByCategory(response.data, slug)
            const responseConsole = 'WooCommerceProducts get products by category = successful';
            return [responseData, responseConsole]
        } catch {
            throw new Error('WooCommerceProducts get products by category' + slug + '=' + ' ' + error)
        }
    }

    getProductsFilterByCategory(obj, brand) {
        return obj.reduce((acc, item) => {
            if (item.categories.filter(e => e.slug === brand).length > 0) {
                acc.push(item)
            }
            return acc;
        }, [])
    }
}