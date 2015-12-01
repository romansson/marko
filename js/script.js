$(document).ready(function($) {
	/*Menu*/
	var touch = $('.touch_menu');
	var menu = $('.navv');
	$(touch).click(function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	/*Fancy Gallery*/
	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	/*Scroll Top*/
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
	$('.down').click(function() {
		$('').animate({scrollTop:0},800);
	});

	/*Scroll all*/
	$("body").on("click","a.scroll", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
	   	top = $(id).offset().top;   
	$('body,html').animate({scrollTop: top}, 1500);
	});

	/*Modal close*/
	$(".modorder").click(function(){
		$(".modallarge").modal("hide");
	});
});
