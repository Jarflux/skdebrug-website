(function () {
    'use strict';

    angular
        .module('skdebrug.admin.teams')
        .controller('teamController', teamController);

    teamController.$inject = ['TeamService'];

    /* @ngInject */
    function teamController(TeamService) {
        var vm = this;
        TeamService.all().success(function (data) {
            vm.teams = data;
        });
    }

})();

