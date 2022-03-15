describe('Cart Testing', () => {
    // access to modules store
    const getCartStore = () => cy.window().its('app.store._modulesNamespaceMap.cart/.state')

    beforeEach(() => {
        cy.login()
    })

    // it('Should able to add item', () => {
    //     cy.fixture("cart").then((item) => {
    //         cy.log(item)
    //     })
    // })

    // it('Nuxt Should have store exposed to cypress', () => {
    //     cy.window().its('app').should('have.property', 'store')
    // })
    it('Should able to add product to cart', () => {
        cy.visit('shop/teaset/40')
        cy.get('button').contains('Add to cart').click({
            force: true
        })
        cy.log(getCartStore())
        // cy.get('.header__cart').eq(0).click({
        //     force: true
        // })
    })

    // it('Should cart store have array cartItem', () => {
    //     getCartStore().should('have.keys', ['cartItem'])
    // })

    // it('Should cart store start with empty', () => {
    //     getCartStore().should('deep.equal', {
    //         cartItem: [],
    //     })
    // })



})