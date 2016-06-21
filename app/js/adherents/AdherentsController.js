angular.module('adherentsModule')
    .controller('AdherentsController', function($scope, $window, adherentsService, DTOptionsBuilder/*, DTColumnDefBuilder*/) {


        window.MY_SCOPE = $scope;

        //On obtient les adherents via l'url
        $scope.adherents = [];
        adherentsService.getAdherents().then(function(param){
                  $scope.adherents = param;
        });


        $scope.adherent = [];

        //ajoute une option 'rowCallback'
        $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('rowCallback',rowCallback);



        //permet d'acceder à la fiche de la ligne correspondante
        function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
          // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
          $('td', nRow).unbind('click');
          $('td', nRow).bind('click', function() {
              $scope.$apply(function() {
                $window.location.href = '#/ficheAdherent/' + aData[0];
              });
          });
          return nRow;
      }

console.log('test2');

                $scope.finCotisation = function(){


                  console.log('test');
                    var dateDeb = $scope.adherent.datePaiementCotisation;
                    var str = dateDeb.split('-');
                    var annee = parseInt(str[2])+1;

                    var dateFin = str[1] + '-' + str[0] + '-' + annee;

                  /*  if (dateDeb !== undefined){
                        dateDeb = dateDeb.split("-");
                        console.log(dateDeb);

                        var dateFin = new Date(dateDeb[1] +' '+ dateDeb[0] +' '+ dateDeb[2] );
                        $scope.dateFinAbonnement =
                        console.log($scope.dateFinAbonnement);

                    }*/







                }






    });
