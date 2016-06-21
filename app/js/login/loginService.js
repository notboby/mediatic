angular
    .module('loginModule')
        .factory('loginService', function($http) {

        	var connect = false;
        	
        var loginService = {};
            
            loginService.isConnected = function(){
            	return connect;
            }


           loginService.connection = function(login,pass){
    			console.log("test1");
    			
    				
    			var myUrl = 'http://192.168.10.12:8090/resource/connexion.login';
    			$http.post(myUrl,
    					{login:login, mdp:pass} 
   					).then(function(response){
    						var crypt = 'Basic ' + btoa(login+':'+pass);
    						$http.defaults.headers.common['Authorization']=crypt;
    						console.log(crypt);
   						connect = true;
   						console.log(connect);
   						console.log("connected");
    						
    						document.location.href=" #/medias";	
   						
    					}, function(response){
    						console.error('Erreur de connexion', response);
    						$http.defaults.headers.common['Authorization'] = 'Basic ';
    						connect = false;
    						console.log(connect);

    					});
    		};
    		
    		loginService.deconnection = function(){
   			
   			
  				$http.defaults.headers.common['Authorization'] = 'Basic ';
  				document.location.href=" #/login";	
  				connect = false;
				console.log(connect);
				console.log("disconnected");
    		}
    		
            return loginService;
        });
