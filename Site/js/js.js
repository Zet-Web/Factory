
$(document).ready(function() {
 /* $('.dropdown').tendina();*/

   /* $('.window').windows({
        snapping: true,
        snapSpeed: 500,
        snapInterval: 1100,
        onScroll: function(scrollPos){
            // scrollPos:Number
        },
        onSnapComplete: function($el){
            // after window ($el) snaps into place
        },
        onWindowEnter: function($el){
            // when new window ($el) enters viewport
        }
    });
    */



}); // /.document-ready

// (function () {
//     var inputs;
//     inputs = document.querySelectorAll('.form-file');
//     Array.prototype.forEach.call(inputs, function (input) {
//         var label, labelVal;
//         label = input.nextElementSibling;
//         labelVal = label.innerHTML;
//         return input.addEventListener('change', function (e) {
//             var fileName;
//             fileName = e.target.value.split('\\').pop();
//             if (fileName) {
//                 return label.querySelector('span').innerHTML = fileName;
//             } else {
//                 return label.innerHTML = labelVal;
//             }
//         });
//     });
//     input.addEventListener('focus', function () {
//         return input.classList.add('has-focus');
//     });
//     input.addEventListener('blur', function () {
//         return input.classList.remove('has-focus');
//     });
// }.call(this));



/* Function to animate height: auto */
function autoHeightAnimate(element, time){
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight }, parseInt(time)); // Animate to Auto Height
}




$(window).resize(function(){

});




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
    {name: "Factory-group"});

    var myLatlng = new google.maps.LatLng( 55.812045, 37.834150);

    var mapOptions = {
    zoom: 18,
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
    title:"Factory-group",
    icon: "images/pins.png"
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

