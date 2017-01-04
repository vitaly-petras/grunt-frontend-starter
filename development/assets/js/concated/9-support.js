$( document ).ready(function() {

   $html.addClass("page-ready");

   if( !$html.hasClass("oldie") ){//pokud se nejedna o IE8

      var supports = (function() {
         var div = document.createElement('div'),
            vendors = 'Khtml ms O Moz Webkit'.split(' '),
            len = vendors.length;
       
         return function(prop) {
            if ( prop in div.style ) return true;
       
            prop = prop.replace(/^[a-z]/, function(val) {
               return val.toUpperCase();
            });
       
            while(len--) {
               if ( vendors[len] + prop in div.style ) {
                  // browser supports box-shadow. Do what you need.
                  // Or use a bang (!) to test if the browser doesn't.
                  return true;
               } 
            }
            return false;
         };
      })();

      if ( !supports('transform') ) {
         document.documentElement.className += ' no-transform';
      }

      if ( !supports('columnCount') ) {
         document.documentElement.className += ' no-columns';
      }
   }
   /* -- another properties -- */
   //textShadow
   //boxShadow
   //transform
   //perspective => 3d support
   // no-css-animations (animation)
   // no-columns-count (columnCount)

   //svg support
   if (typeof SVGRect == "undefined"){
      $html.addClass("no-svg");

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
      });
   }


   //detect touch devices (tablets/mobile)
   var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
   if( isTouch == true && $window.width() < 1024 ) $html.addClass("touch-device");


   $window.on("load", function(){
      $body.addClass("page-loaded");
   });
});







/* na ie8 zavesit na html tridy a tuto funkci v ie 8 nevolat!!! protoze se zasekne */