import Vue from "vue";
import {
    ValidationObserver,
    ValidationProvider,
    extend
} from 'vee-validate';
import {
    required,
    alpha,
    email
} from "vee-validate/dist/rules";

// setting your own rules
extend("required", {
    ...required,
    message: "This field is required"
});

extend("email", {
    ...email,
    message: "This email is invalid. Make sure it's written like example@email.com"
});

extend("alpha", {
    ...alpha,
    message: "This field must only contain alphabetic characters"
});

// install all rules
// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);