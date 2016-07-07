angular.module('RunBeatApp').controller('profileController',
    ['$scope', '$location','$http', 'ProfileService',
        function ($scope, $location,$http, ProfileService) {

            ProfileService.getProfile().then(function successCallback(response) {
                    $scope.user = response.data;
                    $scope.user.dateOfBirth = $scope.user.dateOfBirth != null ? new Date($scope.user.dateOfBirth) : '';

                }, function errorCallback(response) {
                    console.log(response.error);
            });

            // ProfileService.getProfilePicture().then(function successCallback(response){
            //     $scope.user.profilePicture=response.data;
            // },function errorCallback(){
            //     console.log(response.error);
            // });

            $scope.updateProfile=function() {
                ProfileService.setProfile($scope.user).then(function successCallback(response) {
                }, function errorCallback(response) {
                });
            }
            $scope.setProfilePicture=function(){
                ProfileService.setProfilePicture().then(function successCallback(response){

                },function errorCallback(response) {

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
                r.readAsBinaryString(f);*/
        }
    ]);

angular.module('RunBeatApp').factory('ProfileService',
    ['BASEURL', '$q', '$timeout', '$http', 'currUser',
        function (BASEURL, $q, $timeout, $http, currUser) {

            var user = [];

            // return available functions for use in the controllers
            return ({
                getProfile: getProfile,
                setProfile: setProfile,
                getProfilePicture:getProfilePicture,
                setProfilePicture:setProfilePicture
            });

            function getProfile() {
                var ID = currUser.getUserID();
                return $http.get(BASEURL + '/user/getUser/' + ID, {});
            }

            function setProfile(userData) {
                var ID = currUser.getUserID();
                return $http.put(BASEURL + '/user/update/', userData);
            }
            function setProfilePicture(){
                var userName=currUser.username();
                console.log('USERNAME'+userName);
                return $http.post(BASEURL + '/user/image/upload/' + userName, {});
            }

            function getProfilePicture(){
                var ID = currUser.getUserID();
                return $http.get(BASEURL + '/user/image/' + ID, {});
            }


        }
    ]);
