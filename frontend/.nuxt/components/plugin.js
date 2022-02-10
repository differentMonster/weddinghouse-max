import Vue from 'vue'

const components = {
  MyAccountLogin: () => import('../../modules/my-account/components/MyAccountLogin.vue' /* webpackChunkName: "components/my-account-login" */).then(c => c.default || c),
  MyAccountRegister: () => import('../../modules/my-account/components/MyAccountRegister.vue' /* webpackChunkName: "components/my-account-register" */).then(c => c.default || c),
  ProductCard: () => import('../../modules/shop/components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => c.default || c),
  CartCard: () => import('../../modules/cart/components/CartCard.vue' /* webpackChunkName: "components/cart-card" */).then(c => c.default || c),
  CartCheckOut: () => import('../../modules/cart/components/CartCheckOut.vue' /* webpackChunkName: "components/cart-check-out" */).then(c => c.default || c),
  CartDiscountCode: () => import('../../modules/cart/components/CartDiscountCode.vue' /* webpackChunkName: "components/cart-discount-code" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  MagaMenu: () => import('../../components/MagaMenu.vue' /* webpackChunkName: "components/maga-menu" */).then(c => c.default || c),
  HomeImageSlider: () => import('../../components/Home/ImageSlider.vue' /* webpackChunkName: "components/home-image-slider" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
