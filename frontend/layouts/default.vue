<template>
    <div>
        <MagaMenu />
        <Nuxt />
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