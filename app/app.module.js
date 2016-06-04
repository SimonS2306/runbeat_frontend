/**
 * Load modules for application
 */

angular.

    module('RunBeatApp', [
        'ui.router',
        'ui.bootstrap',
        'checklist-model'
    ])

    .constant('CONFIG',
        {
            DebugMode: true,
            StepCounter: 0,
            APIHost: 'http://localhost:12017'
        });