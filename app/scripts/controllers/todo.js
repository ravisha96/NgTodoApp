'use strict';

/**
 * @ngdoc function
 * @name ngTodoAppApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the ngTodoAppApp
 */
angular.module('ngTodoApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
