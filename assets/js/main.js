angular.module('RunBeatApp').run(function ($rootScope, $location, currUser) {
    $rootScope.$on('$stateChangeStart',
        function (event, toState) {

            var requireLogin = toState.access && toState.access.restricted;

            if (requireLogin && currUser.isLoggedIn() === false) {
                $location.path('login');
            }
        });
});

angular.module('RunBeatApp').controller('headerController', ['$scope', 'currUser',
    function ($scope, currUser) {
        $scope.$watch(currUser.isLoggedIn, function(newVal, oldVal) {
            console.log('Login changed: ',newVal,oldVal);
            $scope.isLoggedIn = newVal;
        });
        $scope.$watch(currUser.username, function(newVal, oldVal) {
            console.log('User changed: ',newVal,oldVal);
            $scope.currentUser = newVal;
        });
        console.log($scope.currentUser);
    }
]);