import {
    WooComGateway
} from "~/plugins/woocommerce.js";

class User {
    async register(userData) {
        try {
            const response = await WooComGateway.post('customers', userData)
            const responseMessages = 'WooCommerceCustomer create = successful';
            return [response, responseMessages]
        } catch {
            throw new Error('WooCommerceCustomer create =' + ' ' + error)
        }
    }

    async info(id) {
        try {
            const response = await WooComGateway.get('customers/' + id)
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

export {
    User
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