$(document).ready(function(){
	if( $('html').hasClass("no-objectFit") ){//object fit fallback
		$(".js-cover-fallback").each(function(){
			imgToBg($(this));
		});
	}
});