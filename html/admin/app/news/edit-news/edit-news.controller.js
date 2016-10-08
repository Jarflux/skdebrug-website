(function () {
    'use strict';

    angular
        .module('skdebrug.admin.news')
        .controller('editNewsController', editNewsController);

    editNewsController.$inject = ['NewsService'];

    /* @ngInject */
    function editNewsController(NewsService) {
        var vm = this;
        var originalNewsItem = undefined;
        var id = undefined;

        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime()/1000;
            }
            return null;
        }

        vm.$onInit = function () {
            id = 1;

            NewsService.get(id).then(function (result) {
                originalNewsItem = result.data;
                vm.news = originalNewsItem;
                console.log(originalNewsItem)
            });
        };

        vm.reset = function () {
            vm.news = result.data;
        };

        vm.editNews = function () {
            var news = angular.copy(vm.news);

            news.date = _convertDateToMs(news.date);

            NewsService.edit(id, news).then(function (result) {
                console.log('successfully updated', news, result);
                vm.message = {
                    success: true,
                    text: 'Successfully updated news article: ' + news.title
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


        vm.$onInit();

    }

})();

