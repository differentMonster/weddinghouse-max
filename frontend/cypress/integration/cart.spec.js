describe('Cart Testing', () => {
    // access to modules store
    const CartStore = () => cy.window().its('app.store.state.cart')

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

    // it('Should cart store have array cartItems', () => {
    //     CartStore().should('have.keys', ['cartItems'])
    // })

    // it('Should cart store start with empty', () => {
    //     CartStore().should('deep.equal', {
    //         cartItems: [],
    //     })
    // })

    it('Should cart able to update store', () => {
        cy.visit('shop/teaset/40')
        cy.get('button').contains('Add to cart').click({
            force: true
        })

        CartStore().its('cartItems').should('have.length', 1)
    })

    it('Should able to add product to cart', () => {
        cy.visit('shop/teaset/40')
        cy.get('button').contains('Add to cart').click({
            force: true
        })

        cy.get('.header__container .header__actions .header__cart').click({
            force: true
        })

        // we have access to this.store in our test
        // CartStore().should('be.an', 'object')

        CartStore().its('cartItems').should('have.length', 1)
    })


    it('Should be able to increase products ', () => {
        cy.visit('shop/cheongsam/21')

        cy.get('button').contains('Add to cart').click({
            force: true
        })

        cy.get('.header__container .header__actions .header__cart').click({
            force: true
        })

        cy.get('#cart__footer-view').click({
            force: true
        })

        cy.get('#form-group-number--increase').click({
            force: true
        })

        CartStore().its('cartItems').then((response) => {
            const checkQuantity = response[0].quantity
            expect(checkQuantity).to.eq(2)
        })
    })


    it('Should be able to decrease products ', () => {
        cy.visit('shop/cheongsam/21')

        cy.get('button').contains('Add to cart').click({
            force: true
        })

        cy.get('.header__container .header__actions .header__cart').click({
            force: true
        })

        cy.get('#cart__footer-view').click({
            force: true
        })

        cy.get('#form-group-number--increase').click({
            force: true
        })

        cy.get('#form-group-number--decrease').click({
            force: true
        })

        CartStore().its('cartItems').then((response) => {
            const checkQuantity = response[0].quantity
            expect(checkQuantity).to.eq(1)
        })
    })


    it('Should able to delete item from cart', () => {
        cy.visit('shop/teaset/40')
        cy.get('button').contains('Add to cart').click({
            force: true
        })

        cy.get('.header__container .header__actions .header__cart').click({
            force: true
        })

        cy.get('#cart__footer-view').click({
            force: true
        })

        cy.get('#remove-cart-item').click({
            force: true
        })

        CartStore().its('cartItems').should('be.empty')
    })


})