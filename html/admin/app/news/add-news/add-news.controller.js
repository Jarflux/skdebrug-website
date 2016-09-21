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
                return new Date(dateString).getTime();
            }
            return null;
        }

        function _mapToModel(news) {
            var _output = angular.copy(news);
            _output.date = _convertDateToMs(_output.date);
            return _output;
        }

        function _reset() {
            vm.news = {
                date: undefined,
                title: undefined,
                content: undefined
            };
        }

        vm.addNews = function () {
            var model = _mapToModel(vm.news);

            NewsService.add(model).then(function (result) {
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

