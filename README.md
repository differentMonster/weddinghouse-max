# Wedding House Max

# Frontend [ Nuxt 2 ]
* Landing pages [3/3]
  - [X] landinge images
  - [X] MageMenu
    - Shop
      - wedding lamp
      - teaset
      - others
      - new arrival
      - cheongsam
    - Heiday Calendar
    - Blog
    - About us
    Icons:
    - MyAccount
    - Cart
    - Burger Menu
  - [X] Footer

* DONE [#B] Cart Pages [1/1]
  CLOSED: [2022-02-13 Sun 23:32]
  - Note taken on [2022-02-06 Sun 21:02] \\
    - build cart page as component
  - [X] Cart Systems
    - add products
    - remove products
    - edit quatity
    - caculation totally price
    - note additional comments
    - one click check out process

* PROGRESS Adding Jest for TTD test
  - unable to test vuex with nuxt 3

---
# Frontend logs
* DONE user authentication
  CLOSED: [2021-12-21 Tue 02:54]
  - Note taken on [2021-12-19 Sun 04:15] \\
    - cookies already have userdata, nuxt is need validation on that else CORS will show up
  - Note taken on [2021-12-19 Sun 01:15] \\
    - @nuxt/auth successful get user data back from backend
  - auth module
** DONE add logout and register page
   CLOSED: [2022-01-19 Wed 01:33]
   - Logout, Login, Register API arleay setup
** FIXME login redirect back to home
   - Note taken on [2021-12-21 Tue 02:55] \\
     - /profile/user.vue : when login it some how it redirect and undirect sometime
** DONE Forntend data to backend having Cross Orgin blocked
   CLOSED: [2022-01-19 Wed 01:33]
   - Note taken on [2022-01-08 Sat 06:11] \\
     - assume it was wordpress problem, check functions.php to allow-control-origin-access
** DONE add product by each catergory (teaset, cheongsam)
   CLOSED: [2022-01-22 Sat 02:30]
   - Note taken on [2022-01-19 Wed 05:05] \\
     - need to return same data from woocommerce, images, name, price, sku
    building Categorly using inversion component, to call back on each product categorly fliter.
** DONE image slider fixing image loading and also switch other component use try and await
   CLOSED: [2022-01-24 Mon 06:38]
** DONE Login and Register component fix
   CLOSED: [2022-01-28 Fri 00:25]
** BUG Image Slider using keep-alive but have load plugin problem
** TODO test new import plugin to fix keep alive problem
** build cart
   - storage
** CANCELLED remove jquery for less buggy propose
   CLOSED: [2022-02-18 Fri 00:06]

  ---
  # Backend [ wordpress ]
  testing woocommerce
  Consumer key = ck_ca8dc3da04a18c79601e7b49c6e8e216da06cf82
  Consumer secret = cs_e8fdcde1886ae82182ef3fc7507b09ee20ede897

    - woocommerce as customer order management
    - cocart as woocommerce restful api to brige frontend and backend
    - eghl as payment gateway
    - JWT authentication

  ---
   # Backend Logs
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
