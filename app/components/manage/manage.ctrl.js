(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('manageController', manageController);

    manageController.$inject = ["$scope", 'ManageService'];

    function manageController($scope) {
        $scope.sortAcceptType     = 'date';
        $scope.sortAcceptReverse  = true;

        $scope.toAccept = ManageService.getReceived();
        console.log($scope.toAccept);

        $scope.sortIssuedType     = 'date';
        $scope.sortIssuedReverse  = true;

        $scope.myIssued = [
            {
                title: 'Square',
                user: 'User A',
                date: new Date('06/18/2015')
            },
            {
                title: 'Circle',
                user: 'User C',
                date: new Date('08/06/2016')
            },
            {
                title: 'Triangle',
                user: 'User X',
                date: new Date('01/18/2015')
            }
        ];

        $scope.sortGoingType     = 'date';
        $scope.sortGoingReverse  = false;

        $scope.onGoing = [
            {
                title: 'Square',
                user: 'User A',
                date: new Date('06/18/2015'),
                myData: false,
                friendData: true
            },
            {
                title: 'Circle',
                user: 'User B',
                date: new Date('08/06/2016'),
                myData: true,
                friendData: false
            },
            {
                title: 'Triangle',
                user: 'User X',
                date: new Date('01/18/2015'),
                myData: false,
                friendData: false
            }
        ];

        $scope.sortCompletedType     = 'date';
        $scope.sortCompletedReverse  = false;

        $scope.completed = [
            {
                title: 'Square',
                user: 'User A',
                date: new Date('06/18/2015'),
                winner: 'User A'
            },
            {
                title: 'Circle',
                user: 'User B',
                date: new Date('08/06/2016'),
                winner: 'Me'
            },
            {
                title: 'Triangle',
                user: 'User X',
                date: new Date('01/18/2015'),
                winner: 'Me'
            }
        ];
    }
})();