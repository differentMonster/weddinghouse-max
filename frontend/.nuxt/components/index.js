export { default as MyAccountLogin } from '../../modules/my-account/components/MyAccountLogin.vue'
export { default as MyAccountRegister } from '../../modules/my-account/components/MyAccountRegister.vue'
export { default as ProductCard } from '../../modules/shop/components/ProductCard.vue'
export { default as CartCard } from '../../modules/cart/components/CartCard.vue'
export { default as CartCheckOut } from '../../modules/cart/components/CartCheckOut.vue'
export { default as CartDiscountCode } from '../../modules/cart/components/CartDiscountCode.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as MagaMenu } from '../../components/MagaMenu.vue'
export { default as HomeImageSlider } from '../../components/Home/ImageSlider.vue'

export const LazyMyAccountLogin = import('../../modules/my-account/components/MyAccountLogin.vue' /* webpackChunkName: "components/my-account-login" */).then(c => c.default || c)
export const LazyMyAccountRegister = import('../../modules/my-account/components/MyAccountRegister.vue' /* webpackChunkName: "components/my-account-register" */).then(c => c.default || c)
export const LazyProductCard = import('../../modules/shop/components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => c.default || c)
export const LazyCartCard = import('../../modules/cart/components/CartCard.vue' /* webpackChunkName: "components/cart-card" */).then(c => c.default || c)
export const LazyCartCheckOut = import('../../modules/cart/components/CartCheckOut.vue' /* webpackChunkName: "components/cart-check-out" */).then(c => c.default || c)
export const LazyCartDiscountCode = import('../../modules/cart/components/CartDiscountCode.vue' /* webpackChunkName: "components/cart-discount-code" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyMagaMenu = import('../../components/MagaMenu.vue' /* webpackChunkName: "components/maga-menu" */).then(c => c.default || c)
export const LazyHomeImageSlider = import('../../components/Home/ImageSlider.vue' /* webpackChunkName: "components/home-image-slider" */).then(c => c.default || c)
