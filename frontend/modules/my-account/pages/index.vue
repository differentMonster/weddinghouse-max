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
                            <li class="active"><a href="#tab-1" @click="visibilityLogin">Login</a></li>
                            <li><a href="#tab-2" @click="visibilityRegister">Register</a></li>
                        </ul>
                    </div>

                    <!-- start Account / Login Component -->
                    <MyAccountLogin />
                    <!-- end Account / Login Component -->

                    <!-- start Account / Register Component -->
                    <MyAccountRegister />
                    <!-- end Account / Register Component -->


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
    export default {
        methods: {
            visibilityLogin() {
                document.getElementById("register__tab").style.display = "none";
                document.getElementById("login__tab").style.display = "block";
            },
            visibilityRegister() {
                document.getElementById("login__tab").style.display = "none";
                document.getElementById("register__tab").style.display = "block";
            },
        }
    }
</script>