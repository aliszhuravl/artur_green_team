// $('.owl-carousel').owlCarousel({
//     items:1,
//     loop:false,
//     stagePadding: 50,
//     touchDrag: true,
//     center:true,
//     margin: 60,
//     nav:true,
//     smartSpeed: 800,
//     startPosition: 'URLHash',
//     responsiveClass:true,
//     autoWidth:true,
//     responsive: {
//         0: {
//             items: 1.1,
//             stagePadding: 0,
//             margin: 10
//         },
//         1200: {
//             items: 1.3,
//             loop:false,
//             stagePadding: 150,
//             touchDrag: true,
//             center:true,
//             margin: 160,
//             URLhashListener:true,
//             smartSpeed: 800
//         }
//     }
// });
//
// $(document).ready(function() {
// $('.owl-carousel').on('changed.owl.carousel', function(e) {
//     $('.slide-number').text(e.item.index + 1)
// });
// });
//
// $(document).ready(function() {
//     $('.owl-carousel').on('click', '.owl-item', function () {
//         //получить индекс
//         var click = $(this).index();
//         //по клику листаем к слайду на который кликнули
//         $('.owl-carousel').trigger( 'to.owl.carousel', [click] );
//         // Или добавляем свою функцию вместо листания
//     });
// });