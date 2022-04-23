# Wedding House Max

# Business Logical

# Idea Design Solution

## Purpose
it was first design to be a B2C plaform targeting wedding product, setting up pick as package in product,
 for customer more easy to purchase what they need in chinese wedding day, also so easy checkout and devlivery.
## Goals

# Key Principles
* Lean
* Agile requirements flow

# Project MVP - Design Decisions

## Maintainability
- [X] We prioritize productivity and time to market, so we plan to use Rails since the team is familiar with the technology even if it might be suboptimal.
- [X]  automated tests only at login and cart checkout because of lack of time and money for the MVP
## Scalability
- [X] We expect from 500-2000 active users using our systems daily. This should be easily achievable with a modest deployment in Google Cloud and Kubernetes.
## Performance
- [X] We want to have < 1s response times on every page in our system
## Fault-Tolerance
## Security
- [X] Our systems should restart automatically in case of a failure. We plan to use Docker and Kubernetes.
## Architecture
### NGINX
### Frontend
- [X] NUXT 2
- [X] Domain Driven Design (DDD)
### Backend
- [X] WORDPPRESS
- [X] WooCommerce

# Logs
## Frontend
Must have :
** Shop Categorly Image should be able to zoom in and out
** Card should only be remember once the user login and logout to empty the cart
** Checkout validation on address

Nice to have :
** Checkout remember user shipping address using wordpress data to store and autoload.

* DONE user authentication
  CLOSED: [2021-12-21 Tue 02:54]
  - Note taken on [2021-12-19 Sun 04:15] \\
    - cookies already have userdata, nuxt is need validation on that else CORS will show up
  - Note taken on [2021-12-19 Sun 01:15] \\
    - @nuxt/auth successful get user data back from backend
  - auth module
* DONE add logout and register page
   CLOSED: [2022-01-19 Wed 01:33]
   - Logout, Login, Register API arleay setup
* DONE login redirect back to home
  CLOSED: [2022-03-17 Thu 02:17]
   - Note taken on [2021-12-21 Tue 02:55] \\
     - might be cookie and auth setup problem, so far noting happen again after change logout = '/login'
     - /profile/user.vue : when login it some how it redirect and undirect sometime
* DONE Forntend data to backend having Cross Orgin blocked
   CLOSED: [2022-01-19 Wed 01:33]
   - Note taken on [2022-01-08 Sat 06:11] \\
     - assume it was wordpress problem, check functions.php to allow-control-origin-access
* DONE add product by each catergory (teaset, cheongsam)
   CLOSED: [2022-01-22 Sat 02:30]
   - Note taken on [2022-01-19 Wed 05:05] \\
     - need to return same data from woocommerce, images, name, price, sku
    building Categorly using inversion component, to call back on each product categorly fliter.
* DONE image slider fixing image loading and also switch other component use try and await
   CLOSED: [2022-01-24 Mon 06:38]
* DONE Login and Register component fix
   CLOSED: [2022-01-28 Fri 00:25]
* DONE User and Product Item Store in cookie
  CLOSED: [2022-03-30 Wed 03:31]
* DONE UX cart sidebar added
  CLOSED: [2022-03-30 Wed 03:32]
* CANCELLED Checkout Page added
  CLOSED: [2022-04-21 Thu 22:21]
  - cant let user change their data.
  - nice to have do it on next feature, use plugin vuex-map-fields.
* BUG Image Slider using keep-alive but have load plugin problem
* CANCELLED test new import plugin to fix keep alive problem
  CLOSED: [2022-03-30 Wed 03:30]
  - Note taken on [2022-03-30 Wed 03:30] \\
    already that switch to vue-presist and inject methods on modules folder
* build cart
   - storage
* CANCELLED remove jquery for less buggy propose
   CLOSED: [2022-02-18 Fri 00:06]
