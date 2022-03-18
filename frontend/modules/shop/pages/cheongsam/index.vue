 <template>
     <!-- start Shop  -->
     <div class="ps-page">
         <div class="ps-shop ps-shop--sidebar reverse banner">
             <div class="container">
                 <div class="ps-shop__container">

                     <h1>Cheongsam Pages</h1>
                     <ShopProductCard :products="products"></ShopProductCard>

                 </div>
             </div>
         </div>
     </div>
     <!-- end Shop -->
 </template>

 <script>
     import {
         Shop
     } from "@/modules/shop/plugins/getShop.js";
     import ShopProductCard from "@/modules/shop/components/ShopProductCard.vue"

     export default {
         data() {
             return {
                 products: [],
                 categories: 'cheongsam'
             }
         },
         component: {
             ShopProductCard
         },
         async fetch() {
             try {
                 const setShop = new Shop()
                 const getShopProductsByCategory = await setShop.getProductsByCategory(this.categories)
                 this.products = getShopProductsByCategory[0]
                 console.log(this.products)
                 console.log(getShopProductsByCategory[1])
             } catch (error) {
                 console.log(error)
             }
         },
         mounted() {}
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