angular.module('adherentsModule')
    .controller('AdherentsController', function($scope, adherentsService) {

        $scope.adherents = [];
        adherentsService.getAdherents().then(function(param){
                    $scope.adherents = param;
                });





                $scope.finCotisation = function(){



                    var dateDeb = $scope.datePaiementCotisation
                    if (dateDeb !== undefined){
                        dateDeb = dateDeb.split("-");
                        console.log(dateDeb);

                        var dateFin = new Date(dateDeb[1] +' '+ dateDeb[0] +' '+ dateDeb[2] );
                        $scope.dateFinAbonnement =
                        console.log($scope.dateFinAbonnement);

                    }







                }



                    return dateFin.setFullYear(dateDebut.getFullYear()+1);
                    console.log(dateFin);





    });