* DONE [#B] Cart Pages [0/1]
  CLOSED: [2022-02-13 Sun 23:32]
  - Note taken on [2022-02-06 Sun 21:02] \\
    - build cart page as component
  - [-] Cart Systems
    - [X] add products
    - [X] remove products
    - [X] edit quatity
      - add keep pressing add quantity
      - must add minms and add on cart page
    - [X] caculation totally price
    - [X] note additional comments
    - [X] one click check out process
      - is better to build the cartData inside of store mutations
* CANCELLED Adding Jest for TTD test
  CLOSED: [2022-03-15 Tue 06:05]
    Reason cancelled:
    repalce component test to cypress, for much more quicker and easy test.
* DONE Single Page detail set mainImage problem.
  CLOSED: [2022-04-23 Sat 23:27]
   - Note taken on [2022-04-23 Sat 23:27] \\
     - set mainImage on Higher Order ( _id page ) to control the image load.
* DONE miniCart added
  CLOSED: [2022-04-23 Sat 23:28]
  - Note taken on [2022-04-23 Sat 23:28] \\
    - must do a cypress test to minicart info should match cart info
* TODO zoom in single page detail

## Backend
Must have :
** Wordpress become headless

Nice to have :
** SVG execl into wordpress products

key:
  testing woocommerce
  Consumer key = ck_ca8dc3da04a18c79601e7b49c6e8e216da06cf82
  Consumer secret = cs_e8fdcde1886ae82182ef3fc7507b09ee20ede897

    - woocommerce as customer order management
    - cocart as woocommerce restful api to brige frontend and backend
    - eghl as payment gateway
    - JWT authentication

* DONE add user error
  CLOSED: [2021-12-18 Sat 22:19]
  - Note taken on [2021-12-15 Wed 06:04] \\
    - wordpress cant add user to perform JWT token yet
       ```
       MailPoet Error: MailPoet requires a PDO_MYSQL PHP extension. Please read our instructions on how to resolve this issue.

* CANCELLED add woocommerce return product by catergory
  Reason cancelled : switch to frontend fliter
  CLOSED: [2022-01-22 Sat 02:30]
  - Note taken on [2022-01-19 Wed 05:03] \\
    - woocommerce restapi dont have return catergory by slug, add on
    - catergory=catergory_id
    - catergory/teaset

### Bugs
[![Build Status](https://travis-ci.org/vitiral/artifact.svg?branch=master)](https://travis-ci.org/vitiral/artifact)
  - Note taken on [2022-03-15 Tue 06:07] \\
    * sometime login will redirect to logout page possible cookie issuse.
    * fixed : check Dom render on signin page, check nuxt .#signin.vue

* DONE logout : address_1 problem somehow
  CLOSED: [2022-04-15 Fri 23:40]
  - Note taken on [2022-04-15 Fri 23:42] \\
    - Reason : user data form sttucture up wrongly and without v-if to showing data.
    - Fix : injection edition billing data from wordpress and login in contain it.
    - others way is to recall it again with woocommerce and add into user object.
    ```
            login() {
                await this.$auth.loginWith("local", {
                    data: this.userData
                }).then((response) => {
                    if (response.status === 200) {
                        // this.$router.go('/')
                    }
                }).catch((error) => {
                    throw new Error(error)
                }).finally(() => {
                    const user = this.$auth.user
                    // user['scope'] = 'some_role_from_db'
                    // this.$auth.setUser(user)
                    // const userId = this.$auth.user.id
                    //
                    // this.$user.info(userId).then((meta) => {
                    //     const userDetailBilling = meta[0].billing
                    //     this.$auth.setUser(userDetailBilling)
                    // })
                })
    ```

## Cypress
all test are not functions after the templete change.
* User Login Testing [2/2]
  - [X] object return from backend
  - [X] able to redirect to main page after succseful login
* Cart Testing [4/4]
  - [X] add item
    - if directivly visit cart page in url, store item gone
  - [X] delete item
  - sent order
  - backend recevied order
