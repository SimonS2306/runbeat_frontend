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
                id: 1,
                title: 'New Challenges',
                text: 'This week 3 new challenges will be issued. Have fun running and good luck.'
            },
            {
                image: 'assets/img/header11.jpg',
                id: 2,
                title: 'Find your friends',
                text: 'We improved the friend finder, so be sure to check it out.'
            },
            {
                image: 'assets/img/header14.jpg',
                id: 3,
                title: 'Health coach tested',
                text: 'Last week John Doe, a famous health coach, tested RunBeat and was excited about its potential.'
            }
        ];
    }
})();