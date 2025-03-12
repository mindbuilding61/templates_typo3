$(function () {
    $('#header_nav').data('size', 'big');
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 0) {
        if ($('#header_nav').data('size') == 'big') {
            $('#header_nav').data('size', 'small');
            $('#header_nav').stop().animate({
                height: '40px'
            }, 600);
        }
        {
            $('#header_nav2').data('size', 'small');
            $('#header_nav2').stop().animate({
                height: '270px'
            }, 600);
        }
    } else {
        if ($('#header_nav').data('size') == 'small') {
            $('#header_nav').data('size', 'big');
            $('#header_nav').stop().animate({
                height: '160px'
            }, 600);
        }
        {
            $('#header_nav2').data('size', 'big');
            $('#header_nav2').stop().animate({
                height: '165px'
            }, 600);
        }
    }
});

