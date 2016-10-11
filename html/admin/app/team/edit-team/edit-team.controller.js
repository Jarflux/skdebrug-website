(function () {
    'use strict';

    angular
        .module('skdebrug.admin.team')
        .controller('editTeamController', editTeamController);

    editTeamController.$inject = ['TeamService', '$routeParams'];

    /* @ngInject */
    function editTeamController(TeamService, $routeParams) {
        var vm = this;
        var originalItem = undefined;
        var currentId = $routeParams.teamId;

        vm.editTeam = function () {
            TeamService.edit(currentId, vm.team).then(function (result) {
                console.log('successfully updated', vm.team, result);
                vm.message = {
                    success: true,
                    text: 'Successfully updated team: ' + vm.team.name
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

        vm.hideMessage = function () {
            vm.message = undefined;
        };

        vm.reset = function () {
            vm.team = originalItem;
        };

        vm.$onInit = function () {
            TeamService.get(currentId).then(function (result) {
                originalItem = result.data;
                vm.reset();
                console.log(originalItem)
            });
        };

        vm.$onInit();

    }

})();

