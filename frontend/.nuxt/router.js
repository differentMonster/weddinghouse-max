import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _084f6653 = () => interopDefault(import('../pages/auth/login/index.vue' /* webpackChunkName: "pages/auth/login/index" */))
const _26c1d88f = () => interopDefault(import('../pages/auth/register/index.vue' /* webpackChunkName: "pages/auth/register/index" */))
const _bb115b7c = () => interopDefault(import('../pages/profile/user/index.vue' /* webpackChunkName: "pages/profile/user/index" */))
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
    path: "/auth/login",
    component: _084f6653,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _26c1d88f,
    name: "auth-register"
  }, {
    path: "/profile/user",
    component: _bb115b7c,
    name: "profile-user"
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
