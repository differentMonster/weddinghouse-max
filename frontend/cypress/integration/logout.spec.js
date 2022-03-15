describe('Testing Logout', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Should redirected to the login page after logout', () => {
        cy.get('#logout').should('be.visible').click()

        cy.then(() => {
            cy.url().should('eq', 'http://localhost:3000/my-account')
        })
    })
})