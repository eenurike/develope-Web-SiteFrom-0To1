$(function(){

    var mixer = mixitup('.portfolio__content',{
        animation: {
            enable: false
        }
        /* Убрали анимацию, у плагина на сайте все опции прописанны */
    });
    /* Тут пишем наш родительский блок картинок, который
    будет отфильтровываться */


    $('.slider__inner').slick({
        dots: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/logos/arrow-left.svg"></button>',
        /* Путь прописываем как будто мы в html, так как это путь прямо
        генерируется в html */
        nextArrow: '<button type="button" class="slick-next"><img src="images/logos/arrow-right.svg"></button>'
        /* Так мы записываем наши кастомные кнопки */
    });
});