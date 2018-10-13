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


$('#mir').on('click', function(){
    $('#mir_window').addClass('window_active');

});

$('.wrapper').on('click', function(){
    $('#mir_window').removeClass('window_active');
});

$('.close').on('click', function(){
    $('#mir_window').removeClass('window_active');
});


$('#invo').on('click', function(){
    $('#invo_window').addClass('window_active');

});

$('.wrapper').on('click', function(){
    $('#invo_window').removeClass('window_active');
});

$('.close').on('click', function(){
    $('#invo_window').removeClass('window_active');
});


$('#vassa').on('click', function(){
    $('#vassa_window').addClass('window_active');

});

$('.wrapper').on('click', function(){
    $('#vassa_window').removeClass('window_active');
});

$('.close').on('click', function(){
    $('#vassa_window').removeClass('window_active');
});


$('#portfolio').on('click', function(){
    $('#port_window').css('display', 'block');
    $('.ports').css('display','block');
    $('.iframe').attr('src','https://player.vimeo.com/video/293941620?autoplay=1&controls=0&loop=1&color=ffffff&title=0&byline=0&portrait=0');
});

$('.close').on('click', function(){
    $('.ports').css('display','none');
    $('#port_window').fadeOut(500);
    $('.iframe').attr('src','');
});
