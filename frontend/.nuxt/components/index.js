export { default as HelloWorld } from '../../modules/my-account/components/HelloWorld.vue'
export { default as MyAccountLogin } from '../../modules/my-account/components/MyAccountLogin.vue'
export { default as MyAccountRegister } from '../../modules/my-account/components/MyAccountRegister.vue'
export { default as ShopProductAddition } from '../../modules/shop/components/ShopProductAddition.vue'
export { default as ShopProductBreadcrumbs } from '../../modules/shop/components/ShopProductBreadcrumbs.vue'
export { default as ShopProductCard } from '../../modules/shop/components/ShopProductCard.vue'
export { default as ShopProductDescription } from '../../modules/shop/components/ShopProductDescription.vue'
export { default as ShopProductHeader } from '../../modules/shop/components/ShopProductHeader.vue'
export { default as ShopProductRelated } from '../../modules/shop/components/ShopProductRelated.vue'
export { default as ShopProductReview } from '../../modules/shop/components/ShopProductReview.vue'
export { default as CartCard } from '../../modules/cart/components/CartCard.vue'
export { default as CartCheckOut } from '../../modules/cart/components/CartCheckOut.vue'
export { default as CartDiscountCode } from '../../modules/cart/components/CartDiscountCode.vue'
export { default as HelloWorld2 } from '../../components/HelloWorld2.vue'
export { default as MagaMenu } from '../../components/MagaMenu.vue'
export { default as Footer } from '../../components/Footer/Footer.vue'
export { default as HomeImageSlider } from '../../components/Home/HomeImageSlider.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
