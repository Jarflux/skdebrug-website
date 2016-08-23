(function () {
    'use strict';

    angular
        .module('skdebrug.admin.teams')
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
                console.log('successfully added', vm.team, result);
                _reset();
            }, function (error) {
                console.log('something went wrong!!', error);
            });
        };

        vm.reset = function () {
            _reset();
        };


    }

})();

