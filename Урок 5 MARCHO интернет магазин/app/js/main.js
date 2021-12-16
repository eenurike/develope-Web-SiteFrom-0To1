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
   
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);

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

