(function () {
    'use strict';

    angular
        .module('skdebrug.admin.game')
        .controller('editGameController', editGameController);

    editGameController.$inject = ['GameService', 'TeamService', '$routeParams'];

    /* @ngInject */
    function editGameController(GameService, TeamService, $routeParams) {
        var vm = this;
        var originalItem = undefined;
        var currentId = $routeParams.gameId;

        GameService.types().then(function (result) {
            vm.types = result.data;
        });

        GameService.allTeams().then(function (result) {
            vm.teams = result.data;
        });

        vm.editGame = function () {
            var game = angular.copy(vm.game);

            game.date = _convertDateToMs(game.date);

            if(!game.homeScore){
                game.homeScore = null;
            }
            if(!game.awayScore){
                game.awayScore = null;
            }

            GameService.add(game).then(function (result) {
                console.log('successfully updated', game, result);
                vm.message = {
                    success: true,
                    text: 'Successfully updated game: ' + game.homeTeam.name + ' ' + game.homeTeam.name
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

        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime()/1000;
            }
            return null;
        }

        vm.reset = function () {
            vm.game = originalItem;
        };

        vm.hideMessage = function () {
            vm.message = undefined;
        };

        vm.$onInit = function () {
            GameService.get(currentId).then(function (result) {
                originalItem = result.data;
                originalItem.game.date = originalItem.game.date*1000;
                vm.game = originalItem;
                console.log(originalItem)
            });
        };

        vm.$onInit();

    }

})();

