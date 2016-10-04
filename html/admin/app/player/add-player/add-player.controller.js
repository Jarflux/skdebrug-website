(function () {
    'use strict';

    angular
        .module('skdebrug.admin.player')
        .controller('addPlayerController', addPlayerController);

    addPlayerController.$inject = ['PlayerService'];

    /* @ngInject */
    function addPlayerController(PlayerService) {
        var vm = this;

        //TODO Move to shared service
        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime();
            }
            return null;
        }

        PlayerService.types().then(function (result) {
            vm.types = result.data;
        });

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
            vm.player.dateOfBirth = _convertDateToMs(vm.player.dateOfBirth);

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

