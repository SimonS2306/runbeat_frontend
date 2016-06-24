angular.module('RunBeatApp').run(function ($rootScope, $location, AuthService) {
    $rootScope.$on('$stateChangeStart',
        function (event, toState) {
            var requireLogin = toState.access && toState.access.restricted;

            if (requireLogin && AuthService.isLoggedIn() === false) {
                $location.path('login');
            }
        });
});

angular.module('RunBeatApp').controller('headerController', ['$scope', 'AuthService',
    function ($scope, AuthService) {

        $scope.$watch(AuthService.isLoggedIn, function(newVal, oldVal) {
            console.log('Login changed: ',newVal,oldVal);
            if(newVal !== oldVal){
                $scope.isLoggedIn = newVal;
            }
        });
}]);