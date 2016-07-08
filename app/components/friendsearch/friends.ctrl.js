(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('friendsController', friendsController);

    friendsController.$inject = ["$scope", "FriendService"];

    function friendsController($scope, FriendService) {

        $scope.activeTab = 'friends';

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

        FriendService.getSent().then(function successCallback(response){
            if(response.data.length > 0){
                $scope.gotSent = true;
                $scope.sent = response.data;
            }else{
                $scope.gotSent = false;
            }
        },function errorCallback(response) {
            $scope.gotSent = false;
        });

        FriendService.getReceived().then(function successCallback(response){
            if(response.data.length > 0){
                $scope.gotReceived = true;
                $scope.received = response.data;
            }else{
                $scope.gotReceived = false;
            }
        },function errorCallback(response) {
            $scope.gotReceived = false;
        });

        $scope.searchUser = function (userToSearch) {
            console.log(userToSearch);
            FriendService.searchUsers(userToSearch).then(function successCallback(response){
                if(response.data.length > 0){
                    $scope.foundSearched = true;
                    $scope.searched = response.data;
                }else{
                    $scope.gotFriends = false;
                }
            },function errorCallback(response) {
                $scope.foundSearched = false;
            });
        }

        $scope.sendRequest = function (friendname) {
            FriendService.issueRequest(friendname).then(function successCallback(response){
                $scope.success = true;
                $scope.error = false;
                $scope.successMessage = 'You successfully sent a friendrequest.';
            },function errorCallback(response) {
                $scope.success = false;
                $scope.error = true;
                $scope.errorMessage = 'Something went wrong. Please try later again.';
            });
        }


        $scope.unfriend = function (friendname) {
            FriendService.unfriend(friendname).then(function successCallback(response){
                $scope.success = true;
                $scope.error = false;
                $scope.successMessage = 'You successfully unfriended this user.';
            },function errorCallback(response) {
                $scope.success = false;
                $scope.error = true;
                $scope.errorMessage = 'Something went wrong. Please try later again.';
            });
        }

        $scope.cancel = function (requestID) {
            FriendService.unfriend(requestID).then(function successCallback(response){
                $scope.success = true;
                $scope.error = false;
                $scope.successMessage = 'You successful declined/ canceled this friend request.';
            },function errorCallback(response) {
                $scope.success = false;
                $scope.error = true;
                $scope.errorMessage = 'Something went wrong. Please try later again.';
            });
        }
    }
})();