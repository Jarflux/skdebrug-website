(function (angular) {
    'use strict';

    angular
        .module('skdebrug.admin.news')
        .service('NewsService', NewsService);

    NewsService.$inject = ['$http', '$q'];

    /* @ngInject */
    function NewsService($http, $q) {

        function _add(newsObj) {
            var request = {
                data: newsObj,
                method: 'POST',
                url: '/data/private/news'
            };

            return $http(request);
        }

        function _edit(id, newsObj) {
            var request = {
                data: newsObj,
                method: 'PUT',
                url: '/data/private/news'
            };

            return $http(request);
        }

        function _get(id) {
            var request = {
                method: 'GET',
                url: '/data/news/' + id
            };

            return $http(request);
        }

        function _all() {
            var request = {
                method: 'GET',
                url: '/data/news'
            };

            return $http(request);
        }

        return {
            add: _add,
            all: _all,
            get: _get,
            edit: _edit
        }
    }

})(angular);
