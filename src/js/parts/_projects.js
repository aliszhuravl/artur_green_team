$('#drill').on('click', function(){
    $('#drill_window').addClass('window_active');

});

$('.wrapper').on('click', function(){
    $('#drill_window').removeClass('window_active');
});

$('.close').on('click', function(){
    $('#drill_window').removeClass('window_active');
});

$('#portfolio').on('click', function(){
    $('#port_window').addClass('window_active');

});

$('.close').on('click', function(){
    $('#port_window').removeClass('window_active');
});