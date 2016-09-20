(function (angular) {
    'use strict';

    angular
        .module('skdebrug.pasta.registration')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = ['$http', '$q'];

    /* @ngInject */
    function RegistrationService($http, $q) {

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
