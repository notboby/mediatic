angular
    .module('loginModule')
        .factory('loginService', function($http) {

        	var connect = false;
        	
            var loginService = {};
            
            loginService.isConnected(){
            	return connect;
            }

            loginService.connect(){
            	
            }
            
            loginService.disconnect(){
            	
            }

            var myUrl = 'http://192.168.10.12:8090/resource/adherent.recherche';


            var promise = $http.get(myUrl).then(function(response) {
                console.log(response.data);
                //then sera une promesse dont le retour sera le resultat de ce qui est à l'intérieur
                return response.data;

            }, function(response) {
                console.error("Erreur lors du chargement de la liste");
                console.error(response.status);
                return [];
            });

            adherentsService.getAdherents = function() {

                return promise;
            };
            return loginService;
        });
