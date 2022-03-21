<template>
    <!-- start SPP breadcrumbs -->
    <div class="ps-page__header">
        <ul class="ps-breadcrumb">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li v-for="(item, index) in product.categories" :key="index">
                <nuxt-link :to="`/shop/${item.slug}`">{{ item.slug }}</nuxt-link>
            </li>
            <li>{{product.name}}</li>
        </ul>
        <div class="ps-page__nav">
            <button><i class="icon-chevron-left"></i></button>
            <button><i class="icon-chevron-right"></i></button>
        </div>
    </div>
    <!-- end SPP breadcrumbs -->
</template>

<script>
    export default {
        name: 'ShopProductBreadcrumbs',
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>

</style>