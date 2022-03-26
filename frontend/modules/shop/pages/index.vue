<template>
    <!-- start Shop  -->
    <div class="ps-page">
        <div class="ps-shop ps-shop--fullwidth">
            <div class="container-fluid">

                <ShopHeader></ShopHeader>


                <ShopProductCard :products="products"></ShopProductCard>

                <div class="ps-shop__footer"><a class="ps-link--under" href="#">Discover more</a></div>
            </div>
        </div>
    </div>
    <!-- end Shop -->
</template>

<script>
    import ShopProductCard from "@/modules/shop/components/ShopProductCard.vue"
    import ShopHeader from "@/modules/shop/components/ShopHeader.vue"

    import {
        mapActions
    } from "vuex"

    export default {
        data() {
            return {
                products: [],
                categories: []
            }
        },
        components: {
            ShopHeader,
            ShopProductCard,
        },
        async fetch() {
            try {
                const getShopProducts = await this.$shop.getProducts()
                this.products = getShopProducts[0]
                console.log(this.products)
            } catch (error) {
                console.log(error)
            }
        },
        mounted() {}
    }
</script>


<style>
    /* .ps-shop__container {

     } */

    /* .product_container {
     width: 100%;
     text-align: center;
     position: relative;
     margin-top: 100px;
     }

     .product--images img {
     width: 500px;
     height: 670px;
     } */
</style>