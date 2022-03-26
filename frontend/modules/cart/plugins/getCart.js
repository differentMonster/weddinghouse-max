import Vue from 'vue'

class Cart {
    addProductToCartLabel() {}
}

class CartAlert {
    async addProductSuccess() {
        await Vue.swal({
            position: 'top-end',
            title: "Product added",
            icon: "success",
            timer: 1000,
            timerProgressBar: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            backdrop: false
        })
    }
    async removeProductSuccess() {
        await Vue.swal({
            position: 'top-end',
            title: "Product removed",
            icon: "success",
            timer: 1000,
            timerProgressBar: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            backdrop: false
        })
    }
    async CartUpdate() {
        await Vue.swal({
            position: 'top-end',
            title: "Cart Update",
            icon: "success",
            timer: 1000,
            timerProgressBar: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            backdrop: false
        })
    }
    async OrderSuccess() {
        await Vue.swal({
            title: "Order Succesful",
            text: "Thanks you for purchase with us, we will keep you updated",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false
        })
    }
    async OrderProcess() {
        await Vue.swal({
            title: 'Processing your Order',
            text: 'Please Wait',
            icon: "info",
            timer: 2000,
            timerProgressBar: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false
        })
    }
    async EmptyCart() {
        await Vue.swal({
            title: "Empty Cart",
            text: "Your cart is empty, please select your buying product and try again",
            icon: "error",
            timer: 2000,
            timerProgressBar: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false
        })
    }
}


export {
    Cart,
    CartAlert
}