angular.module('mediasModule', ['ngRoute']);

angular.module('mediasModule').config(function($routeProvider){
	
	$routeProvider.when('/medias', {
		controller : 'MediasController',
		templateUrl : 'html/medias/medias.html'
	});
	
});