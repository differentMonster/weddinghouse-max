Cypress.Commands.add('login', () => {
    // Use as cy.login()
    cy.server()
    cy.fixture('userLogin').as('userLoginJson')
    cy.fixture('userDetails').as('userDetailsJson')
    cy.route({
        method: 'POST',
        url: '/api/auth/login',
        response: '@userLoginJson'
    }).as('postLogin')
    cy.route({
        method: 'GET',
        url: '/api/user/details',
        response: '@userDetailsJson'
    })
    cy.visit('/')
    cy.window().should('have.property', 'nuxtApp') // is TRUE
    cy.window().then(window => {
        console.log('nuxtApp', window.nuxtApp) // Nuxt context visible in console
        window.nuxtApp.$auth
            .loginWith('local', {
                data: {
                    email: 'wh-xadmin',
                    password: 'ASDjkl1234',
                    remember_me: false
                }
            })
            .then(response => response)
    })
    cy.visit('/user') // Middleware denies this route. Consistent with being logged out.
})