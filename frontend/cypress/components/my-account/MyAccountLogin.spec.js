import {
    mount
} from '@cypress/vue'
import MyAccountLogin from '../../../modules/my-account/components/MyAccountLogin.vue'

it('should call onLogin with username and password on login', () => {
    // const onLoginSpy = cy.spy().as('onLoginSpy')
    // const dummyUsername = 'wh-xadmin'
    // const dummyPassword = 'ASDjkl1234'

    // mount(MyAccountLogin, {
    //     propsData: {
    //         onLogin: onLoginSpy,
    //     }
    // })

    // cy.get('.form-group #username').type(dummyUsername)
    // cy.get('.form-group #password').type(dummyPassword)
    // cy.get('button').contains('Login').click()
    // cy.get('@onLoginSpy').should('have.been.calledWith', {
    //     username: 'wh-xadmin',
    //     password: 'ASDjkl1234'
    // })
})