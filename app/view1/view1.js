'use strict';

angular.module('myApp.view1', ['mrMenu', 'ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
  $http.get('data/sample.json')
       .then(function(res){
          $scope.sampleData = res.data;
        });


});