window.screen.width>800&&document.write('<script type="text/javascript" src="js/animate-css.js"></script>'),$(document).ready(function(){$(".nav__mobile").on("click",function(e){$(".overlay").removeClass("hidden"),$(".nav__dropdown").show(),setTimeout(function(){$(".nav__dropdown").hide()},5e3),$(".overlay").on("click",function(e){$(".overlay").addClass("hidden"),$(".nav__dropdown").hide()})})}),$(document).ready(function(){$(".bxslider").bxSlider(),$(".header__contacts").animated("flipInY","fadeOutDown"),$(".contacts__content").animated("fadeInLeft","fadeOutDown"),$(".contacts__form").animated("fadeInRight","fadeOutDown"),$(".article__header").animated("fadeInUp","fadeOutDown"),$(".superprice").animated("fadeInUpBig","fadeOutDown"),$(".parallax-window").parallax({imageSrc:"img/how_bg.jpg"}),$("input, select, textarea").jqBootstrapValidation()}),$("#my_tabs a").click(function(e){e.preventDefault(),$(this).tab("show")}),$("#nav__container").singlePageNav(),$(document).ready(function(){$(".func__linc").on("click",function(e){e.preventDefault(),console.log(1);var n=$(this),a=n.closest(".func__item");a.addClass("func__item-active").siblings().removeClass("func__item-active")})}),$(window).load(function(){$(".loader_inner").fadeOut(),$(".loader").delay(400).fadeOut("slow")});
//# sourceMappingURL=main.js.map
