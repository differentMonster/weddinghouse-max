/* **select2 js */
/* **dependency: home - image slider */
let pluginSelect2;

if (process.browser) {
    pluginSelect2 = require('@/static/select2/dist/js/select2.full.min.js')
}

export default {
    mounted() {
        console.log(pluginSelect2);
    },
}