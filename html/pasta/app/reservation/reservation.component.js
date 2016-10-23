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
            templateUrl: "pasta/app/reservation/reservation.partial.html",
            controller: reservationController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {}
        };
        return directive;
    }

    reservationController.$inject = ['ReservationService'];

    /* @ngInject */
    function reservationController(ReservationService) {
        var vm = this;

        vm.reset = function () {
            vm.hideMessage();
            vm.reservation = {
                name: "",
                email: "",
                time: {
                    selected: "",
                    options: ["18u - 19u", "19u - 20u", "20u - 21u"]
                },
                pasta: {
                    amount: 0,
                    total: 0.00,
                    price: 9.00
                },
                veggie: {
                    amount: 0,
                    total: 0.00,
                    price: 9.00
                },
                child: {
                    amount: 0,
                    total: 0.00,
                    price: 5.00
                },
                dessert: {
                    amount: 0,
                    total: 0.00,
                    price: 3.50
                },
                lookbrood: {
                    amount: 0,
                    total: 0.00,
                    price: 2.50
                }
            };
        };

        vm.hideMessage = function () {
            vm.message = undefined;
        };

        vm.calc = function () {
            vm.reservation.total = 0;
            angular.forEach(vm.reservation, function (foodType) {
                if (foodType.price) {
                    foodType.total = foodType.amount * foodType.price;
                    vm.reservation.total += foodType.total;
                }
            });
        };


        vm.sendMail = function () {
            vm.isSending = true;
            var reservation = {};
            reservation.recipient = vm.reservation.email;
            reservation.name = vm.reservation.name;
            reservation.time = vm.reservation.time.selected;
            reservation.pasta = vm.reservation.pasta.amount;
            reservation.veggie = vm.reservation.veggie.amount;
            reservation.child = vm.reservation.child.amount;
            reservation.dessert = vm.reservation.dessert.amount;
            reservation.lookbrood = vm.reservation.lookbrood.amount;
            ReservationService.sendMail(reservation).then(function (response) {
                // success handler
                // vm.isSending = false;
                vm.reset();
                vm.message = {
                    success: true,
                    text: 'De reservatie is succesvol verstuurd!'
                };
            }, function (error) {
                // error handler
                //vm.isSending = false;
                //vm.messages.error = response.data.errors.toString();
                console.log(error);
                if(error.status == 500){
                    vm.message = {
                        error: true,
                        text: 'Fout op de server, probeer het later opnieuw.'
                    };
                }else{
                    vm.message = {
                        error: true,
                        text: 'Formulier bevat nog fouten' + error.data
                    };
                }
            });
        };

        vm.reset();
    }

})
(angular);