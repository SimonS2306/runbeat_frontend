(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('manageController', manageController);

    manageController.$inject = ["$scope"];

    function manageController($scope) {
        $scope.sortAcceptType     = 'date';
        $scope.sortAcceptReverse  = true;

        $scope.toAccept = [
            {
                title: 'Square',
                user: 'UserA',
                date: new Date('06/18/2015')
            },
            {
                title: 'Circle',
                user: 'UserB',
                date: new Date('08/06/2016')
            },
            {
                title: 'Triangle',
                user: 'UserX',
                date: new Date('01/18/2015')
            }
        ];

        $scope.sortIssuedType     = 'date';
        $scope.sortIssuedReverse  = true;

        $scope.myIssued = [
            {
                title: 'Square',
                user: 'UserA',
                date: new Date('06/18/2015')
            },
            {
                title: 'Circle',
                user: 'UserC',
                date: new Date('08/06/2016')
            },
            {
                title: 'Triangle',
                user: 'UserX',
                date: new Date('01/18/2015')
            }
        ];

        $scope.sortGoingType     = 'date';
        $scope.sortGoingReverse  = false;

        $scope.onGoing = [
            {
                title: 'Square',
                user: 'UserA',
                date: new Date('06/18/2015'),
                myData: false,
                friendData: true
            },
            {
                title: 'Circle',
                user: 'UserB',
                date: new Date('08/06/2016'),
                myData: true,
                friendData: false
            },
            {
                title: 'Triangle',
                user: 'UserX',
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
                user: 'UserA',
                date: new Date('06/18/2015'),
                winner: 'UserA'
            },
            {
                title: 'Circle',
                user: 'UserB',
                date: new Date('08/06/2016'),
                winner: 'Me'
            },
            {
                title: 'Triangle',
                user: 'UserX',
                date: new Date('01/18/2015'),
                winner: 'Me'
            }
        ];
    }
})();