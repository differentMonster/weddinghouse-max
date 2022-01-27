/* **wedding-house + supro main js */
/* **dependency: home - image slider */
let pluginWeddingHouse;


if (process.browser) {
    pluginWeddingHouse = require('@/static/wedding-house/js/main.js')
}

export default {
    mounted() {
        console.log(pluginSelect2);
    },
}