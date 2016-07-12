'use strict';

angular.module('myApp.view3', ['mrMenu', 'ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function($scope, $http) {
  $scope.shown = [];

  $http.get('data/sample.json')
       .then(function(res){
          $scope.shown = [];
          $scope.sampleData = res.data;
        });
  $scope.clear = function(){
    $scope.shown.length = 0; //clears the list
  }

});