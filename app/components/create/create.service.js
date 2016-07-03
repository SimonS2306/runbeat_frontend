(function(){

    angular.module('RunBeatApp')
        .service('createShare', createShareService);

    function createShareService() {

        this.userID = '';

        return ({
            setUserID: setUserID,
            getUserID: getUserID
        });

        function setUserID(userID) {
            this.userID = userID;
            console.log('Saved in ID', this.userID);
            return;
        }
        function getUserID() {
            return this.userID;
        }
    }
})();