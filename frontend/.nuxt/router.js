import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _32cac487 = () => interopDefault(import('../modules/products/pages/index.vue' /* webpackChunkName: "" */))
const _764ae541 = () => interopDefault(import('../modules/my-account/pages/user/index.vue' /* webpackChunkName: "" */))
const _2d56a96f = () => interopDefault(import('../modules/my-account/pages/index.vue' /* webpackChunkName: "" */))
const _07cb2828 = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _238b3ab4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/products",
    component: _32cac487,
    name: "products"
  }, {
    path: "/my-account/user",
    component: _764ae541,
    name: "user"
  }, {
    path: "/my-account",
    component: _2d56a96f,
    name: "my-account"
  }, {
    path: "/about-us",
    component: _07cb2828,
    name: "about-us"
  }, {
    path: "/",
    component: _238b3ab4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
