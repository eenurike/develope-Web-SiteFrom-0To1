$(function(){
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