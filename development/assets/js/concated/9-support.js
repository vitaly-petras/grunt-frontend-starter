$( document ).ready(function() {
   //IE detection
   var ie = (function(){
      var undef,
         v = 3,
         div = document.createElement('div'),
         all = div.getElementsByTagName('i');

      while (
         div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
         all[0]
      );

      return v > 4 ? v : undef;
   }());


   //other properties support detection
   var supports = (function() {
      var div = document.createElement('div'),
         vendors = 'ms O Moz Webkit'.split(' '),
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


   var   pns = "",//properties not supported
         ptt = ["transform", "columnCount", "textShadow", "boxShadow"];//properties to test

   if( ie == 9 ) pns += " ie9";//Internet Explorer 9
   if( ie < 9 ) //Internet Explorer 8 and older
      pns += " oldie";
   else{
      document.addEventListener("touchstart", function() {},false);//hover event pro dotykova zarizeni

      for (i = 0; i < ptt.length; i++) {//test properties
         //if( !supports(ptt[i]) ) pns += ' no-'+ptt[i];
      }
   }
      
   

      
   /* -- another properties -- */
   //textShadow
   //boxShadow
   //transform
   //perspective => 3d support
   // no-css-animations (animation)
   // no-columns-count (columnCount)

   
   if (typeof SVGRect == "undefined")//svg support
      pns += " no-svg";


   //detect touch devices (tablets/mobile)
   var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
   if( isTouch == true && $window.width() < 1024 ) pns +=" touch-device";

   $html.addClass(pns);
});







/* na ie8 zavesit na html tridy a tuto funkci v ie 8 nevolat!!! protoze se zasekne */