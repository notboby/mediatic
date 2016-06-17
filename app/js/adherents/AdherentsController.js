angular.module('adherentsModule')
    .controller('AdherentsController', function($scope, adherentsService) {

        $scope.adherents = [];
        adherentsService.getAdherents().then(function(param){
                    $scope.adherents = param;
                });



    });
