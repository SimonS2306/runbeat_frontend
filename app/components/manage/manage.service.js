angular.module('RunBeatApp').factory('ManageService',
    ['$q', '$timeout', '$http', 'currUser',
        function ($q, $timeout, $http, currUser) {


            // return available functions for use in the controllers
            return ({
                getReceived: getReceived,
                getSent: getSent,
                getOngoing: getOngoing,
                getHistory: getHistory,
                acceptRequest: acceptRequest,
                cancelRequest: cancelRequest,
                deleteChallenge: deleteChallenge
            });

            function getReceived(){
                var user = currUser.getUserID();
                return $http.get(BASEURL + '/challenge/getChallenges_1', {
                    receiver: user
                });
            }

            function getSent(){
                /*TODO*/
            }

            function getOngoing(){
                /*TODO*/
            }

            function getHistory(){
                /*TODO*/
            }

            function acceptRequest(){
                /*TODO*/
            }

            function cancelRequest(){
                /*TODO*/
            }

            function deleteChallenge(){
                /*TODO*/
            }
        }
    ]);