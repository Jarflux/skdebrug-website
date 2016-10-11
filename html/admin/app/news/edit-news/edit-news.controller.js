(function () {
    'use strict';

    angular
        .module('skdebrug.admin.news')
        .controller('editNewsController', editNewsController);

    editNewsController.$inject = ['NewsService', '$routeParams'];

    /* @ngInject */
    function editNewsController(NewsService, $routeParams) {
        var vm = this;
        var originalNewsItem = undefined;
        var currentId = $routeParams.newsId;

        function _convertDateToMs(dateString) {
            if (dateString) {
                return new Date(dateString).getTime()/1000;
            }
            return null;
        }

        vm.reset = function () {
            vm.news = result.data;
        };

        vm.editNews = function () {
            var news = angular.copy(vm.news);

            news.date = _convertDateToMs(news.date);

            NewsService.edit(currentId, news).then(function (result) {
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

        vm.$onInit = function () {
            NewsService.get(currentId).then(function (result) {
                originalNewsItem = result.data;
                vm.news = originalNewsItem;
                console.log(originalNewsItem)
            });
        };

        vm.$onInit();

    }

})();

