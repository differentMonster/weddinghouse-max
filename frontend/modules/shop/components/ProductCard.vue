<template>
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
</template>

<script>
    export default {
        name: 'ProductCard',
        props: {
            products: {
                type: Array,
                required: true
            }
        }
    }
</script>