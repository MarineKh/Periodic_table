$(function(){
    $('#no-style, .content-div, .no-content, .brown, .brown-second').each(function() {
        $(this)
        .css({
            left: Math.floor(Math.random() * screen.width),
            top: Math.floor(Math.random() * screen.height)
        })
        .animate({
            left: 0, 
            top: 0
        }, 3000);
    });
});