describe('Checkout Testing', () => {
    // access to modules store
    const CartStore = () => cy.window().its('app.store.state.cart')

    beforeEach(() => {
        cy.login()
    })

    afterEach(() => {

    })

    it('Should able to process checkout with return 200', () => {

        cy.visit('shop/teaset/40')

        cy.get('button').contains('Add to cart').click({
            force: true
        })

        cy.visit('cart/checkout')

        cy.intercept('POST', '*', {
            times: 1
        }).as('post')

        cy.get('.form-group #checkout__form--firstname').type("datata", {
            force: true
        });

        cy.get('.form-group #checkout__form--lastname').type("datata", {
            force: true
        });

        cy.get('.form-group #checkout__form--companyname').type("datata", {
            force: true
        });

        cy.get(".form-group #checkout__form--country").select("Malaysia", {
            force: true
        });

        cy.get('.form-group #checkout__form--billingaddress').type("datata stree1 no 14", {
            force: true
        });

        cy.get('.form-group #checkout__form--postcode').type("71000", {
            force: true
        });

        cy.get('.form-group #checkout__form--city').type("Port dicktion", {
            force: true
        });

        cy.get('.form-group #checkout__form--email').type("datata@gmail.com", {
            force: true
        });

        cy.get('.form-group #checkout__form--phone').type("123-4567989", {
            force: true
        });

        cy.get('.form-group #checkout__form--notes').type("testing note", {
            force: true
        });

        cy.get('.ps-block__footer #checkoutorder__footer--submit').click({
            force: true
        })

        cy.wait('@post') // wait for intercept instead of cy.wait(3000)
            .then((interception) => {
                // read the response
                expect(interception.response.statusCode).to.eq(200)
                // clear the store
                CartStore().its('cartItems').should('be.empty')
            })
    })


})