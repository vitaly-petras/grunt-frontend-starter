
$( document ).ready(function() {

	/* =============== funkce pro ie 7 ========================= */
	if( $("html").hasClass("ie7") ){
	   $(".clearfix, .row").append("<span class='clear'></span>");
	}

	/*
	//lazy load images
	$('img[data-src]').one('inview', function(event, isVisible) {
	    if (!isVisible) { return; }
	      
	    var img = $(this),
	      	src = img.attr("data-src");

	    //if is onloaded escape function
	    if (typeof src == typeof undefined || src == false) return;
	      
	    // Show a smooth animation
	   	img.css('opacity', 0);
	    img.load(function() { img.animate({ opacity: 1 }, 500); });
	    // Change src
	    img.attr('src', src);
	    // Remove it from live event selector
	    img.removeAttr('data-src');
    });

	
    /*
    //styled select
    $('select').each(function(event){
		var $this = $(this),
			className = $this.attr("class");

      	if (typeof className == typeof undefined || className == false) className = "select";

		$this.styledSelect({
	     	selectClass: className
	    });

		//kliknuti na select ale ne li select zavre nebo otevre (fixnuti kliknuti na sipku
	    var $ul = $this.next();
	    $ul.on("click", function(event){
			var $this = $(this);
			if(!$(event.target).is("li")) {
				var $selected = $this.find("li.selected").first();
				if( $selected.length>0 ) $selected.click();
				else $this.find("li").first().click();
	      	}
		});
	});
	*/

	//zobrazit / schovat
    $(".js-toggle").on("click", function(e){
    	e.preventDefault();

    	var $this = $(this),
    		target = $( e.target ),
    		$target = $("#"+$this.attr("data-target")),
    		toggleClass = $this.attr("data-toggle-class"),
    		toggleThis = $this.attr("data-this-not-toggle"),
    		toggleText = $this.attr("data-toggle-text");

		if( $this.hasClass("form-checkbox") ){
			var $input = $this.find(".form-checkbox__input");

			if( $input.is(":checked") ) $input.prop("checked", false);
			else 						$input.prop("checked", true);
		}

    	if (!typeof toggleClass == typeof undefined || !toggleClass == false) $this.toggleClass(toggleClass);

    	if (!typeof toggleThis == typeof undefined || toggleThis == true) $this.slideToggle(250);

    	if (!typeof toggleText == typeof undefined || !toggleText == false){
    		$this.attr("data-toggle-text", $this.text()).text(toggleText);
    	}
    	
    	$target.slideToggle(250);
    });

	
	// replace all .sg images to png ones
    if( $("html").hasClass("no-svg") ){
        $("img.png-fall-back").each(function(){
        	var $this = $(this),
        		src = $this.attr("src"),
        		attr = "src";

        	if (typeof src == typeof undefined || src == false){
        		src = $this.attr("data-src");
        		attr = "data-src";
        	}
            
            var newSrc = src.replace(".svg", ".png");
            $this.attr(attr, newSrc);
        })
    }

    //simulovat kliknuti na odkaz
    $(".js-simulate-link li").on("click", function(e){
    	var $this = $(this),
    		target = $( e.target );

    	if( !target.is("a") && !target.parent().is("a") ){
    		var $link = $this.find(".js-simulate-link-title").first();
    		if( $link.length>0 ) window.location = $link.attr("href");
    	}
    });

    

	

});


function fixedTopBar(){

    var $window = $(window);

	var pageHeader = $("#pageHeader"),
		topBar = $("topBar");
	var windowTimeout;

	/* scrolling and fixin navigation on top */
	$window.on('scroll', function(event) {
		if (windowTimeout) {
			return;
		}

		windowTimeout = setTimeout(function() {
			if (windowTimeout) {
				clearTimeout(windowTimeout);

				windowTimeout = null;
			}

			var windowScrollTop = $window.scrollTop();



				if ( windowScrollTop > (topBar.outerHeight()) ) {					
					setTimeout(function() {
						
						pageHeader.addClass('fixed');
					
					}, 1);
				}
				else{
					
					pageHeader.removeClass('fixed');					
						
				}

			

				
			
		}, 50);
	});
}

$(window).load(function(){
	
});