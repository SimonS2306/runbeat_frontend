(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('friendsController', friendsController);

    friendsController.$inject = ["$scope"];

    function friendsController($scope) {
        
        $scope.friends = [
            {
                image: 'assets/img/profile.jpg',
                name: 'Shobhit Agrawal'
            },
            {
                image: 'assets/img/profile.jpg',
                name: 'Christina'
            },
            {
                image: 'assets/img/butterfly.jpg',
                name: 'Simon Spitzer'
            }
        ];
    }
})();