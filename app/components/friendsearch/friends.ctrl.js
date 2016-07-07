(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('friendsController', friendsController);

    friendsController.$inject = ["$scope", "FriendService"];

    function friendsController($scope, FriendService) {

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

        $scope.searchUser = function (userToSearch) {
            console.log(userToSearch);
            FriendService.searchUsers(userToSearch).then(function successCallback(response){
                console.log(response.data);
            },function errorCallback(response) {
                console.log(response.error);
            });
        }
    }
})();