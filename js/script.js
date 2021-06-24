

$(document).ready(function() {	
	new WOW().init();

	$(".arrow-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });

    if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeIn(300);
           $("navgition").addClass("reset-right");
           $("body").addClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeToggle(300);
           $("navgition").removeClass("reset-right");
           $("body").removeClass("overflow");
       });
   }
});



