/* Tento soubor slouzi pro detekci css a jinych vlastnosti a reseni jejich fallbacku
* 1. Je javascript povoleny?
* 2. Podpora REM jednotek
* 3. Detekce starsich Internet Exploreru (9,8 a nizsi verze)
* 4. Detekce css vlastnosti (pokud se pouziva vzdy ve spojitosti s bodem 3)
* 5. Spusteni testu (body 3 a 4 dohromady)
* 6. Podpora SVG
* 7. Detect touch devices (tablets/mobile)
* 
* Ve vychozim stavu potrebujeme body: 1,2,6,7 zbytek pouze dle nutnosti 
* na stranku vkladame do hlavicky do "critical js" v minifikovanem stavu!
*/


var version = "<?php echo $version ?>";//version

/* START 1 */
//nastav tridu js pokud je javascript povoleny
document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');
/* END 1 */


/* START 2 */
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

if(!checkRem("fontSize", "1rem")){//pokud prohlizec nepodporuje REM jednotky 
  var gs = document.getElementById("global-styles");
  gs.href = gs.href.replace('.css','-rem-fallback.css');//nacti PX fallback
}
/* END 2 */


/* START 3 
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
/* END 3 */


/* START 4 
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
*/

var   pns = "",//properties not supported
      ptt = ["transform", "columnCount", "textShadow", "boxShadow"];//properties to test

/* -- another properties to test -- */
//textShadow
//boxShadow
//transform
//perspective => 3d support
//animation
//columnCount
/* END 4 */



/* START 5 
if( ie == 9 ) pns += " ie9 no-animation";//Internet Explorer 9
else if( ie < 9 ) pns += " oldie no-transform no-columnCount no-boxShadow no-animation";//Internet Explorer 8 and older
else{
   document.addEventListener("touchstart", function() {},false);//hover event pro dotykova zarizeni (nesmi byt v ie8 protoze hodi chybu)

   for (i = 0; i < ptt.length; i++) {//test css properties
      if( !supports(ptt[i]) ) pns += ' no-'+ptt[i];//not supports
      else pns += ' '+ptt[i];//supports
   }
}
/* END 5 */

/* START 6 */
if (typeof SVGRect == "undefined") pns += " no-svg";//no svg support
/* END 6 */


/* START 7 
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
if( isTouch == true && document.body.clientWidth < 1024 ) pns += " touch-device";
 END 7 */

document.documentElement.className += pns;
