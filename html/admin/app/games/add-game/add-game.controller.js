(function () {
    'use strict';

    angular
        .module('skdebrug.admin.games')
        .controller('addGameController', addGameController);

    addGameController.$inject = ['GameService'];

    /* @ngInject */
    function addGameController(GameService) {
        var vm = this;

        vm.$onInit = function () {
            _reset();
        };

        function _reset() {
            //TODO reset all fields
            vm.game = {
                //name: undefined
            };
        }

        vm.addGame = function () {
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

