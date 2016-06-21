angular.module('adherentsModule')
    .controller('AdherentsController', function($scope, adherentsService) {

        $scope.adherents = [];
        adherentsService.getAdherents().then(function(param) {
            $scope.adherents = param;
        });

        $scope.calculAge = function() {
            var dateNaiss = $scope.dateNaissance;
            if (dateNaiss !== undefined) {
                dateNaiss = dateNaiss.split("/");

                var dateNaissFormat = new Date(dateNaiss[1] + ' ' + dateNaiss[0] + ' ' + dateNaiss[2]);

                var ageDifMs = Date.now() - dateNaissFormat.getTime();
                var ageDate = new Date(ageDifMs);
                var ageFinal = Math.abs(ageDate.getUTCFullYear() - 1970);
                $scope.age = ageFinal;

            }

        }

        $scope.finCotisation = function() {
            var dateDeb = $scope.datePaiementCotisation
            if (dateDeb !== undefined) {
                dateDeb = dateDeb.split("/");

                var dateDebFormat = new Date(dateDeb[1] + ' ' + dateDeb[0] + ' ' + dateDeb[2]);

                var dateFinAbonnement = new Date(dateDebFormat.setFullYear(dateDebFormat.getFullYear() + 1));

                $scope.dateFinAbonnement = dateFinAbonnement.toLocaleDateString();

            }
        }

    });
