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
                templateUrl: 'app/components/profile/profile.view.html',
                access: {restricted: false} /*TODO: Change*/
            })
            .state('friendsearch',{
                url: '/friendsearch',
                templateUrl: 'app/components/friendsearch/friendsearch.view.html',
                controller: 'friendsController',
                access: {restricted: false} /*TODO: Change*/
            })
            .state('login',{
                url: '/login',
                templateUrl: 'app/shared/login.view.html',
                controller: 'loginController',
                access: {restricted: false}
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/shared/signup.view.html',
                controller: 'signupController',
                access: {restricted: false}
            })
            .state('manage',{
                url: '/manage',
                templateUrl: 'app/components/manage/manage.view.html',
                controller: 'manageController',
                access: {restricted: false} /*TODO: Change*/
            })
            .state('logout',{
                controller: 'logoutController',
                access: {restricted: true}
            })
            .state('create1',{
            url: '/create',
            templateUrl: 'app/components/create/friend/friend.view.html',
            access: {restricted: false} /*TODO: Change*/
            })
            .state('create2',{
                url: '/create2',/*TODO: Change*/
                templateUrl: 'app/components/create/challenge/challenge.view.html',
                controller: 'challengeController',
                access: {restricted: false} /*TODO: Change*/
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
    }]);
