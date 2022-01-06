// import axios from 'axios'

// class ProductDetail {
//     constructor () {
//         this.name = null
//         this.sku = null
//     }

//     async retrieve (param) {
//         const get = await this.$axios.get('{param}')
//     }

// }

// module.exports = ProductDetail


(function($) {
    "use strict"

    function backgroundImage() {
        var databackground = $('[data-background]');
        databackground.each(function() {
            if ($(this).attr('data-background')) {
                var image_path = $(this).attr('data-background');
                $(this).css({
                    'background': 'url(' + image_path + ')'
                });
            }
        });
    }


    function setAnimation(_elem, _InOut) {
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        _elem.each(function() {
            var $elem = $(this);
            var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

            $elem.addClass($animationType).one(animationEndEvent, function() {
                $elem.removeClass($animationType);
            });
        });
    }

    function owlCarouselConfig() {
        var target = $('.owl-slider');
        if (target.length > 0) {
            target.each(function() {
                var el = $(this),
                    dataAuto = el.data('owl-auto'),
                    dataLoop = el.data('owl-loop'),
                    dataSpeed = el.data('owl-speed'),
                    dataGap = el.data('owl-gap'),
                    dataNav = el.data('owl-nav'),
                    dataDots = el.data('owl-dots'),
                    dataAnimateIn = (el.data('owl-animate-in')) ? el.data('owl-animate-in') : '',
                    dataAnimateOut = (el.data('owl-animate-out')) ? el.data('owl-animate-out') : '',
                    dataDefaultItem = el.data('owl-item'),
                    dataItemXS = el.data('owl-item-xs'),
                    dataItemSM = el.data('owl-item-sm'),
                    dataItemMD = el.data('owl-item-md'),
                    dataItemLG = el.data('owl-item-lg'),
                    dataItemXL = el.data('owl-item-xl'),
                    dataNavLeft = (el.data('owl-nav-left')) ? el.data('owl-nav-left') : "<i class='icon-chevron-left'></i>",
                    dataNavRight = (el.data('owl-nav-right')) ? el.data('owl-nav-right') : "<i class='icon-chevron-right'></i>",
                    duration = el.data('owl-duration'),
                    datamouseDrag = (el.data('owl-mousedrag') == 'on') ? true : false,
                    center = el.data('owl-center');
                if (target.children('div, span, a, img, h1, h2, h3, h4, h5, h5').length >= 2) {
                    el.owlCarousel({
                        animateIn: dataAnimateIn,
                        animateOut: dataAnimateOut,
                        margin: dataGap,
                        autoplay: dataAuto,
                        autoplayTimeout: dataSpeed,
                        autoplayHoverPause: true,
                        loop: dataLoop,
                        nav: dataNav,
                        mouseDrag: datamouseDrag,
                        touchDrag: true,
                        autoplaySpeed: duration,
                        navSpeed: duration,
                        dotsSpeed: duration,
                        dragEndSpeed: duration,
                        navText: [dataNavLeft, dataNavRight],
                        dots: dataDots,
                        items: dataDefaultItem,
                        center: Boolean(center),
                        responsive: {
                            0: {
                                items: dataItemXS
                            },
                            480: {
                                items: dataItemSM
                            },
                            768: {
                                items: dataItemMD
                            },
                            992: {
                                items: dataItemLG
                            },
                            1200: {
                                items: dataItemXL
                            },
                            1680: {
                                items: dataDefaultItem
                            }
                        }
                    });

                    el.on('change.owl.carousel', function(event) {
                        var $currentItem = $('.owl-item', el).eq(event.item.index);
                        var $elemsToanim = $currentItem.find("[data-animation-out]");
                        setAnimation($elemsToanim, 'out');
                    });

                    el.on('changed.owl.carousel', function(event) {
                        var $currentItem = $('.owl-item', el).eq(event.item.index);
                        var $elemsToanim = $currentItem.find("[data-animation-in]");
                        setAnimation($elemsToanim, 'in');
                    });
                }

            });
        }
    }

    function navigateCarousel() {
        var link = $('.ps-home-banner .ps-section__nav a'),
            owl = $('.ps-home-banner').find('.owl-slider');
        owl.owlCarousel();
        link.on('click', function(e) {
            e.preventDefault();
            var el = $(this),
                position = el.closest('li').index();
            console.log(position);
            if (!el.closest('li').hasClass('active')) {
                el.closest('li').addClass('active');
                el.closest('li').siblings('li').removeClass('active');
                owl.trigger('to.owl.carousel', [position, 1, true]);
            }
        });
    }

    $(function() {
        backgroundImage();
        owlCarouselConfig();
        navigateCarousel();
    });

    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

})(jQuery);
