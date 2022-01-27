<template>
    <div class="ps-page--default">

        <!-- start Products Detail -->
        <div class="ps-page ps-page--product-detail">
            <div class="container">

                <!-- start SPP breadcrumbs -->
                <div class="ps-page__header">
                    <ul class="ps-breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="shop-default.html">Cheongsam</a></li>
                        <li>{{product.name}}</li>
                    </ul>
                    <div class="ps-page__nav">
                        <button><i class="icon-chevron-left"></i></button>
                        <button><i class="icon-chevron-right"></i></button>
                    </div>
                </div>
                <!-- end SPP breadcrumbs -->


                <!-- start Detail Content -->
                <div class="ps-product--detail">
                    <div class="ps-product__header">
                        <div class="ps-product__thumbnail" data-vertical="false">


                            <figure>
                                <div class="ps-wrapper">
                                    <div class="ps-product__gallery" data-arrow="true" v-for="image in product.images" :key="image.id">
                                        <div class="item"><a href=""><img :src="`${image.src}`" alt=""></a></div>
                                    </div>
                                </div>
                            </figure>



                            <div class="ps-product__variants" data-item="4" data-md="3" data-sm="3" data-arrow="false">
                                <!-- <div class="item"><img :src="`${ssps.photo}`" alt=""></div> -->
                            </div>
                        </div>
                        <div class="ps-product__info">
                            <div class="ps-product__info-header">
                                <div class="ps-product__rating">
                                    <select class="ps-rating" data-read-only="true">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="2">5</option>
                                    </select><span>1 Review</span>
                                </div>
                                <h2 class="ps-product__title">{{product.name}}</h2><span class="ps-product__sku">SKU: {{product.sku}}</span>
                                <h4 class="ps-product__price">{{product.price}}</h4>
                            </div>
                            <div v-if="product.description" class="ps-product__desc">
                                {{product.description}}
                            </div>
                            <div class="ps-product__shopping">
                                <figure>
                                    <div class="form-group--number">
                                        <button class="up"></button>
                                        <button class="down"></button>
                                        <input class="form-control" type="text">
                                    </div><button class="ps-btn ps-btn--black">Add to cart</button><a class="ps-product__favorite" href="#"><i class="fa fa-heart-o"></i></a>
                                </figure>
                                <div class="ps-product__buynow"><a class="ps-btn ps-btn--black ps-btn--fullwidth" href="#">Buy Now</a></div>
                            </div>
                            <div class="ps-product__specification">
                                <p><strong>CATEGORY:</strong><a href="shop-4-column.html">Women</a><a href="shop-4-column.html"> Top</a><a href="shop-4-column.html"> Accessories</a><a href="shop-4-column.html"> Jewellery</a></p>
                                <p><strong>Tags:</strong><a href="shop-4-column.html">clothing</a><a href="shop-4-column.html"> t-shirt</a><a href="shop-4-column.html"> woman</a></p>
                            </div>
                            <div class="ps-product__sharing"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-pinterest"></i></a></div>

                        </div>
                    </div>


                    <!-- start Description, Addition Information, Review option -->
                    <div class="ps-product__content ps-tab-root">
                        <div class="container">

                            <!-- start Tab Option -->
                            <ul class="ps-tab-list">
                                <li class="active"><a href="#tab-1">Description</a></li>
                                <li><a href="#tab-2">Addition Information</a></li>
                                <li><a href="#tab-3">Review<sup> (1)</sup></a></li>
                            </ul>
                            <!-- end Tab Option -->

                            <!-- start Tab Content -->
                            <div class="ps-tabs">

                                <!-- start Description Content -->
                                <div class="ps-tab active" id="tab-1">
                                    <div class="row">
                                        <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                            <div class="ps-document">
                                                <h4>Introduction</h4>
                                                <p>With ultralight, quality cotton canvas, the JanSport Houston backpack is ideal for a life-on-the-go. This backpack features premium faux leather bottom and trim details, padded 15 in laptop sleeve and tricot lined tablet sleeve</p>
                                                <h4>Features</h4>
                                                <ul>
                                                    <li>Fully padded back panel, web hauded handle</li>
                                                    <li>Internal padded sleeve fits 15″ laptop & unique fabric application</li>
                                                    <li>Internal tricot lined tablet sleeve</li>
                                                    <li>One large main compartment and zippered</li>
                                                    <li>Premium cotton canvas fabric</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 "><img :src="`${product.photo2}`" alt=""></div>
                                    </div>
                                </div>
                                <!-- end Description Content -->

                                <!-- start Addition Information Content -->
                                <div class="ps-tab" id="tab-2">
                                    <div class="table-responsive">
                                        <table class="table ps-table ps-table--product-info">
                                            <tbody>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td>2 kg</td>
                                                </tr>
                                                <tr>
                                                    <td>Color</td>
                                                    <td>Black, Brown, White</td>
                                                </tr>
                                                <tr>
                                                    <td>Dimensions</td>
                                                    <td> 8 x 6 x 2cm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- end Addition Information Content -->

                                <!-- start Review Content -->
                                <div class="ps-tab" id="tab-3">
                                    <div class="ps-product__review">
                                        <h4>1 review for Contrasting Design T-Shirt</h4>
                                        <div class="ps-block--comment ps-block--comment-review">
                                            <div class="ps-block__thumbnail"><img src="@/assets/img/product/default/1.jpg" alt=""></div>
                                            <div class="ps-block__content">
                                                <select class="ps-rating" data-read-only="true">
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                    <option value="1">4</option>
                                                    <option value="2">5</option>
                                                </select>
                                                <h5>Martin Katrina <span> -June 20, 2019 </span></h5>
                                                <p>Aenean sit amet odio est.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form class="ps-form--product-review" action="product-default.html" method="get">
                                        <div class="ps-form__header">
                                            <h4>Add a review</h4>
                                            <p>Connect with:</p>
                                            <ul class="ps-list--social square">
                                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                            </ul>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                        </div>
                                        <div class="form-group">
                                            <label>Your rating<sup>*</sup></label>
                                            <select class="ps-rating" data-read-only="false">
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Your Review:<sup>*</sup></label>
                                            <textarea class="form-control" rows="6"></textarea>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Name:<sup>*</sup></label>
                                                    <input class="form-control" type="text" placeholder="">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Email:<sup>*</sup></label>
                                                    <input class="form-control" type="email" placeholder="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="ps-btn ps-btn--black">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <!-- end Review Content -->
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


        <!-- start Products Related -->
        <div class="ps-related-products">
            <h3>Related Products</h3>
            <div class="container">
                <div class="row">

                    <!-- start 1 Products -->
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <div class="ps-product">
                            <div class="ps-product__thumbnail"><img class="ps-product__image" src="@/assets/img/product/default/4.jpg" alt="" /><img class="ps-product__image-alt" src="@/assets/img/product/default/4.jpg" alt="" /><a class="ps-product__overlay" href="product-default.html"></a>
                                <div class="ps-product__actions"><a href="shopping-cart.html"> Add to cart</a>
                                    <ul>
                                        <li><a href="#"><i class="icon-heart"></i></a></li>
                                        <li><a href="#"><i class="icon-frame-expand"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Aviator Sunglasses</a>
                                <div class="ps-product__rating">
                                    <select class="ps-rating" data-read-only="true">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="2">5</option>
                                    </select>
                                </div>
                                <p class="ps-product__price"><span>£</span> 9.90</p>
                            </div>
                        </div>
                    </div>
                    <!-- end 1 Products -->



                    <!-- start 2 Products -->
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <div class="ps-product">
                            <div class="ps-product__thumbnail"><img class="ps-product__image" src="@/assets/img/product/default/4.jpg" alt="" /><img class="ps-product__image-alt" src="@/assets/img/product/default/4.jpg" alt="" /><a class="ps-product__overlay" href="product-default.html"></a>
                                <div class="ps-product__actions"><a href="shopping-cart.html"> Add to cart</a>
                                    <ul>
                                        <li><a href="#"><i class="icon-heart"></i></a></li>
                                        <li><a href="#"><i class="icon-frame-expand"></i></a></li>
                                    </ul>
                                </div>
                            </div>
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
                                <p class="ps-product__price"><span>£</span> 69.90</p>
                            </div>
                        </div>
                    </div>
                    <!-- end 2 Products -->


                    <!-- start 3 Products -->
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <div class="ps-product">
                            <div class="ps-product__thumbnail"><img class="ps-product__image" src="@/assets/img/product/default/3.jpg" alt="" /><img class="ps-product__image-alt" src="@/assets/img/product/default/3.jpg" alt="" /><a class="ps-product__overlay" href="product-default.html"></a>
                                <div class="ps-product__actions"><a href="shopping-cart.html"> Add to cart</a>
                                    <ul>
                                        <li><a href="#"><i class="icon-heart"></i></a></li>
                                        <li><a href="#"><i class="icon-frame-expand"></i></a></li>
                                    </ul>
                                </div>
                            </div>
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
                                <p class="ps-product__price"><span>£</span> 56.89</p>
                            </div>
                        </div>
                    </div>
                    <!-- end 3 Products -->

                    <!-- start 4 Products -->
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <div class="ps-product">
                            <div class="ps-product__thumbnail"><img class="ps-product__image" src="@/assets/img/product/default/4.jpg" alt="" /><img class="ps-product__image-alt" src="@/assets/img/product/default/4.jpg" alt="" /><a class="ps-product__overlay" href="product-default.html"></a>
                                <div class="ps-product__actions"><a href="shopping-cart.html"> Add to cart</a>
                                    <ul>
                                        <li><a href="#"><i class="icon-heart"></i></a></li>
                                        <li><a href="#"><i class="icon-frame-expand"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Floral Short Jumpsuit</a>
                                <div class="ps-product__rating">
                                    <select class="ps-rating" data-read-only="true">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="2">5</option>
                                    </select>
                                </div>
                                <p class="ps-product__price"><span>£</span> 97.99</p>
                            </div>
                        </div>
                    </div>
                    <!-- end 4 Products -->

                </div>
            </div>
        </div>
        <!-- end Products Related -->


    </div>
</template>


<script>
    import {
        WooCommerceProducts
    } from "@/modules/shop/plugins/classWooCommerceProducts.js";

    export default {
        data() {
            return {
                product: [],
                id: this.$route.params.id
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