(function() {
    var app = angular.module('skdebrug.admin.games', ['ngRoute']);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/games', {
                templateUrl: 'app/game/game.partial.html',
                controller: 'gameController',
                controllerAs: 'vm'
            }).
            when('/games/add', {
                templateUrl: 'app/game/add-game/add-game.partial.html',
                controller: 'addGameController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/games'
            });
        }
    ]);

})();
