(function() {
	var myApp = angular.module('myApp',['ngMap','venue']);

	myApp.controller('MainController', ['$scope', '$http' , 
		
		function($scope, $http) {

			var apiData = 'endpoints?what=venues';
			var localData = 'data/data.json';
			var venues = [];
			$http.get(localData).success(function(data) {    
	    		venues = data;
	    	});

			var map;
	  	
		  	$scope.$on('mapInitialized', function(evt, evtMap) {
		    	map = evtMap;
		      	for (var i=0;i<venues.length;i++) {
	      		  	var latLng = {lat: venues[i].lat, lng: venues[i].lng};
		      		var marker = new google.maps.Marker({
		      			title: venues[i].name,
		      			position: latLng,
		      			map: map,
		      			icon: venues[i].categories[0].icon.prefix+"bg_32"+venues[i].categories[0].icon.suffix
		      		});
		      	}

		      	var contentString ='<venue-details></venue-details>';


				 
			  	
				
			   	
		    });

	}]);

})();