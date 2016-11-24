$( document ).ready(function() {

   var html = $("html");

   if( !html.hasClass("oldie") ){//pokud se nejedna o IE8

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

      if ( !supports('boxShadow') ) {
         document.documentElement.className += ' no-boxshadow';
      }

      if ( !supports('animation') ) {
         document.documentElement.className += ' no-css-animations';
      }

   }
   /* -- another properties -- */
   //textShadow
   //boxShadow
   //transform
   //perspective => 3d support
   // no-css-animations -- wow.js


   //odstranit no-js tridu a pridat js
   html.removeClass("no-js").addClass("js");


   function checkRem(attribute, test){

      var supports = false;

      try {
         var div = document.createElement("div");

         div.style[attribute] = test;

           if(div.style[attribute] === test){
            supports = true;
         }
      } catch(e){}

      return supports;
   }
   //pokud prohlizec nepodporuje REM jednotky nacti PX fallback
   if(!checkRem("fontSize", "1rem")){
      $('head').append('<link rel="stylesheet" type="text/css" href="./styles/css/vopi-koberce-rem-fallback.css">');

      //odstranit REM styly
      $("LINK[href*='./styles/css/vopi-koberce.css']").remove();
   }

   //svg support
   if (typeof SVGRect == "undefined") html.addClass("no-svg");


});







/* na ie8 zavesit na html tridy a tuto funkci v ie 8 nevolat!!! protoze se zasekne */