'use strict';

/**
 * @ngdoc function
 * @name ngTodoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngTodoAppApp
 */
angular.module('ngTodoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
