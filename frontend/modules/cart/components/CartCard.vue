<template>
    <div class="table-responsive">
        <table class="table ps-table ps-table--shopping-cart">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in getCart" :key="item.id">
                    <td>
                        <div class="ps-product--sidebar">
                            <div class="ps-product__thumbnail"><a class="ps-product__overlay" href="product-default.html"></a><img src="" alt=""></div>
                            <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">{{ item.name }}</a>
                                <p class="ps-product__price">T-Shirt</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="ps-color blue"><span class="ps-color__left"><span class="ps-color__swatch"></span></span></div>
                    </td>
                    <td>M</td>
                    <td><strong>{{item.price}}</strong></td>
                    <td>
                        <div class="form-group--number">
                            <button class="up"></button>
                            <button class="down"></button>
                            <input class="form-control" type="text" :placeholder="`${item.quantity}`">
                        </div>
                    </td>
                    <td>
                        <p><strong>{{item.price}}</strong></p>
                    </td>
                    <td><a id="remove-cart-item" class="ps-icon" @click="deleteCartItem()"><i class="icon-cross"></i></a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {
        mapActions
    } from "vuex";

    export default {
        name: "CartCard",
        props: {
            getCart: {
                type: Array,
                required: true
            }
        },
        methods: {
            ...mapActions('cart', ['deleteCartItem'])
        },
        mounted() {
            console.log(this.getCart)
        }
    }
</script>