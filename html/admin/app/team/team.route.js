(function() {
    var app = angular.module('skdebrug.admin.teams', ['ngRoute']);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/teams', {
                templateUrl: 'app/team/team.partial.html',
                controller: 'teamController',
                controllerAs: 'vm'
            }).
            when('/teams/add', {
                templateUrl: 'app/team/add-team/add-team.partial.html',
                controller: 'addTeamController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/teams'
            });
        }
    ]);

})();
