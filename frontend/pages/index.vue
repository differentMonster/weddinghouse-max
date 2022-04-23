<template>
    <div>
        <HomeImageSlider />
    </div>
</template>

<script>
    import HomeImageSlider from "@/components/Home/HomeImageSlider.vue";
    // import authUser from '@/plugins/auth.js'



    export default {
        components: {
            HomeImageSlider,
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
        mounted() {
            // const setAuthUser = new authUser()
            // setAuthUser.get()
        },
    };
</script>

<style>
</style>