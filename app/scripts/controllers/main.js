'use strict';

/**
 * @ngdoc function
 * @name ngTodoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngTodoAppApp
 */
angular.module('ngTodoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
