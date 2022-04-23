import Vue from 'vue'
import {
    User
} from "@/modules/user/plugins/getUser.js";

export default ({
    app
}, inject) => {
    const initUser = new User()
    inject('user', initUser)
}