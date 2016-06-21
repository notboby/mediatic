angular
	.module('mediasModule')
	.controller('MediasController', function($scope,$http){
		
		$scope.list = [];
		
		$scope.listeMedia = ["CD", "Livre", "DVD"];
		
		
		var myUrl = 'http://192.168.10.12:8090/resource/media.recherche';
		$http.get(myUrl).then(function(response){
			$scope.list = response.data;
			console.log(response.data);
		}, function(response){
			console.error('Erreur de chargement des medias');
		});
		
			
		$scope.ajout = function(){
			
			console.log("test fiche medias", $scope.type);
			
			var UrlCreation = 'http://192.168.10.12:8090/resource/media.creation';
			$http.post(UrlCreation,
					{titre:$scope.titre, type:$scope.type, auteur:$scope.auteur} 
					).then(function(response){

						console.log("OK fiche media creation!!!!!");
						console.log(response.data);
						
					}, function(response){
						console.log($scope.type);
						console.log($scope.auteur);
						console.log($scope.titre);
						console.error('Erreur de connexion lors de la création d\'un media', response);
						$http.defaults.headers.common.authorization = 'Basic ';
					});
	}
		
		
});


