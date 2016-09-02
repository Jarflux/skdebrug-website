(function () {
    'use strict';

    angular
        .module('skdebrug.admin.news')
        .controller('addNewsController', addNewsController);

    addNewsController.$inject = ['NewsService'];

    /* @ngInject */
    function addNewsController(NewsService) {
        var vm = this;

        vm.$onInit = function () {

            $("[type='date']").datepicker({});

            _reset();
        };

        function _reset() {
            vm.news = {
                date: undefined,
                title: undefined,
                content: undefined
            };
        }

        vm.addNews = function () {
            NewsService.add(vm.news).then(function (result) {
                console.log('successfully added', vm.news, result);
                vm.message = {
                    success: true,
                    text: 'Successfully added the news article: ' + vm.news.title
                };
                _reset();
            }, function (error) {
                console.log('something went wrong!!', error);
                vm.message = {
                    error: true,
                    text: 'Something went wrong'
                };

                vm.message = {
                    success: true,
                    text: 'Successfully added the news article: ' + vm.news.title
                };
            });
        };

        vm.hideMessage = function () {
            vm.message = undefined;
        };

        vm.reset = function () {
            _reset();
        };

    }

})();

