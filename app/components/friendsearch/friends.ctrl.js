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
                lastName: 'Agrawal'
            },
            {
                image: 'assets/img/profile.jpg',
                firstName: 'Shobhit',
                lastName: 'Agrawal'
            },
            {
                image: 'assets/img/profile.jpg',
                firstName: 'Christina',
                lastName: 'Kopp'
            },
            {
                image: 'assets/img/butterfly.jpg',
                firstName: 'Simon',
                lastName: 'Spitzer'
            }
        ];
    }
})();