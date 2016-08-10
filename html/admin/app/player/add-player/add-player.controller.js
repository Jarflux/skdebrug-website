(function () {
    'use strict';

    angular
        .module('skdebrug.admin.players')
        .controller('addPlayerController', addPlayerController);

    addPlayerController.$inject = ['PlayerService'];

    /* @ngInject */
    function addPlayerController(PlayerService) {
        var vm = this;

        vm.$onInit = function () {
            _reset();
        };

        function _reset() {
            //TODO reset all fields
            vm.player = {
                //name: undefined
            };
        }

        vm.addPlayer = function () {
            PlayerService.add(vm.player).then(function (result) {
                console.log('successfully added', vm.player, result);
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

