export { default as MyAccountLogin } from '../../modules/my-account/components/MyAccountLogin.vue'
export { default as MyAccountRegister } from '../../modules/my-account/components/MyAccountRegister.vue'
export { default as ProductCard } from '../../modules/shop/components/ProductCard.vue'
export { default as CartCard } from '../../modules/cart/components/CartCard.vue'
export { default as CartCheckOut } from '../../modules/cart/components/CartCheckOut.vue'
export { default as CartDiscountCode } from '../../modules/cart/components/CartDiscountCode.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as MagaMenu } from '../../components/MagaMenu.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as HomeImageSlider } from '../../components/Home/ImageSlider.vue'

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
