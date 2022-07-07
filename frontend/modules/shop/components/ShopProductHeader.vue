<template>
    <!-- start Product Header -->
    <div class="ps-product__header">
        <div class="ps-product__thumbnail" data-vertical="false">

            <div class="ps-wrapper">
                <div class="ps-product__gallery">
                    <div class="col-12 px-md-2 d-none d-md-block">
                        <div class="" style="cursor: pointer" @click="zoomImage()">
                            <b-img id="zoomImageId" :src="teaserImage.src" alt="" class="image zoom"></b-img>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ps-product__variants">
                <div class="col-12 d-none d-md-block my-4">
                    <div class="row">
                        <div class="col-3" v-for="(image, index) in product.images" :key="index">
                            <div class="thumbnail" style="cursor: pointer">
                                <b-img :src="`${image.src}`" alt="" class="image" @click="changeTeaserImage(index)"></b-img>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <input class="form-control" type="text" value="1">
                    </div><button class="ps-btn ps-btn--black" @click="$emit('add-product', product)">Add to cart</button><a class="ps-product__favorite" href="#"><i class="fa fa-heart-o"></i></a>
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
    import mediumZoom from 'medium-zoom'

    const initZoom = () => {
        mediumZoom('#zoomImageId', {
            margin: 24,
            background: '#BADA55',
            // scrollOffset: 0,
            // container: '#zoom-container',
            // template: '#zoom-template',
        })
    }

    export default {
        name: 'ShopProductHeader',
        data() {
            return {
                activeIndex: 0
            }
        },
        props: {
            product: {
                type: Object,
                required: true
            },
        },
        computed: {
            teaserImage() {
                return this.product.images[this.activeIndex]
            }
        },
        methods: {
            changeTeaserImage(i) {
                this.activeIndex = i
            },
            zoomImage() {
                initZoom()
            },
        },
    }
</script>

<style lang="scss" scoped>
    /* it has z-index: 10, will create problem for medium zoom */
    .ps-product__thumbnail {
        z-index: 0 !important;
    }

    .medium-zoom-overlay {
        position: fixed !important;
        /* z-index: 999 !important;/*  */
        /* height: 100vh;
         width: 100vw; */
    }
</style>