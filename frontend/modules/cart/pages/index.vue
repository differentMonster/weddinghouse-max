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
        User
    } from "@/modules/user/plugins/getUser.js"


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
                const setUser = new User()
                const getUserInfo = await setUser.info(this.user.id)
                this.cartUser = getUserInfo[0]
                console.log(getUserInfo[1])
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
                    billing: this.cartUser.billing,
                    shipping: this.cartUser.shipping,
                    line_items: this.getCart,
                    shipping_lines: [{
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "36"
                    }]
                };
                this.$store.dispatch("cart/addOrders", data)
            }
        }
    }
</script>