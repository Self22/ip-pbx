
if (window.screen.width > 800) {
    document.write('<script type="text/javascript" src="js/animate-css.js"><\/script>');
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// $('.nav__mobile').on('click', function (e) {
//     $('.overlay').toggle();
//     $('.nav__dropdown').toggle();
//
//
//     setTimeout(function () {
//         $('.nav__dropdown').hide();
//         $('.overlay').hide();
//     }, 4000);
//
//     }
// );
///////////////////////////////////////////////////////////////////////////////////////////////
// $(function() {
//     $('.nav__mobile').click(function(){  // добираемся до элемента по которому будем кликать
//         $('.overlay').show(function(){ // после клика запускаем наш оверлэй
//             $('.nav__dropdown').show(
//             );
//             }); // а теперь аккуратно выводим наш блок
//     });
//
//
//
//     $('.overlay').add('a.nav__link').click(function(){ // кликаем по элементу который всё это будет закрывать, также здесь можно добавить сам оверлэй, чтобы по клику вне блока, всё сворачивалось.
//         $('.nav__dropdown').hide(function(){ // убираем наш блок
//             $('.overlay').hide(); // и теперь убираем оверлэй
//         });
//     });
// });
////////////////////////////////////////////////////////////////////////////////////////////////
var nav = document.querySelector('.nav__mobile');
var drop = document.querySelector('.nav__dropdown');
var oLay = document.querySelector('.overlay');
nav.addEventListener('tap', function () {
    event.preventDefault();
    drop.classList.toggle('hidden');
    oLay.classList.toggle('hidden');
})

nav.addEventListener('click', function () {
    event.preventDefault();
    drop.classList.toggle('hidden');
    oLay.classList.toggle('hidden');
})


// $(document).ready(function () {
//     $('.wrapper').on('click', function (e) {
//         $('.nav__dropdown').hide();
//         $('.overlay').hide();
//     })
// });


$(document).ready(function () {
    //Slider
    $('.bxslider').bxSlider();


    $(".header__contacts").animated("flipInY", "fadeOutDown");
    $(".contacts__content").animated("fadeInLeft", "fadeOutDown");
    $(".contacts__form").animated("fadeInRight", "fadeOutDown");
    $(".article__header").animated("fadeInUp", "fadeOutDown");
    $(".superprice").animated("fadeInUpBig", "fadeOutDown");


    //Parallax
    $('.parallax-window').parallax({imageSrc: 'img/how_bg.jpg'});

    //Валидация
    $("input, select, textarea").jqBootstrapValidation();

    //Фиксированная навигация

});

$('#my_tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})


$('#nav__container').singlePageNav();

$(document).ready(function () {

    //tabs



    $('.func__linc').on('click', function (e) {
        e.preventDefault();

        console.log(1);

        var
            $this = $(this),
            item = $this.closest('.func__item');


        item.addClass('func__item-active')
                .siblings()
                .removeClass('func__item-active');


    })


});

// $(window).load(function () {
//
//     $(".loader_inner").fadeOut();
//     $(".loader").delay(400).fadeOut("slow");
//
// });


