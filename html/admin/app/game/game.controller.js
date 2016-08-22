(function () {
    'use strict';

    angular
        .module('skdebrug.admin.games')
        .controller('gameController', gameController);

    gameController.$inject = ['GameService'];

    /* @ngInject */
    function gameController(GameService) {
        var vm = this;
        GameService.all().success(function (data) {
            vm.games = data;
        });
        GameService.types().success(function (data) {
            vm.types = data;
        });
    }

})();

