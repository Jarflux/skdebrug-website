(function() {
    var app = angular.module('skdebrug.admin.players', ['ngRoute']);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/players', {
                templateUrl: 'app/player/player.partial.html',
                controller: 'playerController',
                controllerAs: 'vm'
            }).
            when('/players/add', {
                templateUrl: 'app/player/add-player/add-player.partial.html',
                controller: 'addPlayerController',
                controllerAs: 'vm'
            });
        }
    ]);

})();
