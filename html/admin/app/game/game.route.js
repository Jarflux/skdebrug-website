(function () {
    var app = angular.module('skdebrug.admin.games', ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/game', {
                    templateUrl: 'app/game/list-game/list-game.partial.html',
                    controller: 'listGameController',
                    controllerAs: 'vm'
                }).
                when('/game/:gamesId', {
                    templateUrl: 'app/game/edit-game/edit-game.partial.html',
                    controller: 'editGameController',
                    controllerAs: 'vm'
                }).
                when('/game/add', {
                    templateUrl: 'app/game/add-game/add-game.partial.html',
                    controller: 'addGameController',
                    controllerAs: 'vm'
                });
        }
    ]);

})();
