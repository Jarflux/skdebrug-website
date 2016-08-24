(function () {
    var app = angular.module('skdebrug.admin.player', ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/player', {
                    templateUrl: 'app/player/list-player/list-player.partial.html',
                    controller: 'listPlayerController',
                    controllerAs: 'vm'
                }).
                when('/player/add', {
                    templateUrl: 'app/player/add-player/add-player.partial.html',
                    controller: 'addPlayerController',
                    controllerAs: 'vm'
                }).
                when('/player/:playerId', {
                    templateUrl: 'app/player/edit-player/edit-player.partial.html',
                    controller: 'editPlayerController',
                    controllerAs: 'vm'
                });
        }
    ]);

})();
