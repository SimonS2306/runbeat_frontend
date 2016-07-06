angular.module('RunBeatApp').controller('profileController',
    ['$scope', '$location','$http', 'ProfileService',
        function ($scope, $location,$http, ProfileService) {

            ProfileService.getProfile().then(function successCallback(response) {
                    $scope.user = response.data;
                    console.log($scope.user);
                }, function errorCallback(response) {
                    console.log(response.error);
            });
            
            // { username: 'efgh',
            //                 profilePicture: 'assets/img/Profile.jpg',
            //                 credo: 'Carpe Diem',
            //                 email: 'hello@hello.com',
            //                 birthday: '',
            //                 data : ''
            // };
            $scope.updateProfile=function() {
                console.log($scope.user);
                ProfileService.setProfile($scope.user).then(function successCallback(response) {
                    console.log(response.data);
                }, function errorCallback(response) {
                    console.log('Failure');
                });
            }
                /*TODO: Picture code throws errors -> commented out
                var f = document.getElementById('InputFile').files[0],
                r = new FileReader();
                r.onloadend = function(e){
                    var data1 = e.target.result;
                    console.log('inside file data');
                    $scope.user.data=data1;
                }
                r.readAsBinaryString(f);
             /*Old
                console.log($scope.user);
                var myRes=$http.post('http://localhost:3000/user/update',$scope.user);
                console.log('this is res '+myRes);
            };*/
        }
    ]);

angular.module('RunBeatApp').factory('ProfileService',
    ['BASEURL', '$q', '$timeout', '$http', 'currUser',
        function (BASEURL, $q, $timeout, $http, currUser) {

            var user = [];

            // return available functions for use in the controllers
            return ({
                getProfile: getProfile,
                setProfile: setProfile
            });

            function getProfile() {
                var ID = currUser.getUserID();
                return $http.get(BASEURL + '/user/getUser/' + ID, {});
            }

            function setProfile(userData) {
                var ID = currUser.getUserID();
                return $http.put(BASEURL + '/user/update/', userData);
            }


        }
    ]);
