export { default as MyAccountLogin } from '../../modules/my-account/components/MyAccountLogin.vue'
export { default as MyAccountRegister } from '../../modules/my-account/components/MyAccountRegister.vue'
export { default as ProductCard } from '../../modules/shop/components/ProductCard.vue'
export { default as CartOverview } from '../../modules/cart/components/CartOverview.vue'
export { default as CartOverviewProduct } from '../../modules/cart/components/CartOverviewProduct.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as MagaMenu } from '../../components/MagaMenu.vue'
export { default as HomeImageSlider } from '../../components/Home/ImageSlider.vue'

export const LazyMyAccountLogin = import('../../modules/my-account/components/MyAccountLogin.vue' /* webpackChunkName: "components/my-account-login" */).then(c => c.default || c)
export const LazyMyAccountRegister = import('../../modules/my-account/components/MyAccountRegister.vue' /* webpackChunkName: "components/my-account-register" */).then(c => c.default || c)
export const LazyProductCard = import('../../modules/shop/components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => c.default || c)
export const LazyCartOverview = import('../../modules/cart/components/CartOverview.vue' /* webpackChunkName: "components/cart-overview" */).then(c => c.default || c)
export const LazyCartOverviewProduct = import('../../modules/cart/components/CartOverviewProduct.vue' /* webpackChunkName: "components/cart-overview-product" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyMagaMenu = import('../../components/MagaMenu.vue' /* webpackChunkName: "components/maga-menu" */).then(c => c.default || c)
export const LazyHomeImageSlider = import('../../components/Home/ImageSlider.vue' /* webpackChunkName: "components/home-image-slider" */).then(c => c.default || c)
