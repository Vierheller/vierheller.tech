function animateTo(section, time){
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, time);
}

$("#btn-landing").click(function(e) {
    animateTo("#section-about", 800)
});



$(document).scroll(function () {
    //stick nav to top of page
    var y = $(this).scrollTop();
    var nav = $('.navbar');
    var navWrap = $('#navWrap').offset().top;
    console.log(y +" : "+navWrap);
    if (y > navWrap) {
        console.log("Add");
        nav.addClass('sticky');
    } else {
        console.log("Remove");
        nav.removeClass('sticky');
    }
});