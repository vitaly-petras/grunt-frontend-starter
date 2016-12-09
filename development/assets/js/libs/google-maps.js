// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {

    var position = {lat: 49.938434, lng: 14.265488},
        mapElement = document.getElementById('js-map');

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)
        center: position,
        mapTypeControl: false,
        //zoomControl: false,
        streetViewControl: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        panControl: false,
        /*zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
        },*/
        //styly mapy (sazzymaps)
    };

   //obsah okna
    var contentString = '<div class="window-map">'+
        '<p><strong>D&D reality - Petr Dvořák</strong></p>'+
        '<p>ul. K Třešňovce 1091 Karlík 252 29</p>'+
        '<p>IČ: 74842439</p><br>'+

        '<p><strong>Telefon:</strong></p>'+
        '<p><a href="tel:+420724036677"class="no-link-styles">+420 724 036 677</a></p>'+
        '<p><a href="tel:+420602266783"class="no-link-styles">+420 602 266 783</a></p><br>'+
        '<p><strong>Email:</strong></p>'+
        '<p><a href="mailto:dvorak-real@volny.cz" class="no-link-styles">dvorak-real@volny.cz</a></p>'+
    '</div>';

    //obrazek
    var image = {
        url: "assets/images/web/map-point.png",
        // This marker is 20 pixels wide by 32 pixels tall.
        size: new google.maps.Size(72, 72),
        // The origin for this image is 0,0.
        origin: new google.maps.Point(0,0),
        // The anchor for this image is the base of the flagpole at 0,32.
        anchor: new google.maps.Point(36, 72)//x = prostredek obrazku (spicky); y = cela vyska obrazku
    };

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    //resize window will center the map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    }); 

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: position, 
        map: map,
        //icon: image,
        title: 'dd-reality'
    });

    //infowindow
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 460
    });

    //otevri infowindow po kliku
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    //otevri infowindow automaticky po nacteni
    infowindow.open(map, marker);
}

/*setTimeout(function(){//opravi chzbu v safari (nenacita mapa pres celu blok)
   google.maps.event.trigger(window,'resize',{});
}, 600);*/


            
