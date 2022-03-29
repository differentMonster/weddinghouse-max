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
                            <div class="ps-block__bottom">
                                <nuxt-link class="ps-btn ps-btn--black" to="/cart/checkout">Proceed to checkout</nuxt-link>
                            </div>
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
        mapState,
        mapGetters,
    } from "vuex";

    export default {
        name: "Cart",
        computed: {
            ...mapGetters('cart', ['getCart']),
            ...mapGetters('cart', ['getCartTotal']),
        },
        components: {
            CartCard,
            CartCheckOut,
            CartDiscountCode
        }
    }
</script>