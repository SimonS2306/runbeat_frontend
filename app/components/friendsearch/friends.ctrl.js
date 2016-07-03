(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('friendsController', friendsController);

    friendsController.$inject = ["$scope"];

    function friendsController($scope) {

        $scope.activeTab = 'friends';

        $scope.friends = [
            {
                image: 'assets/img/profile.jpg',
                firstName: 'Shobhit',
                lastName: 'Agrawal',
                username: 'shobhit',
                email: 'hello@hello.com'
            },
            {
                image: 'assets/img/profile.jpg',
                firstName: 'Shobhit',
                lastName: 'Agrawal',
                username: 'agrawal'
            },
            {
                image: 'assets/img/profile.jpg',
                firstName: 'Christina',
                lastName: 'Kopp',
                username: 'christina'
            },
            {
                image: 'assets/img/butterfly.jpg',
                firstName: 'Simon',
                lastName: 'Spitzer',
                username: 'simon'
            }
        ];
    }
})();