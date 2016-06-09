angular.module('RunBeatApp').run(function ($rootScope, AuthService) {
    $rootScope.$on('$stateChangeStart',
        function (event, toState) {
            var requireLogin = toState.access && toState.access.restricted;

            if (requireLogin && AuthService.isLoggedIn() === false) {
                event.preventDefault();
            }
        });
});
