$(function(){
  $('.burger-menu').click('on', function(){
    $('.menu').toggleClass('menu-active');
    $('.burger-menu__line').toggleClass('burger-menu__active');
  });

  $('.shop__content-filter__btn').on('click', function() {
    $('.shop__content-filter__btn').removeClass('shop__content-filter__btn--active');
    $(this).addClass('shop__content-filter__btn--active');
    /* this обозначает именно кликнутый элемент, типо сперва при клике удаляются класс active,
    но добавляет active на кликнутый элемент */
  });

  $('.shop__content-filter__list').on('click', function() {
    $('.shop__content-inner').addClass('change-grid');
  });

  $('.shop__content-filter__grid').on('click', function() {
    $('.shop__content-inner').removeClass('change-grid');
  });

  // $('.select-styled').styler();
  /* Ну в моем случае я не буду подключать этот плагин, стилизовал по возможности
  дефолтные стили option, по стилю с макетом подходит */

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text('$' + data.from);
      $('.filter-to').text('$' + data.to);
      /* Чтоб цену сразу показывались при загрузке страницы */
    },
    onChange: function (data) {
      /* добавили метод для отслеживания изменения в цене на ползунке
      Этот метод нашел в документации */
      $('.filter-price__from').text('$' + data.from);
      $('.filter-to').text('$' + data.to);
  },
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
  
  // const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  /* Тут мы устанавливаем нужное время, такие таймеры так работают на всех сайтах, где есть какие либо фейк акции,
  то есть пользователь заходит видит 15 дней, если он же перезагрузит страницу, то часы обнулсятся. Но у нас серьезный 
  интернет магаз, должно работать нормально, и еще один нюанс, что клиент не сможет сам настраивать время, он не сможет 
  зайти в файл js, поэтому нужно даты установить в html, чтоб можно было менять через админку */
  const deadline = $('#clockdiv').attr('data-time');
  /* Так в наш таймер передали дата атрибут, который устанавливается в html */
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

