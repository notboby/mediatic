angular
	.module('loginModule')
	.controller('LoginController', function($scope, $http, $window,loginService){
		
		
		
		$scope.connection = function(){
			

			loginService.connection($scope.login,$scope.pass)
			//$scope.connect = loginService.isConnected();
			
		};
		
		
		$scope.deconnection = function(){
			
			loginService.deconnection();
			//$scope.connect = loginService.isConnected();

		}
	});