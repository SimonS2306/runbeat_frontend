/**
 * Load modules for application
 */

angular.

    module('RunBeatApp', [
        'ui.router'/*,
        'RunBeatApp.createService'*/
    ])

    .constant('CONFIG',
        {
            DebugMode: true,
            StepCounter: 0,
            APIHost: 'http://localhost:3000'
        });