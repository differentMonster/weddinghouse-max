export { default as MyAccountLogin } from '../../modules/my-account/components/MyAccountLogin.vue'
export { default as MyAccountRegister } from '../../modules/my-account/components/MyAccountRegister.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as ImageSlider } from '../../components/ImageSlider.vue'
export { default as MagaMenu } from '../../components/MagaMenu.vue'

export const LazyMyAccountLogin = import('../../modules/my-account/components/MyAccountLogin.vue' /* webpackChunkName: "components/my-account-login" */).then(c => c.default || c)
export const LazyMyAccountRegister = import('../../modules/my-account/components/MyAccountRegister.vue' /* webpackChunkName: "components/my-account-register" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyImageSlider = import('../../components/ImageSlider.vue' /* webpackChunkName: "components/image-slider" */).then(c => c.default || c)
export const LazyMagaMenu = import('../../components/MagaMenu.vue' /* webpackChunkName: "components/maga-menu" */).then(c => c.default || c)
