'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'ngMap',
  'myAppControllers'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/venues', {
        templateUrl: 'partials/venues-list.html',
        controller: 'VenueListCtrl'
      }).
      when('/venues/:venueName', {
        templateUrl: 'partials/venue-detail.html',
        controller: 'VenueDetailCtrl'
      }).
      otherwise({
        redirectTo: '/venues'
      });
}]);