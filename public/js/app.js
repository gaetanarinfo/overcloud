
/*  ---------------------------------------------------
  Template Name: Deerhost
  Description:  Deerhost Hosting HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    setTimeout(() => {

        //Canvas Menu
        $(".canvas__open").on('click', function () {
            $(".offcanvas__menu__wrapper").addClass("show__offcanvas__menu");
            $(".offcanvas__menu__overlay").addClass("active");
        });

        $(".canvas__close, .offcanvas__menu__overlay").on('click', function () {
            $(".offcanvas__menu__wrapper").removeClass("show__offcanvas__menu");
            $(".offcanvas__menu__overlay").removeClass("active");
        });

        /*------------------
            Accordin Active
        --------------------*/
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).prev().addClass('active');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).prev().removeClass('active');
        });

        /*------------------
            Navigation
        --------------------*/
        $(".mobile-menu").slicknav({
            prependTo: '#mobile-menu-wrap',
            allowParentLinks: true
        });

        /*------------------
            Testimonial Slider
        --------------------*/
        $(".testimonial__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 3,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            responsive: {
                320: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        });

        /*------------------
            Achieve Counter
        --------------------*/
        $('.achieve-counter').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }, 200);

})(jQuery);