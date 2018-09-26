$(document).ready(function() {
    $('.slider_main').slick({
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        touchThreshold: 10,
        arrows: true,
        centermode: true,
        centerPadding: '20%',
        prevArrow: $('.btn_prev'),
        nextArrow: $('.btn_next'),
        touchMove: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.b_btn_prev'),
        nextArrow: $('.b_btn_next'),
        touchMove: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$('.brand_slider__box')
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var indexSlide = nextSlide + 1;
        $('.b_slide-number').text(indexSlide);
    });