(function () {
    'use strict';

    angular.module('RubBeatApp.createService', [])
        .service('sharedCreateChallenge', function () {
            var name = 'Name';
            var challenge = 'Challenge';

            return {
                getName: function () {
                    return name;
                },
                setName: function(value) {
                    name = value;
                },
                getChallenge: function () {
                    return challenge;
                },
                setChallenge: function(value) {
                    challenge = value;
                }
            };
        });
})