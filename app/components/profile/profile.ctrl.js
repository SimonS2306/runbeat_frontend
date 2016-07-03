angular.module('RunBeatApp').controller('profileController',
    ['$scope', '$location','$http', 'ProfileService','currUser',
        function ($scope, $location,$http, ProfileService,currUser) {
           console.log('id in Profilecontroller'+currUser.getUserID());
            console.log(currUser.user());
            $scope.user = currUser.user();


            // { username: 'efgh',
            //                 profilePicture: 'assets/img/Profile.jpg',
            //                 credo: 'Carpe Diem',
            //                 email: 'hello@hello.com',
            //                 birthday: '',
            //                 data : ''
            // };
            $scope.updateProfile=function() {
               // console.log($scope.user);

                var f = document.getElementById('InputFile').files[0],
                    r = new FileReader();
                r.onloadend = function(e){
                    var data1 = e.target.result;
                    console.log('inside file data');
                    $scope.user.data=data1;
                }
                r.readAsBinaryString(f);
console.log($scope.user);
                var myRes=$http.post('http://localhost:3000/user/update',$scope.user);
                console.log('this is res '+myRes);
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

            function getUserID() {
                console.log('inside Find ID');
                var token = auth.getToken();
                return token? auth.parseJwt(token).user._id : '';
            }
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
