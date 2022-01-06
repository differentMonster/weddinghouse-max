<template>
    <div>
        <div class="product_container">
            <h1>Products Pages</h1>
            <div v-for="product in products" :key="product.id">
                <div class="product--images">
                    <img alt="" :src="`${product.images[0].src}`" />
                    <img alt="" :src="`${product.images[1].src}`" />
                </div>
                <div class="product--info">
                    {{ product.name }}</br>
                    {{ product.sku }}</br>
                    {{ product.regular_price }}</br>
                    {{ product.sale_price }}</br>
                    {{ product.description }}</br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'products',
        data() {
            return {
                products: [],
            }
        },
        methods: {
            async getProducts() {
                await this.$axios.$get('http://localhost:3080/wp-json/wc/v3/products').then((data) => {
                    this.products = data
                    console.log(this.products)
                }).catch(error => {
                    throw new Error("fetching chongsame failure request")
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
    }

    .product--images img {
        width: 500px;
        height: 670px;
    }
</style>