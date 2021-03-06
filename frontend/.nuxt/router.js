import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f6216636 = () => interopDefault(import('../modules/cart/pages/checkout.vue' /* webpackChunkName: "" */))
const _7477d07a = () => interopDefault(import('../modules/cart/pages/index.vue' /* webpackChunkName: "" */))
const _02a956ee = () => interopDefault(import('../modules/shop/pages/cheongsam/_id.vue' /* webpackChunkName: "" */))
const _31114de1 = () => interopDefault(import('../modules/shop/pages/cheongsam/index.vue' /* webpackChunkName: "" */))
const _692240c6 = () => interopDefault(import('../modules/shop/pages/teaset/_id.vue' /* webpackChunkName: "" */))
const _4d03c244 = () => interopDefault(import('../modules/shop/pages/teaset/index.vue' /* webpackChunkName: "" */))
const _4f2d0b99 = () => interopDefault(import('../modules/shop/pages/index.vue' /* webpackChunkName: "" */))
const _b3dde3c0 = () => interopDefault(import('../modules/user/pages/my-account.vue' /* webpackChunkName: "" */))
const _4885afa8 = () => interopDefault(import('../modules/user/pages/signup.vue' /* webpackChunkName: "" */))
const _71b25c94 = () => interopDefault(import('../modules/user/pages/signin.vue' /* webpackChunkName: "" */))
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
    path: "/cart/checkout",
    component: _f6216636,
    name: "checkout"
  }, {
    path: "/cart",
    component: _7477d07a,
    name: "cart"
  }, {
    path: "/shop/cheongsam/:id",
    component: _02a956ee,
    name: "cheongsam_id"
  }, {
    path: "/shop/cheongsam",
    component: _31114de1,
    name: "cheongsam"
  }, {
    path: "/shop/teaset/:id",
    component: _692240c6,
    name: "teaset_id"
  }, {
    path: "/shop/teaset",
    component: _4d03c244,
    name: "teaset"
  }, {
    path: "/shop",
    component: _4f2d0b99,
    name: "shop"
  }, {
    path: "/my-account",
    component: _b3dde3c0,
    name: "my-account"
  }, {
    path: "/signup",
    component: _4885afa8,
    name: "signup"
  }, {
    path: "/signin",
    component: _71b25c94,
    name: "signin"
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
  const base = (config._app && config._app.basePath) || routerOptions.base
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
