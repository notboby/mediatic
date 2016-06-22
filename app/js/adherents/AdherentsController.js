angular.module('adherentsModule')
    .controller('AdherentsController', function($scope, $http, $window, adherentsService, DTOptionsBuilder /*, DTColumnDefBuilder*/ ) {


            $scope.adherent = [];
            $scope.adherents = [];
            adherentsService.getAdherents().then(function(param) {
                $scope.adherents = param;
            });

            $scope.calculAge = function() {
                var dateNaiss = $scope.adherent.date_naissance;
                if (dateNaiss !== undefined) {
                    dateNaiss = dateNaiss.split("/");


                    var dateNaissFormat = new Date(dateNaiss[1] + ' ' + dateNaiss[0] + ' ' + dateNaiss[2]);

                    var ageDifMs = Date.now() - dateNaissFormat.getTime();
                    var ageDate = new Date(ageDifMs);
                    var ageFinal = Math.abs(ageDate.getUTCFullYear() - 1970);
                    $scope.adherent.age = ageFinal;


                }
            }


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



            $scope.finCotisation = function() {
                var dateDeb = $scope.adherent.datePaiementCotisation
                if (dateDeb !== undefined) {
                    dateDeb = dateDeb.split("/");
                    var dateDebFormat = new Date(dateDeb[1] + ' ' + dateDeb[0] + ' ' + dateDeb[2]);
                    var dateFinAbonnement = new Date(dateDebFormat.setFullYear(dateDebFormat.getFullYear() + 1));
                    $scope.adherent.dateFinAbonnement = dateFinAbonnement.toLocaleDateString();

                }


            }
            
            $scope.ajout = function(){

    			
    			var UrlCreation = 'http://192.168.10.12:8090/resource/adherant.creation';
    			$http.post(UrlCreation,
    					{
    				nom:$scope.adherent.nom, 
    				prenom:$scope.adherent.prenom, 
    				date_naissance:$scope.adherent.date_naissance,
    				email:$scope.adherent.email,
    				adresse:{
    						ligne1:$scope.adherent.adresse.ligne1,
    						ligne2:'',
    						codepostal:$scope.adherent.adresse.codepostal,
    						ville:$scope.adherent.adresse.ville
    					},
    				cotisation:{
    					"debut":"2016-01-01T00:00:00.000Z",
    					"fin":"2017-01-01T00:00:00:.000Z",
    					"montant":2
    				},
    				"age": $scope.adherent.age,
    				"emprunt":[]
    				}
    					).then(function(response){

    						console.log("OK fiche adherant  creation!!!!!");
    						console.log(response.data);
    						
    					}, function(response){
    						console.log($scope.adherent);
    						console.error('Erreur de connexion lors de la création d\'un media', response);
    						//$http.defaults.headers.common.authorization = 'Basic ';
    					});
    	}


    });
