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


 
  $(".stars").rateYo({
    starWidth: "16px",
    // rating    : 4,
    /* Но нам это не подходит, ведь нам нужно задавать каждому одельный рейтинг, нужно найти 
    дата атрибут и не посредствено вставить в html */
    spacing   : "5px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
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

