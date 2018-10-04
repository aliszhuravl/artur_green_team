jQuery(document).ready(function($) {
    $(window).on('load', function() {
        setTimeout(function() {
            $('#preloader').addClass('fade');
            $('body').removeClass('stopped');
        }, 500);
    });
});