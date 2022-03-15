<template>
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
</template>

<script>
    import {
        Authentication
    } from '@/modules/my-account/plugins/classWooCommerceCustomers.js'

    export default {
        name: 'login',
        data() {
            return {
                userData: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            async login() {
                await this.$auth.loginWith("local", {
                    data: this.userData
                }).then((response) => {
                    if (response.status === 200) {
                        this.$router.go("/")
                    }
                }).catch((error) => {
                    throw new Error(error)
                })
            },
        }
    }
</script>