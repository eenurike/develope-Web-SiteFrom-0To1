$(function(){

  $(".menu a, .toTop a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href');
		var	top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $(document).on('scroll', function() {
    let top = $(this).scrollTop();

    if(top > 40) {
      $('.header__top').addClass('translate');
    } else {
      $('.header__top').removeClass('translate');
    }

    if(top > 60) {
      $('.header__top').addClass('scroll');
      $('.header').addClass('header__padding');
    } else {
      $('.header__top').removeClass('scroll');
      $('.header').removeClass('header__padding');
    }

  });

  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false
  });

  $('.burger__menu, .menu a').click('on', function() {
    $('ul.menu').toggleClass('burger__active');
    $('.burger__menu span').toggleClass('span__active');
  });

  // $('.container').click('on', function() {
  //   $('ul.menu').removeClass('burger__active');
  // });

  

  var mixer = mixitup('.gallery__content--inner');
});