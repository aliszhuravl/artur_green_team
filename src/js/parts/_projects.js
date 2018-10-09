$('#drill').on('click', function(){
    $('#drill_window').addClass('window_active');

});

$('.wrapper').on('click', function(){
    $('#drill_window').removeClass('window_active');
});

$('.close').on('click', function(){
    $('#drill_window').removeClass('window_active');
});

$('#all').on('click', function(){
    $('#all_window').addClass('window_active');

});

$('.wrapper').on('click', function(){
    $('#all_window').removeClass('window_active');
});

$('.close').on('click', function(){
    $('#all_window').removeClass('window_active');
});

$('#pskov').on('click', function(){
    $('#pskov_window').addClass('window_active');

});

$('.wrapper').on('click', function(){
    $('#pskov_window').removeClass('window_active');
});

$('.close').on('click', function(){
    $('#pskov_window').removeClass('window_active');
});





$('#portfolio').on('click', function(){
    $('#port_window').css('display', 'block');
    $('.ports').css('display','block');
});

$('.close').on('click', function(){
    $('.ports').css('display','none');
    $('#port_window').fadeOut(500);
});
