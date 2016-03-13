// configure our routes
angular.module('app').config(['$routeProvider', '$compileProvider',
    function ($routeProvider, $compileProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'templates/dictionary.html',
                controller: 'dictionaryController'
            })
            .otherwise({
                redirectTo: "/"
            });
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|filesystem|data):/);
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|filesystem|data):/);
    }]);