(function (angular) {
    'use strict';

    angular
        .module('skdebrug.pasta')
        .service('ReservationService', ReservationService);

    ReservationService.$inject = ['$http', '$q'];

    /* @ngInject */
    function ReservationService($http, $q) {
        function _sendMail(reservationObj) {
            var request = {
                data: reservationObj,
                method: 'POST',
                url: '/data/reservation'
            };

            return $http(request);
        }

        return {
            sendMail: _sendMail
        }
    }

})(angular);
