angular.module('RunBeatApp')
    .controller('logoutController', function ($scope, $location, currUser) {

        $scope.logout = logout;

        function logout() {
            console.log('Logging out user');
            currUser.logout().then(function (response) {
                if(response.status == 200) {
                    console.log('Successful logout');
                } else{
                    console.log('User not logged out');
                }
            });
            $location.path('/');
        }

    })
