$(document).ready( function(){
    $('.menu-item.link').click(function(){
        $('.menu-item.link').removeClass('linked');
        $(this).addClass('linked');
    });
});


