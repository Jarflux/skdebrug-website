(function (angular) {
    'use strict';

    angular
        .module('skdebrug.admin.news')
        .service('Newservice', Newservice);

    Newservice.$inject = ['$http'];

    /* @ngInject */
    function Newservice($http) {

        function _add(newsObj) {
            var request = {
                data: newsObj,
                method: 'POST',
                url: '/data/news'
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
            all: _all
        }
    }

})(angular);
