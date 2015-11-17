$(document).ready(function($) {
	var touch = $('.touch_menu');
	var menu = $('.navv');
	$(touch).click(function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
});