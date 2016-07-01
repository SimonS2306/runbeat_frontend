angular.module('RunBeatApp')
                .controller('login', function ($scope, $location, currUser) {
                    $scope.username = '';
                    $scope.pwd = '';
                    $scope.error = false;
                    $scope.errorText = '';

                    $scope.login = login;

                    function login() {
                        currUser.login($scope.username, $scope.pwd).then(function (response) {
                            console.log('Hello');
                            if(response.status == 200){
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
