angular.module('RunBeatApp').factory('FriendService',
    ['$q', '$timeout', '$http',
        function ($q, $timeout, $http) {


            // return available functions for use in the controllers
            return ({
                getFriends: getFriends,
                getReceived: getReceived,
                getSent: getSent,
                searchUsers: searchUsers,
                issueRequest: issueRequest,
                acceptRequest: acceptRequest,
                cancelRequest: cancelRequest,
                unfriend: unfriend
            });


            function getFriends() {
                /*TODO*/
            }

            function getReceived(){
                /*TODO*/
            }

            function getSent(){
                /*TODO*/
            }

            function searchUsers(){
                /*TODO*/
            }

            function issueRequest(){
                /*TODO*/
            }

            function acceptRequest(){
                /*TODO*/
            }

            function cancelRequest(){
                /*TODO*/
            }

            function unfriend(){
                /*TODO*/
            }
        }
    ]);
