/**
 * Load modules for application
 */

angular.

    module('RunBeatApp', [
        'ui.router'
    ])

    .constant('CONFIG',
        {
            DebugMode: true,
            StepCounter: 0,
            APIHost: 'http://localhost:3000'
        });