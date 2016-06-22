angular
	.module('loginModule')
	.controller('LoginController', function($scope, $http, $rootScope, $window,loginService){
    	$rootScope.pageActive = "login";
		
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
		
		$scope.isActive = function(route){
			return route === $scope.pageActive;
		}
	});