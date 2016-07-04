(function(){

    angular.module('RunBeatApp')
        .service('createShare', createShareService);

    function createShareService() {

        this.userID = '';
        this.username = '';

        return ({
            setUserID: setUserID,
            getUserID: getUserID,
            setUserName: setUserName,
            getUserName: getUserName
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
    }
})();