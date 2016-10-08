(function () {
    'use strict';

    angular
        .module('skdebrug.admin.player')
        .controller('editPlayerController', editPlayerController);

    editPlayerController.$inject = ['PlayerService'];

    /* @ngInject */
    function editPlayerController(PlayerService) {
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

        vm.editPlayer = function () {
            vm.player.dateOfBirth = _convertDateToMs(vm.player.dateOfBirth);

            PlayerService.add(vm.player).then(function (result) {
                console.log('successfully updated', vm.player, result);
                vm.message = {
                    success: true,
                    text: 'Successfully updated player: ' + player.firstName + ' ' + player.lastName
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

        vm.hideMessage = function () {
            vm.message = undefined;
        };

        vm.reset = function () {
            _reset();
        };
    }

})();

