(function (angular) {
    'use strict';

    angular
        .module('skdebrug.admin.game')
        .service('GameService', GameService);

    GameService.$inject = ['$http', '$q'];

    /* @ngInject */
    function GameService($http, $q) {

        function _add(gameObj) {
            var request = {
                data: gameObj,
                method: 'POST',
                url: '/data/private/game'
            };

            return $http(request);
        }

        function _edit(id, gameObj) {
            var request = {
                data: gameObj,
                method: 'POST',
                url: '/data/private/game'
            };

            return $http(request);
        }

        function _get(id) {
            var request = {
                method: 'GET',
                url: '/data/game/' + id
            };

            return $http(request);
        }

        function _all() {
            var request = {
                method: 'GET',
                url: '/data/game'
            };

            return $http(request);
        }

        //TODO REMOVE THIS METHOD AFTER CONTROLLERS USE TEAMSERVICE
        function _allTeams() {
            var request = {
                method: 'GET',
                url: '/data/team'
            };

            return $http(request);
        }

        function _types() {
            var request = {
                method: 'GET',
                url: '/data/game/type'
            };

            return $http(request);
        }

        return {
            add: _add,
            get: _get,
            edit: _edit,
            all: _all,
            types: _types,
            allTeams: _allTeams
        }
    }

})(angular);
