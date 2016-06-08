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
                templateUrl: 'app/components/home/home.view.html',
                controller: 'homeController'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/shared/404.html'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'app/components/profile/profile.view.html'
            })
            .state('friendsearch',{
                url: '/friendsearch',
                templateUrl: 'app/components/friendsearch/friendsearch.view.html'
            })
            .state('login',{
                url: '/login',
                templateUrl: 'app/shared/login.view.html'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/shared/signup.view.html'
            })
            .state('manage',{
                url: '/manage',
                templateUrl: 'app/components/manage/manage.view.html'
            });
    }]);
