<template>
    <div>
        <Menu />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
    import Menu from '@/components/Menu/Menu.vue'
    import Footer from '@/components/Footer/Footer.vue'

    export default {
        components: {
            Menu,
            Footer
        }
    }
</script>

<style>
</style>