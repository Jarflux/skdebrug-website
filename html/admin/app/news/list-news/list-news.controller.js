(function () {
    'use strict';

    angular
        .module('skdebrug.admin.news')
        .controller('listNewsController', listNewsController);

    listNewsController.$inject = ['NewsService'];

    /* @ngInject */
    function listNewsController(NewsService) {
        var vm = this;
        NewsService.all().then(function (result) {
            vm.news = result.data;
            vm.newsCount = result.data.length();
        }, function () {
            vm.newsCount = 0;
        });
    }

})();

