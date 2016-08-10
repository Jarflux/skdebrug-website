(function (angular) {
    'use strict';

    angular
        .module('skdebrug.admin.games')
        .service('GameService', GameService);

    GameService.$inject = ['$http'];

    /* @ngInject */
    function GameService($http) {

        function _add(gameObj) {
            var request = {
                data: gameObj,
                method: 'POST',
                url: '/data/game'
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

        return {
            add: _add,
            all: _all
        }
    }

})(angular);
