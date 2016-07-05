(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('manageController', manageController);

    manageController.$inject = ["$scope", 'ManageService'];

    function manageController($scope, ManageService) {
        
        $scope.sortAcceptType     = 'date';
        $scope.sortAcceptReverse  = true;

        /*Don't delete test data
        $scope.toAccept = [
            {
                title: 'Square',
                user: 'User A',
                date: new Date('06/18/2015'),
                ID: '3214'
            },
            {
                title: 'Circle',
                user: 'User B',
                date: new Date('08/06/2016'),
                ID: '62425'
            },
            {
                title: 'Triangle',
                user: 'User X',
                date: new Date('01/18/2015'),
                ID: '75486'
            }
        ];*/
        
        ManageService.getReceived().then(function successCallback(response) {
            $scope.toAccept = fromJson(response.body);
        }, function errorCallback(response) {
            $scope.toAccept = '';
        });

        $scope.sortIssuedType     = 'date';
        $scope.sortIssuedReverse  = true;

        ManageService.getSent().then(function successCallback(response) {
            $scope.myIssued = fromJson(response.body);
        }, function errorCallback(response) {
            $scope.myIssued = '';
        });

        $scope.sortGoingType     = 'date';
        $scope.sortGoingReverse  = false;

        ManageService.getSent().then(function successCallback(response) {
            $scope.onGoing = fromJson(response.body);
        }, function errorCallback(response) {
            $scope.onGoing = '';
        });

        $scope.sortCompletedType     = 'date';
        $scope.sortCompletedReverse  = false;

        ManageService.getSent().then(function successCallback(response) {
            $scope.completed = fromJson(response.body);
        }, function errorCallback(response) {
            $scope.completed = '';
        });

        $scope.acceptChallenge = function (challengeID) {
            var buttonID = '#' + challengeID;
            $(buttonID).disable();

            /*TODO: Disable button + color it -> feedback*/
        };

        $scope.delete = function (challengeID) {
            /*TODO: Disable button + color it -> feedback*/
        };
    }
})();