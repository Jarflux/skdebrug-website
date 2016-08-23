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
            console.log('submitted', vm.news)
            NewsService.edit(id, vm.news).then(function (result) {
                console.log('success');
            });
        };

        vm.$onInit();

    }

})();

