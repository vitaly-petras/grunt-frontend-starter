//nastav tridu js pokud je javascript povoleny
document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');


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


//css properties support detection
var supports = (function() {
   var div = document.createElement('div'),
      vendors = 'Moz Webkit'.split(' '),//ms O Moz Webkit
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

/* -- another properties to test -- */
//textShadow
//boxShadow
//transform
//perspective => 3d support
//animation
//columnCount

if( ie == 9 ) pns += " ie9 no-animation";//Internet Explorer 9
else if( ie < 9 ) pns += " oldie no-transform no-columnCount no-boxShadow no-animation";//Internet Explorer 8 and older
else{
   document.addEventListener("touchstart", function() {},false);//hover event pro dotykova zarizeni (nesmi byt v ie8 protoze hodi chybu)

   for (i = 0; i < ptt.length; i++) {//test css properties
      if( !supports(ptt[i]) ) pns += ' no-'+ptt[i];//not supports
      else pns += ' '+ptt[i];//supports
   }
}

if (typeof SVGRect == "undefined") pns += " no-svg";//no svg support

//detect touch devices (tablets/mobile)
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
if( isTouch == true && document.body.clientWidth < 1024 ) pns += " touch-device";

document.documentElement.className += pns;
