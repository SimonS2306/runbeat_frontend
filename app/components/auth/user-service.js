(function(){

    angular.module('RunBeatApp')
        .service('currUser', currUserService);

    function currUserService(BASEURL, $http, auth) {

        this.register = register;
        this.login = login;
        this.loggedIn = auth.isAuthed;
        this.logout = logout;
        this.getUser = getUser;
        this.isLoggedIn = isLoggedIn;


        return ({
            isLoggedIn: isLoggedIn,
            register: register,
            login: login,
            getUser: getUser,
            logout: logout
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

        function getUser() {
            var token = auth.getToken();
            return token? auth.parseJwt(token).user : {};
        }

        function isLoggedIn() {
            console.log('inside User Service called by index');
            var token = auth.getToken();
           if (token!= null){
               console.log('inside true');

               return true;
           }
            else {
               console.log('inside false');
               return false;
           }
           // return token? true : false;
        }

        function logout() {
            console.log('User is logged out');
            auth.deleteToken();
            return $http.get(BASEURL + '/user/logout', {});
        }
    }

})();
