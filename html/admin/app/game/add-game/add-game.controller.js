(function () {
    'use strict';

    angular
        .module('skdebrug.admin.game')
        .controller('addGameController', addGameController);

    addGameController.$inject = ['GameService', 'TeamService'];

    /* @ngInject */
    function addGameController(GameService, TeamService) {
        var vm = this;

        GameService.types().then(function (result) {
            vm.types = result.data;
        });

        GameService.allTeams().then(function (result) {
            vm.teams = result.data;
        });

        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime()/1000;
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

        vm.addGame = function () {
            var game = angular.copy(vm.game);

            game.date = _convertDateToMs(game.date);

            if(!game.homeScore){
                game.homeScore = null;
            }
            if(!game.awayScore){
                game.awayScore = null;
            }

            GameService.add(game).then(function (result) {
                console.log('successfully added', news, result);
                vm.message = {
                    success: true,
                    text: 'Successfully added the game: ' + game.homeTeam.name + ' ' + game.homeTeam.name
                };
                _reset();
            }, function (error) {
                console.log('something went wrong!!', error);
                vm.message = {
                    error: true,
                    text: 'Something went wrong'
                };
            });
        };

        vm.reset = function () {
            _reset();
        };
    }

})();

