(function () {
    'use strict';

    angular.module('RunBeatApp')
        .controller('challengeController', challengeController);

    challengeController.$inject = ["$scope", "createShare"];

    function challengeController($scope, createShare) {

        $scope.user = createShare.getID();

        $scope.challenges = [
            {
                title: 'Square',
                difficulty: 'easy',
                instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis justo eu faucibus lacinia. Integer tincidunt eget augue id interdum. Duis hendrerit eget mi non vulputate. Curabitur ipsum velit, ornare viverra tellus non, placerat facilisis massa. Etiam ultricies ornare lacus, molestie scelerisque ligula aliquam sed. Integer vel nisi quis massa blandit mollis eget ac dolor. Vestibulum ultricies porta augue, sit amet dictum purus sollicitudin at. Nulla pulvinar magna eu tellus feugiat euismod. Quisque congue egestas tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper, tellus molestie ornare placerat, purus diam ultrices nibh, ut faucibus ante libero sit amet lorem. Sed non mattis ante, eu varius risus. Vestibulum varius ex orci, sit amet commodo risus sagittis eget. Sed a vulputate augue, non semper lectus. Ut non scelerisque diam.',
                open: false,
                image: 'assets/img/Profile.jpg',
                id: 12345
            },
            {
                title: 'Circle',
                difficulty: 'hard',
                instruction: 'bladfjäöjfä fdsjfäö fjsf fjfjlkfafäf fölsfäjdf fsflfjäfjäfjf f jfäajfäafaä fasfäajf',
                open: false,
                image: 'assets/img/Profile.jpg',
                id: 321
            },
            {
                title: 'A',
                difficulty: 'medium',
                instruction: 'bladfjäöjfä fdsjfäö fjsf fjfjlkfafäf fölsfäjdf fsflfjäfjäfjf f jfäajfäafaä fasfäajf',
                open: false,
                image: 'assets/img/Profile.jpg',
                id: 3215
            }
        ];
    }
})();