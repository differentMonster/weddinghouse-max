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
const dummyFirstname = 'cheok'
const dummyLastname = 'xadmin'
const dummyCompanyname = 'Airvity'
const dummyCountry = 'Malaysia'
const dummyAddress = 'Port Dickson no 14 conner over sea'
const dummyPostcode = '71000'
const dummyCity = 'Port Dickson'
const dummyEmail = 'wh-xadmin@gmail.com'
const dummyPhone = '123-456789'
const dummyNotes = 'testing notes'

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

// Cypress.Commands.add('checkoutaddress', () => {
//     cy.visit('cart/checkout')

//     cy.get('.form-group #checkout__form--firstname').type(dummyFirstname);

//     cy.get('.form-group #checkout__form--lastname').type(dummyLastname);

//     cy.get('.form-group #checkout__form--companyname').type(dummyCompanyname);

//     cy.get(".form-group #checkout__form--country").select(dummyCountry);

//     cy.get('.form-group #checkout__form--billingaddress').type(dummyAddress);

//     cy.get('.form-group #checkout__form--postcode').type(dummyPostcode);

//     cy.get('.form-group #checkout__form--city').type(dummyCity);

//     cy.get('.form-group #checkout__form--email').type(dummyEmail);

//     cy.get('.form-group #checkout__form--phone').type(dummyPhone);

//     cy.get('.form-group #checkout__form--notes').type(dummyNotes);

// })

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