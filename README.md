# Wedding House Max

# Frontend [ Nuxt 2 ]
* DONE [#A] user authentication
  CLOSED: [2021-12-21 Tue 02:54]
  - Note taken on [2021-12-19 Sun 04:15] \\
    - cookies already have userdata, nuxt is need validation on that else CORS will show up
  - Note taken on [2021-12-19 Sun 01:15] \\
    - @nuxt/auth successful get user data back from backend
  - auth module
** TODO add logout and register page
** FIXME login redirect back to home
   - Note taken on [2021-12-21 Tue 02:55] \\
     - /profile/user.vue : when login it some how it redirect and undirect sometime


* TODO [#B] build cart system
 - cart page implate
 - cart system implate
 - test cart system

# Backend [ wordpress ]
  - woocommerce as customer order management
  - cocart as woocommerce restful api to brige frontend and backend
  - eghl as payment gateway
  - JWT authentication

 # Project Logs
* DONE add user error
  CLOSED: [2021-12-18 Sat 22:19]
  - Note taken on [2021-12-15 Wed 06:04] \\
    - wordpress cant add user to perform JWT token yet
       ```
       MailPoet Error: MailPoet requires a PDO_MYSQL PHP extension. Please read our instructions on how to resolve this issue.
