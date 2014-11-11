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
  		var baseURL='http://lorempixel.com/100/90/';
  		$scope.contenido=[
  		{
  			img:baseURL+'abstract',
  			title:'Lista',
  			sumario:'Una lista en el que se puede añadir, borrar, modificar filas. Además se pueden mover de posición. Usa localStorage, angular-ui-sortable'
  		},
  		{
  			img:baseURL+'abstract',
  			title:'Carousel',
  			sumario:'Carousel mediante angular-bootstrap. Componentes Bootstrap escritos en puro AngularJS. (AngularUI)'
  		}
  		
  		];
  	});
 