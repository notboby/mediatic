angular.module('adherentsModule')
    .controller('AdherentsController', function($scope, $window, adherentsService, DTOptionsBuilder/*, DTColumnDefBuilder*/) {


        window.MY_SCOPE = $scope;

        //On obtient les adherents via l'url
        $scope.adherents = [];
        adherentsService.getAdherents().then(function(param){
                  $scope.adherents = param;
        });




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




        /*      $scope.dtOptions = DTOptionsBuilder.newOptions().withColumnFilter({
                aoColumns: [ { type: "text"},
                                        { type: "text"},
                                        { type: "text"},
                                        { type: "text"},
                                        { type: "text"}
                                      ]
            });*/
        /*
        }
        function addPerson() {

        }
        function modifyPerson(index) {
                  $window.location.href = '#/medias';
        }/*
        $scope.removePerson = function removePerson(index) {
        	$scope.adherents.splice(index, 1);
        }*/
});
