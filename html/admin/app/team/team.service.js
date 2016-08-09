(function (angular) {
    'use strict';

    angular
        .module('skdebrug.admin.teams')
        .service('TeamService', TeamService);

    TeamService.$inject = ['$http'];

    /* @ngInject */
    function TeamService($http) {

        function _add(teamObj) {
            var request = {
                data: teamObj,
                method: 'POST',
                url: '/data/team',
                withCredentials: true
            };

            return $http(request);
        }

        return {
            add: _add
        }
    }

})(angular);
