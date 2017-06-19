

//zavrit po kliku mimo elementy
function clouseOnBlur(el, target){
    if( el.hasClass("js-toggle-activated") ){
        setTimeout(function(){
            var customEvent;
            if( iOS == true ) customEvent = "touchend";
            else customEvent = "click";

            $body.one(customEvent, function(event){
                if(!$(event.target).closest(el).length && !$(event.target).closest(target).length) {//kliknuti mimo elementy
                    el.click();//zavre cilovy blok
                    //console.log("clicked out");
                }else{//kliknuti uvnitr elementu nebo cile
                    //console.log("clicked in");
                    var $clickedElement = $(event.target),
                        attr = $clickedElement.attr("data-close-onblur");

                    if (typeof attr !== typeof undefined && attr !== false && !$clickedElement.is(el)) {//pokud je to novy odkaz pro otevreni
                        el.click();//zavre cilovy blok
                    }else{//pokud je to proste kliknuti nekde uvnitr
                        if( !$(event.target).closest(el).length )//pouze polud to neni toggle
                            clouseOnBlur(el, target);//nastav nove hlidani na body
                    }
                }
            });
        }, 1);
    }
}

//simulovat kliknuti na odkaz (pouziti onclick="simulateLink(event, this)")
function simulateLink(e, element){
    var $this = $(element),
        target = $( e.target );

    if( !target.is("a") && !target.parent().is("a") && !target.is("button") && !target.parent().is("button") ){
        e.preventDefault();
        var $link = $this.find(".js-sl-target").first();
        if( $link.length>0 ){//pokud odkaz existuje
            $link[0].click();//klikni na nej
        }
    }
}

//zobrazit / schovat (pouziti onclick="toggle(event, this)")
function toggle(e, element){
    var $this = $(element),
        target = $this.attr("href"),
        toggleClass = $this.attr("data-class"),//pridava tridu na tlacitko a target v aktivnim stavu
        toggleThis = $this.attr("data-this-not-toggle"),//schova tlacitko
        toggleText = $this.attr("data-toggle-text"),//vymeni text v tlacitku
        closeOnBlur = $this.attr("data-close-onblur"),//zavira po kliku mimo target a otevirajici tlacitko
        bodyFreezing = $this.attr("data-body-freeze"),//pridava tridu na body (pro zamezeni skrolu)
        effect = $this.attr("data-effect"),//vychozi je slide efekt
        accessibility = $this.attr("data-accessibility"),
        focusOnFirstInput = $this.attr("data-focusOnFirstInput");

    $this.toggleClass("js-toggle-activated");

    if( $this.is("input[type=checkbox]") || $this.is("input[type=radio]") ){//pokud se jedna o chechbox/radiobox
        var showOn = $this.attr("data-showon");//provest na hodnotu true nebo false
    }else{
        e.preventDefault();
    }

    if (typeof target == typeof undefined || target == false){//pokud target neni definovany v atributu "href"
        target = $this.attr("data-target");//pak musi byt definovany v atributu "data-darget"
    }

    if (typeof effect == typeof undefined || effect == false){//pokud neni nastaven efekt
        effect = "slide";//vychozi je slide
    }

    if (typeof accessibility !== typeof undefined && typeof $this.attr("data-scrollhere") == typeof undefined){
        $this.attr("data-scrollhere", $this.offset().top  + $this.outerHeight() - $window.height());
    }

    var $target = $(target);//definovani cile

    if (!typeof toggleThis == typeof undefined || toggleThis == true) $this.slideToggle(250);

    if (!typeof toggleText == typeof undefined || !toggleText == false){
        $this.attr("data-toggle-text", $this.text()).text(toggleText);
    }

    if (!typeof bodyFreezing == typeof undefined || !bodyFreezing == false) bodyFreeze();

    if (!typeof closeOnBlur == typeof undefined || !closeOnBlur == false) clouseOnBlur($this, $target);

    if( $this.is("input[type=checkbox]") || $this.is("input[type=radio]") ){//pokud se jedna o chechbox/radiobox
        if( $this.is(":checked") ){
            if(showOn == "checked"){
                showHide("show", effect, $target);
            }
            else{
                showHide("hide", effect, $target);
            }
        } 
        else{
            if(showOn == "checked"){
                showHide("hide", effect, $target);
            }
            else{
                showHide("show", effect, $target);
            }
        }
    }else{//neni to checkbox
        showHide("toggle", effect, $target);
    }

    if (typeof focusOnFirstInput !== typeof undefined && $this.hasClass("js-toggle-activated")) $target.find("input").first().focus();

    if (!typeof toggleClass == typeof undefined || !toggleClass == false){
        setTimeout(function(){//iOs bug fix
            $this.toggleClass(toggleClass);
            $target.toggleClass(toggleClass);
        }, 10);
    }

    if (typeof accessibility !== typeof undefined){
        if( !$this.hasClass("js-toggle-activated") ){//pokud se element schovava
            console.log(Number($this.attr("data-scrollhere")));
            $("html, body").animate({
                scrollTop: parseInt($this.attr("data-scrollhere")) + 10
            }, 350);
            $this.removeAttr("data-scrollhere");
        }
    }
}

