//регулирование анимации от размера экрана
if (window.screen.width > 800) {
    document.write('<script type="text/javascript" src="js/animate-css.js"><\/script>');
}

// асинхронная загрузка стилей
!function () {
    function _ready(callback) {
        if (document.body) return callback();
        setTimeout(_ready.bind(null, callback));
    }

    _ready(function (event) {
        [].forEach.call(document.querySelectorAll('link[rel="async-css"]'), function (lnk) {
            var media = lnk.media;
            // предотвратить блокирование рендеринга страницы (идея из loadCSS)
            lnk.media = 'only nothing';
            lnk.rel = 'stylesheet';
            lnk.addEventListener('load', function () {
                lnk.setAttribute('media', media || 'screen');
            })
        })
    });
}();


// правильный мобильный nav-dropdown с оверлеем
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

