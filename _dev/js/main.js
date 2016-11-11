$(document).ready(function () {
    //Slider
    $('.bxslider').bxSlider();

    //$(".header__contacts").animated("flipInY", "fadeOutDown");

    //Parallax
    $('.parallax-window').parallax({imageSrc: 'img/how_bg.jpg'});

    //Валидация
    $("input, select, textarea").jqBootstrapValidation();

    //Фиксированная навигация

});

$('#nav__container').singlePageNav();

$(document).ready(function () {

    //tabs

    var flag = true;

    $('.func__linc').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            item = $this.closest('.func__item'),
            container = $this.closest('.func__container'),
            content = container.find('.func__descr'),
            ndx = item.index(),
            reqItem = content.eq(ndx),
            activeItem = content.filter('.func__descr-active');

        if (flag) {
            flag = false;


            item.addClass('func__item-active')
                .siblings()
                .removeClass('func__item-active');

            activeItem.fadeOut(500, function () {
                reqItem.fadeIn(500, function () {
                    $(this).addClass('func__descr-active')
                        .siblings()
                        .removeClass('func__descr-active');
                    flag = true
                });
            });

        }

    })


});


