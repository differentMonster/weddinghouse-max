// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

// Cypress.Commands.add('login', () => {
//     cy.window().then(window => {
//         window.nuxtApp.$auth.loginWith('local', {
//             data: {
//                 username: 'wh-xadmin',
//                 password: 'ASDjkl1234'
//             }
//         }).then((response) => {
//             // You can access store here
//             cy.log(response)
//             // Check return 200
//             // expect(response.status).to.eq(200)
//         })
//     })
// })

const dummyUsername = 'wh-xadmin'
const dummyPassword = 'ASDjkl1234'

// Cypress.Commands.add('requestlogin', () => {
//     cy.request({
//         method: 'POST',
//         url: 'http://localhost:3080/wp-json/jwt-auth/v1/token',
//         body: {
//             username: dummyUsername,
//             password: dummyPassword
//         }
//     }).then((response) => {
//         expect(response.status).to.eq(200)
//     });
// });

// nuxt store check
Cypress.Commands.add('auth', () => {
    cy.visit('/')
    cy.window().then(window => {
        window.app.$auth.loginWith('local', {
            data: {
                username: dummyUsername,
                password: dummyPassword
            }
        }).then((intercept) => {
            // You can access store here
            // cy.log(window.app.store.$auth)
            // Check return 200
            expect(intercept.status).to.eq(200)
        })
    })
})


Cypress.Commands.add('login', () => {
    cy.visit('/signin')
    cy.get('.form-group #username').type(dummyUsername)
    cy.get('.form-group #password').type(dummyPassword)
    cy.get('button').contains('Login').click().wait(2000).then(() => {
        // eq = be.equal
        cy.url().should('eq', 'http://localhost:3000/')
    })
})

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })