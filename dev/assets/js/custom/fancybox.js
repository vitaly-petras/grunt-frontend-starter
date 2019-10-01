$(function() {
  var fancyboxIsLoaded = false;
  var fancyboxISloading = false;

  $("[data-fancybox]").one("click mouseenter", function(event) {
    var loadFancybox = function() {
      //load css
      var head = document.getElementsByTagName("head")[0];
      var link = document.createElement("link");
      link.id = "fancybox-css";
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"; //"/assets/css/fancybox.css";
      link.media = "all";
      $(head).prepend(link);

      //load script
      var resource = document.createElement("script");
      resource.async = "true";
      resource.src = "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"; //"/assets/js/fancybox.js";
      resource.id = "fancybox-js";
      var script = document.getElementsByTagName("script")[0];
      script.parentNode.insertBefore(resource, script);
    };

    var setupFancybox = function() {
      $("[data-fancybox]").fancybox({
        //backFocus: false
      });
    };

    var isFancyboxLoaded = function() {
      return !fancyboxIsLoaded && !fancyboxISloading ? false : true;
    };

    var startFancybox = function() {
      fancyboxIsLoaded = true;

      //nepokracuj pokud css nebo js neni nacteny
      setupFancybox();
      if (event.type === "click") {
        $(event.target).click();
        $(window).resize();
      }
      return true;
    };

    if (event.type === "click" && isFancyboxLoaded() === false) event.preventDefault();

    if (isFancyboxLoaded() === false) {
      loadFancybox();
      fancyboxISloading = true;

      $("#fancybox-css").on("load", function() {
        if (isFancyboxLoaded()) startFancybox();
      });

      $("#fancybox-js").on("load", function() {
        if (isFancyboxLoaded()) startFancybox();
      });
    }
  });
});
