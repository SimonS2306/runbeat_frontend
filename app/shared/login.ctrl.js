angular.module('RunBeatApp')
                .controller('login', function ($scope, $location, currUser) {
                    $scope.username = '';
                    $scope.password = '';
                    $scope.error = false;
                    $scope.errorText = '';

                    $scope.login = login;

                    function login() {
                        currUser.login($scope.username, $scope.password).then(function successCallback(response) {
                            $location.path('/');
                        }, function errorCallback(response) {
                            if (response.status == 400 || response.status == 401) {
                                $scope.errorText = "Wrong username or password";
                                $scope.error = true;
                            } else {
                                $scope.errorText = "An unknown error occured. Please try again later.";
                                $scope.error = true;
                            }
                        });
                    }


                });
