(function () {
    'use strict';

    angular
        .module('skdebrug.admin.player')
        .controller('editPlayerController', editPlayerController);

    editPlayerController.$inject = ['PlayerService', '$routeParams'];

    /* @ngInject */
    function editPlayerController(PlayerService, $routeParams) {
        var vm = this;
        var originalItem = undefined;
        var currentId = $routeParams.playerId;

        PlayerService.types().then(function (result) {
            vm.types = result.data;
        });

        vm.editPlayer = function () {
            var player = angular.copy(vm.player);

            player.dateOfBirth = _convertDateToMs(player.dateOfBirth);

            PlayerService.edit(currentId, player).then(function (result) {
                console.log('successfully updated', player, result);
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

        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime()/1000;
            }
            return null;
        }

        vm.hideMessage = function () {
            vm.message = undefined;
        };

        vm.reset = function () {
            vm.player = originalItem;
            vm.player.dateOfBirth = new Date(vm.player.dateOfBirth);
        };

        vm.$onInit = function () {
            PlayerService.get(currentId).then(function (result) {
                originalItem = result.data;
                vm.reset();
                console.log(originalItem)
            });
        };

        vm.$onInit();

    }

})();

