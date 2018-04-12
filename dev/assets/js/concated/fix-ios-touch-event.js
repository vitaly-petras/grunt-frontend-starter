// detect iOs devices and fix touch event
if(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
  document.addEventListener("touchstart", function() {},false);//hover event pro dotykova zarizeni