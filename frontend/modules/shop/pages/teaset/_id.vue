<template>
    <div class="ps-page--default">
        <!-- start Products Detail -->
        <div class="ps-page ps-page--product-detail">
            <div class="container">
                <ShopProductBreadcrumbs :product="product"></ShopProductBreadcrumbs>
                <!-- start Detail Content -->
                <div class="ps-product--detail">
                    <ShopProductHeader :product="product"></ShopProductHeader>

                    <!-- start Description, Addition Information, Review option -->
                    <div class="ps-product__content ps-tab-root">
                        <div class="container">

                            <!-- start Tab Option -->
                            <ul class="ps-tab-list">
                                <li v-for="tab in tabs" :key="tab"><a @click="selected = tab">
                                        {{tab}}
                                    </a></li>
                            </ul>
                            <!-- end Tab Option -->

                            <!-- start Tab Content -->
                            <div class="ps-tabs">
                                <component :is="selected"></component>
                            </div>
                            <!-- end Tab Content -->
                        </div>
                    </div>
                    <!-- end Description, Addition Information, Review option -->
                </div>
                <!-- end Detail Content -->
            </div>
        </div>
        <!-- end Products Detail  -->
        <ShopProductRelated></ShopProductRelated>
    </div>
</template>


<script>
    import {
        WooCommerceProducts
    } from "@/modules/shop/plugins/classWooCommerceProducts.js";
    import ShopProductRelated from "@/modules/shop/components/ShopProductRelated.vue"
    import ShopProductBreadcrumbs from "@/modules/shop/components/ShopProductBreadcrumbs.vue"
    import ShopProductHeader from "@/modules/shop/components/ShopProductHeader.vue"
    import Description from "@/modules/shop/components/ShopProductDescription.vue"
    import Addition from "@/modules/shop/components/ShopProductAddition.vue"
    import Review from "@/modules/shop/components/ShopProductReview.vue"

    export default {
        name: 'Product',
        components: {
            ShopProductRelated,
            ShopProductBreadcrumbs,
            ShopProductHeader,
            Description,
            Addition,
            Review
        },
        data() {
            return {
                product: [],
                id: this.$route.params.id,
                tabs: ["Description", "Addition", "Review"],
                selected: "Description"
            }
        },
        methods: {
            getProduct() {
                const WooComProducts = new WooCommerceProducts()
                WooComProducts.getProduct(this.id).then((response) => {
                    this.product = response[0]
                    console.log(this.product)
                    console.log(response[1])
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted() {
            this.getProduct()
        }
    }
</script>

<style>
    .product_container {
        width: 100%;
        text-align: center;
        position: relative;
        margin-top: 100px;
    }

    .product--images img {
        width: 500px;
        height: 670px;
    }
</style>