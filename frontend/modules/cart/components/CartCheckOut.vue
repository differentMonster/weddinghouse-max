<template>
    <div class="ps-block--checkout-total">
        <div class="ps-block__top">
            <h4>Subtotal <span>${{getCartTotal}}</span></h4>
            <div class="ps-block__shipping">
                <h5>Shipping</h5>
                <div class="ps-radio">
                    <input class="form-control" type="radio" id="shipping-1" name="shipping" />
                    <label for="shipping-1">Free Shipping <span>+$00.00</span></label>
                </div>
                <div class="ps-radio">
                    <input class="form-control" type="radio" id="shipping-2" name="shipping" />
                    <label for="shipping-2">Flat Rate <span>+$10.00</span></label>
                </div>
                <div class="ps-radio">
                    <input class="form-control" type="radio" id="shipping-3" name="shipping" />
                    <label for="shipping-3">Local Delivery <span>+$20.00</span></label>
                </div>
            </div>
            <div class="ps-block__caculate">
                <h5>Calculate Shipping</h5>
                <div class="form-group">
                    <select class="ps-select">
                        <option value="1">Select Country</option>
                        <option value="2">USA</option>
                        <option value="3">French</option>
                    </select>
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Postcode / ZIP">
                </div>
                <button class="ps-btn ps-btn--gray">Update Total</button>
            </div>
            <div class="ps-block__total">
                <h3>Total<span>${{getCartTotal}}</span></h3>
            </div>
        </div>
        <div class="ps-block__bottom"><a class="ps-btn ps-btn--black" @click="addOrders()">Proceed to checkout</a></div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";

    import {
        WooCommerceCart
    } from "@/modules/cart/plugins/classWooCommerceCart.js";

    export default {
        name: "CartCheckOut",
        props: {
            getCartTotal: {
                required: true
            }
        },
        methods: {
            async addOrders() {

                const data = {
                    payment_method: "bacs",
                    payment_method_title: "Direct Bank Transfer",
                    set_paid: true,
                    billing: {
                        first_name: "John",
                        last_name: "Doe",
                        address_1: "969 Market",
                        address_2: "",
                        city: "San Francisco",
                        state: "CA",
                        postcode: "94103",
                        country: "US",
                        email: "john.doe@example.com",
                        phone: "(555) 555-5555"
                    },
                    shipping: {
                        first_name: "John",
                        last_name: "Doe",
                        address_1: "969 Market",
                        address_2: "",
                        city: "San Francisco",
                        state: "CA",
                        postcode: "94103",
                        country: "US"
                    },
                    line_items: [{
                            product_id: 93,
                            quantity: 2
                        },
                        {
                            product_id: 22,
                            variation_id: 23,
                            quantity: 1
                        }
                    ],
                    shipping_lines: [{
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "" + this.getCartTotal + ""
                    }]
                };

                try {
                    const WooComCart = new WooCommerceCart()
                    const addOrdersList = await WooComCart.addOrders(data)
                    console.log(addOrdersList[1])
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style>

</style>