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
            _reset();
        };

        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime()/1000;
            }
            return null;
        }

        function _reset() {
            vm.news = {
                date: undefined,
                title: undefined,
                content: undefined
            };
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
            _reset();
        };

    }

})();

