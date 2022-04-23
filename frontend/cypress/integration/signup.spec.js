describe('Testing Register to backend', () => {
    const dummyUsername = 'faustme'
    const dummyEmail = 'faustme@gmail.com'
    const dummyPassword = 'faust881014'

    beforeEach(function() {
        cy.login()
        cy.visit('signup') // we run our custom command
    })


    it('Should able get through register return succesful response 200', () => {
        // mocking register, only check the reponse, dont actually register it.
        // 'POST, '*' means any URL
        // times: 1 means catch once only
        // then turn off
        cy.intercept('POST', '*', {
            times: 1
        }).as('post')
        cy.get('.form-group #register__tab--username').type(dummyUsername, {
            force: true
        });
        cy.get('.form-group #register__tab--email').type(dummyEmail, {
            force: true
        });
        cy.get('.form-group #register__tab--password').type(dummyPassword, {
            force: true
        });
        cy.get('button').contains('Register').click()
        cy.wait('@post') // wait for intercept instead of cy.wait(3000)
            .then((interception) => {
                // read the response
                expect(interception.response.statusCode).to.eq(200)
                // cy.log(interception.response.statusCode)
            })
    })

})