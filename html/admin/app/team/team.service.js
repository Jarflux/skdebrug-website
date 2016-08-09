(function (angular) {
    'use strict';

    angular
        .module('skdebrug.admin.teams')
        .service('TeamService', TeamService);

    TeamService.$inject = ['$http'];

    /* @ngInject */
    function TeamService($http) {

        function _add(teamObj) {
            var request = {
                data: teamObj,
                method: 'POST',
                url: '/data/team'
            };

            return $http(request);
        }

        function _all() {
            var request = {
                method: 'GET',
                url: '/data/team'
            };

            return $http(request);
        }

        return {
            add: _add,
            all: _all
        }
    }

})(angular);
