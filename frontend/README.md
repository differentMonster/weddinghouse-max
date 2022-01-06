# frontend
static
  - wedding-house/js/index.js : Template Jquery

* User auth setup
@package : @nuxtjs/next-auth
@package : @axios

middleware : are use to extend the plugins, store at plugis folder as well
( example if you need login to have some extra secure check, you could extend the plugin to validation some part )

ssr : checking does it need to be validation | true : false |
If your app is isomorphic (basically has a ssr: true), the auth module will still disable the access to those pages (you can double check).

At the end, the critical info is received when:

you do have a valid JWT token (after some login)
you submit an HTTP query to the backend
the backend acknowledges it and the token is valid
the backend gives you the sensitive info via an HTTP response

auth: {
  user: {
    // property flag is important, if the backend return payload having mulitple data, this need to set false.
    ```jsx
    {
      id: '',
      email: '',
      name: '',
      role: '',
    }
    ```
    propery: false | 'user' |
    // method post or get will show different payload (data) return.
    method: post | get |
  }
}

nuxt-auth : have it own nuxt store, call auth.js, you can access on mapState
- loggedIn
- user

* Logs
