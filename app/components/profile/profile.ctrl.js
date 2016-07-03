angular.module('RunBeatApp')
    .controller('profileController', function ($scope, $location, $http) {

            $scope.user = { name: '',
                            profileImagePath: '',
                            credo: '',
                            firstname: '',
                            lastname: '',
                            birthday: ''
            };
        
            $scope.updateProfile= updateProfile;
                
                function updateProfile() {
                var myRes=$http.post('http://localhost:3000/profile/simon' /* +currUser.getUsername() */, $scope.user);
                console.log(myRes);
                $location.path('/profile');
            };
            
});