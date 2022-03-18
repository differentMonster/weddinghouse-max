describe('Testing Logout', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Should $auth user store loggedIn be equal false, legnth 0', () => {
        cy.window().then(window => {
            cy.get('.navbar__auth #navbar__logout').should('be.visible').click()
            // cy.log(window.app.store.$auth.state.loggedIn)
            cy.then(() => {
                expect(window.app.store.$auth.state.loggedIn).to.eq(false)
            })
        })
    })

    it('Should redirected to the login page after logout', () => {
        cy.get('.navbar__auth #navbar__logout').should('be.visible').click()

        cy.then(() => {
            cy.url().should('eq', 'http://localhost:3000/signin')
        })
    })
})