$(function(){
  $('.menu__btn').click('on', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.container:not(.header .container)').click('on', function() {
    $('.menu__list').removeClass('menu__list--active');
  });

  $('.footer-top__title').click('on', function() {
    $(this).next().slideToggle();
    // Именно скрывает кликнутый элемент, next() это обращение к вледующему элементу после footer-top__title
    $(this).toggleClass('active');
  });

  $('.blog-page__item--slider .blog-page__item-image').slick({
    prevArrow: `<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path  d="M 5.25 12.25 C 5.027344 12.25 4.800781 12.164062 4.632812 11.992188 L 0.257812 7.617188 C -0.0859375 7.277344 -0.0859375 6.722656 0.257812 6.382812 L 4.632812 2.007812 C 4.972656 1.664062 5.527344 1.664062 5.867188 2.007812 C 6.210938 2.347656 6.210938 2.902344 5.867188 3.242188 L 2.113281 7 L 5.871094 10.757812 C 6.210938 11.097656 6.210938 11.652344 5.871094 11.996094 C 5.699219 12.164062 5.472656 12.25 5.25 12.25 Z M 5.25 12.25 "/></g></svg></button>`,

    nextArrow: `<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path d="M 1.75 12.25 C 1.527344 12.25 1.300781 12.164062 1.132812 11.992188 C 0.789062 11.652344 0.789062 11.097656 1.132812 10.757812 L 4.890625 7 L 1.132812 3.242188 C 0.789062 2.902344 0.789062 2.347656 1.132812 2.003906 C 1.472656 1.664062 2.027344 1.664062 2.367188 2.003906 L 6.742188 6.378906 C 7.085938 6.722656 7.085938 7.277344 6.742188 7.617188 L 2.367188 11.992188 C 2.199219 12.164062 1.972656 12.25 1.75 12.25 Z M 1.75 12.25 "/></g></svg></button>`,
    infinite: false
  });


  $('.product-tabs__tab').click('on', function(e) {
    e.preventDefault();
    /* Чтоб убрать стандартное поведение элементов, например ссылки */
    $('.product-tabs__tab').removeClass('product-tabs__tab--active');
    $(this).addClass('product-tabs__tab--active');
    /* this это именно кликнутый элемент */
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
    /* Типа именно обращаемся к атрибуту (id) у контента, так как у нас в HTML по id связаны
    блоки табов и контента */

  });

  $('.product-inner__aside').slick({
    asNavFor: '.product-inner__main',
    /* Смотри так как у нас слайдер имеет особую структуру, то что главная большая фотка большая,
    а остальные с боку маленькие, поэтому и пишем два слайдера, как бы соединили два
    слайдера воедино */
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    /* Ну чтоб слйдер был вертикальным, а не горизонтальным */
    draggable: false,
    /* Чтоб вообще он не двигался */
  });
  $('.product-inner__main').slick({
    asNavFor: '.product-inner__aside',
    draggable: false,
    arrows: false
  });

  $('.product-inner__number').styler({

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
    autoplaySpeed: 2000,
    adaptiveHeight: true
    /* Если картинки разных высот, чтоб слайды подстраивались под высоту картинки */
  });

  $(".stars").rateYo({
    starWidth: "16px",
    // rating    : 4,
    /* Но нам это не подходит, ведь нам нужно задавать каждому одельный рейтинг, нужно найти 
    дата атрибут и не посредствено вставить в html */
    spacing   : "2px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px"
    height="16px" viewBox="0 0 18 16" version="1.1"><path d="M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312"/></svg>`
    /* Вот в током виде вставляешь кастомные звездочки, и лучше использовать бэктики */
    
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

