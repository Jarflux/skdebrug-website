(function () {
    'use strict';

    angular
        .module('skdebrug.admin.news')
        .controller('newsController', newsController);

    newsController.$inject = ['NewsService'];

    /* @ngInject */
    function newsController(NewsService) {
        var vm = this;
        NewsService.all().success(function (data) {
            vm.news = data;
        });
    }

})();

