<template>
    <!-- start Shop  -->
    <div class="ps-page">
        <div class="ps-shop ps-shop--sidebar reverse banner">
            <div class="container">
                <div class="ps-shop__container">

                    <!-- start Shop Sidebar -->
                    <div class="ps-shop__sidebar">

                        <!-- start Shop Sider - Active filters Content  -->
                        <aside class="widget widget_shop widget_active-filters">
                            <h3 class="widget-title">Active filters</h3>
                            <div class="widget__content"><a href="#"><i class="icon-cross"></i> Min £ 9.00</a><a href="#"><i class="icon-cross"></i> Max £ 9.00</a><a href="#"><i class="icon-cross"></i> Remove all filter</a></div>
                        </aside>
                        <!-- end Shop Sider - Active filters Content -->

                        <!-- start Shop Sider - Categories Content -->
                        <aside class="widget widget_shop widget_categories">
                            <h3 class="widget-title">Categories</h3>
                            <ul class="ps-list--under">
                                <li>
                                    <nuxt-link class="ps-link--line" to="/shop/cheongsam">Cheongsam</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link class="ps-link--line" to="/shop/teaset">Teaset</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link class="ps-link--line" to="">Light</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link class="ps-link--line" to="">Accesories</nuxt-link>
                                </li>
                            </ul>
                        </aside>
                        <!-- end Shop Sider - Categories Content -->

                        <!-- start Shop Sider - Filter Price Content -->
                        <aside class="widget widget_shop widget_shop-filter">
                            <h3 class="widget-title">Filter price</h3>
                            <div class="ps-slider" data-default-min="0" data-default-max="100" data-max="100" data-step="5" data-unit="$"></div>
                            <p class="ps-slider__meta">Price:<span class="ps-slider__value ps-slider__min"></span>-<span class="ps-slider__value ps-slider__max"></span></p>
                            <div class="widget__colors">
                                <div class="ps-color black active"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Black</i></span><span class="ps-color__right"><i class="icon-square"></i></span></div>
                                <div class="ps-color blue"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Blue</i></span><span class="ps-color__right"><i class="icon-square"></i></span></div>
                                <div class="ps-color gold"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Gold</i></span><span class="ps-color__right"><i class="icon-square"></i></span></div>
                                <div class="ps-color nude"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Nude</i></span><span class="ps-color__right"><i class="icon-square"></i></span></div>
                                <div class="ps-color orange"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Orange</i></span><span class="ps-color__right"><i class="icon-square"></i></span></div>
                                <div class="ps-color red"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Red</i></span><span class="ps-color__right"><i class="icon-square"></i></span></div>
                            </div>
                            <div class="widget__tags"><a href="#">L</a><a href="#">M</a><a href="#">S</a><a href="#">XL</a></div>
                        </aside>
                        <!-- end Shop Sider - Filter Price Content -->


                        <!-- start Shop Sider - Widget Product Content -->
                        <aside class="widget widget_shop widget_product">
                            <h3 class="widget-title">Products</h3>
                            <div class="ps-product--sidebar">
                                <div class="ps-product__thumbnail"><a class="ps-product__overlay" href="product-default.html"></a><img src="" alt=""></div>
                                <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Embroidered Flowy Jacket</a>
                                    <div class="ps-product__rating">
                                        <select class="ps-rating" data-read-only="true">
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="2">5</option>
                                        </select>
                                    </div>
                                    <p class="ps-product__price">£ 56.89</p>
                                </div>
                            </div>
                            <div class="ps-product--sidebar">
                                <div class="ps-product__thumbnail"><a class="ps-product__overlay" href="product-default.html"></a><img src="" alt=""></div>
                                <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Contrast Backpack</a>
                                    <div class="ps-product__rating">
                                        <select class="ps-rating" data-read-only="true">
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="2">5</option>
                                        </select>
                                    </div>
                                    <p class="ps-product__price">£ 56.89</p>
                                </div>
                            </div>
                            <div class="ps-product--sidebar">
                                <div class="ps-product__thumbnail"><a class="ps-product__overlay" href="product-default.html"></a><img src="" alt=""></div>
                                <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Mango Women’s Bag</a>
                                    <div class="ps-product__rating">
                                        <select class="ps-rating" data-read-only="true">
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="2">5</option>
                                        </select>
                                    </div>
                                    <p class="ps-product__price">£ 89.59</p>
                                </div>
                            </div>
                        </aside>
                        <!-- end Shop Sider - Widget Product Content -->


                    </div>
                    <!-- end Shop Sidebar -->

                    <!-- start Shop Wrapper -->
                    <div class="ps-shop__wrapper">

                        <!-- start Shop Wrapper - Breadcrumb -->
                        <div class="ps-shop__header">
                            <div class="ps-shop__left">
                                <ul class="ps-breadcrumb">
                                    <li><a href="#">Home</a></li>
                                    <li>Shop</li>
                                </ul>
                            </div>
                        </div>
                        <!-- end Shop Wrapper - Breadcrumb -->

                        <!-- start Shop Wrapper - Sortby Bar -->
                        <div class="ps-shop__right">
                            <p><strong>25</strong> Products Found</p>

                            <!-- start Sortby Bar - Options -->
                            <div class="ps-shop__actions">
                                <div class="ps-shop__sorting"><span>Sortby</span>
                                    <select class="ps-select">
                                        <option value="1">Default</option>
                                        <option value="2">Avarage rating</option>
                                        <option value="3">Newest</option>
                                        <option value="4">Oldest</option>
                                    </select>
                                </div>
                                <div class="ps-shop__layouts">
                                    <a class="active" href="shop-default.html"><i class="icon-icons2"></i></a>
                                    <a href="shop-default-2.html"><i class="icon-list4"></i></a>
                                </div>
                                <a class="ps-shop__filter-toggle--mobile ps-shop__filter-toggle" href="#"><i class="icon-equalizer"></i></a>
                            </div>
                            <!-- end Sortby Bar - Options -->

                            <!-- start Sortby Bar - Filter -->
                            <div class="ps-shop__filter-panel" id="shop-filter">
                                <div class="container">
                                    <div class="row">

                                        <!-- start Filters - Tab 1 -->
                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                            <aside class="widget widget_shop">
                                                <h3 class="widget-title">Sort By</h3>
                                                <div class="widget__content">
                                                    <ul class="ps-list--under">
                                                        <li><a href="#">Default</a></li>
                                                        <li><a href="#">Popularity</a></li>
                                                        <li><a href="#">Average rating</a></li>
                                                        <li><a href="#">Newest</a></li>
                                                        <li><a href="#">Price: low to high</a></li>
                                                        <li><a href="#">Price: high to low</a></li>
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                        <!-- end Filters - Tab 1 -->

                                        <!-- start Filters - Tab 2 -->
                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                            <aside class="widget widget_shop">
                                                <h3 class="widget-title">Color</h3>
                                                <div class="widget__content">
                                                    <div class="widget__colors">
                                                        <div class="ps-color black active"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Black</i></span></div>
                                                        <div class="ps-color blue"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Blue</i></span></div>
                                                        <div class="ps-color gold"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Gold</i></span></div>
                                                        <div class="ps-color nude"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Nude</i></span></div>
                                                        <div class="ps-color orange"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Orange</i></span></div>
                                                        <div class="ps-color red"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Red</i></span></div>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                        <!-- end Filters - Tab 2 -->

                                        <!-- start Filters - Tab 3 -->
                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                            <aside class="widget widget_shop">
                                                <h3 class="widget-title">Price</h3>
                                                <div class="widget__content">
                                                    <ul class="ps-list--under">
                                                        <li><a href="#">£0.00 - £10.00</a></li>
                                                        <li><a href="#">£10.00 - £20.00</a></li>
                                                        <li><a href="#">£20.00 - £30.00</a></li>
                                                        <li><a href="#">£30.00 - £40.00</a></li>
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                        <!-- end Filters - Tab 3 -->

                                        <!-- start Filters - Tab 4 -->
                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                            <aside class="widget widget_shop widget_tags">
                                                <h3 class="widget-title">Tags</h3>
                                                <div class="widget__content"><a href="shop-default.html">All</a><a href="shop-default.html">Bag</a><a href="shop-default.html">Clothing</a><a href="shop-default.html">Cotion</a><a href="shop-default.html">Men</a><a href="shop-default.html">Shoes</a><a href="shop-default.html">T-Shirt</a><a href="shop-default.html">Woman</a></div>
                                            </aside>
                                        </div>
                                        <!-- end Filters - Tab 4 -->

                                    </div>
                                </div>
                            </div>
                            <!-- end Sortby Bar - Filter -->

                        </div>
                        <!-- end Shop Wrapper - Sortby Bar -->

                        <!-- start Shop Wrapper - Content -->
                        <div class="ps-shop__content">
                            <div class="row">

                                <div v-for="(product, i) in products" :key="product.id" class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                    <div class="ps-product">
                                        <div class="ps-product__thumbnail"><img class="ps-product__image" :src="`${product.images[0].src}`" alt="" /><img class="ps-product__image-alt" :src="`${product.images[1].src}`" alt="" />
                                            <nuxt-link :to="'/products/' + `${product.id}`" class="ps-product__overlay"></nuxt-link>

                                            <div class="ps-product__actions"><a href="shopping-cart.html"> Add to cart</a>
                                                <ul>
                                                    <li><a href="#"><i class="icon-heart"></i></a></li>
                                                    <li><a href="#"><i class="icon-frame-expand"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">{{product.name}}</a>
                                            <div class="ps-product__rating">
                                                <select class="ps-rating" data-read-only="true">
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                    <option value="1">4</option>
                                                    <option value="2">5</option>
                                                </select>
                                            </div>
                                            <p class="ps-product__price"><span>£</span>{{product.price}}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- end Shop Wrapper - Content -->

                        <div class="ps-shop__footer"><a class="ps-link--under" href="#">Discover more</a></div>
                    </div>
                    <!-- end Shop Wrapper -->

                </div>
            </div>
        </div>
    </div>
    <!-- end Shop -->
</template>

<script>
    import {
        WooCommerceProducts
    } from "@/modules/products/plugins/classWooCommerceProducts.js";

    export default {
        data() {
            const pslider_1 = require('~/assets/img/product/weddings/Guo-Da-Li-The-Chinese-Wedding-Shop.jpg');
            const pslider_2 = require('~/assets/img/product/default/3.jpg');

            return {
                products: {},
                promotion_slider1: pslider_1,
                promotion_slider2: pslider_2,
            }
        },
        methods: {
            getProducts() {
                const WooComProducts = new WooCommerceProducts()
                WooComProducts.getProducts().then((response) => {
                    this.products = response[0]
                    console.log(this.products)
                    console.log(response[1])
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted() {
            this.getProducts()
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