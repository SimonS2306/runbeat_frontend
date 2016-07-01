angular.module('RunBeatApp')
    .config(['$stateProvider', '$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider){

        // any unknown URLS go to 404
        $urlRouterProvider.otherwise('/404');
        // no route goes to index
        $urlRouterProvider.when('', '/');
        // use a state provider for routing

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/home.view.html',
                controller: 'homeController',
                access: {restricted: false}
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/shared/404.html',
                access: {restricted: false}
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'app/components/profile/profile2.view.html',
                controller: 'profileController',
                access: {restricted: true}
            })
            .state('friendsearch',{
                url: '/friendsearch',
                templateUrl: 'app/components/friendsearch/friendsearch2.view.html',
                controller: 'friendsController',
                access: {restricted: true}
            })
            .state('login',{
                url: '/login',
                templateUrl: 'app/shared/login.view.html',
                controller: 'login',
                access: {restricted: false}
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/shared/register.view.html',
                /*controller: 'register', TODO*/
                access: {restricted: false}
            })
            .state('manage',{
                url: '/manage',
                templateUrl: 'app/components/manage/manage.view.html',
                controller: 'manageController',
                access: {restricted: true}
            })
            .state('logout',{
                /*controller: 'logoutController', TODO*/
                access: {restricted: true}
            })
            .state('create1',{
                url: '/create',
                templateUrl: 'app/components/create/friend/friend.view.html',
                /*controller: 'friendController', TODO*/
                access: {restricted: true}
            })
            .state('create2',{
                url: '/create2',/*TODO: Change*/
                templateUrl: 'app/components/create/challenge/challenge.view.html',
                controller: 'challengeController',
                access: {restricted: true}
            })
            .state('rules',{
                url: '/rules',
                templateUrl: 'app/shared/rules.view.html',
                access: {restricted: false}
            })
            .state('faq',{
                url: '/faq',
                templateUrl: 'app/shared/faq.view.html',
                access: {restricted: false}
            })
            .state('contact',{
                url: '/contact',
                templateUrl: 'app/shared/contact.view.html',
                access: {restricted: false}
            });

        //auth interceptor
        $httpProvider.interceptors.push('authInterceptor');


    }]);
