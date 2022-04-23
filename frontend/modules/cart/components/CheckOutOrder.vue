<template>
    <div class="col-md-6">
        <div class="ps-form__orders">
            <h3>Your order</h3>
            <div class="ps-block--checkout-order">
                <div class="ps-block__content">
                    <figure>
                        <figcaption><strong>Product</strong><strong>total</strong></figcaption>
                    </figure>
                    <figure class="ps-block__items">
                        <div class="ps-block__items" v-for="(item, index) in getCart" :key="`checkoutcart-${index}`">
                            <a href="#"><strong>{{ item.name }}<span>x{{ item.quantity }}</span></strong><small>${{ item.price }}</small></a>
                        </div>
                    </figure>
                    <figure>
                        <figcaption><strong>Subtotal</strong><small>${{getCartTotal}}</small></figcaption>
                    </figure>
                    <figure class="ps-block__shipping">
                        <h3>Shipping</h3>
                        <p>Enter your address to view shipping options.</p>
                    </figure>
                    <figure class="ps-block__total">
                        <figcaption>Total<span>${{getCartTotal}}</span></figcaption>
                    </figure>
                    <figure class="ps-block__payment-methods">
                        <!-- <div class="ps-radio">
                           <input class="form-control" type="radio" id="payment-method-1" name="payment-method" />
                           <label for="payment-method-1">Direct bank transfer</label>
                           </div> -->
                        <!-- <div class="ps-radio">
                             <input class="form-control" type="radio" id="payment-method-2" name="payment-method" />
                             <label for="payment-method-2">Paypal</label>
                             </div> -->
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our<a href="#"> privacy policy.</a></p>
                    </figure>
                </div>
                <div class="ps-block__footer">
                    <b-button type="submit" id="checkoutorder__footer--submit" class="ps-btn ps-btn--fullwidth ps-btn--black">Process to payment</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckOutOrder",
        props: {
            getCart: {
                type: Array,
                required: true
            },
            getCartTotal: {
                required: true
            }
        }
    }
</script>

<style>

</style>