(function ( $ ) {
			"use strict";

			$(function () {
				var masterslider_421c = new MasterSlider();

				// slider controls
				masterslider_421c.control('arrows'     ,{ autohide:true, overVideo:true  });				masterslider_421c.control('bullets'    ,{ autohide:false, overVideo:true, dir:'h', align:'bottom', space:5 , margin:10  });
				masterslider_421c.control('scrollbar'  ,{ autohide:true, overVideo:true, dir:'h', inset:true, align:'top', color:'#595959' , margin:10  , width:4 });
				// slider setup
				masterslider_421c.setup("MS55dea3316421c", {
						width           : 800,
						height          : 480,
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
						instantStartLayers:false,
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
						speed           : 20,
						dir             : "h",
						parallaxMode    : 'swipe',
						view            : "basic"
				});


				
				window.masterslider_instances = window.masterslider_instances || [];
				window.masterslider_instances.push( masterslider_421c );
			 });
			
		})(jQuery);

$(document).ready(function() {
 
  $("#owl-carousel").owlCarousel({
 
      //autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});