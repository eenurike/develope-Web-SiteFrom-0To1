$(function(){

  /* Плавный скрол */
  $(".menu, .toTop").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href');

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		var	top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

  /* Прилипающая навигация */
  $(document).on('scroll', function() {
    let top = $(this).scrollTop();

    if(top > 100) {
      $('.header__top').addClass('scroll');
    } else {
      $('.header__top').removeClass('scroll');
    }

  });

  $('.slider__inner').slick({
      dots: true,
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/logos/arrow-left.svg"></button>',
      /* Путь прописываем как будто мы в html, так как это путь прямо
      генерируется в html */
      nextArrow: '<button type="button" class="slick-next"><img src="images/logos/arrow-right.svg"></button>',
      /* Так мы записываем наши кастомные кнопки */
      responsive: [
          {
            breakpoint: 450,
            settings: {
              arrows: false
            }
          }]
  });

  /* Добавили menu a, чтоб при клике на ссылку менюха закрывалась */
  $('.menu__btn, .menu a').on('click', function() {
      // $('.menu__list').toggleClass('active__list');
      /* И теперь нужно добавить классы изменения цвета при клике, но каждому задавать
      это не гуманно, общее у выезжающего меню и бургер меню и логотипа это родитель */
      $('.header__top-inner').toggleClass('header__top-inner--active');
  });
  
  
  var mixer = mixitup('.portfolio__content',{
      animation: {
          enable: false
      }
      /* Убрали анимацию, у плагина на сайте все опции прописанны */
  });
  /* Тут пишем наш родительский блок картинок, который
  будет отфильтровываться.
  И mixitup плагин лучше писать в самом конце, потомучто если его написать
  в самом начале после него ничего не работает */
});