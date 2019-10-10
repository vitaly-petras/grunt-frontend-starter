$(function() {
  function doFancyboxFunctions(event) {
    var loadFancybox = function() {
      if ($("#fancybox-css").length < 1) {
        //load css
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");
        link.id = "fancybox-css";
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"; //"/assets/css/fancybox.css";
        link.media = "all";
        $(head).prepend(link);
      }

      if ($("#fancybox-js").length < 1) {
        //load script
        var resource = document.createElement("script");
        resource.async = "true";
        resource.src = "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"; //"/assets/js/fancybox.js";
        resource.id = "fancybox-js";
        var script = document.getElementsByTagName("script")[0];
        script.parentNode.insertBefore(resource, script);
      }
    };

    var setupFancybox = function() {
      $("[data-fancybox]").fancybox({
        backFocus: false
      });
    };

    var isFancyboxLoaded = function() {
      return $("html").hasClass("fancybox-css-loaded") && $("html").hasClass("fancybox-js-loaded");
    };

    var startFancybox = function() {
      $("html").addClass("fancybox-is-loaded");

      //nepokracuj pokud css nebo js neni nacteny
      setupFancybox();
      if (event && event.type === "click") {
        $(event.target).click();
        $(window).resize();
      }
      return true;
    };

    if (event && event.type === "click" && isFancyboxLoaded() === false) event.preventDefault();

    if (!isFancyboxLoaded()) {
      loadFancybox();

      $("#fancybox-css").on("load", function() {
        $("html").addClass("fancybox-css-loaded");
        if (isFancyboxLoaded()) startFancybox();
      });

      $("#fancybox-js").on("load", function() {
        $("html").addClass("fancybox-js-loaded");
        if (isFancyboxLoaded()) startFancybox();
      });
    }
  }

  $("[data-fancybox]").one("click mouseenter", function(event) {
    doFancyboxFunctions(event);
  });

  if (window.location.hash) {
    doFancyboxFunctions();
  }
});
