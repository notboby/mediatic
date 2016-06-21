angular
	.module('loginModule')
	.controller('LoginController', function($scope, $http, $window){
		
		$scope.connection = function(){
			console.log("test1", $scope);
			
			var myUrl = 'http://192.168.10.12:8090/resource/connexion.login';
			$http.post(myUrl,
					{login:$scope.login, mdp:$scope.pass} 
					).then(function(response){
						var crypt = 'Basic ' + btoa($scope.login+':'+$scope.pass);
						$http.defaults.headers.common['Authorization']=crypt;
						$window.location.href = '#/adherents';
						console.log(crypt);
						
					}, function(response){
						console.error('Erreur de connexion', response);
						$http.defaults.headers.common.authorization = 'Basic ';
					});
		};
		
		
	});