import {
    WooComRestApi
} from "~/plugins/classWooCommerceOrigin.js";

export class WooCommerceProducts {

    async getProducts() {
        try {
            const response = await WooComRestApi.get("products")
            const responseMessages = 'WooCommerceProducts get products = successful';
            return [response.data, responseMessages]
        } catch {
            throw new Error('WooCommerceProducts get products =' + ' ' + error)
        }
    }

    async getProduct(id) {
        try {
            const response = await WooComRestApi.get("products/" + id)
            const responseMessages = 'WooCommerceProducts get product = successful';
            return [response.data, responseMessages]
        } catch {
            throw new Error('WooCommerceProducts get product' + id + '=' + ' ' + error)
        }
    }


    async getProductsByCategory(slug) {
        try {
            const response = await WooComRestApi.get("products")
            const responseData = this.getProductsFilterByCategory(response.data, slug)
            const responseMessages = 'WooCommerceProducts get products by category = successful';
            return [responseData, responseMessages]
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