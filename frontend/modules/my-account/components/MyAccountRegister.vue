<template>
    <form class="ps-form--auth" id="register__tab" @submit.prevent="registerUsers">
        <div class="ps-tabs">
            <!-- start Account Content - Register -->
            <div class="ps-tab" id="tab-2">
                <div class="form-group">
                    <input class="form-control" v-model="username" type="text" placeholder="Username">
                </div>
                <div class="form-group">
                    <input class="form-control" v-model="email" type="text" placeholder="Email">
                </div>
                <div class="form-group">
                    <input class="form-control" v-model="password" type="text" placeholder="Password">
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
</template>

<script>
    import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

    // initialise the WooCommerceRestApi //
    const api = new WooCommerceRestApi({
        url: "http://localhost:3080",
        consumerKey: "ck_ca8dc3da04a18c79601e7b49c6e8e216da06cf82",
        consumerSecret: "cs_e8fdcde1886ae82182ef3fc7507b09ee20ede897",
        version: "wc/v3",
    });

    export default {

        data() {
            return {
                email: '',
                username: '',
                password: ''
            }
        },

        methods: {
            async registerUsers() {
                await api.post('customers', {
                    email: this.email,
                    username: this.username,
                    password: this.password,
                }).then((response) => {
                    console.log('Response: ', response.data)
                    console.log("consumer create")
                }).catch((e) => {
                    throw new Error('Could not register users, please try again')
                    console.log("Response Status:", error.response.status);
                    console.log("Response Headers:", error.response.headers);
                    console.log("Response Data:", error.response.data);
                })
            },
        }
    }
</script>