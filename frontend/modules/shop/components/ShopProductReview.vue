<template>
    <!-- start Review Content -->
    <div id="tab-3">
        <div class="ps-product__review">
            <h4>1 review for Contrasting Design T-Shirt</h4>
            <div class="ps-block--comment ps-block--comment-review">
                <div class="ps-block__thumbnail"><img src="@/assets/img/product/default/1.jpg" alt=""></div>
                <div class="ps-block__content">
                    <select class="ps-rating" data-read-only="true">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                    </select>
                    <h5>Martin Katrina <span> -June 20, 2019 </span></h5>
                    <p>Aenean sit amet odio est.</p>
                </div>
            </div>
        </div>
        <form class="ps-form--product-review" action="product-default.html" method="get">
            <div class="ps-form__header">
                <h4>Add a review</h4>
                <p>Connect with:</p>
                <ul class="ps-list--social square">
                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
                <p>Your email address will not be published. Required fields are marked *</p>
            </div>
            <div class="form-group">
                <label>Your rating<sup>*</sup></label>
                <select class="ps-rating" data-read-only="false">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="form-group">
                <label>Your Review:<sup>*</sup></label>
                <textarea class="form-control" rows="6"></textarea>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Name:<sup>*</sup></label>
                        <input class="form-control" type="text" placeholder="">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email:<sup>*</sup></label>
                        <input class="form-control" type="email" placeholder="">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button class="ps-btn ps-btn--black">Submit</button>
            </div>
        </form>
    </div>
    <!-- end Review Content -->
</template>

<script>
    export default {}
</script>

<style>

</style>