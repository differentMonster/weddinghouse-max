import Vue from 'vue'

const components = {
  MyAccountLogin: () => import('../../modules/my-account/components/MyAccountLogin.vue' /* webpackChunkName: "components/my-account-login" */).then(c => c.default || c),
  MyAccountRegister: () => import('../../modules/my-account/components/MyAccountRegister.vue' /* webpackChunkName: "components/my-account-register" */).then(c => c.default || c),
  ProductCard: () => import('../../modules/shop/components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => c.default || c),
  CartOverview: () => import('../../modules/cart/components/CartOverview.vue' /* webpackChunkName: "components/cart-overview" */).then(c => c.default || c),
  CartOverviewProduct: () => import('../../modules/cart/components/CartOverviewProduct.vue' /* webpackChunkName: "components/cart-overview-product" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  MagaMenu: () => import('../../components/MagaMenu.vue' /* webpackChunkName: "components/maga-menu" */).then(c => c.default || c),
  HomeImageSlider: () => import('../../components/Home/ImageSlider.vue' /* webpackChunkName: "components/home-image-slider" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
