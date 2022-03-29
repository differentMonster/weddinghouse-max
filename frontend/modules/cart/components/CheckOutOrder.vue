<template>
    <div class="col-md-6">
        <div class="ps-form__orders">
            <h3>Your order</h3>
            <div class="ps-block--checkout-order">
                <div class="ps-block__content">
                    <figure>
                        <figcaption><strong>Product</strong><strong>total</strong></figcaption>
                    </figure>
                    <figure class="ps-block__items"><a href="#"><strong>Contrast Backpack<span>x1</span></strong><small>£69.90</small></a><a href="#"><strong>Contrasting Design T-Shirt<span>x1</span></strong><small>£95.90</small></a></figure>
                    <figure>
                        <figcaption><strong>Subtotal</strong><small>£95.90</small></figcaption>
                    </figure>
                    <figure class="ps-block__shipping">
                        <h3>Shipping</h3>
                        <p>Enter your address to view shipping options.</p>
                    </figure>
                    <figure class="ps-block__total">
                        <figcaption>Total<span>£165.90</span></figcaption>
                    </figure>
                    <figure class="ps-block__payment-methods">
                        <div class="ps-radio">
                            <input class="form-control" type="radio" id="payment-method-1" name="payment-method" />
                            <label for="payment-method-1">Direct bank transfer</label>
                        </div>
                        <div class="ps-radio">
                            <input class="form-control" type="radio" id="payment-method-2" name="payment-method" />
                            <label for="payment-method-2">Paypal</label>
                        </div>
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our<a href="#"> privacy policy.</a></p>
                    </figure>
                </div>
                <div class="ps-block__footer">
                    <button class="ps-btn ps-btn--fullwidth ps-btn--black">Process to paypal</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckOutOrder"
    }
</script>

<style>

</style>