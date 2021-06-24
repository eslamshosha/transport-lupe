$(document).ready(function() {	
	new WOW().init();

	$(".arrow-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);

    $(window).scroll(function () {
	    $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);
    });    

    if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeIn(300);
           $(".navgition").addClass("reset-left");
           $("body").addClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeToggle(300);
           $(".navgition").removeClass("reset-left");
           $("body").removeClass("overflow");
       });
   }

   if ($(this).scrollTop() >=110) {
       $(".nav-header").addClass("header-scroll");
   } else {
        $(".nav-header").removeClass("header-scroll");
   }
   $(window).scroll(function() {
    if ($(this).scrollTop() >=110) {
        $(".nav-header").addClass("header-scroll");
    } else {
         $(".nav-header").removeClass("header-scroll");
    }
   });

    var carousel1 = $('#carouselExampleControls').carousel();
    var carousel2= $('#carouselExampleSlidesOnly').carousel();
    carousel1.on('slide.bs.carousel', function(event) {
    var to = $(event.relatedTarget).index();
    carousel2.carousel(to);
});
});




