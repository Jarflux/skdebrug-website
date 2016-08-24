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

        function _all() {
            //var deferred = $q.defer();
            //
            //deferred.resolve({
            //    data: [{
            //        "id": 1,
            //        "firstName": "Gunther",
            //        "lastName": "Dillen",
            //        "number": 1,
            //        "dateOfBirth": 1470781857865,
            //        "playerType": "GOALKEEPER"
            //    }, {
            //        "id": 2,
            //        "firstName": "Frederik",
            //        "lastName": "Verbogen",
            //        "number": 2,
            //        "dateOfBirth": 1470781857869,
            //        "playerType": "DEFENDER"
            //    }, {
            //        "id": 3,
            //        "firstName": "Ben",
            //        "lastName": "Oeyen",
            //        "number": 3,
            //        "dateOfBirth": 1470781857873,
            //        "playerType": "DEFENDER"
            //    }, {
            //        "id": 4,
            //        "firstName": "Glenn",
            //        "lastName": "Gersis",
            //        "number": 4,
            //        "dateOfBirth": 1470781857878,
            //        "playerType": "DEFENDER"
            //    }, {
            //        "id": 5,
            //        "firstName": "Robin",
            //        "lastName": "Van Rompaey",
            //        "number": 5,
            //        "dateOfBirth": 1470781857883,
            //        "playerType": "MIDFIELDER"
            //    }, {
            //        "id": 6,
            //        "firstName": "Maarten",
            //        "lastName": "Mennes",
            //        "number": 6,
            //        "dateOfBirth": 1470781857886,
            //        "playerType": "DEFENDER"
            //    }, {
            //        "id": 7,
            //        "firstName": "David",
            //        "lastName": "Vanderhaeghen",
            //        "number": 7,
            //        "dateOfBirth": 1470781857891,
            //        "playerType": "MIDFIELDER"
            //    }, {
            //        "id": 8,
            //        "firstName": "Arne",
            //        "lastName": "Vergauwen",
            //        "number": 8,
            //        "dateOfBirth": 1470781857895,
            //        "playerType": "MIDFIELDER"
            //    }, {
            //        "id": 9,
            //        "firstName": "Stefan",
            //        "lastName": "Lauwers",
            //        "number": 9,
            //        "dateOfBirth": 1470781857900,
            //        "playerType": "MIDFIELDER"
            //    }, {
            //        "id": 10,
            //        "firstName": "Stijn",
            //        "lastName": "De Mayer",
            //        "number": 10,
            //        "dateOfBirth": 1470781857903,
            //        "playerType": "MIDFIELDER"
            //    }, {
            //        "id": 11,
            //        "firstName": "Mathijs",
            //        "lastName": "Bettens",
            //        "number": 11,
            //        "dateOfBirth": 1470781857907,
            //        "playerType": "STRIKER"
            //    }, {
            //        "id": 12,
            //        "firstName": "Steven",
            //        "lastName": "Heirbaut",
            //        "number": 12,
            //        "dateOfBirth": 1470781857910,
            //        "playerType": "DEFENDER"
            //    }, {
            //        "id": 13,
            //        "firstName": "Mikka",
            //        "lastName": "Uten",
            //        "number": 13,
            //        "dateOfBirth": 1470781857913,
            //        "playerType": "STRIKER"
            //    }, {
            //        "id": 14,
            //        "firstName": "Nick",
            //        "lastName": "Vandeperre",
            //        "number": 14,
            //        "dateOfBirth": 1470781857917,
            //        "playerType": "STRIKER"
            //    }, {
            //        "id": 15,
            //        "firstName": "Simon",
            //        "lastName": "Bettens",
            //        "number": 16,
            //        "dateOfBirth": 1470781857921,
            //        "playerType": "MIDFIELDER"
            //    }, {
            //        "id": 16,
            //        "firstName": "Thijs",
            //        "lastName": "Dillen",
            //        "number": 17,
            //        "dateOfBirth": 1470781857925,
            //        "playerType": "MIDFIELDER"
            //    }, {
            //        "id": 17,
            //        "firstName": "Johan",
            //        "lastName": "Offeciers",
            //        "number": 18,
            //        "dateOfBirth": 1470781857929,
            //        "playerType": "DEFENDER"
            //    }, {
            //        "id": 18,
            //        "firstName": "Benjamin",
            //        "lastName": "Berckmoes",
            //        "number": 19,
            //        "dateOfBirth": 1470781857934,
            //        "playerType": "MIDFIELDER"
            //    }, {
            //        "id": 19,
            //        "firstName": "Renze",
            //        "lastName": "De Locht",
            //        "number": 20,
            //        "dateOfBirth": 1470781857939,
            //        "playerType": "DEFENDER"
            //    }]
            //});
            //
            //return deferred.promise;

            var request = {
                method: 'GET',
                url: '/data/player'
            };

            return $http(request);
        }

        function _types() {

            //var deferred = $q.defer();
            //
            //deferred.resolve({
            //    data: [
            //        "GOALKEEPER",
            //        "DEFENDER",
            //        "MIDFIELDER",
            //        "STRIKER"
            //    ]
            //});
            //
            //return deferred.promise;

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
