(function(){

    angular.module('RunBeatApp')
        .service('currUser', currUserService);

    function currUserService(BASEURL, $http, auth) {

        this.register = register;
        this.login = login;
        this.loggedIn = auth.isAuthed;
        this.logout = logout;
        this.getUserID = getUserID;
        this.isLoggedIn = isLoggedIn;

        return ({
            isLoggedIn: isLoggedIn,
            register: register,
            login: login,
            getUserID: getUserID,
            logout: logout,
            username: getUsername
        });
        ////////////////

        function register(user, pass) {
            return $http.post(BASEURL + '/user/register', {
                username: user,
                password: pass
            });
        }

        function login(user, pass) {
            return $http.post(BASEURL + '/user/login', {
                username: user,
                password: pass
            });
        }

        function getUserID() {
            var token = auth.getToken();
            return token? auth.parseJwt(token).user._id : '';
        }

        function getUsername(){
            var token = auth.getToken();
            return token != null ? auth.parseJwt(token).user.username : '';
        }

        function isLoggedIn() {
            var token = auth.getToken();
            return token != null ? true : false;
        }

        function logout() {
            console.log('User is logged out');
            auth.deleteToken();
            return $http.post(BASEURL + '/user/logout', {});
        }
    }

})();
