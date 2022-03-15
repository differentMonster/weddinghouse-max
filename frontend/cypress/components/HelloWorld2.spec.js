import {
    mount
} from '@cypress/vue'
import HelloWorld2 from '../../components/HelloWorld2.vue'

it('renders a message', () => {
    mount(HelloWorld2, {
        propsData: {
            msg: 'Hello Cypress!',
        },
    })

    cy.get('h1').contains('Hello Cypress!')
})