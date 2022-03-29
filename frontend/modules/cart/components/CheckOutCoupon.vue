<template>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
        <div class="ps-block--checkout-action">
            <div class="ps-block__header"><span>enter your coupon code</span></div>
            <div class="ps-block__content">
                <p>If you have a coupon code, please apply it below.</p>
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Coupon">
                </div>
                <div class="form-group submit">
                    <button class="ps-btn ps-btn--black">Apply coupon</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckOutCoupon"
    }
</script>

<style>

</style>