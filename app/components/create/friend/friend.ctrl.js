(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('friendController', friendController);

    friendController.$inject = ["$scope", "sharedCreateChallenge"];

    function friendController($scope, sharedCreateChallenge) {

        $scope.update = function(user) {
            sharedCreateChallenge.setName(user);
        };
    }
})();