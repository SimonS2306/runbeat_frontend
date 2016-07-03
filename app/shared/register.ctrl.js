angular.module('RunBeatApp')
    .controller('register', function ($scope, $location, currUser) {
        $scope.username = '';
        $scope.password = '';
        $scope.passwordConfirm = '';
        $scope.error = false;
        $scope.errorText = '';

        $scope.register = register;

        function register() {
            currUser.register($scope.username, $scope.password).then(function (response) {
                console.log('Register');
                if(response.status == 201){
                    $location.path('/');
                    console.log('Success');
                } else if (response.status == 400 || response.status == 401) {
                    $scope.errorText = "Wrong username or password.";
                    $scope.error = true;
                    console.log($scope.errorText);
                } else {
                    $scope.errorText = "An unknown error occured. please try again later.";
                    $scope.error = true;
                    console.log($scope.errorText);
                }
            });
        }

    });
