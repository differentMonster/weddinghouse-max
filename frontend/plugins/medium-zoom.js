import Vue from 'vue'
import zoom from 'medium-zoom'

const initZoom = () => {
    // set the image class as zoom to have the effect
    zoom('img.zoom:not(.medium-zoom-image)', {
        margin: window.innerWidth < 680 ? 8 : 48,
        background: "rgba(26, 32, 44, 0.9)",
    })
}

Vue.mixin({
    mounted: function() {
        initZoom()
    },
    updated: function() {
        initZoom()
    },
})