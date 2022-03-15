<template>
    <!-- start Account Container -->
    <div class="ps-page--default">
        <div class="container">

            <div class="ps-page__header">
                <h3>My Account</h3>
                <ul class="ps-breadcrumb">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>My Account</li>
                </ul>
            </div>

            <!-- start Account Content -->
            <div class="ps-page__content">
                <div class="ps-tab-root">

                    <div class="ps-form--auth">
                        <ul class="ps-tab-list">
                            <li class="ps-tab-li" v-for="tab in tabs" :key="tab">
                                <a :id="`toggle__${tab}`" @click="selected = tab" :class="{ tabs__active : selected == tab }">
                                    {{tab}}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <component :is="selected"></component>


                    <!-- start Account Social Network Content-->
                    <div class="ps-form--auth">
                        <p>Connect with
                            <ul class="ps-list--social">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                            </ul>
                        </p>
                    </div>
                    <!-- end Account Social Network Content-->

                </div>
            </div>
            <!-- end Account Content -->

        </div>
    </div>
    <!-- end Account Container -->

</template>

<script>
    import Login from '@/modules/my-account/components/MyAccountLogin.vue'
    import Register from '@/modules/my-account/components/MyAccountRegister.vue'

    export default {
        components: {
            Login,
            Register
        },
        data() {
            return {
                tabs: ["Login", "Register"],
                selected: "Login"
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    .ps-form--auth .ps-tab-list li .tabs__active {
        color: black;
    }
</style>