(function() {
    var app = angular.module('skdebrug.controllers', ['ngRoute']);
    var folder = {
        banners: "images/banners/##.jpg"
    };

    app.controller('teamController', function(apiServices){
        var team = this;
        team.players = [];
        apiServices.getTeam().success(function (data) {
            team.players = data;
        });
    });

    app.controller('newsController', function($scope, apiServices){
        apiServices.getNews().success(function (data) {
            $scope.items = data;
        });
    });

    app.controller('newsDetailController', function($scope, $routeParams, apiServices) {
        $scope.newsId = $routeParams.newsId;
        apiServices.getNewsItem($scope.newsId).success(function (data) {
            $scope.item = data;
        });
    });

    app.controller('teamSliderController', function($scope, apiServices){
        var team = this;
        team.players = [];
        apiServices.getTeam().success(function (data) {
            team.players = data;
        });
    });

    app.controller('rankingController', function($scope, apiServices){
        $scope.sortType     = ''; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order

        apiServices.getLeague().success(function (data) {
            $scope.ranking = data;
        });
    });

    app.controller('matchesController', function($scope, apiServices){
        $scope.sortType     = 'date'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order

       // apiServices.getAllMatches().success(function (data) {
       //     $scope.matches = data;
            $scope.matches = [{
                "id": 1,
                "gameType": "LEAGUE",
                "date": 1442667600000,
                "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
                "awayTeam": {"id": 3, "name": "KFC Brabo"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 2,
                "gameType": "LEAGUE",
                "date": 1442665800000,
                "homeTeam": {"id": 4, "name": "Vidam"},
                "awayTeam": {"id": 5, "name": "P.S.K."},
                "homeScore": 1,
                "awayScore": 5
            }, {
                "id": 3,
                "gameType": "LEAGUE",
                "date": 1442669400000,
                "homeTeam": {"id": 6, "name": "Amber E"},
                "awayTeam": {"id": 7, "name": "Toreke"},
                "homeScore": 3,
                "awayScore": 2
            }, {
                "id": 4,
                "gameType": "LEAGUE",
                "date": 1442667600000,
                "homeTeam": {"id": 8, "name": "TC Brabo"},
                "awayTeam": {"id": 9, "name": "Houtbeurs"},
                "homeScore": 12,
                "awayScore": 1
            }, {
                "id": 5,
                "gameType": "LEAGUE",
                "date": 1442667600000,
                "homeTeam": {"id": 10, "name": "Nonkel Jan"},
                "awayTeam": {"id": 11, "name": "Umicore"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 6,
                "gameType": "LEAGUE",
                "date": 1442667600000,
                "homeTeam": {"id": 12, "name": "AC De Heide"},
                "awayTeam": {"id": 1, "name": "SK De Brug"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 7,
                "gameType": "LEAGUE",
                "date": 1443272400000,
                "homeTeam": {"id": 1, "name": "SK De Brug"},
                "awayTeam": {"id": 2, "name": "Deurnese Turners B"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 8,
                "gameType": "LEAGUE",
                "date": 1443265200000,
                "homeTeam": {"id": 5, "name": "P.S.K."},
                "awayTeam": {"id": 6, "name": "Amber E"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 9,
                "gameType": "LEAGUE",
                "date": 1443272400000,
                "homeTeam": {"id": 3, "name": "KFC Brabo"},
                "awayTeam": {"id": 10, "name": "Nonkel Jan"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 10,
                "gameType": "LEAGUE",
                "date": 1443274200000,
                "homeTeam": {"id": 9, "name": "Houtbeurs"},
                "awayTeam": {"id": 4, "name": "Vidam"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 11,
                "gameType": "LEAGUE",
                "date": 1443272400000,
                "homeTeam": {"id": 11, "name": "Umicore"},
                "awayTeam": {"id": 8, "name": "TC Brabo"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 12,
                "gameType": "LEAGUE",
                "date": 1443265200000,
                "homeTeam": {"id": 7, "name": "Toreke"},
                "awayTeam": {"id": 12, "name": "AC De Heide"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 13,
                "gameType": "LEAGUE",
                "date": 1443877200000,
                "homeTeam": {"id": 2, "name": "Deurnese Turners B"},
                "awayTeam": {"id": 11, "name": "Umicore"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 14,
                "gameType": "LEAGUE",
                "date": 1443877200000,
                "homeTeam": {"id": 8, "name": "TC Brabo"},
                "awayTeam": {"id": 5, "name": "P.S.K."},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 15,
                "gameType": "LEAGUE",
                "date": 1443877200000,
                "homeTeam": {"id": 10, "name": "Nonkel Jan"},
                "awayTeam": {"id": 6, "name": "Amber E"},
                "homeScore": null,
                "awayScore": null
            }, {
                "id": 16,
                "gameType": "LEAGUE",
                "date": 1443877200000,
                "homeTeam": {"id": 3, "name": "KFC Brabo"},
                "awayTeam": {"id": 1, "name": "SK De Brug"},
                "homeScore": null,
                "awayScore": null
            }];

            $scope.new = {};
            angular.forEach($scope.matches, function(value, key){
                var date = new Date(value.date);
                var key = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
                console.log("key = " + date);
                $scope.new[key] = $scope.new[key] || []; // ensure node in the new object
                $scope.new[key].push(value); // push obj to node
          //  });
        });
    });

    app.controller('timelineController', function($scope, apiServices){

    });

    app.controller('nextMatchWidgetController', function($scope, apiServices){
        var match = this;
        apiServices.getNextXMatch(1, 1).success(function (data) {
            match.next = data[0];
        });
    });

    app.controller('matchWidgetController', function($scope, apiServices){
        var match = this;
        apiServices.getPrevXMatch(3, 1).success(function (data) {
            match.prev = data;
        });
    });


    app.controller('bannerSliderController', function($scope, utils){
        var banner = this;
        banner.slides = [];
        var slides = [0,1,2,3,4,5,6,7,8,9];
        var owl = $('#home-banner');

        var defaultOptions = {
            nav : true, // Show next and prev buttons
            dots: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            lazyLoad: true
        };
        var customOptions = $scope.$eval(owl.attr('data-options'));
        // combine the two options objects
        for(var key in customOptions) {
            defaultOptions[key] = customOptions[key];
        }
        // init carousel
        owl.owlCarousel(defaultOptions);

        var counter = 0;
        $.each(slides, function( index, value ) {
            var image = folder.banners.replace("##",value);
            utils
                .isImage(image)
                .then(function(foundImage) {
                    if(foundImage){
                        banner.slides[index] = image;
                    }
                    return ++counter;
                })
                .then(function(counter){
                    if(counter==10) {
                        $.each(banner.slides, function( index, value ) {
                            var content = "<div class=\"item \"><img src=\"" + value + "\"></img></div>";
                            owl.data('owlCarousel').addItem(content);
                        });

                    }
                });
        });

    });

})();
