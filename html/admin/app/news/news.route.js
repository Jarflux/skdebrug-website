(function () {
    var app = angular.module('skdebrug.admin.news', ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/news', {
                    templateUrl: 'app/news/list-news/list-news.partial.html',
                    controller: 'listNewsController',
                    controllerAs: 'vm'
                }).
                when('/news/:newsId', {
                    templateUrl: 'app/news/edit-news/edit-news.partial.html',
                    controller: 'editNewsController',
                    controllerAs: 'vm'
                }).
                when('/news/add', {
                    templateUrl: 'app/news/add-news/add-news.partial.html',
                    controller: 'addNewsController',
                    controllerAs: 'vm'
                });
        }
    ]);

})();
