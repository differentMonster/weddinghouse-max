import "cypress-localstorage-commands";

describe('Testing Login Access', () => {
    const dummyUsername = 'wh-xadmin'
    const dummyPassword = 'ASDjkl1234'

    beforeEach(() => {
        // Backend API Login testing, if this dont pass, error came from backend.
        // cy.auth()
        // cy.exec('npm cache clear --force')
        cy.login()
    })

    it('Should $auth user store loggedIn be equal true, length not be empty', () => {
        cy.window().then(window => {
            // cy.log(window.app.store.$auth.$state)
            expect(window.app.store.$auth.loggedIn).to.eq(true)
        })
    })

    it('Should able to get user data on account page', () => {
        cy.visit('/my-account').then(() => {
            cy.get('h1').should('contain', 'Hello Dear xadmin cheok');
            cy.get('tr td').should('contain', 'wh-admin@gmail.com');
        })
    })

})