(function() {

	var myApp = angular.module('venueDetails', []);

	myApp.directive('venueDetails', function(){

		return {

			restrict: 'E',
			templateUrl: 'partials/venue-details.html'

			}
		});


})();