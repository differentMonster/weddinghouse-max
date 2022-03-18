<template>
    <div>
        <div class="ps-shop__header">
            <div class="ps-shop__left">
                <h1>Shop</h1>
                <ul class="ps-breadcrumb">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>Shop</li>
                </ul>
            </div>
            <div class="ps-shop__right">
                <p><strong>25</strong> Products Found</p>
                <div class="ps-shop__actions">
                    <div class="ps-shop__filter"><a class="ps-shop__filter-toggle" href="#">Filter<i class="fa fa-angle-down"></i></a></div>
                    <div class="ps-shop__sorting"><span>Sortby</span>
                        <select class="ps-select">
                            <option value="1">Default</option>
                            <option value="2">Avarage rating</option>
                            <option value="3">Newest</option>
                            <option value="4">Oldest</option>
                        </select>
                    </div>
                    <div class="ps-shop__layouts"><a class="active" href="shop-fullwidth.html"><i class="icon-icons2"></i></a><a href="shop-fullwidth-2.html"><i class="icon-list4"></i></a></div><a class="ps-shop__filter-toggle--mobile ps-shop__filter-toggle" href="#"><i class="icon-equalizer"></i></a>
                </div>
            </div>
        </div>
        <div class="ps-shop__filter-panel" id="shop-filter">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <aside class="widget widget_shop">
                            <h3 class="widget-title">Sort By</h3>
                            <div class="widget__content">
                                <ul class="ps-list--under">
                                    <li><a href="#">Default</a></li>
                                    <li><a href="#">Popularity</a></li>
                                    <li><a href="#">Average rating</a></li>
                                    <li><a href="#">Newest</a></li>
                                    <li><a href="#">Price: low to high</a></li>
                                    <li><a href="#">Price: high to low</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <aside class="widget widget_shop">
                            <h3 class="widget-title">Color</h3>
                            <div class="widget__content">
                                <div class="widget__colors">
                                    <div class="ps-color black active"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Black</i></span></div>
                                    <div class="ps-color blue"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Blue</i></span></div>
                                    <div class="ps-color gold"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Gold</i></span></div>
                                    <div class="ps-color nude"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Nude</i></span></div>
                                    <div class="ps-color orange"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Orange</i></span></div>
                                    <div class="ps-color red"><span class="ps-color__left"><span class="ps-color__swatch"></span><i> Red</i></span></div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <aside class="widget widget_shop">
                            <h3 class="widget-title">Price</h3>
                            <div class="widget__content">
                                <ul class="ps-list--under">
                                    <li><a href="#">£0.00 - £10.00</a></li>
                                    <li><a href="#">£10.00 - £20.00</a></li>
                                    <li><a href="#">£20.00 - £30.00</a></li>
                                    <li><a href="#">£30.00 - £40.00</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <aside class="widget widget_shop widget_tags">
                            <h3 class="widget-title">Tags</h3>
                            <div class="widget__content"><a href="shop-default.html">All</a><a href="shop-default.html">Bag</a><a href="shop-default.html">Clothing</a><a href="shop-default.html">Cotion</a><a href="shop-default.html">Men</a><a href="shop-default.html">Shoes</a><a href="shop-default.html">T-Shirt</a><a href="shop-default.html">Woman</a></div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {}
</script>

<style>

</style>