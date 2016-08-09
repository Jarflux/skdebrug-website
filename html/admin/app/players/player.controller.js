(function () {
    'use strict';

    angular
        .module('skdebrug.admin.players')
        .controller('playerController', playerController);

    playerController.$inject = ['PlayerService'];

    /* @ngInject */
    function playerController(PlayerService) {
        var vm = this;
        PlayerService.all().success(function (data) {
            vm.players = data;
        });
    }

})();

