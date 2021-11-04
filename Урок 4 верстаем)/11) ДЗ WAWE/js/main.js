$(function(){
  $(document).on('scroll', function() {
    let top = $(this).scrollTop();

    if(top > 40) {
      $('.header__top').addClass('translate');
    } else {
      $('.header__top').removeClass('translate');
    }

    if(top > 60) {
      $('.header__top').addClass('scroll');
    } else {
      $('.header__top').removeClass('scroll');
    }

  });

  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false
  });

  $('.burger__menu').click('on', function() {
    $('ul.menu').toggleClass('burger__active');
    $('.burger__menu span').toggleClass('span__active');
  });

  // $('.container').click('on', function() {
  //   $('ul.menu').removeClass('burger__active');
  // });

  

  var mixer = mixitup('.gallery__content--inner');
});