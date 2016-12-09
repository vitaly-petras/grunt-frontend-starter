var $popup = $("#js-popup");

//funkce otevreni
function openWindow(e, el){
  e.preventDefault();
  var $this = $(el),
      target = $this.attr("href");

  if (typeof target == typeof undefined || target == false) target = $this.attr("data-target");
  
  $body.css("top", -$window.scrollTop()).addClass("overflow");
  $popup.removeAttr("class").addClass(target.replace("#", "")).addClass("window-popup");
  var id = "#js-window-"+target.replace("#", "");
  $popup.find(".js-popup-content").not(id).hide();
  $popup.find(id).show();
  $popup.fadeIn(250);

  $(document).on("keyup", function(e){//zavrit po stisknuti ESC
      if( $popup.length>0 ){
        if (e.keyCode == 27) {
          if( $popup.is(":visible") ) {
            closeWindow();
          }
        }
      }
  });

  $popup.click(function(event) { 
      if(!$(event.target).closest(".window-popup__in", $popup).length && $(event.target).closest($popup).length) {
          closeWindow();
      }        
  });
}


// funkce zavrit
function closeWindow(e){
  if (!typeof e == typeof undefined || e == true) e.preventDefault();
  $popup.fadeOut(250);

  var scrollLength = Math.abs(parseInt($body.css("top")));
  $body.removeClass("overflow").removeClass("fixed").css("top", 0);
  $("html, body").scrollTop(scrollLength);

  $(document).off("keyup");
}

/*
  onclick="openWindow(event, this)" otevrit
  onclick="closeWindow(event)" zavrit
*/