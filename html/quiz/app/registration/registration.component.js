(function (angular) {
    'use strict';
    angular
        .module('skdebrug.quiz')
        .directive('registration', registration);
    registration.$inject = [];
    /* @ngInject */
    function registration() {
        var directive = {
            bindToController: true,
            templateUrl: "quiz/app/registration/registration.partial.html",
            controller: registrationController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {}
        };
        return directive;
    }

    registrationController.$inject = ['RegistrationService'];

    /* @ngInject */
    function registrationController(RegistrationService) {
        var vm = this;

        vm.reset = function () {
            vm.isSending = false;
            vm.hideMessage();
            vm.registration = {
                name: "",
                email: ""
            };
        };

        vm.hideMessage = function () {
            vm.message = undefined;
        };


        vm.sendMail = function () {
            vm.isSending = true;
            var registration = {};
            registration.recipient = vm.registration.email;
            registration.name = vm.registration.name;
            ReservationService.sendMail(registration).then(function (response) {
                // success handler
                vm.reset();
                vm.message = {
                    success: true,
                    text: 'De registratie is succesvol verstuurd!'
                };
            }, function (error) {
                // error handler
                vm.isSending = false;
                if(error.status == 500 ||  error.status == 504){
                    vm.message = {
                        error: true,
                        errors: undefined,
                        text: 'Fout op de server, probeer het later opnieuw.'
                    };
                }else{
                    vm.message = {
                        error: true,
                        errors: error.data,
                        text: 'Formulier bevat nog fouten:'
                    };
                }
            });
        };

        vm.reset();
    }

})
(angular);