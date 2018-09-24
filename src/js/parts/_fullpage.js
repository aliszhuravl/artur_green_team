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