//show or hide element
function showHide(wtt, htd, target, speed){//what to do, how to do
    var speed = speed || 250;

    if( wtt == "hide" ){
        if( htd == "slide" ){
            $(target).stop().slideUp(speed);
        }else if( htd == "fade" ){
            $(target).stop().fadeOut(speed);
        }
    }else if(wtt == "show"){
        if( htd == "slide" ){
            $(target).stop().slideDown(speed);
        }else if( htd == "fade" ){
            $(target).stop().fadeIn(speed);
        }
    }else if( wtt == "toggle" ){
        if( htd == "slide" ){
            $(target).stop().slideToggle(speed);
        }else if( htd == "fade" ){
            $(target).stop().fadeToggle(speed);
        }
    }
}

//zamezeni skorolovani
function bodyFreeze(){
    if( $body.hasClass("overflow") ){//vratit do puvodniho stavu
        var scrollLength = Math.abs(parseInt($body.css("top")));
        $body.removeClass("overflow").removeClass("fixed").css("top", 0);
         $("html, body").scrollTop(scrollLength);
    }else{//zmrazit skrolovani v dokumentu
        $body.css("top", -$window.scrollTop()).addClass("overflow");
    }
}


//timer
var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
    if (timers[uniqueId]) {
        clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
    };
})();
/* usage
$(window).resize(function () {
    waitForFinalEvent(function(){
      alert('Resize...');
      //...
    }, 500, "some unique string");
});
*/



//nacist obrazek jako pozadi 
function imgToBg(el){
    var $this = $(el),
        src = $this.attr("src"),
        currentSrc = $this[0].currentSrc,
        $imgToBg = $this.next(".imgToBg");

    if( $imgToBg.length<1 ){//vytvorit div imgToBg pokud neexistuje
        $this.after('<div class="imgToBg"></div>').hide();

        $imgToBg = $this.next(".imgToBg").css({
            "opacity"   : $this.css("opacity"),
            "z-index"   : $this.css("z-index")
        });
    }

    if ( typeof currentSrc === "undefined" ){//nepodporuje current src
        $imgToBg.css("background-image", "url("+src+")");
    }else{//moderni prohlizec podporujici srcset
        $imgToBg.css("background-image", "url("+currentSrc+")");
    }

    if( !$this.hasClass("load-fired") ){
        $this.addClass("load-fired").load(function(){
            imgToBg($this);
        });
    }
}


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

//progressive loading images
function loadHiddenImages(el){
    $(el).find("[data-src]")
    .each(function(){
        var $this = $(this),
            src = $this.attr("data-src"),
            sizes = $this.attr("data-sizes"),
            srcset = $this.attr("data-srcset");

        if (typeof sizes !== typeof undefined)
            $this.attr("sizes", sizes).removeAttr("data-sizes");

        if (typeof srcset !== typeof undefined)
            $this.attr("srcset", srcset).removeAttr("data-srcset");

        if (typeof src !== typeof undefined)
            $this.attr("src", src).removeAttr("data-src");
    });
}



