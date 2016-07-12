'use strict';

/*
* @Author: mrincon
* @Date:   2016-07-12 00:20:32
* @Last Modified by:   mrincon
* @Last Modified time: 2016-07-12 23:15:31
*/

angular.module('mrMenuItem', [])

.directive('mrMenuItem', function($log) {
  return {
    restrict: 'E',
    templateUrl: 'components/mr-menu/mr-menu-item.html',

    scope: {
      item: '=',
      shown: '=?'
    },

    controller: function($scope) {
      $scope.showMore = function(item){
        if ($scope.shown) {
          $scope.shown.unshift(item);
        } else {
          $log.log(item, " has been shown.");
        }
      }
    },

    link: function(){
    }
  }


});