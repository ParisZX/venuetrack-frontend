'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'ngMap'
]);

myApp.controller('VenueListCtrl', ['$scope', '$http', function($scope, $http) {
  	$http.get('js/data.json').success(function(data) {    
	    $scope.venues = data;
	});

  	$scope.sort = 'orderby';
}]);