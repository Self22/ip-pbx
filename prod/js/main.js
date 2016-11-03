$(document).ready(function () {
    $(".bxslider").bxSlider(), $(".parallax-window").parallax({imageSrc: "img/how_bg.jpg"})
}), $(document).ready(function () {
    var e = !0;
    $(".func__linc").on("click", function (c) {
        c.preventDefault();
        var n = $(this), i = n.closest(".func__item"), a = n.closest(".func__container"), t = a.find(".func__descr"), s = i.index(), d = t.eq(s), f = t.filter(".func__descr-active");
        e && (e = !1, i.addClass("func__item-active").siblings().removeClass("func__item-active"), f.fadeOut(500, function () {
            d.fadeIn(500, function () {
                $(this).addClass("func__descr-active").siblings().removeClass("func__descr-active"), e = !0
            })
        }))
    })
});
//# sourceMappingURL=main.js.map
