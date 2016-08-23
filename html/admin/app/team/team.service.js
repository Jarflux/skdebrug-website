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

            var deferred = $q.defer();

            deferred.resolve({
                data: [{
                    "id": 1,
                    "name": "SK De Brug"
                }, {
                    "id": 2,
                    "name": "Deurnese Turners B"
                }, {
                    "id": 3,
                    "name": "KFC Brabo"
                }, {
                    "id": 4,
                    "name": "Vidam"
                }, {
                    "id": 5,
                    "name": "P.S.K."
                }, {
                    "id": 6,
                    "name": "Amber E"
                }, {
                    "id": 7,
                    "name": "Toreke"
                }, {
                    "id": 8,
                    "name": "TC Brabo"
                }, {
                    "id": 9,
                    "name": "Houtbeurs"
                }, {
                    "id": 10,
                    "name": "Nonkel Jan"
                }, {
                    "id": 11,
                    "name": "Umicore"
                }, {
                    "id": 12,
                    "name": "AC De Heide"
                }]
            });

            return deferred.promise;

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
