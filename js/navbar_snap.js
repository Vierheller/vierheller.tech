$(window).scroll(function(scroll) {
  var navStart = $('#navWrap').height();

  var scroll = $(window).scrollTop();


  if (scroll > navStart) {
    $('#nav').addClass('sticky');
  } else {
    $('#nav').removeClass('sticky');  
  }
});
