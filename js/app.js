(function() {
	var myApp = angular.module('myApp',['venue']);

	myApp.controller('MainController', ['$scope', '$http' , 
		function($scope, $http) {

			$http.get('endpoints?what=venues').success(function(data) {    
	    	
	    	$scope.venues = data;
	    
	    });

	}]);

})();