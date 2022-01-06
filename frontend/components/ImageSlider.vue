<template>
    <div id="homepage-default">
        <!-- start Image Slider -->
        <div class="ps-home-banner">
            <!-- start Image Slider - Options -->
            <ul class="ps-section__nav">
                <li class="active"><a href="#"><small>Next SS Preview</small><span>All About Wedding</span></a></li>
                <li><a href="#"><small>Pink</small><span>Sneaker</span></a></li>
                <li><a href="#"><small>Winter</small><span>Collection</span></a></li>
            </ul>
            <!-- end Image Slider - Options -->

            <!-- start Image Slider - First Image -->
            <div class="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed="15000" data-owl-gap="0" data-owl-nav="false" data-owl-dots="true" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">

                <div class="ps-banner--3 bg--top-right" :style="{ background: `url(${landingPoster})` }">
                    <div class="ps-banner__social">
                        <ul class="ps-list--social" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div class="ps-banner__content">
                        <p data-animation-in="fadeInLeft" data-animation-out="animate-out fadeOutRight">Next SS Preview</p>
                        <h3 data-animation-in="fadeInLeft" data-animation-out="animate-out fadeOutRight">All About <br /> Wedding</h3><a class="ps-link--under" href="#" data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">Discover more</a>
                    </div>
                </div>
                <!-- end Image Slider - First Image -->

            </div>
        </div>
        <!-- end Image Slider -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                landingPoster: [],
                // landingPosterOne: [],
                // landingPosterTwo: []
            }
        },
        methods: {
            async getLandingPage() {
                const imagex = await this.$wp.media()
                for (var i = 0; i <= imagex.length; i++) {
                    this.landingPoster = imagex[2].source_url
                    // this.landingPosterOne = imagex[1].source_url
                    // this.landingPosterTwo = imagex[2].source_url
                }
                return [this.landingPosterZero]
            }
        },
        mounted() {
            this.getLandingPage()
        }
    }
</script>

<style>

</style>