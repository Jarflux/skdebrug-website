(function () {
    'use strict';

    angular
        .module('skdebrug.admin.team')
        .controller('editTeamController', editTeamController);

    editTeamController.$inject = ['TeamService'];

    /* @ngInject */
    function editTeamController(TeamService) {
        var vm = this;

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


    }

})();

