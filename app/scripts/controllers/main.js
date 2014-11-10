'use strict';

/**
 * @ngdoc function
 * @name pruebasAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pruebasAngularApp
 */
angular.module('pruebasAngularApp')
  .controller('MainCtrl', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
 