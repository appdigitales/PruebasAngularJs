'use strict';

/**
 * @ngdoc function
 * @name pruebasAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pruebasAngularApp
 */
angular.module('pruebasAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
