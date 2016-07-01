angular.module('RunBeatApp')
                .controller('login', function ($scope, currUser) {
                    $scope.username = '';
                    $scope.pwd = '';
                    $scope.errorText = '';

                    $scope.login = login;

                    function login() {
                        currUser.login($scope.username, $scope.pwd).then(function (response) {
                            if (response.status == 400 || response.status == 401) {
                                $scope.errorText = "Wrong username or password.";
                            } else {
                                $scope.errorText = "An unknown error occured. please try again later.";
                            }
                        });
                    }


                });
