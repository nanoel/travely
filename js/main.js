;(function($) {
	"use strict";

	function initMap() {

	        var mapBlock = document.querySelector('.ba-map'),
	            address = mapBlock.innerHTML;

	        var roma = {
	            lat: 41.902783,
	            lng: 12.496366
	        };

	        var paris = {
	            lat: 48.856614,
	            lng: 2.352222
	        };

	        var madrid = {
	            lat: 40.416775,
	            lng: -3.703790
	        };


	        var baMap = new google.maps.Map(mapBlock, {
	            zoom: 5,
	            center: roma,
	            disableDefaultUI: true,
	            styles: [
	                {
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "color": "#f5f5f5 "
	                        }
	                    ]
	                },
	                {
	                    "elementType": "labels.icon",
	                    "stylers": [
	                        {
	                            "visibility": "off"
	                        }
	                    ]
	                },
	                {
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        {
	                            "color": "#616161 "
	                        }
	                    ]
	                },
	                {
	                    "elementType": "labels.text.stroke",
	                    "stylers": [
	                        {
	                            "color": "#f5f5f5 "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "administrative.land_parcel",
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        {
	                            "color": "#bdbdbd "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "color": "#eeeeee "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi",
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        {
	                            "color": "#757575 "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.park",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "color": "#e5e5e5 "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "poi.park",
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        {
	                            "color": "#9e9e9e "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "color": "#ffffff "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road.arterial",
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        {
	                            "color": "#757575 "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road.highway",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "color": "#dadada "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road.highway",
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        {
	                            "color": "#616161 "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "road.local",
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        {
	                            "color": "#9e9e9e "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "transit.line",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "color": "#e5e5e5 "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "transit.station",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "color": "#eeeeee "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "water",
	                    "elementType": "geometry",
	                    "stylers": [
	                        {
	                            "color": "#c9c9c9 "
	                        }
	                    ]
	                },
	                {
	                    "featureType": "water",
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        {
	                            "color": "#9e9e9e "
	                        }
	                    ]
	                }
	            ]
	        });

	        var marker = new google.maps.Marker({
	         position: paris,
	         map: baMap,
	         animation: google.maps.Animation.DROP,
	         icon: '../img/marker.png'
	                });

	                var marker2 = new google.maps.Marker({
	         position: madrid,
	         map: baMap,
	         animation: google.maps.Animation.DROP,
	         icon: '../img/marker.png'
	                });

	                var marker3 = new google.maps.Marker({
	         position: roma,
	         map: baMap,
	         animation: google.maps.Animation.DROP,
	         icon: '../img/marker.png'
	       });
	    }


	var worksSlider = $('.ba-slider');
	worksSlider.slick({
		slide: '.ba-slidde',
		prevArrow: '.ba-slider-prev',
		nextArrow: '.ba-slider-next',
		 // infinite: true,
		 speed: 300,
		 // slidesToShow: 1,
		 variableWidth: true

	});

	window.onload = initMap;

})(jQuery);
