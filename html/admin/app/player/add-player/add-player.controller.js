(function () {
    'use strict';

    angular
        .module('skdebrug.admin.player')
        .controller('addPlayerController', addPlayerController);

    addPlayerController.$inject = ['PlayerService'];

    /* @ngInject */
    function addPlayerController(PlayerService) {
        var vm = this;

        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime()/1000;
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
            var player = angular.copy(vm.player);

            player.dateOfBirth = _convertDateToMs(player.dateOfBirth);

            PlayerService.add(player).then(function (result) {
                console.log('successfully added', news, result);
                vm.message = {
                    success: true,
                    text: 'Successfully added the player: ' + player.firstName + ' ' + player.lastName
                };
                vm.reset();
            }, function (error) {
                console.log('something went wrong!!', error);
                vm.message = {
                    error: true,
                    text: 'Something went wrong'
                };
            });
        };

        vm.hideMessage = function () {
            vm.message = undefined;
        };


        vm.reset = function () {
            _reset();
        };


    }

})();

