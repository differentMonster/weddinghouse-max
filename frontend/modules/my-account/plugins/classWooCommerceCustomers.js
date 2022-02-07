import {
    WooComRestApi
}
from "~/plugins/classWooCommerceOrigin.js";

export class WooCommerceCustomers {
    constructor(email, username, password) {
        this.email = email
        this.username = username
        this.password = password
    }

    async create() {
        const userData = {
            email: this.email,
            username: this.username,
            password: this.password
        }
        try {
            const response = await WooComRestApi.post('customers', userData)
            const responseConsole = 'WooCommerceCustomer create = successful';
            return [response, responseConsole]
        } catch {
            throw new Error('WooCommerceCustomer create =' + ' ' + error)
        }
    }

    async getInfo(id) {
        try {
            const response = await WooComRestApi.get('customers/' + id)
            const responseConsole = 'WooCommerceCustomer getInfo = successful';
            return [response.data, responseConsole]
        } catch {
            throw new Error('WooCommerceCustomer getInfo =' + ' ' + error)
        }
    }

    delete() {
        console.log("delete")
    }
}