angular
	.module('loginModule')
	.controller('testVueConnectedController', function($scope,loginService){
		$scope.adminConnect = function(){
			return loginService.adminIsConnected();
		}
		
		$scope.etudientConnect = function(){
			return loginService.etudientIsConnected();
		}
		
	});