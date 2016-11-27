(function () {
    'use strict';

    angular
        .module('skdebrug.admin.news')
        .controller('addNewsController', addNewsController);

    addNewsController.$inject = ['NewsService'];

    /* @ngInject */
    function addNewsController(NewsService) {
        var vm = this;



        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime();
            }
            return null;
        }

        vm.addNews = function () {
            var news = angular.copy(vm.news);

            news.date = _convertDateToMs(news.date);

            NewsService.add(news).then(function (result) {
                console.log('successfully added', news, result);
                vm.message = {
                    success: true,
                    text: 'Successfully added the news article: ' + news.title
                };
                vm.reset();
            }, function (error) {
                console.log('something went wrong!!', error);
                vm.message = {
                    error: true,
                    text: 'Something went wrong'
                };
            });
        };

        vm.hideMessage = function () {
            vm.message = undefined;
        };

        vm.reset = function () {
            vm.news = {
                date: undefined,
                title: undefined,
                content: undefined
            };
        };

        vm.$onInit = function () {
            vm.reset();
        };

        vm.$onInit();

    }

})();

