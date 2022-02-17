import {
    shallowMount,
    createLocalVue,
    mount
} from '@vue/test-utils';
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import Vuex from 'vuex';
import nock from 'nock';
import MyAccountLogin from '@/modules/my-account/components/MyAccountLogin.vue';

describe('Test case for testing login', () => {
    let wrapper
    const myUsername = 'wh-xadmin'
    const myPassword = 'ASDjkl1234'

    test('Username check', () => {
        wrapper = mount(MyAccountLogin);
        wrapper.find('#username').setValue(myUsername)
        expect(wrapper.find('#username').element.value).toBe('wh-xadmin')
    })

    test('Password check', () => {
        wrapper = mount(MyAccountLogin);
        wrapper.find('#password').setValue(myPassword)
        expect(wrapper.find('#password').element.value).toBe('ASDjkl1234')
    })
})

// describe('MyAccountLogin.vue', () => {
//     test('Login state test', async () => {
//         const scope = nock('http://localhost:3080')
//             .post('/wp-json/jwt-auth/v1/token', 'username=wh-xadmin&password=ASDjkl1234')
//             .reply(200, {
//                 user_nicename: 'wh-xadmin'
//             })

//         // console.log(scope)
//     })
// })

describe('MyAccountLogin.vue', () => {
    let wrapper;
    let mock;
    const data;
    const myUsername = 'wh-xadmin'
    const myPassword = 'ASDjkl1234'

    beforeEach(() => {
        mock = new MockAdapter(axios);
        wrapper = shallowMount(MyAccountLogin);
    });

    afterEach(() => {
        mock.restore();
    });

    test("Login Axios Check", async () => {
        const dummyData = {
            username: myUsername,
            password: myPassword
        };

        mock.onPost('http://localhost:3080/wp-json/jwt-auth/v1/token', dummyData).reply((config) => {
            data = JSON.parse(config.data);
        })

        console.log(data)
        // expect(mock.history.post.length).toBe(1);
        // expect(mock.history.post[0].data).toBe(JSON.stringify(dummyData));
    })
})