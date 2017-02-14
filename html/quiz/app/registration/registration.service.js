(function (angular) {
    'use strict';

    angular
        .module('skdebrug.quiz')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = ['$http', '$q'];

    /* @ngInject */
    function RegistrationService($http, $q) {
        function _sendMail(registrationObj) {
            var request = {
                data: registrationObj,
                method: 'POST',
                url: '/data/registration'
            };

            return $http(request);
        }

        return {
            sendMail: _sendMail
        }
    }

})(angular);
