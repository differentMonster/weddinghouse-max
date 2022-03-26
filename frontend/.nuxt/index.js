import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_fontLoader_344e4b28 from 'nuxt_plugin_fontLoader_344e4b28' // Source: ./fontLoader.js (mode: 'client')
import nuxt_plugin_storeregisterCartStore48379303_444649e8 from 'nuxt_plugin_storeregisterCartStore48379303_444649e8' // Source: ./store.registerCartStore.48379303.js (mode: 'all')
import nuxt_plugin_storeregisterShopStore8893b17a_25286d48 from 'nuxt_plugin_storeregisterShopStore8893b17a_25286d48' // Source: ./store.registerShopStore.8893b17a.js (mode: 'all')
import nuxt_plugin_storeregisterUserStore4457a523_a3d29ca2 from 'nuxt_plugin_storeregisterUserStore4457a523_a3d29ca2' // Source: ./store.registerUserStore.4457a523.js (mode: 'all')
import nuxt_plugin_image_9ae2c136 from 'nuxt_plugin_image_9ae2c136' // Source: ./image.js (mode: 'all')
import nuxt_plugin_bootstrapvue_2ab47699 from 'nuxt_plugin_bootstrapvue_2ab47699' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_axios_70f0bb2c from 'nuxt_plugin_axios_70f0bb2c' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_woocommerce_a06cd18e from 'nuxt_plugin_woocommerce_a06cd18e' // Source: ../plugins/woocommerce.js (mode: 'all')
import nuxt_plugin_modules_3d596604 from 'nuxt_plugin_modules_3d596604' // Source: ../plugins/modules.js (mode: 'all')
import nuxt_plugin_getUser_54fa21c8 from 'nuxt_plugin_getUser_54fa21c8' // Source: ../modules/user/plugins/getUser.js (mode: 'all')
import nuxt_plugin_getCart_75103b9c from 'nuxt_plugin_getCart_75103b9c' // Source: ../modules/cart/plugins/getCart.js (mode: 'all')
import nuxt_plugin_vuesweetalert2_2195d1e8 from 'nuxt_plugin_vuesweetalert2_2195d1e8' // Source: ../plugins/vue-sweetalert2.js (mode: 'all')
import nuxt_plugin_veevalidate_21716614 from 'nuxt_plugin_veevalidate_21716614' // Source: ../plugins/vee-validate.js (mode: 'all')
import nuxt_plugin_cypress_9c53d384 from 'nuxt_plugin_cypress_9c53d384' // Source: ../plugins/cypress.js (mode: 'client')
import nuxt_plugin_vuexpersist_61a29aad from 'nuxt_plugin_vuexpersist_61a29aad' // Source: ../plugins/vuex-persist (mode: 'client')
import nuxt_plugin_auth_f3eddcf4 from 'nuxt_plugin_auth_f3eddcf4' // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"fade","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"weddinghouse","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"eCommerce website"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"favicon.ico"},{"hid":"font-prefetch","rel":"dns-prefetch","href":"https:\u002F\u002Ffonts.gstatic.com\u002F"},{"hid":"font-preconnect","rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com\u002F","crossorigin":""},{"hid":"font-preload","rel":"preload","as":"style","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Cormorant+Garamond:300i,400,400i,500,500i,600,600i,700&display=swap"}],"script":[],"style":[],"noscript":[{"hid":"font-noscript","innerHTML":"\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Cormorant+Garamond:300i,400,400i,500,500i,600,600i,700&display=swap\"\u003E"}],"__dangerouslyDisableSanitizersByTagID":{"font-noscript":["innerHTML"]}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_fontLoader_344e4b28 === 'function') {
    await nuxt_plugin_fontLoader_344e4b28(app.context, inject)
  }

  if (typeof nuxt_plugin_storeregisterCartStore48379303_444649e8 === 'function') {
    await nuxt_plugin_storeregisterCartStore48379303_444649e8(app.context, inject)
  }

  if (typeof nuxt_plugin_storeregisterShopStore8893b17a_25286d48 === 'function') {
    await nuxt_plugin_storeregisterShopStore8893b17a_25286d48(app.context, inject)
  }

  if (typeof nuxt_plugin_storeregisterUserStore4457a523_a3d29ca2 === 'function') {
    await nuxt_plugin_storeregisterUserStore4457a523_a3d29ca2(app.context, inject)
  }

  if (typeof nuxt_plugin_image_9ae2c136 === 'function') {
    await nuxt_plugin_image_9ae2c136(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_2ab47699 === 'function') {
    await nuxt_plugin_bootstrapvue_2ab47699(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_70f0bb2c === 'function') {
    await nuxt_plugin_axios_70f0bb2c(app.context, inject)
  }

  if (typeof nuxt_plugin_woocommerce_a06cd18e === 'function') {
    await nuxt_plugin_woocommerce_a06cd18e(app.context, inject)
  }

  if (typeof nuxt_plugin_modules_3d596604 === 'function') {
    await nuxt_plugin_modules_3d596604(app.context, inject)
  }

  if (typeof nuxt_plugin_getUser_54fa21c8 === 'function') {
    await nuxt_plugin_getUser_54fa21c8(app.context, inject)
  }

  if (typeof nuxt_plugin_getCart_75103b9c === 'function') {
    await nuxt_plugin_getCart_75103b9c(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesweetalert2_2195d1e8 === 'function') {
    await nuxt_plugin_vuesweetalert2_2195d1e8(app.context, inject)
  }

  if (typeof nuxt_plugin_veevalidate_21716614 === 'function') {
    await nuxt_plugin_veevalidate_21716614(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_cypress_9c53d384 === 'function') {
    await nuxt_plugin_cypress_9c53d384(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuexpersist_61a29aad === 'function') {
    await nuxt_plugin_vuexpersist_61a29aad(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_f3eddcf4 === 'function') {
    await nuxt_plugin_auth_f3eddcf4(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
