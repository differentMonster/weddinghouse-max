<template>
    <div>
        <ImageSlider />
        <h1 class="wish">wish</h1>
    </div>
</template>

<script>
    import ImageSlider from "@/components/Home/ImageSlider.vue";

    export default {
        components: {
            ImageSlider,
        },
        data() {
            return {};
        },
        head() {
            // return {
            //     title: 'Payment Page - My awesome project', // Other meta information
            //     script: [{
            //         hid: 'supro',
            //         src: '@/plugins/supro.js',
            //         defer: true,
            //     }]
            // }
        },
        computed: {},
        methods: {},
        fetch: {},
        mounted() {},
    };
</script>

<style lang="scss">
    .wish {
        color: $base-colorx;
    }
</style>