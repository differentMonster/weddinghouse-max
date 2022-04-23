<template>
    <!-- start Shop Wrapper - Content -->
    <div class="ps-tabs">
        <div class="ps-tab active" id="tab-1">
            <div class="row row--5-columns">
                <div v-for="(product, index) in products" :key="`product-${index}`" class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                    <div class="ps-product">
                        <div class="ps-product__thumbnail">
                            <nuxt-img width="400" height="400" class="ps-product__image" :src="`${product.images[0].src}`" alt="" />
                            <nuxt-img width="400" height="400" class="ps-product__image-alt" :src="`${product.images[1].src}`" alt="" />
                            <nuxt-link :to="'/shop/'+ `${product.categories[0].slug}` + '/' + `${product.id}`" class="ps-product__overlay"></nuxt-link>
                            <div class="ps-product__actions"><a href="shopping-cart.html"> Add to cart</a>
                                <ul>
                                    <li><a href="#"><i class="icon-heart"></i></a></li>
                                    <li><a href="#"><i class="icon-frame-expand"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="ps-product__content">
                            <a class="ps-product__title" href="product-default.html">{{product.name}}</a>
                            <p class="ps-product__price"><span>£</span>{{ product.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end Shop Wrapper - Content -->
</template>

<script>
    export default {
        name: 'ShopProductCard',
        props: {
            products: {
                type: Array,
                required: true
            }
        },
    }
</script>