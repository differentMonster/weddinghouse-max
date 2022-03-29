<template>
    <div class="ps-page--default">
        <div class="container">
            <div class="ps-page__header">
                <h3>Checkout</h3>
                <ul class="ps-breadcrumb">
                    <li class="active">
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>Cart</li>
                    <li>Checkout</li>
                </ul>
            </div>
            <div class="ps-page__content">
                <div class="ps-checkout">
                    <div class="ps-section__actions">
                        <div class="row">
                            <CheckOutLogin></CheckOutLogin>
                            <CheckOutCoupon></CheckOutCoupon>
                        </div>
                    </div>
                    <form class="ps-form--checkout" action="index.html" method="get">
                        <div class="row">
                            <CheckOutBilling></CheckOutBilling>
                            <CheckOutOrder></CheckOutOrder>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CheckOutLogin from '@/modules/cart/components/CheckOutLogin'
    import CheckOutCoupon from '@/modules/cart/components/CheckOutCoupon'
    import CheckOutBilling from '@/modules/cart/components/CheckOutBilling'
    import CheckOutOrder from '@/modules/cart/components/CheckOutOrder'

    import {
        mapState,
        mapGetters,
        mapActions
    } from "vuex";

    import {
        User
    } from "@/modules/user/plugins/getUser.js"

    export default {
        name: "Checkout",
        data() {
            return {
                cartUser: [],
                cartData: {
                    payment_method: "bacs",
                    payment_method_title: "Direct Bank Transfer",
                    set_paid: true,
                    customer_id: null,
                    billing: null,
                    shipping: null,
                    line_items: null,
                    shipping_lines: [{
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "36"
                    }]
                }
            }
        },
        computed: {
            ...mapState('auth', ['user'])
        },
        methods: {
            ...mapActions('cart', ['addOrders']),
        },
        components: {
            CheckOutLogin,
            CheckOutCoupon,
            CheckOutBilling,
            CheckOutOrder
        },
        async fetch() {
            try {
                const setUser = new User()
                const getUserInfo = await setUser.info(this.user.id)
                this.cartUser = getUserInfo[0]
                this.cartData.customer_id = this.cartUser.id
                this.cartData.billing = this.cartUser.billing
                this.cartData.shipping = this.cartUser.shipping
                this.cartData.line_items = this.getCart
                console.log(getUserInfo[1])
            } catch (error) {
                console.log(error)
            }
        }
    }
</script>

<style>

</style>