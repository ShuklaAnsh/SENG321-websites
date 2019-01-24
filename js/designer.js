$(document).ready(function(){
	$('.nav').on('click', function(e) {
		e.preventDefault();
		var offset = 148;
		var target = this.hash;
		$('html, body').stop().animate({
			'scrollTop': $(target).offset().top - offset
		}, 800, 'swing', function() {

		});
	});
});