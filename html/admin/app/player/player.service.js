(function (angular) {
    'use strict';

    angular
        .module('skdebrug.admin.player')
        .service('PlayerService', PlayerService);

    PlayerService.$inject = ['$http', '$q'];

    /* @ngInject */
    function PlayerService($http, $q) {

        function _add(playerObj) {
            var request = {
                data: playerObj,
                method: 'POST',
                url: '/data/private/player'
            };

            return $http(request);
        }

        function _edit(id, playerObj) {
            var request = {
                data: playerObj,
                method: 'PUT',
                url: '/data/private/player'
            };

            return $http(request);
        }

        function _get(id) {
            var request = {
                method: 'GET',
                url: '/data/player/' + id
            };

            return $http(request);
        }

        function _all() {
            var request = {
                method: 'GET',
                url: '/data/player'
            };

            return $http(request);
        }

        function _types() {
            var request = {
                method: 'GET',
                url: '/data/player/type'
            };

            return $http(request);
        }

        return {
            add: _add,
            get: _get,
            edit: _edit,
            all: _all,
            types: _types
        }
    }

})(angular);
