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
            vm.news.date = _convertDateToMs(vm.news.date);
            NewsService.edit(id, vm.news).then(function (result) {
                console.log('success');
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

