(function(){

    angular.module('RunBeatApp')
        .service('createShare', createShareService);

    function createShareService(BASEURL, $http, currUser) {

        this.userID = '';
        this.username = '';

        return ({
            setUserID: setUserID,
            getUserID: getUserID,
            setUserName: setUserName,
            getUserName: getUserName,
            issue: issue
        });

        function setUserID(userID) {
            this.userID = userID;
            console.log('Saved in ID', this.userID);
            return;
        }
        function getUserID() {
            return this.userID;
        }

        function setUserName(username) {
            this.username = username;
            return;
        }
        function getUserName() {
            return this.username;
        }

        function issue(challengeID){
            return $http.post(BASEURL + '/api/challenges', {
                challengeID: challengeID,
                senderID: currUser.getUserID(),
                receiverID: this.userID
            });
        }
    }
})();