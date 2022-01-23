<template>
    <div class="ps-page--default">
        <div class="container">
            <div class="ps-page__header">
                <h3>Cart</h3>
                <ul class="ps-breadcrumb">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/shop">Shop</nuxt-link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
            <div class="ps-page__content">
                <div class="ps-shopping-cart">
                    <div class="table-responsive">
                        <CartOverview />
                    </div>

                    <div class="ps-section__content">

                        <div class="ps-section__actions">
                            <figure><a class="ps-btn ps-btn--outline" href="checkout.html">Continue shopping</a><a class="ps-btn ps-btn--outline" href="checkout.html">Update Cart</a></figure>
                            <div class="form-group">
                                <label>Discount Code</label>
                                <div class="form-group__content">
                                    <input class="form-control" type="text" placeholder="Enter your code"><a href="#">Apply</a>
                                </div>
                            </div>
                        </div>

                        <div class="ps-block--checkout-total">
                            <div class="ps-block__top">
                                <h4>Subtotal <span>$199.70</span></h4>
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
                                    <h3>Total<span>$199.70</span></h3>
                                </div>
                            </div>
                            <div class="ps-block__bottom"><a class="ps-btn ps-btn--black" href="#">Proceed to checkout</a></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CartOverview from '@/modules/cart/components/CartOverview.vue'
    export default {
        components: {
            CartOverview
        }
    }
</script>