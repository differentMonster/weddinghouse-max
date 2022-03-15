import {
    mount
} from '@cypress/vue'
import MageMenu from '../../components/MageMenu.vue'

describe('MageMenu', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(MageMenu)
        expect(wrapper.vm).toBeTruthy()
    })
})