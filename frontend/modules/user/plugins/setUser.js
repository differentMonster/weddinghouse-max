import Vue from 'vue'
import {
    User
} from "@/modules/user/plugins/getUser.js";

export default ({
    app
}, inject) => {
    const setUser = new User()
    inject('user', setUser)
}