<template>
    <div class="ps-page--default">
        <div class="container">
            <div class="ps-page__header">
                <h3>Cart</h3>
                <ul class="ps-breadcrumb">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/shop">Shop</nuxt-link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
            <div class="ps-page__content">
                <div class="ps-shopping-cart">
                    <CartCard :getCart="getCart"></CartCard>
                    <div class="ps-section__content">
                        <CartDiscountCode></CartDiscountCode>
                        <div class="ps-block--checkout-total">
                            <CartCheckOut :getCartTotal="getCartTotal"></CartCheckOut>
                            <div class="ps-block__bottom"><a class="ps-btn ps-btn--black" @click="addOrders()">Proceed to checkout</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CartCard from "@/modules/cart/components/CartCard.vue";
    import CartCheckOut from "@/modules/cart/components/CartCheckOut.vue";
    import CartDiscountCode from "@/modules/cart/components/CartDiscountCode.vue";

    import {
        WooCommerceCustomers
    } from "@/modules/my-account/plugins/classWooCommerceCustomers.js"


    import {
        mapState,
        mapGetters
    } from "vuex";

    export default {
        name: "Cart",
        data() {
            return {
                cartUser: []
            }
        },
        computed: {
            ...mapGetters('cart', ['getCart']),
            ...mapGetters('cart', ['getCartTotal']),
            ...mapState('auth', ['user'])
        },
        components: {
            CartCard,
            CartCheckOut,
            CartDiscountCode
        },
        async fetch() {
            try {
                const WooComCustomers = new WooCommerceCustomers()
                const getInfo = await WooComCustomers.getInfo(this.user.id)
                this.cartUser = getInfo[0]
                console.log(getInfo[1])
            } catch (error) {
                console.log(error)
            }
        },
        methods: {
            async addOrders() {
                const data = {
                    payment_method: "bacs",
                    payment_method_title: "Direct Bank Transfer",
                    set_paid: true,
                    customer_id: this.cartUser.id,
                    billing: {
                        first_name: this.cartUser.billing.first_name,
                        last_name: this.cartUser.billing.last_name,
                        address_1: this.cartUser.billing.address_1,
                        address_2: this.cartUser.billing.address_2,
                        city: this.cartUser.billing.city,
                        state: this.cartUser.billing.state,
                        postcode: this.cartUser.billing.postcode,
                        country: this.cartUser.billing.locale,
                        email: this.cartUser.billing.email,
                        phone: this.cartUser.billing.phone
                    },
                    shipping: {
                        first_name: this.cartUser.shipping.first_name,
                        last_name: this.cartUser.shipping.last_name,
                        address_1: this.cartUser.shipping.address_1,
                        address_2: this.cartUser.shipping.address_2,
                        city: this.cartUser.shipping.city,
                        state: this.cartUser.shipping.state,
                        postcode: this.cartUser.shipping.postcode,
                        country: this.cartUser.shipping.locale,
                        email: this.cartUser.shipping.email,
                        phone: this.cartUser.shipping.phone
                    },
                    line_items: this.getCart,
                    shipping_lines: [{
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        // total: "" + this.getCartTotal + ""
                        total: "36"
                    }]
                };
                console.log(data)
                this.$store.dispatch("cart/addOrders", data)
            }
        }
    }
</script>