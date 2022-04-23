<template>
    <!-- start Account Container -->
    <div class="ps-page--default">
        <div class="container">

            <div class="ps-page__header">
                <h3>Sign In</h3>
                <ul class="ps-breadcrumb">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>Sign In</li>
                </ul>
            </div>

            <!-- start Account Content -->
            <div class="ps-page__content">
                <div class="ps-tab-root">

                    <div class="container--login">
                        <form class="ps-form--auth" id="login__tab" @submit.prevent="login">
                            <div class="ps-tabs">
                                <!-- start Account Content - Login -->
                                <div class="ps-tab active" id="tab-1">
                                    <div class="form-group">
                                        <input v-model="userData.username" id="username" class="form-control" type="text" placeholder="Username">
                                    </div>
                                    <div class="form-group">
                                        <input v-model="userData.password" id="password" class="form-control" type="text" placeholder="Password">
                                    </div>
                                    <div class="form-group">
                                        <div class="ps-checkbox">
                                            <input class="form-control" type="checkbox" id="remember" name="remember" />
                                            <label for="remember">Remember Me</label>
                                        </div>
                                    </div>
                                    <div class="form-group submit">
                                        <button class="ps-btn ps-btn--fullwidth ps-btn--black">Login</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                    <!-- start Account Social Network Content-->
                    <div class="ps-form--auth">
                        <p>Connect with</p>
                        <ul class="ps-list--social">
                            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                        </ul>
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
    export default {
        name: 'login',
        data() {
            return {
                userData: {
                    username: '',
                    password: ''
                },
            }
        },
        methods: {
            async login() {
                await this.$auth.loginWith("local", {
                    data: this.userData
                }).then((response) => {
                    if (response.status === 200) {
                        this.$router.go('/')
                    }
                }).catch((error) => {
                    throw new Error(error)
                })
            }
        }
    }
</script>

<style lang="scss">
    .ps-form--auth .ps-tab-list li .tabs__active {
        color: black;
    }
</style>