import {
    WooComRestApi
} from "~/plugins/classWooCommerceOrigin.js";

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
            const responseMessages = 'WooCommerceCustomer create = successful';
            return [response, responseMessages]
        } catch {
            throw new Error('WooCommerceCustomer create =' + ' ' + error)
        }
    }

    async getInfo(id) {
        try {
            const response = await WooComRestApi.get('customers/' + id)
            const responseMessages = 'WooCommerceCustomer getInfo = successful';
            return [response.data, responseMessages]
        } catch {
            throw new Error('WooCommerceCustomer getInfo =' + ' ' + error)
        }
    }

    delete() {
        console.log("delete")
    }
}

// export class Authentication {
//     constructor(username, password) {
//         this.username = username
//         this.password = password
//         const userData = {
//             username: this.username,
//             password: this.password
//         }
//     }

//     async login({
//         $auth
//     }) {
//         try {
//             const response = await this.$auth.loginWith("local", {
//                 data: this.userData
//             })

//             const responseMessages = 'Authentication Succesful'
//             return [response, responseMessages]
//         } catch {
//             throw new Error('Authentication Failure')
//         }
//     }
// }