angular
	.module('mediasModule')
	.controller('MediasController', function($scope,$http){
		
		$scope.mediasModule = [];
		
		var myUrl = 'http://192.168.10.27:8090/resource/media.recherche';
		$http.get(myUrl).then(function(response){
			$scope.list = response.data;
			console.log(response.data);
		}, function(response){
			console.error('Erreur de chargement des medias');
		});
		
		//$scope.

		
		
		
	});