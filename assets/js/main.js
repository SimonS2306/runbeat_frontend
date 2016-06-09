angular.module('RunBeatApp').run(function ($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart',
        function (event, next, current) {
            if (AuthService.isLoggedIn() === false) {
                $location.path('/');
            }
        });
});
