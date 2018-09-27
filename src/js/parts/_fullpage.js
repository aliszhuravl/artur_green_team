var fullpageInit = false;
var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');

function fullpageSettings() {

    $('#fullpage').fullpage({
        anchors: ['main', 'second', 'third', 'fourth', 'fith', 'sixth', 'seventh'],
        scrollOverflow: true,
        verticalCentered: false,
        css3: true,
        menu: '#myMenu',
        navigation: false,
        navigationPosition: 'left',
        afterLoad: function() {
            fullpageInit = true;
        },
        afterLoad: function(anchorLink, index) {
            if (anchorLink == 'main' && index == 1) {
                $('.social').fadeIn(300);
            }
            else {
                $('.social').fadeOut(300);
            }
        }
    });
    // $.fn.fullpage.setAllowScrolling(false);
}



if ( $('.page-container').hasClass('page-main') ) {

    $(window).on('load resize', function () {

        if ((mediaCheckDesktop.matches) || (mediaCheckTablet.matches)) {

            if (!fullpageInit) {
                fullpageSettings();
                $.fn.fullpage.reBuild();
            }
        } else if ((mediaCheckMobile.matches)) {

            if (fullpageInit) {
                fullpageInit = false;
                $.fn.fullpage.destroy('all');
            }
        }
    });
}
