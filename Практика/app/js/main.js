$(document).ready(function(){
  $('.slider-container').slick({
    dots: true,
    arrows: false
  });

  $('.burger-menu').on('click', function() {
    $('.nav').toggleClass('nav--active');
    $('.burger-menu').toggleClass('burger-menu--active');
  });
  $('.container:not(.header > .container)').on('click', function() {
    $('.nav').removeClass('nav--active');
    $('.burger-menu').removeClass('burger-menu--active');
  });

  var mixer = mixitup('.product__bottom');

  $('.product__navigation-link').on('click', function() {
    $('.product__navigation-link').removeClass('product__navigation--active');
    $(this).addClass('product__navigation--active');
  });

});
