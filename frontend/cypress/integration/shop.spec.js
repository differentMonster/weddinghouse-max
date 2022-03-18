describe('Shop Testing', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Should product data to be object type', () => {
        cy.visit('shop/teaset/40')
    })

})