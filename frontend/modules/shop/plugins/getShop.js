import {
    WooComGateway
} from "~/plugins/woocommerce.js";

class Shop {
    async getProducts() {
        try {
            const response = await WooComGateway.get("products")
            const responseMessages = 'WooCommerceProducts get products = successful';
            return [response.data, responseMessages]
        } catch {
            throw new Error('WooCommerceProducts get products =' + ' ' + error)
        }
    }

    async getProduct(id) {
        try {
            const response = await WooComGateway.get("products/" + id)
            const responseMessages = 'WooCommerceProducts get product = successful';
            return [response.data, responseMessages]
        } catch {
            throw new Error('WooCommerceProducts get product' + id + '=' + ' ' + error)
        }
    }

    setProductsFilterByCategory(obj, brand) {
        return obj.reduce((acc, item) => {
            if (item.categories.filter(e => e.slug === brand).length > 0) {
                acc.push(item)
            }
            return acc;
        }, [])
    }

    async getProductsByCategory(slug) {
        try {
            const response = await WooComGateway.get("products")
            const responseData = this.setProductsFilterByCategory(response.data, slug)
            const responseMessages = 'WooCommerceProducts get products by category = successful';
            return [responseData, responseMessages]
        } catch {
            throw new Error('WooCommerceProducts get products by category' + slug + '=' + ' ' + error)
        }
    }

}

export {
    Shop
}