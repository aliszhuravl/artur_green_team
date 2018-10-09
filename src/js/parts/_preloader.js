jQuery(document).ready(function($) {
    $(window).on('load', function() {
        setTimeout(function() {
            $('#preloader').addClass('fade');
        }, 500);
    });
});