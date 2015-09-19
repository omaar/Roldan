//Mainh Function
$(document).ready(function() {

	masterSlider();

	owlCarousel();

	//Toggle Map
	$('#google-map-btn').click(function(){
		$('#map').slideToggle();
	});
	//Oculta Mapa
	$('#map').fadeOut();
	googleMaps();
});

/*******Plugins*******/

//Carousel Config
function owlCarousel() {
	$("#owl-carousel").owlCarousel({
 
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    stopOnHover : true,
 
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],

    responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window,

	// Navigation
    navigation : false,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,

    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme"
 
  });
};

//Master Slider Config
function masterSlider() {
	var masterslider_421c = new MasterSlider();

	// slider controls
	masterslider_421c.control('arrows'     ,{ autohide:true, overVideo:true  });				masterslider_421c.control('bullets'    ,{ autohide:false, overVideo:true, dir:'h', align:'bottom', space:5 , margin:10  });
	masterslider_421c.control('scrollbar'  ,{ autohide:true, overVideo:true, dir:'h', inset:true, align:'top', color:'#595959' , margin:10  , width:4 });
	// slider setup
	masterslider_421c.setup("MS55dea3316421c", {
			width           : 1400,
			height          : 580,
			minHeight       : 0,
			space           : 0,
			start           : 1,
			grabCursor      : true,
			swipe           : true,
			mouse           : true,
			keyboard        : false,
			layout          : "fullwidth",
			wheel           : false,
			autoplay        : true,
			instantStartLayers:true,
			loop            : true,
			shuffle         : false,
			preload         : 0,
			heightLimit     : true,
			autoHeight      : false,
			smoothHeight    : true,
			endPause        : false,
			overPause       : true,
			fillMode        : "fill",
			centerControls  : false,
			startOnAppear   : false,
			layersMode      : "center",
			autofillTarget  : "",
			hideLayers      : false,
			fullscreenMargin: 0,
			speed           : 10,
			dir             : "h",
			parallaxMode    : 'swipe',
			view            : "basic"
	});



	window.masterslider_instances = window.masterslider_instances || [];
	window.masterslider_instances.push( masterslider_421c );
};

//Google Maps Config
function googleMaps(){
	var LatLng = new google.maps.LatLng(19.4272643,-99.1269762);
	var mapOptions = {
		center: LatLng,
		image: 'https://raw.githubusercontent.com/Cheluber/Cheluber/develop/static/img/marker.png',
		scrollwheel: false,
		styles: [{ "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "elementType": "geometry.fill",   "stylers": [ { "color": "#424957" } ] },{ "elementType": "labels.text", "stylers": [ { "color": "#ffffff" }, { "weight": 0.1 } ] },{ "elementType": "labels.text.stroke", "stylers": [ { "color": "#000000" }, { "weight": 0.2 }, { "invert_lightness": true } ] },{ "featureType": "water", "stylers": [ { "color": "#445069" } ] },{ "featureType": "road.highway", "elementType": "geometry.stroke" }],
		zoom: 17,
	};
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var marker = new google.maps.Marker({
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: LatLng,
		map: map,
		icon: mapOptions.image,
		//title:"Tu estas aqui"
	});
};