//rozbalit vice textu
function showMoreInfo(event, element, target){
    event.preventDefault();
    var $this = $(element),
        toggleText = $this.attr("data-toggle-text"),
        offset = $target.offset().top + $this.outerHeight() - $window.height(),
        $target,
        oldHeight;

    if (typeof target !== 'undefined')
        $target = $(target);
    else{
        if (!typeof $this.attr("data-target") == typeof undefined || !$this.attr("data-target") == false)
            $target = $($this.attr("data-target"));//"data-darget"

        else if (!typeof $this.attr("href") == typeof undefined || !$this.attr("href") == false)
            $target = $($this.attr("href"));//"href"

        else{
            console.log("target neni definovany ani ve funkci, ani v 'href' ani v 'data-target'");
            return;
        }
    }

    if (!typeof toggleText == typeof undefined || !toggleText == false){
        $this.attr("data-toggle-text", $this.html()).html(toggleText);
    }

    oldHeight = $target.attr("data-height");

    $target.toggleClass("opened");

    if (typeof oldHeight == typeof undefined || oldHeight == false){
        $target.attr("data-height", $target.outerHeight());

        $target.stop().animate({
            height: $target[0].scrollHeight
        }, 200);
    }
    else{
        $target.removeAttr("data-height");

        $target.stop().animate({
            height: parseInt(oldHeight)
        }, 200, function(){
            $target.removeAttr("style");
        });
    }

    if( !$target.hasClass("opened") ){
        //console.log(offset);

        $("html,body").stop().animate({
            scrollTop: offset
        }, 200);
    }
}//pouziti onclick="showMoreInfo(event, element, $(this).next('.className'))" - pricemz 3. parametr se nemusi uvadet a muze to byt href nebo data-target



//zobrazit dalsi produkty/kategorie
function toggleChildren(element, target, event){
    event.preventDefault();
    
    var $target = $(target),
        $this = $(element),
        toggleText = $this.attr("data-toggle-text"),
        oldHeight = $target.attr("data-height"),
        elementPosition = $target.attr("data-scrollhere");

    if (typeof elementPosition == typeof undefined || elementPosition == false)
       $target.attr("data-scrollhere", $this.offset().top  + $this.outerHeight() - $window.height());

    //aktivni trida
    $target.toggleClass("isOpened");
    $this.toggleClass("isOpened");

    //nastavit vysku
    $target.height($target.outerHeight()).css("overflow", "hidden");

    //zmen text zobrazit vice/mene
    if (!typeof toggleText == typeof undefined || !toggleText == false){
        $this.attr("data-toggle-text", $this.html()).html(toggleText);
    }

    //zobrazit/schovat polozky
    var $items = $target.children(":hidden").addClass("hidden"),
        boxModel = $target.children(":visible").first().css("display");

    if( $items.length<1 )//schovej polozky
        $target.children(".hidden").hide();
    else//zobraz polozky
        $items.css("display", boxModel);

    //animuj vysku
    if (typeof oldHeight == typeof undefined || oldHeight == false){
        //new large height
        $target.attr("data-height", $target.outerHeight()).css({
            "-webkit-column-count"  : 1,
            "-moz-column-count"     : 1,
            "column-count"          : 1
        });//iOs column fix

        $target.animate({
            height: $target[0].scrollHeight
        }, 350, function(){
            $target.removeAttr("style");//odstranit vsechny inline styly
        });
    }else{//old small height
        $target.removeAttr("data-height");

        $("html, body").animate({
            scrollTop: parseInt($target.attr("data-scrollhere")) + 10
        }, 350);

        $target.animate({
            height: parseInt(oldHeight)
        }, 350, function(){
            $target.removeAttr("style").removeAttr("data-scrollhere");//odstranit vsechny inline styly
        });
    }
}

