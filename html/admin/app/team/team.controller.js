(function () {
    'use strict';

    angular
        .module('skdebrug.admin.teams')
        .controller('teamController', teamController);

    teamController.$inject = [];

    /* @ngInject */
    function teamController() {
        var vm = this;
        vm.teams = [
            {
                id: 1,
                name: "Appel"
            }
        ];
    }

})();

