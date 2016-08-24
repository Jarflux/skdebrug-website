(function () {
    'use strict';

    angular
        .module('skdebrug.admin.player')
        .controller('listPlayerController', listPlayerController);

    listPlayerController.$inject = ['PlayerService'];

    /* @ngInject */
    function listPlayerController(PlayerService) {
        var vm = this;
        PlayerService.all().then(function (result) {
            vm.players = result.data;
        });
    }

})();

