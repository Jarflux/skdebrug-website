(function (angular) {
    'use strict';

    angular
        .module('skdebrug.pasta')
        .service('ReservationService', ReservationService);

    ReservationService.$inject = ['$http', '$q'];

    /* @ngInject */
    function ReservationService($http, $q) {

        function _sendMail(registrationObj) {
            var request = {
                //data: teamObj,
                //method: 'POST',
                //url: '/data/private/team'
            };

            return $http(request);
        }

        return {
            add: _sendMail
        }
    }

})(angular);
