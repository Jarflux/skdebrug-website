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

        GameService.allTeams().then(function (result) {
            vm.teams = result.data;
        });

        //TODO Move to shared service
        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime();
            }
            return null;
        }

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
            vm.game.date = _convertDateToMs(vm.game.date);
            if(!vm.game.homeScore){
                vm.game.homeScore = null;
            }
            if(!vm.game.awayScore){
                vm.game.awayScore = null;
            }

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

