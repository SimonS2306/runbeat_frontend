angular.module('RunBeatApp')
    .controller('register', function ($scope, $location, currUser) {
        $scope.username = '';
        $scope.password = '';
        $scope.passwordConfirm = '';
        $scope.error = false;
        $scope.errorText = '';

        $scope.register = register;

        function register() {
            currUser.register($scope.username, $scope.password).then(function successCallback(response) {
                $location.path('/');
            }, function errorCallback(response) {
                if (response.status == 400 || response.status == 401) {
                    $scope.errorText = "Username is already taken.";
                    $scope.error = true;
                } else {
                    $scope.errorText = "An unknown error occured. Please try again later.";
                    $scope.error = true;
                }
            });
        }

    });
