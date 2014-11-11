'use strict';

/**
 * @ngdoc function
 * @name pruebasAngularApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the pruebasAngularApp
 */
 angular.module('pruebasAngularApp')
 .controller('CarouselCtrl', function ($scope) {
 	var baseURL='http://lorempixel.com/700/300/';
 	$scope.intervalo=2000;

 	$scope.slides = [
 	{
 		title:'El deporte es muy bueno',
 		image: baseURL + 'sports/',
 		text:'Practica deporte. Vivirás más!'
 	},
 	{
 		title:'La buena comida',
 		image: baseURL + 'food/',
 		text:'Comer sano es vivir bien'
 	},
 	{
 		title:'La naturaleza',
 		image: baseURL + 'nature/',
 		text:'El medioambiente es vital'
 	}
 	];


 	//a parte hacemos el modelo de la galería de imágenes
 	var imagenes=$scope.imagenes=[];
 	var base='http://lorempixel.com/200/180/';
 	var titulos=['Cocina mediterranea','El trabajo de cada día','La ciudad y el progreso','El deporte es bueno','la moda mueve dinero','El malgasto de tiempo por las noches'];
 	var palabras=['food','business','city','sports','fashion','nghtlife'];
 	var textoLoremIpsum='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

 	$scope.anadeFotos=function(i){
 		imagenes.push({
 			url:base+palabras[i],
 			titulo:titulos[i],
 			resumen:textoLoremIpsum
 		});
 	};

 	//añado las fotos de la 0 a las 5. podrían ser más.
 	for(var i=0;i<5;i++){
 		$scope.anadeFotos(i);
 	}

 	//sistema de puntuación
 	$scope.rate=0;
 	$scope.max=10;
 	$scope.isReadOnly=false;
 });
