angular.module('ficheMedia').controller('', 
	['$scope',
	 '$routeParams',
	 '$http',
	 function($scope, $routeParams, $http){
		var id=5;
	//	var id = $routeParams.ref;
		var url = 'http://192.168.10.27:8090/resource/media.recherche/'
					+id;
		
		$http.get(url).then(function(resultat){
			$scope.livre = resultat.data;
		}, function (){
			console.error('Erreur');
			$scope
		});
		
	}]);