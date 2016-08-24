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

        function _all() {

            //var deferred = $q.defer();
            //
            //deferred.resolve({
            //    data: [{
            //        "id": 1,
            //        "gameType": "LEAGUE",
            //        "date": 1442667600000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 2,
            //        "gameType": "LEAGUE",
            //        "date": 1442665800000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 3,
            //        "gameType": "LEAGUE",
            //        "date": 1442669400000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 4,
            //        "gameType": "LEAGUE",
            //        "date": 1442667600000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 5,
            //        "gameType": "LEAGUE",
            //        "date": 1442667600000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 6,
            //        "gameType": "LEAGUE",
            //        "date": 1442667600000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 7,
            //        "gameType": "LEAGUE",
            //        "date": 1443272400000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 8,
            //        "gameType": "LEAGUE",
            //        "date": 1443265200000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 9,
            //        "gameType": "LEAGUE",
            //        "date": 1443272400000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 10,
            //        "gameType": "LEAGUE",
            //        "date": 1443274200000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 11,
            //        "gameType": "LEAGUE",
            //        "date": 1443272400000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 12,
            //        "gameType": "LEAGUE",
            //        "date": 1443265200000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 13,
            //        "gameType": "LEAGUE",
            //        "date": 1443877200000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 14,
            //        "gameType": "LEAGUE",
            //        "date": 1443877200000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 15,
            //        "gameType": "LEAGUE",
            //        "date": 1443877200000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 16,
            //        "gameType": "LEAGUE",
            //        "date": 1443877200000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 17,
            //        "gameType": "LEAGUE",
            //        "date": 1443877200000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 18,
            //        "gameType": "LEAGUE",
            //        "date": 1443875400000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 19,
            //        "gameType": "LEAGUE",
            //        "date": 1444482000000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 20,
            //        "gameType": "LEAGUE",
            //        "date": 1444482000000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 21,
            //        "gameType": "LEAGUE",
            //        "date": 1444482000000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 22,
            //        "gameType": "LEAGUE",
            //        "date": 1444482000000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 23,
            //        "gameType": "LEAGUE",
            //        "date": 1444482000000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 24,
            //        "gameType": "LEAGUE",
            //        "date": 1444482000000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 25,
            //        "gameType": "LEAGUE",
            //        "date": 1445086800000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 26,
            //        "gameType": "LEAGUE",
            //        "date": 1445086800000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 27,
            //        "gameType": "LEAGUE",
            //        "date": 1445086800000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 28,
            //        "gameType": "LEAGUE",
            //        "date": 1445086800000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 29,
            //        "gameType": "LEAGUE",
            //        "date": 1445086800000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 30,
            //        "gameType": "LEAGUE",
            //        "date": 1445085000000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 31,
            //        "gameType": "LEAGUE",
            //        "date": 1445693400000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 32,
            //        "gameType": "LEAGUE",
            //        "date": 1445684400000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 33,
            //        "gameType": "LEAGUE",
            //        "date": 1445693400000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 34,
            //        "gameType": "LEAGUE",
            //        "date": 1445689800000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 35,
            //        "gameType": "LEAGUE",
            //        "date": 1445691600000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 36,
            //        "gameType": "LEAGUE",
            //        "date": 1445684400000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 37,
            //        "gameType": "LEAGUE",
            //        "date": 1446904800000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 38,
            //        "gameType": "LEAGUE",
            //        "date": 1446904800000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 39,
            //        "gameType": "LEAGUE",
            //        "date": 1446904800000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 40,
            //        "gameType": "LEAGUE",
            //        "date": 1446904800000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 41,
            //        "gameType": "LEAGUE",
            //        "date": 1446904800000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 42,
            //        "gameType": "LEAGUE",
            //        "date": 1446904800000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 43,
            //        "gameType": "LEAGUE",
            //        "date": 1447509600000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 44,
            //        "gameType": "LEAGUE",
            //        "date": 1447502400000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 45,
            //        "gameType": "LEAGUE",
            //        "date": 1447509600000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 46,
            //        "gameType": "LEAGUE",
            //        "date": 1447509600000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 47,
            //        "gameType": "LEAGUE",
            //        "date": 1447507800000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 48,
            //        "gameType": "LEAGUE",
            //        "date": 1447502400000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 49,
            //        "gameType": "LEAGUE",
            //        "date": 1448114400000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 50,
            //        "gameType": "LEAGUE",
            //        "date": 1448114400000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 51,
            //        "gameType": "LEAGUE",
            //        "date": 1448114400000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 52,
            //        "gameType": "LEAGUE",
            //        "date": 1448114400000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 53,
            //        "gameType": "LEAGUE",
            //        "date": 1448114400000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 54,
            //        "gameType": "LEAGUE",
            //        "date": 1448114400000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 55,
            //        "gameType": "LEAGUE",
            //        "date": 1448719200000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 56,
            //        "gameType": "LEAGUE",
            //        "date": 1448712000000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 57,
            //        "gameType": "LEAGUE",
            //        "date": 1448719200000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 58,
            //        "gameType": "LEAGUE",
            //        "date": 1448717400000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 59,
            //        "gameType": "LEAGUE",
            //        "date": 1448719200000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 60,
            //        "gameType": "LEAGUE",
            //        "date": 1448719200000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 61,
            //        "gameType": "LEAGUE",
            //        "date": 1449324000000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 62,
            //        "gameType": "LEAGUE",
            //        "date": 1449316800000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 63,
            //        "gameType": "LEAGUE",
            //        "date": 1449324000000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 64,
            //        "gameType": "LEAGUE",
            //        "date": 1449324000000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 65,
            //        "gameType": "LEAGUE",
            //        "date": 1449324000000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 66,
            //        "gameType": "LEAGUE",
            //        "date": 1449324000000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 67,
            //        "gameType": "LEAGUE",
            //        "date": 1449928800000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 68,
            //        "gameType": "LEAGUE",
            //        "date": 1449921600000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 69,
            //        "gameType": "LEAGUE",
            //        "date": 1449921600000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 70,
            //        "gameType": "LEAGUE",
            //        "date": 1449928800000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 71,
            //        "gameType": "LEAGUE",
            //        "date": 1449928800000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 72,
            //        "gameType": "LEAGUE",
            //        "date": 1449928800000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 73,
            //        "gameType": "LEAGUE",
            //        "date": 1450533600000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 74,
            //        "gameType": "LEAGUE",
            //        "date": 1450533600000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 75,
            //        "gameType": "LEAGUE",
            //        "date": 1450533600000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 76,
            //        "gameType": "LEAGUE",
            //        "date": 1450531800000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 77,
            //        "gameType": "LEAGUE",
            //        "date": 1450533600000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 78,
            //        "gameType": "LEAGUE",
            //        "date": 1450533600000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 79,
            //        "gameType": "LEAGUE",
            //        "date": 1420812000000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 80,
            //        "gameType": "LEAGUE",
            //        "date": 1420804800000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 81,
            //        "gameType": "LEAGUE",
            //        "date": 1420812000000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 82,
            //        "gameType": "LEAGUE",
            //        "date": 1420812000000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 83,
            //        "gameType": "LEAGUE",
            //        "date": 1420812000000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 84,
            //        "gameType": "LEAGUE",
            //        "date": 1420804800000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 85,
            //        "gameType": "LEAGUE",
            //        "date": 1421416800000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 86,
            //        "gameType": "LEAGUE",
            //        "date": 1421416800000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 87,
            //        "gameType": "LEAGUE",
            //        "date": 1421416800000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 88,
            //        "gameType": "LEAGUE",
            //        "date": 1421416800000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 89,
            //        "gameType": "LEAGUE",
            //        "date": 1421416800000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 90,
            //        "gameType": "LEAGUE",
            //        "date": 1421416800000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 91,
            //        "gameType": "LEAGUE",
            //        "date": 1422014400000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 92,
            //        "gameType": "LEAGUE",
            //        "date": 1422014400000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 93,
            //        "gameType": "LEAGUE",
            //        "date": 1422023400000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 94,
            //        "gameType": "LEAGUE",
            //        "date": 1422023400000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 95,
            //        "gameType": "LEAGUE",
            //        "date": 1422021600000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 96,
            //        "gameType": "LEAGUE",
            //        "date": 1422021600000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 97,
            //        "gameType": "LEAGUE",
            //        "date": 1422626400000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 98,
            //        "gameType": "LEAGUE",
            //        "date": 1422626400000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 99,
            //        "gameType": "LEAGUE",
            //        "date": 1422626400000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 100,
            //        "gameType": "LEAGUE",
            //        "date": 1422626400000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 101,
            //        "gameType": "LEAGUE",
            //        "date": 1422626400000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 102,
            //        "gameType": "LEAGUE",
            //        "date": 1422626400000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 103,
            //        "gameType": "LEAGUE",
            //        "date": 1424433600000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 104,
            //        "gameType": "LEAGUE",
            //        "date": 1424442600000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 105,
            //        "gameType": "LEAGUE",
            //        "date": 1424440800000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 106,
            //        "gameType": "LEAGUE",
            //        "date": 1424442600000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 107,
            //        "gameType": "LEAGUE",
            //        "date": 1424439000000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 108,
            //        "gameType": "LEAGUE",
            //        "date": 1424433600000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 109,
            //        "gameType": "LEAGUE",
            //        "date": 1425045600000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 110,
            //        "gameType": "LEAGUE",
            //        "date": 1425047400000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 111,
            //        "gameType": "LEAGUE",
            //        "date": 1425045600000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 112,
            //        "gameType": "LEAGUE",
            //        "date": 1425045600000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 113,
            //        "gameType": "LEAGUE",
            //        "date": 1425045600000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 114,
            //        "gameType": "LEAGUE",
            //        "date": 1425045600000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 115,
            //        "gameType": "LEAGUE",
            //        "date": 1425564000000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 116,
            //        "gameType": "LEAGUE",
            //        "date": 1425520800000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 117,
            //        "gameType": "LEAGUE",
            //        "date": 1425564000000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 118,
            //        "gameType": "LEAGUE",
            //        "date": 1425564000000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 119,
            //        "gameType": "LEAGUE",
            //        "date": 1425564000000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 120,
            //        "gameType": "LEAGUE",
            //        "date": 1425564000000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 121,
            //        "gameType": "LEAGUE",
            //        "date": 1426168800000,
            //        "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "awayTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 122,
            //        "gameType": "LEAGUE",
            //        "date": 1426168800000,
            //        "homeTeam": {"id": 12, "name": "AC De Heide"},
            //        "awayTeam": {"id": 5, "name": "P.S.K."},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 123,
            //        "gameType": "LEAGUE",
            //        "date": 1426170600000,
            //        "homeTeam": {"id": 9, "name": "Houtbeurs"},
            //        "awayTeam": {"id": 6, "name": "Amber E"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 124,
            //        "gameType": "LEAGUE",
            //        "date": 1426168800000,
            //        "homeTeam": {"id": 3, "name": "KFC Brabo"},
            //        "awayTeam": {"id": 4, "name": "Vidam"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 125,
            //        "gameType": "LEAGUE",
            //        "date": 1426168800000,
            //        "homeTeam": {"id": 1, "name": "SK De Brug"},
            //        "awayTeam": {"id": 8, "name": "TC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 126,
            //        "gameType": "LEAGUE",
            //        "date": 1426161600000,
            //        "homeTeam": {"id": 7, "name": "Toreke"},
            //        "awayTeam": {"id": 11, "name": "Umicore"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 127,
            //        "gameType": "LEAGUE",
            //        "date": 1426773600000,
            //        "homeTeam": {"id": 4, "name": "Vidam"},
            //        "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 128,
            //        "gameType": "LEAGUE",
            //        "date": 1426773600000,
            //        "homeTeam": {"id": 5, "name": "P.S.K."},
            //        "awayTeam": {"id": 7, "name": "Toreke"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 129,
            //        "gameType": "LEAGUE",
            //        "date": 1426773600000,
            //        "homeTeam": {"id": 6, "name": "Amber E"},
            //        "awayTeam": {"id": 12, "name": "AC De Heide"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 130,
            //        "gameType": "LEAGUE",
            //        "date": 1426773600000,
            //        "homeTeam": {"id": 8, "name": "TC Brabo"},
            //        "awayTeam": {"id": 3, "name": "KFC Brabo"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 131,
            //        "gameType": "LEAGUE",
            //        "date": 1426773600000,
            //        "homeTeam": {"id": 11, "name": "Umicore"},
            //        "awayTeam": {"id": 9, "name": "Houtbeurs"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }, {
            //        "id": 132,
            //        "gameType": "LEAGUE",
            //        "date": 1426773600000,
            //        "homeTeam": {"id": 10, "name": "Nonkel Jan"},
            //        "awayTeam": {"id": 1, "name": "SK De Brug"},
            //        "homeScore": null,
            //        "awayScore": null
            //    }]
            //});
            //
            //return deferred.promise;

            var request = {
                method: 'GET',
                url: '/data/game'
            };

            return $http(request);
        }

        //TODO REMOVE THIS METHOD AFTER CONTROLLERS USE TEAMSERVICE
        function _allTeams() {

            //var deferred = $q.defer();
            //
            //deferred.resolve({
            //    data: [{
            //        "id": 1,
            //        "name": "SK De Brug"
            //    }, {
            //        "id": 2,
            //        "name": "Deurnese Turners B"
            //    }, {
            //        "id": 3,
            //        "name": "KFC Brabo"
            //    }, {
            //        "id": 4,
            //        "name": "Vidam"
            //    }, {
            //        "id": 5,
            //        "name": "P.S.K."
            //    }, {
            //        "id": 6,
            //        "name": "Amber E"
            //    }, {
            //        "id": 7,
            //        "name": "Toreke"
            //    }, {
            //        "id": 8,
            //        "name": "TC Brabo"
            //    }, {
            //        "id": 9,
            //        "name": "Houtbeurs"
            //    }, {
            //        "id": 10,
            //        "name": "Nonkel Jan"
            //    }, {
            //        "id": 11,
            //        "name": "Umicore"
            //    }, {
            //        "id": 12,
            //        "name": "AC De Heide"
            //    }]
            //});
            //
            //return deferred.promise;

            var request = {
                method: 'GET',
                url: '/data/team'
            };

            return $http(request);
        }

        function _types() {

            //var deferred = $q.defer();
            //
            //deferred.resolve({
            //    data: [
            //        "CUP",
            //        "LEAGUE"
            //    ]
            //});
            //
            //return deferred.promise;

            var request = {
                method: 'GET',
                url: '/data/game/type'
            };

            return $http(request);
        }

        return {
            add: _add,
            all: _all,
            types: _types,
            allTeams: _allTeams
        }
    }

})(angular);
