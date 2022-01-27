<template>
    <div>
        <MagaMenu />
        <Nuxt keep-alive :keep-alive-props="{include: ['pages/index.vue']}" />
        <Footer />
    </div>
</template>

<script>
    import MagaMenu from '~/components/MagaMenu'
    import Footer from '~/components/Footer'

    export default {
        components: {
            MagaMenu,
            Footer
        }
    }
</script>

<style>
    </style