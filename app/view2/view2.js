'use strict';

angular.module('myApp.view2', ['mrMenuItem', 'ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $http) {
  $http.get('data/sample.json')
       .then(function(res){
          $scope.sampleItemData = res.data[0];
        });
});