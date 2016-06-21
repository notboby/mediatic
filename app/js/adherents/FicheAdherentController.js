angular
	.module('adherentsModule')
	.controller('FicheAdherentController', function($scope, $routeParams, ficheAdherentService) {
		console.log('test30');
		var id = $routeParams.ref;

		ficheAdherentService.getAdherent(id).then(function(param){
			$scope.adherent = param;
			console.log($scope.adherent);
		});

});
