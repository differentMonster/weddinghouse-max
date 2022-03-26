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

                    <ValidationObserver ref="observer">
                        <b-form class="ps-form--auth" id="register__tab" slot-scope="{ validate }" @submit.prevent="validate().then(registerUser)">
                            <div class="ps-tabs">

                                <div id="tab-2">
                                    <!-- Username Content -->
                                    <ValidationProvider rules="required">
                                        <b-form-group class="form-group form-group--space" slot-scope="{ valid, errors }">
                                            <b-form-input class="form-control" type="text" v-model="username" :state="errors[0] ? false : (valid ? true : null)" placeholder="What should we call you ?">
                                            </b-form-input>
                                            <b-form-invalid-feedback class="form-error">
                                                {{ errors[0] }}
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                    <!-- end of Username Content -->

                                    <!-- Email Content -->
                                    <ValidationProvider rules="required|email">
                                        <b-form-group class="form-group form-group--space" slot-scope="{ valid, errors }">
                                            <b-form-input class="form-control" id="register__tab--email" type="email" v-model="email" :state="errors[0] ? false : (valid ? true : null)" placeholder="Enter your email">
                                            </b-form-input>
                                            <b-form-invalid-feedback class="form-error">
                                                {{ errors[0] }}
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                    <!-- end of Email Content -->

                                    <!-- Password Content -->
                                    <ValidationProvider rules="required" vid="password">
                                        <b-form-group class="form-group form-group--space" slot-scope="{ valid, errors }">
                                            <b-form-input class="form-control" id="register__tab--password" type="password" v-model="password" :state="errors[0] ? false : (valid ? true : null)" placeholder="Create a password">
                                            </b-form-input>
                                            <b-form-invalid-feedback class="form-error">
                                                {{ errors[0] }}
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                    <!-- end of Password Content -->
                                    <div class="ps-form__desc">
                                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                                    </div>
                                    <div class="form-group submit">
                                        <b-button type="submit" class="ps-btn ps-btn--fullwidth ps-btn--black">Register</b-button>
                                    </div>
                                </div>

                            </div>
                        </b-form>
                    </ValidationObserver>


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
    import {
        ValidationObserver,
        ValidationProvider
    } from 'vee-validate';

    export default {
        name: 'register',
        data() {
            return {
                email: '',
                username: '',
                password: ''
            }
        },
        components: {
            ValidationObserver,
            ValidationProvider
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

<style scope lang="scss">
    .ps-form--auth .ps-tab-list li .tabs__active {
        color: black;
    }

    .form-control {
        transition: none !important;
    }

    .form-error {
        position: absolute !important;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .form-group--space {
        margin-bottom: 35px;
    }
</style>