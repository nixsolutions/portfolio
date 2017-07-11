$( document ).ready(function() {
	
//show and hide scroll button
	$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
	
//animation scroll to top page
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

//for desktop add class for maximize filter menu
	$(".more-categories").click( function() {
		$(".categories-inputs").toggleClass("active");
	});

//on mobile device will close and open filters menu
	$(".filters-close-wrapper").click( function(){
		$("body").removeClass("scroll-none");
		$(".filters-inner").removeClass("active");
	});
	$(".filters-apply").click( function(){
		$("body").removeClass("scroll-none");
		$(".filters-inner").removeClass("active");
	});
	$(".filters-icon").click( function(){
		$("body").addClass("scroll-none");
		$(".filters-inner").addClass("active");
	});
	
});