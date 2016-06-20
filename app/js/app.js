<<<<<<< Updated upstream
<<<<<<< Updated upstream
angular.module('mediatic', ['ngRoute', 'datatables','adherentsModule','mediasModule','loginModule']);


=======
angular.module('mediatic', ['ngRoute', 'datatables', 'datatables.bootstrap', 'adherentsModule', 'mediasModule']);
>>>>>>> Stashed changes
=======
angular.module('mediatic', ['ngRoute', 'datatables', 'datatables.bootstrap', 'adherentsModule', 'mediasModule']);
>>>>>>> Stashed changes

angular.module('mediatic')
    .config(function($routeProvider, $httpProvider) {

        $routeProvider.otherwise('/');

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


    });

<<<<<<< Updated upstream
=======

    });

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======

    });

>>>>>>> Stashed changes
angular.module('mediatic').run(function(DTDefaultOptions) {
    DTDefaultOptions.setLanguageSource('../dist/French.json');
});
