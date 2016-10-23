(function () {
    var app = angular.module('skdebrug', ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/pasta.htm', {
                    redirectTo: '/pasta/index.html'
                });
        }
    ]);

})();
