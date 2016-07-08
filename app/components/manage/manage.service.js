angular.module('RunBeatApp').factory('ManageService',
    ['BASEURL','$q', '$timeout', '$http', 'currUser',
        function (BASEURL, $q, $timeout, $http, currUser) {


            // return available functions for use in the controllers
            return ({
                getReceived: getReceived,
                getSent: getSent,
                getOngoing: getOngoing,
                getHistory: getHistory,
                acceptRequest: acceptRequest,
                deleteChallenge: deleteChallenge
            });

            function getReceived(){
                var user = currUser.getUserID();
                return $http.get(BASEURL + '/api/challenges1', {
                    receiver: user
                });
            }

            function getSent(){
                var user = currUser.getUserID();
                return $http.get(BASEURL + '/api/challenges2', {
                    sender: user
                });
            }

            function getOngoing(){
                var user = currUser.getUserID();
                return $http.get(BASEURL + '/api/challenges3', {
                    sender: user,
                    receiver: user
                });
            }

            function getHistory(){
                var user = currUser.getUserID();
                return $http.get(BASEURL + '/api/challenges4', {
                    sender: user,
                    receiver: user
                });
            }
            
            function acceptRequest(challengeID){
                return $http.put(BASEURL + '/api/update3/' + challengeID, {});
            }

            function deleteChallenge(challengeID){
                return $http.delete(BASEURL + '/api/challenges/' + challengeID, {});
            }
        }
    ]);