(function () {
    'use strict';

    angular
        .module('skdebrug.pasta.registration')
        .controller('registrationController', registrationController);

    registrationController.$inject = ['RegistrationService'];

    /* @ngInject */
    function registrationController(RegistrationService) {
        var vm = this;
        RegistrationService.all().then(function (result) {
            vm.registration = result.data;
        });

        vm.reservation = {
            pasta:{
                price: 20
            },
            veggie:{
                price: 20
            },
            kind:{
                price: 20
            },
            dessert:{
                price: 20
            },
            lookbrood:{
                price: 20
            }
        };

        vm.calc = function () {
            vm.reservation.total = 0;
            angular.forEach(vm.reservation, function (foodType) {
                if (foodType.price){
                    foodType.total = foodType.amount * foodType.price;
                    vm.reservation.total += foodType.total;
                }
            });
        };
    }

})();