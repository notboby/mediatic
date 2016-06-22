angular.module('adherentsModule')

.controller('AdherentsController', function($scope, $window, $rootScope, adherentsService, DTOptionsBuilder) {

    $rootScope.pageActive = "adherents";
    $scope.adherents = [];

    adherentsService.getAdherents().then(function(param) {
        $scope.adherents = param;
    });

    //ajoute une option de 'rowCallback'
    $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('rowCallback', rowCallback);

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
});
