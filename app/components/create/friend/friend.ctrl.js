(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('friendController', friendController);

    friendController.$inject = ["$scope", "sharedCreateChallenge"];

    function friendController($scope, sharedCreateChallenge) {
        console.log(user)
        $scope.update = function(user) {
            sharedCreateChallenge.setName(user);
        };
    }
})();