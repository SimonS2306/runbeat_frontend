(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('friendController', friendController);

    friendController.$inject = ["$scope", "createShare"];

    function friendController($scope, createShare) {

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

        /*
         FriendService.getFriends().then(function successCallback(response){
         if(response.data.length > 0){
         $scope.gotFriends = true;
         $scope.friends = response.data;
         }else{
         $scope.gotFriends = false;
         }
         },function errorCallback(response) {
         $scope.gotFriends = false;
         });
         */
        

        $scope.challenge = function (username) {
            createShare.setUserName(username);
        };
    }
})();