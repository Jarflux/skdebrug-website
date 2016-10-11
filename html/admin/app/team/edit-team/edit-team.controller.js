(function () {
    'use strict';

    angular
        .module('skdebrug.admin.team')
        .controller('editTeamController', editTeamController);

    editTeamController.$inject = ['TeamService', '$routeParams'];

    /* @ngInject */
    function editTeamController(TeamService, $routeParams) {
        var vm = this;
        var originalTeamItem = undefined;
        var currentId = $routeParams.teamId;

        vm.$onInit = function () {
            _reset();
        };

        function _reset() {
            vm.team = {
                name: undefined
            };
        }

        vm.editTeam = function () {
            TeamService.add(vm.team).then(function (result) {
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
            _reset();
        };

        vm.$onInit = function () {
            NewsService.get(currentId).then(function (result) {
                originalTeamItem = result.data;
                vm.team = originalTeamItem;
                console.log(originalTeamItem)
            });
        };

        vm.$onInit();

    }

})();

