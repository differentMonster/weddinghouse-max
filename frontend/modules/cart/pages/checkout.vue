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
                    <ValidationObserver ref="observer">
                        <b-form class="ps-form--checkout" slot-scope="{ validate }" @submit.prevent="validate().then(addOrders(cartData))">
                            <div class="row">
                                <CheckOutBilling :value="cartData" @input="(newCartData) => { CartData = newCartData }"></CheckOutBilling>
                                <CheckOutOrder :getCart="getCart" :getCartTotal="getCartTotal"></CheckOutOrder>
                            </div>
                        </b-form>
                    </ValidationObserver>
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
        ValidationObserver,
    } from 'vee-validate';

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
                    customer_note: "",
                    billing: {
                        first_name: "",
                        last_name: "",
                        address_1: "",
                        address_2: "",
                        city: "",
                        company: "",
                        email: "",
                        phone: "",
                        postcode: ""
                    },
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
            ...mapGetters(
                'cart', ['getCart', 'getCartTotal']
            ),
            ...mapState('auth', ['user'])
        },
        methods: {
            ...mapActions('cart', ['addOrders']),
        },
        components: {
            CheckOutLogin,
            CheckOutCoupon,
            CheckOutBilling,
            CheckOutOrder,
            ValidationObserver
        },
        beforeMount() {
            this.cartData.customer_id = this.user.id
            this.cartData.line_items = this.getCart
        }
    }
</script>

<style>

</style>