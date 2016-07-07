angular.module('RunBeatApp').factory('FriendService',
    ['BASEURL', '$q', '$timeout', '$http', 'currUser',
        function (BASEURL, $q, $timeout, $http, currUser) {


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

            /*TODO: Differentiate Sent/Received + check functionality*/
            function getFriends() {
                var username = currUser.getUsername();
                return $http.get(BASEURL + '/user/friends/' + username, {});
            }

            function getReceived(){
                var username = currUser.getUsername();
                return $http.get(BASEURL + '/user/allfriendreqs/' + username, {});
            }

            function getSent(){
                /*TODO*/
            }

            function searchUsers(searchUser){
                return $http.get(BASEURL + '/user/searchUser/' + searchUser, {});
            }

            function issueRequest(issuedBy, issuedTo){
                return $http.post(BASEURL + '/user/friendreq', {
                    sender: issuedBy,
                    receiver: issuedTo
                });
            }

            function acceptRequest(requestID){
                return $http.put(BASEURL + '/user/friendreq' + requestID, {});
            }

            function cancelRequest(requestID){
                return $http.delete(BASEURL + '/user/friendreq' + requestID, {});
            }

            /*TODO: Deleted friend == ID or username??*/
            function unfriend(friendID){
                var user = currUser.getUsername();
                return $http.delete(BASEURL + '/user/friendreq', {
                    username: user,
                    deletedfriend: friendID
                });
            }
        }
    ]);
