import Vue from 'vue'

const components = {
  MyAccountLogin: () => import('../../modules/my-account/components/MyAccountLogin.vue' /* webpackChunkName: "components/my-account-login" */).then(c => c.default || c),
  MyAccountRegister: () => import('../../modules/my-account/components/MyAccountRegister.vue' /* webpackChunkName: "components/my-account-register" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  ImageSlider: () => import('../../components/ImageSlider.vue' /* webpackChunkName: "components/image-slider" */).then(c => c.default || c),
  MagaMenu: () => import('../../components/MagaMenu.vue' /* webpackChunkName: "components/maga-menu" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
