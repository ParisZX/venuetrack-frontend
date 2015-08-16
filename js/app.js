(function() {
	var myApp = angular.module('myApp',['ngMap','ngRoute','venue','sidebar']);

	myApp.controller('MainController', ['$scope', '$http' , 
		
		function($scope, $http) {

			var apiData = 'endpoints?what=venues';
			var localData = 'data/data.json';
			$scope.venues = [];
			$http.get(localData).success(function(data) {    
	    		$scope.venues = data;
	    	});

			var map;
	  	
		  	$scope.$on('mapInitialized', function(evt, evtMap) {
		    	map = evtMap;
		    });


		    $scope.focusTo = function(venue) {
		      		latLng = {
		      			lat: venue.lat,
		      			lng: venue.lng
		      		};
			      	map.panTo(latLng);
		      	    map.setZoom(18);
			}

	}]).
	config(['$routeProvider', function($routeProvider) {
  		$routeProvider.
			when("/venues", {templateUrl: "partials/venues.html"}).
			when("/venues/:id", {templateUrl: "partials/venue.html", controller: "VenueController"}).
			otherwise({redirectTo: '/venues'});
	}]);;

})();