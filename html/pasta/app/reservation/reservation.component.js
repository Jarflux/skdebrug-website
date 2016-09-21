(function (angular) {
    'use strict';
    angular
        .module('skdebrug.pasta')
        .directive('reservation', reservation);
    reservation.$inject = [];
    /* @ngInject */
    function reservation() {
        var directive = {
            bindToController: true,
            templateUrl: "app/reservation/reservation.partial.html",
            controller: reservationController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {}
        };
        return directive;
    }

    reservationController.$inject = [];

    /* @ngInject */
    function reservationController() {
        var vm = this;

        vm.reset = function () {
            vm.reservation = {
                name: "",
                time: {
                    selected : "",
                    options : ["18u - 19u", "19u - 20u","20u - 21u"]
                },
                pasta: {
                    amount: 0,
                    total: 0,
                    price: 9
                },
                veggie: {
                    amount: 0,
                    total: 0,
                    price: 9
                },
                child: {
                    amount: 0,
                    total: 0,
                    price: 5
                },
                dessert: {
                    amount: 0,
                    total: 0,
                    price: 3.5
                },
                lookbrood: {
                    amount: 0,
                    total: 0,
                    price: 2.5
                }
            };
        };

        vm.calc = function () {
            vm.reservation.total = 0;
            angular.forEach(vm.reservation, function (foodType) {
                if (foodType.price) {
                    foodType.total = foodType.amount * foodType.price;
                    vm.reservation.total += foodType.total;
                }
            });
            console.log(vm.reservation);
        };


        vm.sendMail = function () {
            // TODO
            // RegistrationService.sendMail()
        };

        vm.reset();
    }

})
(angular);