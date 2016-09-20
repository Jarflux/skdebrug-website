(function () {
    var app = angular.module('skdebrug.pasta.registration', ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/pasta', {
                    templateUrl: 'app/pasta.partial.html',
                    controller: 'registrationController',
                    controllerAs: 'vm'
                });
        }
    ]);

})();
