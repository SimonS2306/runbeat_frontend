(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope"];

    function homeController($scope) {

        $scope.myInterval = 3000;
        $scope.slides = [
            {
                image: 'assets/img/header13.jpg',
                title: 'New Challenges'
            },
            {
                image: 'assets/img/header11.jpg',
                title: 'Find your friends'
            },
            {
                image: 'assets/img/header15.jpg',
                title: 'Health coach tested'
            }
        ];
    }
})();

/*(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$animate"];

    function homeController($scope, $animate) {

        $animate.enabled(true);

        $scope.slides = [
            { image: 'http://lorempixel.com/400/200/', text: 'blah' },
            { image: 'http://lorempixel.com/400/200/', text: 'blah' },
            { image: 'http://lorempixel.com/400/200/', text: 'blah' }
        ]
    }
})();*/