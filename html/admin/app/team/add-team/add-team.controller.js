(function () {
    'use strict';

    angular
        .module('skdebrug.admin.team')
        .controller('addTeamController', addTeamController);

    addTeamController.$inject = ['TeamService'];

    /* @ngInject */
    function addTeamController(TeamService) {
        var vm = this;

        vm.addTeam = function () {
            TeamService.add(vm.team).then(function (result) {
                console.log('successfully added', vm.team, result);
                vm.message = {
                    success: true,
                    text: 'Successfully added team: ' + vm.team.name
                };
                vm.reset();
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
            vm.team = {
                name: undefined
            };
        };

        vm.$onInit = function () {
            vm.reset();
        };

        vm.$onInit();

    }

})();

