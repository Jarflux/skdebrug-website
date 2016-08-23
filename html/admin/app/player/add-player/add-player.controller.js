(function () {
    'use strict';

    angular
        .module('skdebrug.admin.player')
        .controller('addPlayerController', addPlayerController);

    addPlayerController.$inject = ['PlayerService'];

    /* @ngInject */
    function addPlayerController(PlayerService) {
        var vm = this;

        vm.$onInit = function () {
            _reset();
        };

        function _reset() {
            vm.player = {
                firstName: undefined,
                lastName: undefined,
                number: undefined,
                dateOfBirth: undefined,
                playerType: undefined
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

