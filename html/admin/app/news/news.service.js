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
                method: 'POST',
                url: '/data/private/news'
            };

            return $http(request);
        }

        function _get(id) {
            //var deferred = $q.defer();
            //console.log('trig')
            //deferred.resolve({
            //    data: {
            //        "id": 1,
            //        "date": 1470781857855,
            //        "title": "Weekend Extravaganza",
            //        "content": "Het is akelig windstil geweest rond de nieuwe editie van het befaamde spelersweekend dat met rasse schreden nadert. Nog één keer voetballen en het is zo ver: vrijdag 30 oktober geven we de aftrap voor de tweede jaargang. Achter de schermen zijn enkele bestuursleden naarstig op zoek geweest naar een geschikte locatie die beantwoordt aan de hoge kwaliteitseisen die onze vereniging stelt. En we menen dat we toch weer een leuke plek op de kop hebben kunnen tikken. Eén nijpende kwestie moet nog opgelost worden, maar het bestuur gaat er van uit dat we ook die horde zullen kunnen nemen. Om het mysterie nog wat aan te dikken: we zullen dit jaar de landsgrenzen verlaten, maar méér willen we voorlopig niet kwijt. Onze cérémonie protocolaire vindt plaats in het weekend van Allerzielen en dat houdt meer dan ooit in 'hoe meer zielen, hoe meer vreugd'."
            //    }
            //});
            //
            //return deferred.promise;

            var request = {
                method: 'GET',
                url: '/data/news/' + id
            };

            return $http(request);
        }

        function _all() {

            //var deferred = $q.defer();
            //
            //deferred.resolve({
            //    data: [{
            //        "id": 1,
            //        "date": 1470781857855,
            //        "title": "Weekend Extravaganza",
            //        "content": "Het is akelig windstil geweest rond de nieuwe editie van het befaamde spelersweekend dat met rasse schreden nadert. Nog één keer voetballen en het is zo ver: vrijdag 30 oktober geven we de aftrap voor de tweede jaargang. Achter de schermen zijn enkele bestuursleden naarstig op zoek geweest naar een geschikte locatie die beantwoordt aan de hoge kwaliteitseisen die onze vereniging stelt. En we menen dat we toch weer een leuke plek op de kop hebben kunnen tikken. Eén nijpende kwestie moet nog opgelost worden, maar het bestuur gaat er van uit dat we ook die horde zullen kunnen nemen. Om het mysterie nog wat aan te dikken: we zullen dit jaar de landsgrenzen verlaten, maar méér willen we voorlopig niet kwijt. Onze cérémonie protocolaire vindt plaats in het weekend van Allerzielen en dat houdt meer dan ooit in 'hoe meer zielen, hoe meer vreugd'."
            //    }, {
            //        "id": 2,
            //        "date": 1470781857858,
            //        "title": "Erkenning als Antwerpse sportvereniging",
            //        "content": "Eerst en vooral gefeliciteerd met de nieuwe erkenning als Antwerpse sportvereniging die uw vereniging behaalde.\nUw sportvereniging heeft hiermee aangetoond actief te willen werken aan een veilige sportomgeving, zowel voor haar bestuurders, haar vrijwilligers als voor haar leden.\n \nTevens bezorgen wij u ook de engagementsverklaring waarmee u kenbaar kan maken waartoe u zich als vereniging engageert inzake veiligheid.\nWij vragen u om de engagementsverklaring op een actieve manier kenbaar te maken onder alle leden van de vereniging, bv door ophanging in het clublokaal, duidelijk zichtbaar op de website, een keer extra aandacht aan besteden in een nieuwsbrief."
            //    }]
            //});
            //
            //return deferred.promise;

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
