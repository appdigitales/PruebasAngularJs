'use strict';

/**
 * @ngdoc function
 * @name pruebasAngularApp.controller:ListaCtrl
 * @description
 * # ListaCtrl
 * Controller of the pruebasAngularApp
 */
 angular.module('pruebasAngularApp')
 .controller('ListaCtrl', ['$scope','vocabularioIngles','localStorageService',function($scope,vocabularioIngles,localStorageService) {
 	/******** AL CARGAR *************************/
 	//guardo en la variable vocIngles el localStorage vocIngles. si no existe, le paso el del servicio vocabularioIngles
 	$scope.vocIngles = localStorageService.get('vocIngles') || vocabularioIngles.vocabulario; 

 	//con watch vigilo la variable vocIngles cuando modifique y lo grabo en localStorage 
 	$scope.$watch('vocIngles', function () {
 		localStorageService.set('vocIngles', $scope.vocIngles);
 	}, true);

 	//al iniciar no existe el ng-model lineaVocabulario. si asigno lineaVocabulario.I dará fallo en javascript.
 	if(!$scope.lineaVocabulario){
 		$scope.lineaVocabulario={}; 
 	}

 	/*******************************************/

 	//boton añadir
 	$scope.anadirVocabulario =function(){
 		$scope.lineaVocabulario.T='V';
 		$scope.vocIngles.push($scope.lineaVocabulario);
 		$scope.lineaVocabulario=[];
 	};

 	//boton borrar
 	$scope.borrarVocabulario=function(index){
 		if($scope.lineaVocabulario.I!==undefined && $scope.lineaVocabulario.I.length!==0){
 			//si index es indefinido es porque se pulsa fuera las tr, botón cerca de añadir/modificar, por lo tanto tiene que buscar la id
 			//por lo tanto tomo en cuenta lo que se escriba en el ngmodel lineaVocabulario.I (el input id)
 			if(index===undefined){
 				for(var i=0;i<$scope.vocIngles.length;i++){
 					if($scope.vocIngles[i].I===$scope.lineaVocabulario.I){
 						$scope.vocIngles.splice(i,1);
 						break;
 					}
 				}
 			}else{
 				$scope.vocIngles.splice(index,1);
 			}
 		}
 		$scope.lineaVocabulario={};
 	};

 	//input id
 	$scope.botonAnadir=' Add '; //default
 	$scope.onblurId=function(){
 		if($scope.lineaVocabulario.I.length!==0){
 			$scope.botonAnadir=' Modification ';
 		}else{
 			$scope.botonAnadir=' Add ';
 		}
 		$scope.lineaVocabulario={};
 	};

 	// var borrarDatosInput=function(){
 	// 	$scope.lineaVocabulario.I="";
 	// 	$scope.lineaVocabulario.N="";
 	// 	$scope.lineaVocabulario.L="";
 	// 	$scope.lineaVocabulario.P="";
 	// 	$scope.lineaVocabulario.R="";
 	// }

 	//tabla
 	$scope.onclickTabla=function(fila){
 		$scope.lineaVocabulario.I=fila.I;
 		$scope.lineaVocabulario.N=fila.N;
 		$scope.lineaVocabulario.L=fila.L;
 		$scope.lineaVocabulario.P=fila.P;
 		$scope.lineaVocabulario.R=fila.R;
 	};

 }]);
