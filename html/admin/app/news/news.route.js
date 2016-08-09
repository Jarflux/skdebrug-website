(function() {
    var app = angular.module('skdebrug.admin.news', ['ngRoute']);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/news', {
                templateUrl: 'app/news/news.partial.html',
                controller: 'newsController',
                controllerAs: 'vm'
            }).
            when('/news/add', {
                templateUrl: 'app/news/add-news/add-news.partial.html',
                controller: 'addNewsController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/news'
            });
        }
    ]);

})();
