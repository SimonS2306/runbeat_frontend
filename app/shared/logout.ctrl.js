angular.module('RunBeatApp')
    .controller('logoutController', function ($scope, $location, currUser) {

        $scope.logout = logout;

        function logout() {
            currUser.logout;
            $location.path('/');
        }

    })
