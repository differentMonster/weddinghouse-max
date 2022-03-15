<template>
    <!-- start Product Header -->
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
                    </div><button class="ps-btn ps-btn--black" @click="addProduct()">Add to cart</button><a class="ps-product__favorite" href="#"><i class="fa fa-heart-o"></i></a>
                </figure>
                <div class="ps-product__buynow"><a class="ps-btn ps-btn--black ps-btn--fullwidth" href="#">Buy Now</a></div>
            </div>
            <div class="ps-product__specification">
                <p>
                    <strong>CATEGORY:</strong>
                    <nuxt-link :to="`/shop/${categorie.slug}`" v-for="categorie in product.categories" :key="categorie.id">
                        {{ categorie.slug }}
                    </nuxt-link>
                </p>
                <p>
                    <strong>TAGS:</strong>
                    <nuxt-link :to="`/shop/${tag.slug}`" v-for="tag in product.tags" :key="tag.id">
                        {{ tag.slug }}
                    </nuxt-link>
                </p>
            </div>
            <div class="ps-product__sharing"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-pinterest"></i></a></div>

        </div>
    </div>
    <!-- end Product Header -->
</template>

<script>
    export default {
        name: 'ShopProductHeader',
        props: {
            product: {
                type: Array,
                required: true
            }
        },
        methods: {
            addProduct() {
                const newProduct = {
                    product_id: this.product.id,
                    name: this.product.name,
                    price: this.product.price,
                    quantity: 2
                }
                this.$store.dispatch("cart/addItemToCart", newProduct)
            }
        }
    }
</script>

<style>

</style>