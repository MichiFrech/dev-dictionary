angular.module('app').controller('dictionaryController', ['$scope', '$http', function ($scope, $http) {
   $http.get('dictionary/dictionary.json').then(function(response) {
       $scope.profiles = response.data;
   });


    $scope.display = function(profile) {
       $('#display').load('http://stackoverflow.com/tags/' + profile + '/info .post-text');


    }
}]);