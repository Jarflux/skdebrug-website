(function () {
    'use strict';

    angular
        .module('skdebrug.admin.game')
        .controller('editGameController', editGameController);

    editGameController.$inject = ['GameService', 'TeamService'];

    /* @ngInject */
    function editGameController(GameService, TeamService) {
        var vm = this;

        GameService.types().then(function (result) {
            vm.types = result.data;
        });

        // TODO GET ALL TEAMS FROM TEAMSERVICE
        GameService.allTeams().then(function (result) {
            vm.teams = result.data;
        });

        vm.$onInit = function () {
            _reset();
        };

        function _reset() {
            vm.game = {
                gameType: undefined,
                date: undefined,
                homeTeam: undefined,
                awayTeam: undefined,
                homeScore: undefined,
                awayScore: undefined
            };

        }

        vm.editGame = function () {
            GameService.add(vm.game).then(function (result) {
                console.log('successfully added', vm.game, result);
                _reset();
            }, function (error) {
                console.log('something went wrong!!', error);
            });
        };

        vm.reset = function () {
            _reset();
        };


    }

})();

