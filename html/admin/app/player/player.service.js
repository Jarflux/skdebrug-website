(function (angular) {
    'use strict';

    angular
        .module('skdebrug.admin.players')
        .service('PlayerService', PlayerService);

    PlayerService.$inject = ['$http'];

    /* @ngInject */
    function PlayerService($http) {

        function _add(playerObj) {
            var request = {
                data: playerObj,
                method: 'POST',
                url: '/data/player'
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
            all: _all,
            types: _types
        }
    }

})(angular);
