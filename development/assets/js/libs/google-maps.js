// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {

    var position = {lat: 50.083765, lng: 14.419469},
        mapElement = document.getElementById('js-map');

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
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
        styles:
        [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    };

    //obsah okna
    var contentString = '<div class="window-map">'+
        '<strong class="window-map__title">Rakovnické Reality</strong>'+
        '<p>Husovo náměstí 2347, budova České spořitelny <br>269 01 Rakovník</p>'+
        '<ul>'+
            '<li><a href="tel:+420739166755"><i class="icon icon__map-tel"></i> +420 739 166 755</a></li>'+
            '<li><a href="mailto:info@rakovnickereality.cz"><i class="icon icon__map-mail"></i> info@rakovnickereality.cz</a></li>'+
        '</ul>'
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
        icon: image,
        title: 'Skořepka 8 - Fashion Boutique'
    });

    //infowindow
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 460
    });

    //otevri infowindow po kliku
    marker.addListener('click', function() {
        //infowindow.open(map, marker);
    });

    //otevri infowindow automaticky po nacteni
    //infowindow.open(map, marker);
}

/*setTimeout(function(){//opravi chzbu v safari (nenacita mapa pres celu blok)
   google.maps.event.trigger(window,'resize',{});
}, 600);*/


            
