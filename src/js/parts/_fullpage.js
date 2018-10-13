var fullpageInit = false;

var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1279px)');
var mediaCheckDesktop = window.matchMedia('(min-width: 1280px)');

function fullpageSettings() {

    $('#fullpage').fullpage({
        anchors: ['main', 'second', 'third', 'fourth', 'fith', 'sixth', 'seventh'],
        verticalCentered: false,
        css3: true,
        menu: '#myMenu',
        // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        navigation: false,
        navigationPosition: 'left',
        afterLoad: function() {
            fullpageInit = true;
        },
        onLeave: function(index, nextIndex, direction){
            if (direction == 'down') {
                $('.cover-animation').addClass('cover-action');
                setTimeout(function() {
                    $('.cover-animation').removeClass('cover-action');
                }, 1100);
            }
            if (direction == 'up') {
                $('.cover-animation').addClass('cover-action');
                setTimeout(function() {
                    $('.cover-animation').removeClass('cover-action');
                }, 1100);
            }
        }
        // afterLoad: function(anchorLink, index) {
        //     if (anchorLink == 'main' && index == 1) {
        //         $('.social').fadeIn(300);
        //     }
        //     else {
        //         $('.social').fadeOut(300);
        //     }
        // }
    });
    // $.fn.fullpage.setAllowScrolling(false);
}



if ( $('.page-container').hasClass('page-main') ) {

    $(window).on('load resize', function () {

        if ((mediaCheckDesktop.matches)) {

            if (!fullpageInit) {
                fullpageSettings();
                $.fn.fullpage.reBuild();
            }
        } else if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {

            if (fullpageInit) {
                fullpageInit = false;
                $.fn.fullpage.destroy('all');
            }

        }
    });
}
