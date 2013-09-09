'use strict';

angular.module('blurApp')
  .controller('MainCtrl', ['$scope', 'StackMobService', function ($scope, StackMobService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
