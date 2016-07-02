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
        $scope.abc= currUser.isLoggedIn();
        this.isLoggedIn = currUser.isLoggedIn;
        console.log('inside 1 header controller'+currUser.isLoggedIn());
        $scope.$watch(currUser.isLoggedIn, function(newVal, oldVal) {
            console.log('Login changed: ',newVal,oldVal);
            if(newVal !== oldVal){
                $scope.isLoggedIn = newVal;
            }
        });
        
    }
]);