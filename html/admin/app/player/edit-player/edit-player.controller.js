(function () {
    'use strict';

    angular
        .module('skdebrug.admin.player')
        .controller('editPlayerController', editPlayerController);

    editPlayerController.$inject = ['PlayerService'];

    /* @ngInject */
    function editPlayerController(PlayerService) {
        var vm = this;

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

