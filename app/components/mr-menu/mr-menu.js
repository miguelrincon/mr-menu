'use strict';

/*
* @Author: mrincon
* @Date:   2016-07-11 23:51:34
* @Last Modified by:   mrincon
* @Last Modified time: 2016-07-12 23:15:11
*/

angular.module('mrMenu', ['mrMenuItem'])

.directive('mrMenu', function() {
  return {
    // Only allow to create directive as element
    restrict: 'E',
    templateUrl: 'components/mr-menu/mr-menu.html',

    scope: {
      data: '=',
      shown: '=?'
    },

    controller: function($scope) {
      $scope.selectItem = function(i) {
        $scope.index = i;
      };
    },

    link: function(scope) {
      scope.$watch('data', function(data, oldData) {
        scope.index = 0;
      });
    }

  }
});
