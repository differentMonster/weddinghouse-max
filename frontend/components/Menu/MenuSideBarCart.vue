<template>
    <!-- Menu-Cart-Sidebar Content -->
    <div>
        <b-sidebar class="sidebar-red" id="cart__sidebar--right" right no-header backdrop shadow>
            <template #default="{ hide }">
                <div class="p-3">
                    <div class="ps-panel__header">
                        <a class="ps-panel__close" @click="hide"><i class="icon-cross"></i></a></div>
                    <div class="ps-panel__content">
                        <div class="ps-cart--mini">
                            <div class="ps-cart__content">
                                <div class="ps-cart__items" v-for="(item, index) in getCart" :key="`minicart-${index}`">

                                    <div class="ps-product--mini-cart">
                                        <div class="ps-product__thumbnail"><a href="#"><img src="img/homepage/home-fullwidth/3.jpg" alt=""></a></div>
                                        <div class="ps-product__content">
                                            <span class="ps-product__remove"><a id="remove-minicart-item" @click="deleteCartItem(item.product_id)"><i class="icon-cross"></i></a></span>
                                            <a class="ps-product__title" href="product-default.html">{{item.name}}</a>
                                            <p> Qty: {{item.quantity}}</p><span class="ps-product__price">${{item.price}}</span>
                                        </div>
                                    </div>
                                    </br>

                                </div>
                                <div class="ps-cart__footer">
                                    <h3>Sub Total:<strong>${{getCartTotal}}</strong></h3>
                                    <figure>
                                        <nuxt-link class="ps-btn ps-btn--outline" id="cart__footer-view" to="/cart">View Cart</nuxt-link>
                                        <nuxt-link class="ps-btn ps-btn--black" id="cart__footer-checkout" to="/cart/checkout">Checkout</nuxt-link>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </b-sidebar>
    </div>
    <!-- end Menu-Cart-Sidebar Content -->
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        name: "MenuSideBarCart",
        computed: {
            ...mapGetters('cart', ['getCart', 'getCartTotal'])
        },
        methods: {
            ...mapActions('cart', ['deleteCartItem'])
        }
    }
</script>

<style scope lang="scss">
    #cart__sidebar--right {
        max-width: 470px;
        width: 100%;
    }

    .b-sidebar-body {
        background-color: #fff;
    }

    .b-sidebar-body {

        .ps-panel__header {
            padding: 20px 30px 0;
            /* background-color: blue; */

            .ps-panel__close {
                font-size: 40px;
                color: #999;
            }
        }

        .ps-panel__content {
            padding: 50px;
            /* background-color: yellow; */

        }
    }

    .b-sidebar-red {
        position: fixed;
        left: 0;
        top: 0;
        z-index: -1;
        opacity: .6;
        height: 100vh;
        width: 100vw;
        /* background-color: #343a40 !important; */
    }
</style>