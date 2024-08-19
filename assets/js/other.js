$(window).scroll(function() {
    if ($(this).scrollTop() > 75) {
        $('#banner').addClass("sticky");
        $('#banner').addClass('fadeInDown');
        $('#banner').addClass('animated');
    } else {
        $('#banner').removeClass("sticky");
        $('#banner').removeClass('fadeInDown');
        $('#banner').removeClass('animated');
    }
});

function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            //duration 5 seconds
            duration: 5000,
            easing: 'linear',
            step: function() {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
                element.html(this.countNum + html);
            }
        });
    }

}