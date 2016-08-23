(function () {
    'use strict';

    angular
        .module('skdebrug.admin.teams')
        .controller('listTeamController', listTeamController);

    listTeamController.$inject = ['TeamService'];

    /* @ngInject */
    function listTeamController(TeamService) {
        var vm = this;
        TeamService.all().then(function (result) {
            vm.teams = result.data;
        });
    }

})();

