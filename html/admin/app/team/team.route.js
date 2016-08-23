(function () {
    var app = angular.module('skdebrug.admin.teams', ['ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/team', {
                    templateUrl: 'app/team/list-team/list-team.partial.html',
                    controller: 'listTeamController',
                    controllerAs: 'vm'
                }).
                when('/player/:teamId', {
                    templateUrl: 'app/team/edit-team/edit-team.partial.html',
                    controller: 'editTeamController',
                    controllerAs: 'vm'
                }).
                when('/team/add', {
                    templateUrl: 'app/team/add-team/add-team.partial.html',
                    controller: 'addTeamController',
                    controllerAs: 'vm'
                });
        }
    ]);

})();
