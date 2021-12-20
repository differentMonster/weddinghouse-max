<template>
    <div>
        <title>Posts</title>
        <h1>{{ posts }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        async fetch() {
            const postx = await this.$wp.posts()
            this.posts = postx
        },
    }
</script>