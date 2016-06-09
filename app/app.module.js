/**
 * Load modules for application
 */

angular.

    module('RunBeatApp', [
        'ui.router'
    ])

    .constant('CONFIG',
        {
            DebugMode: true,
            StepCounter: 0,
            APIHost: 'http://localhost:12016'
        });

/*RunBeat.run(function ($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart',
        function (event, next, current) {
            if (AuthService.isLoggedIn() === false) {
                $location.path('/');
            }
        });
});*/