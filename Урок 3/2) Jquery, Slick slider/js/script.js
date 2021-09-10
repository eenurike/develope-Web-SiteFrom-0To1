// $(document).ready(function(){
//     $('.your-class').slick({
      
//     });
//   });
// Такая запись для jquery уже устарела

// ready function заменили на, это обознчает, что не даст загружаться
// коду ниже пока не загрузилась страница
/* $(function(){
    И тут пишутся все наши скрипты
 });
*/

$(function(){
    /* $('.slider') Это тоже самое что и document.querySelector('.slider') */
    $('.slider').slick({
        // Тут пишутся всякие настройки, но слайдер уже работает
        dots: true,
        slidesToShow: 3
    });
});