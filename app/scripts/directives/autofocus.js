'use strict';

/**
 * @ngdoc directive
 * @name pruebasAngularApp.directive:autoFocus
 * @description
 * # autoFocus
 */
 angular.module('pruebasAngularApp')
 .directive('autoFocus', ['$timeout', function($timeout) {
 	return {
 		restrict: 'A',
 		link : function($scope, $element) {
 			$timeout(function() {
 				$element[0].focus();
 			});
 		}
 	}
 }]);
