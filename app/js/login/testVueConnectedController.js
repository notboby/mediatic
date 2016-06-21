angular
	.module('loginModule')
	.controller('testVueConnectedController', function($scope,loginService){
		$scope.connect = function(){
			return loginService.isConnected();
		}
		$scope.connection = function(){
			
			loginService.connection($scope.login,$scope.pass)
			$scope.connect = loginService.isConnected();
			
		};
		
		
		$scope.deconnection = function(){
			
			loginService.deconnection();
			$scope.connect = loginService.isConnected();

		}
	});