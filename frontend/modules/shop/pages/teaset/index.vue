 <template>
     <!-- start Shop  -->
     <div class="ps-page">
         <div class="ps-shop ps-shop--fullwidth">
             <div class="container-fluid">

                 <ShopHeader></ShopHeader>


                 <ShopProductCard :products="products"></ShopProductCard>

                 <div class="ps-shop__footer"><a class="ps-link--under" href="#">Discover more</a></div>
             </div>
         </div>
     </div>
     <!-- end Shop -->
 </template>

 <script>
     import ShopProductCard from "@/modules/shop/components/ShopProductCard.vue"
     import ShopHeader from "@/modules/shop/components/ShopHeader.vue"

     export default {
         data() {
             return {
                 products: [],
                 categories: 'teaset'
             }
         },
         components: {
             ShopHeader,
             ShopProductCard
         },
         async fetch() {
             try {
                 const getShopProductsByCategory = await this.$shop.getProductsByCategory(this.categories)
                 this.products = getShopProductsByCategory[0]
             } catch (error) {
                 console.log(error)
             }
         },
         mounted() {}
     }
 </script>


 <style>
     /* .product_container {
      width: 100%;
      text-align: center;
      position: relative;
      margin-top: 100px;
      }

      .product--images img {
      width: 500px;
      height: 670px;
      } */
 </style>