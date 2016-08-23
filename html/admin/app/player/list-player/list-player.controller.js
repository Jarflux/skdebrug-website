(function () {
    'use strict';

    angular
        .module('skdebrug.admin.players')
        .controller('listPlayerController', listPlayerController);

    listPlayerController.$inject = ['PlayerService'];

    /* @ngInject */
    function listPlayerController(PlayerService) {
        var vm = this;
        PlayerService.all().then(function (result) {
            vm.players = result.data;
        });
        PlayerService.types().then(function (result) {
            vm.types = result.data;
        });
    }

})();

