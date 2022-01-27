/* **light-gallery js */
/* **dependency: home - image slider */
let pluginLightGallery;
if (process.browser) {
    pluginLightGallery = require('@/static/lightGallery-master/dist/js/lightgallery-all.min.js')
}

export default {
    mounted() {
        console.log(pluginSelect2);
    },
}