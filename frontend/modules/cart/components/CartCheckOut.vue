<template>
    <div class="ps-block__top">
        <h4>Subtotal <span>${{getCartTotal}}</span></h4>
        <div class="ps-block__shipping">
            <h5>Shipping</h5>
            <div class="ps-radio">
                <input class="form-control" type="radio" id="shipping-1" name="shipping" />
                <label for="shipping-1">Free Shipping <span>+$00.00</span></label>
            </div>
            <div class="ps-radio">
                <input class="form-control" type="radio" id="shipping-2" name="shipping" />
                <label for="shipping-2">Flat Rate <span>+$10.00</span></label>
            </div>
            <div class="ps-radio">
                <input class="form-control" type="radio" id="shipping-3" name="shipping" />
                <label for="shipping-3">Local Delivery <span>+$20.00</span></label>
            </div>
        </div>
        <div class="ps-block__caculate">
            <h5>Calculate Shipping</h5>
            <div class="form-group">
                <select class="ps-select">
                    <option value="1">Select Country</option>
                    <option value="2">USA</option>
                    <option value="3">French</option>
                </select>
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Postcode / ZIP">
            </div>
            <button class="ps-btn ps-btn--gray">Update Total</button>
        </div>
        <div class="ps-block__total">
            <h3>Total<span>${{getCartTotal}}</span></h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartCheckOut",
        props: {
            getCartTotal: {
                required: true
            }
        }
    }
</script>

<style>

</style>