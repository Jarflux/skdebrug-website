(function (angular) {
    'use strict';

    angular
        .module('skdebrug.admin.team')
        .service('TeamService', TeamService);

    TeamService.$inject = ['$http', '$q'];

    /* @ngInject */
    function TeamService($http, $q) {

        function _add(teamObj) {
            var request = {
                data: teamObj,
                method: 'POST',
                url: '/data/private/team'
            };

            return $http(request);
        }

        function _edit(id, teamObj) {
            var request = {
                data: teamObj,
                method: 'PUT',
                url: '/data/private/team'
            };

            return $http(request);
        }

        function _get(id) {
            var request = {
                method: 'GET',
                url: '/data/team/' + id
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
            get: _get,
            edit: _edit,
            all: _all
        }
    }

})(angular);
