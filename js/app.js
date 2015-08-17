(function() {
	var myApp = angular.module('myApp',['ngMap','ngRoute','venuetrackServices','venueDetails','sidebar','navbar']);

	myApp.controller('MainController', ['$scope', 'venuesAPI' , 
		
		function($scope, venuesAPI) {

			$scope.venues = venuesAPI.query();

			var map;
	  	
		  	$scope.$on('mapInitialized', function(evt, evtMap) {
		    	map = evtMap;
		    });

	}]);

	myApp.controller('VenueDetailCtrl', ['$scope', '$routeParams', 'venuesAPI', function($scope, $routeParams, venuesAPI) {
  		
  		$scope.activeVenue = venuesAPI.get({id: $routeParams.id}, function(venue) {
    	  		
  		});

}]);

	myApp.config(['$routeProvider', function($routeProvider) {
  		$routeProvider.
			when("/venues", {
				templateUrl: 'partials/venues.html'
			}).
			when("/venues/:id", {
				templateUrl: 'partials/venue.html',
				controller: 'VenueDetailCtrl'
			}).
			otherwise({redirectTo: '/venues'});
	}]);;

})();