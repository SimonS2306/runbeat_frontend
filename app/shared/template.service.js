(function(){

    angular.module('RunBeatApp')
        .service('template', templateService);

    function templateService() {

        var challenges = [
            {
                title: 'Square',
                difficulty: 'easy',
                instruction: 'In this beginners challenge you have to run a square. The sides should all be around equally long and the four corners should describe a 90 degree angle. This challenge is very well doable in cities where there are a lot of straight streets.',
                open: false,
                image: 'assets/img/square.jpg'
            },
            {
                title: 'Circle',
                difficulty: 'hard',
                instruction: 'This challenge is about running in a circular shape. Therefore it is important to always keep the same distance from a center point. Additionally it is important to end up at the starting point to finish the challenge. It might be best to do this challenge in areas with many small streets to be able to approximate a circle, as good as possible.',
                open: false,
                image: 'assets/img/circle.png'
            },
            {
                title: 'A',
                difficulty: 'medium',
                instruction: 'The A challenge is harder due to the fact, that a route with two crossing streets (in a 45 degree angle) have to be found. Those two streets have to be interconnected by a third one, that cuts straight through both of them. The lower and upper part should be around the same running distance. P.S.: It is required to run back one of the lower parts to finish the route.',
                open: false,
                image: 'assets/img/A.png'
            }
        ];

        return ({
            getTemplates: getTemplates,
            getTemplate: getTemplate
        });


        function getTemplates(){
            console.log(challenges);
            return challenges;
        }

        function getTemplate(index){
            return challenges[index];
        }
    }
})();
