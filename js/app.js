(function() {
	var myApp = angular.module('myApp',['ngMap','ngRoute','venuetrackServices','sidebar','navbar']);

	myApp.controller('MainController', ['$scope', 'venuesAPI' , 
		
		function($scope, venuesAPI) {

			var venues = {};
			
			venues = venuesAPI.query();
	  	
		  	$scope.$on('mapInitialized', function(evt, evtMap) {
		    	$scope.map = evtMap;

		    	for (var i=0;i<venues.length;i++) {
	      		  	var latLng = {lat: venues[i].lat, lng: venues[i].lng};
		      		var marker = new google.maps.Marker({
		      			id: venues[i].id,
		      			title: venues[i].name,
		      			position: latLng,
		      			map: $scope.map,
		      			icon: venues[i].categories[0].icon.prefix+"bg_32"+venues[i].categories[0].icon.suffix
		      		});

	      			var contentString = '<h3>'+venues[i].name+'</h3>'+
										'<section ng-controller="PanelCtrl as panel">'+
											'<ul class="nav nav-tabs">'+
												'<li ng-class="{active:panel.isActive(1)}"><a href ng-click="panel.setTab(1)">Stats</a></li>'+
												'<li ng-class="{active:panel.isActive(2)}"><a href ng-click="panel.setTab(2)">Tips</a></li>	'+
											'</ul>'+
											'<div class="panel" ng-show="panel.isActive(1)">'+
												'<h4>Stats</h4>'+
												'<p><span ng-show="'+venues[i].location.address+'">'+venues[i].location.address+',</span> '+venues[i].location.postalCode+' '+venues[i].location.city+'</p>'+
												'<p>'+venues[i].photos.groups[0].items[0].prefix+'width160'+venues[i].photos.groups[0].items[0].suffix+'</p>'+
											'</div>'+
											'<div class="panel" ng-show="panel.isActive(2)">'+
												'<h4>Tips</h4>'+
													'Placeholder text for the tip. Placeholder text for the tip. Placeholder text for the tip. '+
													'<cite>-Paris Lagg</cite>'+
											'</div>'+
										'</section>';

					var infowindow = new google.maps.InfoWindow({
				    	content: contentString
					});

  
				    marker.addListener('click', function() {
				    	infowindow.open($scope.map, marker);
				  	});
		      	}

		    });

	}]);

	myApp.controller('VenueDetailCtrl', ['$scope', '$routeParams', 'venuesAPI', function($scope, $routeParams, venuesAPI) {
  		
  		$scope.activeVenue = venuesAPI.get({id: $routeParams.id}, function(venue) {
    	  		
  		});

	    $scope.focus = function() {
		      		latLng = {
		      			lat: $scope.activeVenue.lat,
		      			lng: $scope.activeVenue.lng
		      		};
			      	$scope.map.panTo(latLng);
		      	    $scope.map.setZoom(18);
					
		}

	}]);
	
	myApp.controller('PanelCtrl' , function() {
				this.tab = 1;

				this.isActive = function(check) {
					return this.tab === check;
				};

				this.setTab = function(selected) {
					this.tab = selected;
				};
	});			

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