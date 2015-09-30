$(document).ready(function() {
    googleMaps();
});

function googleMaps() {
    var LatLngUno = new google.maps.LatLng(19.4272643, -99.1269762);
    var LatLngDos = new google.maps.LatLng(18.809719,-99.2372061);
    var mapOptions = {
        center: new google.maps.LatLng(19.1045476,-98.6844565),
        image: 'https://raw.githubusercontent.com/Cheluber/Cheluber/develop/static/img/marker.png',
        scrollwheel: false,
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
        zoom: 10,
    };
    var map = new google.maps.Map(document.getElementById('map-contact'), mapOptions);
    var marker = new google.maps.Marker({
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: LatLngUno,
        map: map,
        icon: mapOptions.image,
    });
    var markerDos = new google.maps.Marker({
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: LatLngDos,
        map: map,
        icon: mapOptions.image,
    });
};