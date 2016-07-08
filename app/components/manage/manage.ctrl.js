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
                ID: '3214',
                accepted: false,
                deleted: false
            },
            {
                title: 'Circle',
                user: 'User B',
                date: new Date('08/06/2016'),
                ID: '62425',
                accepted: false,
                deleted: false
            },
            {
                title: 'Triangle',
                user: 'User X',
                date: new Date('01/18/2015'),
                ID: '75486',
                accepted: false,
                deleted: false
            }
        ];*/
        
        ManageService.getReceived().then(function successCallback(response) {
            $scope.toAccept = response.body;
        }, function errorCallback(response) {
            $scope.toAccept = '';
        });

        $scope.sortIssuedType     = 'date';
        $scope.sortIssuedReverse  = true;

        ManageService.getSent().then(function successCallback(response) {
            $scope.myIssued = response.body;
        }, function errorCallback(response) {
            $scope.myIssued = '';
        });

        $scope.sortGoingType     = 'date';
        $scope.sortGoingReverse  = false;

        ManageService.getSent().then(function successCallback(response) {
            $scope.onGoing = response.body;
        }, function errorCallback(response) {
            $scope.onGoing = '';
        });

        $scope.sortCompletedType     = 'date';
        $scope.sortCompletedReverse  = false;

        ManageService.getSent().then(function successCallback(response) {
            $scope.completed = response.body;
        }, function errorCallback(response) {
            $scope.completed = '';
        });

        $scope.acceptChallenge = function (challengeID) {
            ManageService.acceptChallenge(challengeID).then(function successCallback(response) {
                $scope.success = true;
                $scope.error = false;
                $scope.successMessage = 'The challenge was successfully accepted.';
            }, function errorCallback(response) {
                $scope.success = false;
                $scope.error = true;
                $scope.errorMessage = 'Something went wrong. Please try later again.';
            });
        };

        $scope.delete = function (challengeID) {
            ManageService.deleteChallenge(challengeID).then(function successCallback(response) {
                $scope.success = true;
                $scope.error = false;
                $scope.successMessage = 'The challenge was successfully declined/ deleted.';
            }, function errorCallback(response) {
                $scope.success = false;
                $scope.error = true;
                $scope.errorMessage = 'Something went wrong. Please try later again.';
            });
        };
    }
})();