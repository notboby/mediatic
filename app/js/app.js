angular.module('mediatic', ['ngRoute', 'datatables','adherentsModule']);

angular.module('mediatic')
    .config(function($routeProvider, $httpProvider) {

        $routeProvider.otherwise('/');

        //$httpProvider.defaults.header.post['Content-Type'] = 'application/x-www-form-urlencoded';

});
