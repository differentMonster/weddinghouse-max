<template>
    <!-- start Account Container -->
    <div class="ps-page--default">
        <div class="container">

            <div class="ps-page__header">
                <h3>Sign Up</h3>
                <ul class="ps-breadcrumb">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>Sign Up</li>
                </ul>
            </div>

            <!-- start Account Content -->
            <div class="ps-page__content">
                <div class="ps-tab-root">


                    <form class="ps-form--auth" id="register__tab" @submit.prevent="registerUser">
                        <div class="ps-tabs">
                            <!-- start Account Content - Register -->
                            <div id="tab-2">
                                <div class="form-group">
                                    <input class="form-control" id="register__tab--username" v-model="username" type="text" placeholder="Username">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="register__tab--email" v-model="email" type="text" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="register__tab--password" v-model="password" type="text" placeholder="Password">
                                </div>
                                <div class="ps-form__desc">
                                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                                </div>
                                <div class="form-group submit">
                                    <button class="ps-btn ps-btn--fullwidth ps-btn--black">Register</button>
                                </div>
                            </div>
                            <!-- end Account Content - Register -->
                        </div>
                    </form>


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
    import {
        User
    } from '@/modules/user/plugins/getUser.js'

    export default {
        name: 'register',
        data() {
            return {
                email: '',
                username: '',
                password: ''
            }
        },
        methods: {
            registerUser() {
                const setUser = new User(this.email, this.username, this.password)
                // import class create with failure return from it.
                setUser.register().then((response) => {
                    console.log(response[1])
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted() {}
    }
</script>

<style lang="scss">
    .ps-form--auth .ps-tab-list li .tabs__active {
        color: black;
    }
</style>