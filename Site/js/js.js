
$(document).ready(function() {
  $('.dropdown').tendina();

}); // /.document-ready


/* Function to animate height: auto */
function autoHeightAnimate(element, time){
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight }, parseInt(time)); // Animate to Auto Height
}




$(window).resize(function(){

});



/*
function detectmob() {
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
    return true;
    }
    else {
    return false;
    }
    }
var mob = detectmob();
function initialize() {
    var styles = [ { "stylers": [ { saturation: -100 } ] } ];
    var styledMap = new google.maps.StyledMapType(styles,
    {name: "Stirka.ru"});

    var myLatlng = new google.maps.LatLng( 55.773230, 37.590044);

    var mapOptions = {
    zoom: 15,
    center: myLatlng,
    scrollwheel : false,
    draggable: (mob?false:true),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('myMap'), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var goldStar = {
    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
    scale: 5,
    strokeColor: "black",
    strokeWeight: 3
    };


    var marker = new google.maps.Marker({
    position: myLatlng,
    fillColor: "yellow",
    map: map,
    title:"Stirka.ru",
    icon: "images/icon-pins.png"
    })
    }
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
    'callback=initialize';
    document.body.appendChild(script);
    }

window.onload = loadScript;
*/
