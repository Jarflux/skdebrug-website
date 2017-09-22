(function () {
    var app = angular.module('skdebrug.admin.overview', ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/index', {
                    templateUrl: 'app/overview/overview.partial.html',
                    controller: 'overviewController',
                    controllerAs: 'vm'
                });
        }
    ]);

})();