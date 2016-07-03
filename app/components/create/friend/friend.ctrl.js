(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('friendController', friendController);

    friendController.$inject = ["$scope", "$location", "createShare"];

    function friendController($scope, $location, createShare) {


        $scope.activeTab = 'create';

        $scope.friends = [
            {
                image: 'assets/img/profile.jpg',
                firstName: 'Shobhit',
                lastName: 'Agrawal',
                username: 'shobhit',
                email: 'hello@hello.com',
                userID: '1234'
            },
            {
                image: 'assets/img/profile.jpg',
                firstName: 'Shobhit',
                lastName: 'Agrawal',
                username: 'agrawal',
                userID: '5678'
            },
            {
                image: 'assets/img/profile.jpg',
                firstName: 'Christina',
                lastName: 'Kopp',
                username: 'christina',
                userID: '123467'
            }
        ];

        $scope.challenge = function (userID) {
            console.log('Entered function', userID);
            createShare.setUserID(userID);
        };
    }
})();