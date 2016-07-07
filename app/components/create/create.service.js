(function(){

    angular.module('RunBeatApp')
        .service('createShare', createShareService);

    function createShareService(BASEURL, $http, currUser) {

        this.userID = '';
        this.username = '';

        return ({
            setUserName: setUserName,
            getUserName: getUserName,
            issue: issue
        });

        function setUserName(username) {
            this.username = username;
            return;
        }
        function getUserName() {
            return this.username;
        }

        function issue(title, index){
            return $http.post(BASEURL + '/api/challenges', {
                title: title,
                index: index,
                senderID: currUser.getUserID(),
                receiverID: this.userID
            });
        }
    }
})();