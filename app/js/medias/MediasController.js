angular
	.module('mediasModule')
	.controller('MediasController', function($scope,$http){
		
		$scope.mediasModule = [];
		
		var myUrl = 'http://192.168.10.12:8090/resource/media.recherche';
		$http.get(myUrl).then(function(response){
			$scope.list = response.data;
			console.log(response.data);
		}, function(response){
			console.error('Erreur de chargement des medias');
		});
		
		
		
		$scope.ajout = function(){
			
			console.log("test fiche medias");
			
			var myUrl = 'http://192.168.10.12:8090/resource/media.creation'
			$http.post(myUrl,
					{titre:$scope.titre, auteur:$scope.auteur, type:$scope.type} 
					).then(function(response){

						console.log("OK§§§§!!!!!");
						console.log(response.data);
						
					}, function(response){
						console.error('Erreur de connexion', response);
						$http.defaults.headers.common.authorization = 'Basic ';
					});
	}
		
		
});


angular.module('showcase.rowClickEvent', ['datatables'])
.controller('RowClickEventCtrl', RowClickEventCtrl);

function RowClickEventCtrl($scope, DTOptionsBuilder, DTColumnBuilder) {
	console.log("O sa marche");

}


