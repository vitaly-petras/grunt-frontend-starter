$( document ).ready(function() {

    var $icons = $(".icon");

    if( $icons.length>0 )//pokud na strance jsou ikonky
    	embedSvg($icons);
});


function embedSvg(icons){
	var $icons = icons;

	$icons.each(function(){
		var $icon = $(this),
			src = $icon.css("background-image").replace('url("', '').replace('")', '');

		//nepokracuj pokud neexistuje SRC
		if (typeof src == typeof undefined || src == false) return;

		if( !$html.hasClass("no-svg") ){//pokud inline SVG se podporuje
			var embed = $icon.attr("data-grunticon-embed");

			//pokud ikonka nema mit inline styl nepokracuj
			if (typeof embed == typeof undefined || !embed == false) return;

			//pokud ano tak vloz inline svg dovnitr ikonky
	      	$.ajax({
	          	url: src,
	          	dataType: 'text',
	          	success: function (response) {
	              	response = response.replace(/<[?!][\s\w\"-\/:=?]+>/g, '');//odstranit nepotrebne veci
	              	$icon.html(response);//vlozit ikonku
	          	}
	      	});
	    }else{//pokud SVG neni podporovano
	      	src = src.replace("/svg/", "/png/").replace(".svg", ".png");
	      	$icon.css("background-image", "url("+src+")");
	    }
	});
}