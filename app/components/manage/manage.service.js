angular.module('RunBeatApp').factory('ManageService',
    ['$q', '$timeout', '$http',
        function ($q, $timeout, $http) {


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
                /*TODO*/
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