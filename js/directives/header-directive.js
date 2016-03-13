angular.module("app").directive("header", ['$rootScope', function ($rootScope) {
    "use strict";
    return {
        link: function ($scope) {
            $scope.version = version;
            $scope.$on('$routeChangeSuccess', function (e, targetRoute, currentRoute) {
                $scope.tabs = [];
                $scope.tabs[targetRoute.$$route.originalPath.substring(1)] = true;
            });
            $scope.showIncognitoAccessMessage = true;
            $scope.showFileSchemeAccessMessage = true;
            $scope.closeIncognitoAccessMessage = function() {
                $scope.showIncognitoAccessMessage = false;
            }
            $scope.closeFileSchemeAccessMessage  = function() {
                $scope.showFileSchemeAccessMessage = false;
            }
        },
        templateUrl: "templates/header.html"
    };
}
]);