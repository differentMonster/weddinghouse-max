<template>
    <div>
        <MagaMenu />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
    import MagaMenu from '@/components/MagaMenu.vue'
    import Footer from '@/components/Footer/Footer.vue'

    export default {
        components: {
            MagaMenu,
            Footer
        }
    }
</script>

<style>
</style>