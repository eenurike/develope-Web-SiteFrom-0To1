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
        slidesToShow: 1
    });
});