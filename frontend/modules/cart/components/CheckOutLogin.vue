<template>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
        <div class="ps-block--checkout-action">
            <div class="ps-block__header"><span>Click here to login</span></div>

            <div class="ps-block__content">
                <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.</p>

                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Username">
                </div>

                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Password">
                </div>

                <div class="form-group">
                    <div class="ps-checkbox">
                        <input class="form-control" type="checkbox" id="remember" name="remember" />
                        <label for="remember">Remember Me</label>
                    </div>
                </div>

                <div class="form-group submit">
                    <button class="ps-btn ps-btn--black">Login</button>
                </div>

                <a class="lost-password" href="#">Lost your password?</a>

                <p>Connect with</p>
                <ul class="ps-list--social">
                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckOutLogin"
    }
</script>

<style>

</style>