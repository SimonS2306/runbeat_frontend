angular.module('RunBeatApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        // any unknown URLS go to 404
        $urlRouterProvider.otherwise('/404');
        // no route goes to index
        $urlRouterProvider.when('', '/');
        // use a state provider for routing

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/home.view.html'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/shared/404.html'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'app/components/profile/profile.view.html'
            });
    }]);
