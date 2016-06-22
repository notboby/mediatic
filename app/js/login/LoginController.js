angular
	.module('loginModule')
	.controller('LoginController', function($scope, $http, $rootScope, $window,loginService){
    	$rootScope.pageActive = "login";

		$scope.connection = function(){			
			loginService.connection($scope.login,$scope.pass)			
		};
		
		
		$scope.deconnection = function(){			
			loginService.deconnection();
		}
		
		$scope.isActive = function(route){
			return route === $scope.pageActive;
		}
	});