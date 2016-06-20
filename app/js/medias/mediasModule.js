angular.module('mediasModule', ['ngRoute']);

angular.module('mediasModule').config(function($routeProvider){
	
	$routeProvider.when('/medias', {
		controller : 'MediasController',
		templateUrl : 'html/medias/medias.html'
	});
	
	$routeProvider.when('/ficheMedias', {
		controller : 'MediasController',
		templateUrl : 'html/medias/ficheMedia.html'
	});
	
});