angular
	.module('loginModule')
	.controller('LoginController', function($scope,$http){
		
		$scope.mediasModule = [];
		
		
		//$scope.

		$scope.connection = function(){
			var login = $scope.login;
			var pass = $scope.pass;
			console.log("test1");
			
			var myUrl = 'http://192.168.10.12:8090/resource/connexion.login';
			$http.post(myUrl,{login:login, mdp:pass}, {headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then(function(response){
				$scope.list = response.data;
				console.log(response.data);
			}, function(response){
				console.error('Erreur de chargement des medias');
			});
		}
		
		
	});