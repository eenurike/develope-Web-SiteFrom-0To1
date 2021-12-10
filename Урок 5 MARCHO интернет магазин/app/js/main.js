$(function(){
  $('.burger-menu').click('on', function(){
    $('.menu').toggleClass('menu-active');
    $('.burger-menu__line').toggleClass('burger-menu__active');
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: false,
    autoplay: false,
    autoplaySpeed: 2000
  });

 /* TEST */

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 200,
    // pagination: {
    //   el: ".swiper-pagination",
    //   dynamicBullets: true,
    // },
  });
});

