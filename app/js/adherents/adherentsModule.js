angular.module('adherentsModule', ['ngRoute']);

angular.module('adherentsModule')
    .config(function($routeProvider) {
        $routeProvider.when('/adherents', {
            templateUrl: "html/adherents/adherents.html",
            controller: "AdherentsController"
        });
    })
