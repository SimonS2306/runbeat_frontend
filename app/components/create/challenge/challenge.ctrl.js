(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('challengeController', challengeController);

    challengeController.$inject = ["$scope", "createShare", "$state", "template"];

    function challengeController($scope, createShare, $state, template) {

        $scope.user = createShare.getUserName();

        $scope.challenges = template.getTemplates();

        $scope.issue = function (challenge) {
            createShare.issue(challenge.index, challenge.title).then(function successCallback(response) {
                console.log(response);
                $state.go('manage');
            }, function errorCallback(response) {
                $scope.errorText = "An unknown error occured. Please try again later.";
                $scope.error = true;
            });
        };
    }
})();