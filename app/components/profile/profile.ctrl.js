angular.module('RunBeatApp').controller('profileController',
    ['$scope', '$location','$http', 'ProfileService',
        function ($scope, $location,$http, ProfileService) {
            
            $scope.user = { username: '123456',
                            profilePicture: 'assets/img/Profile.jpg',
                            credo: 'Carpe Diem',
                            email: 'hello@hello.com',
                            birthday: ''
            };
            $scope.updateProfile=function() {
                console.log($scope.user);
                var myRes=$http.post('http://localhost:3000/user/update',$scope.user);
                console.log(myRes);
            };
            /*$scope.user = ProfileService.getProfile();*/

        }
    ]);

angular.module('RunBeatApp').factory('ProfileService',
    ['$q', '$timeout', '$http',
        function ($q, $timeout, $http) {

            var user = [];

            // return available functions for use in the controllers
            return ({
                getProfile: getProfile,
                setProfile: setProfile
            });


            function getProfile() {
                // create a new instance of deferred
                var deferred = $q.defer();

                // send a post request to the server
                /*$http.get('http://localhost:3000/user/getProfile',
                    {userid: userid})
                // handle success
                    .success(function (data, status) {
                        if (status === 200 && data.status) {
                            user = true;
                            deferred.resolve();
                        } else {
                            user = false;
                            deferred.reject();
                        }
                    })
                    // handle error
                    .error(function (data) {
                        user = false;
                        deferred.reject();
                    }); TODO*/

                // return promise object
                return deferred.promise;
            }

            function setProfile() {
                // create a new instance of deferred
                var deferred = $q.defer();
                /*TODO*/
                return deferred.promise;
            }


        }
    ]);
