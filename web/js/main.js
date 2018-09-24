(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function linkHighlight(linkClass) {

        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHighlight('.nav__link');

})(jQuery);
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '#link-to-block' );

})(jQuery);
var fullpageInit = false;

// function fullpageSettings() {

    $('#fullpage').fullpage({
        anchors: ['main', 'second', 'third', 'fourth', 'fith', 'sixth', 'seventh'],
        verticalCentered: false,
        css3: true,
        menu: '#myMenu',
        navigation: true,
        navigationPosition: 'left',
        afterLoad: function() {
            fullpageInit = true;
        }
        // onLeave: function(index, nextIndex, direction){
        //
        // }
    });
    // $.fn.fullpage.setAllowScrolling(false);
// }


// if ( $('.page-container').hasClass('page-main') ) {
//
//     $(window).on('load resize', function () {
//
//         if (mediaCheckDesktop.matches) {
//
//             if (!fullpageInit) {
//                 fullpageSettings();
//                 $.fn.fullpage.reBuild();
//             }
//         } else if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {
//
//             if (fullpageInit) {
//                 fullpageInit = false;
//                 $.fn.fullpage.destroy('all');
//             }
//
//         }
//     });
// }
$(document).ready(function() {
    $('.slider_main').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,
        arrows: true,
        prevArrow: $('.btn_prev'),
        nextArrow: $('.btn_next'),
        touchMove: true,
        speed: 1000
    });
});

$('.slider_main')
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var indexSlide = nextSlide + 1;
        $('.slide-number').text(indexSlide);
    });

var filtered = false;

$('.brand-filter').on('click', function(){
    if (filtered === false) {
        $('.slider_main').slick('slickFilter',':even');
        $('.brand-filter').addClass('active_filter');
        filtered = true;
    } else {
        $('.slider_main').slick('slickUnfilter');
        $('.brand-filter').removeClass('active_filter');
        filtered = false;
    }
});

$('.all-filter').on('click', function(){

        $('.slider_main').slick('slickUnfilter');
        $('.all-filter').removeClass('active_filter');
        filtered = false;
});

$('.web-filter').on('click', function(){
    if (filtered === false) {
        $('.slider_main').slick('slickFilter',':odd');
        $('.web-filter').addClass('active_filter');
        filtered = true;
    } else {
        $('.slider_main').slick('slickUnfilter');
        $('.web-filter').removeClass('active_filter');
        filtered = false;
    }
});

$(document).ready(function() {
    $('.brand_slider__box').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.b_btn_prev'),
        nextArrow: $('.b_btn_next'),
        touchMove: true,
        speed: 1000
    });
});

$('.brand_slider__box')
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var indexSlide = nextSlide + 1;
        $('.b_slide-number').text(indexSlide);
    });