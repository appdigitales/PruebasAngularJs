'use strict';

/**
 * @ngdoc function
 * @name pruebasAngularApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the pruebasAngularApp
 */
 angular.module('pruebasAngularApp')
 .controller('GridCtrl', function ($scope,$http,$modal) {
 	//el input foco nunca lo pierde
 	$('#filtro').focus();
 	$scope.noPerderFoco=function(){
 		//$('#filtro').focus();
 	};

 	//en el guardo cuando hago click en una linea del grid
 	$scope.mySelections = [];

	//pagination *********************************
	$scope.filterOptions = {
		filterText: $scope.miinput,
		useExternalFilter: true
	}; 
	$scope.totalServerItems = 0;
	$scope.pagingOptions = {
		pageSizes: [10, 25, 50],
		pageSize: 10,
		currentPage: 1
	};	
	$scope.setPagingData = function(data, page, pageSize){	
		var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
		$scope.vocabulario = pagedData;
		$scope.totalServerItems = data.length;
		if (!$scope.$$phase) {
			$scope.$apply();
		}
	};
	$scope.getPagedDataAsync = function (pageSize, page, searchText) {
		setTimeout(function () {
			var data;
			if (searchText) {
				var ft = searchText.toLowerCase();
				//es donde tengo el json, cambiar puerto y direccion json
				$http.get('json/voc.json').success(function (largeLoad) {		
					data = largeLoad.filter(function(item) {
						return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
					});
					$scope.setPagingData(data,page,pageSize);
				});            
			} else {
				$http.get('json/voc.json').success(function (largeLoad) {
					$scope.setPagingData(largeLoad,page,pageSize);
				});
			}
		}, 100);
	};

	$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

	$scope.$watch('pagingOptions', function (newVal, oldVal) {
		if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
			$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
		}
	}, true);
	$scope.$watch('filterOptions', function (newVal, oldVal) {
		if (newVal !== oldVal) {
			$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
		}
	}, true);
	//fin paginacion  ***********


	//mira cada vez que escribo en el input
	$scope.$watch('miinput', function () {
		if ($scope.miinput !== '') {
			$scope.pagingOptions.currentPage=1;
			$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.miinput);
		}else{
			$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
		}
	}, true);

	//mira cada vez que cambio el número de lineas a ver (así se autorefresca el grid)
	$scope.$watch('pagingOptions.pageSize',function(){
		$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
		
		
		if($scope.pagingOptions.pageSize==='10'){
			$('.gridStyles').css({'height':'430px'});
		} else if($scope.pagingOptions.pageSize==='25'){
			$('.gridStyles').css({'height':'900px'});
		}  else if($scope.pagingOptions.pageSize==='50'){
			$('.gridStyles').css({'height':'1650px'});
		}

	},true);

 	//opciones del grid. El nombre que ponga deberá estar en la vista, ej: ng-grid="gridOpciones"
 	$scope.gridOpciones = { 
 		data: 'vocabulario',
 		//showGroupPanel: true,
 		enableCellSelection: true,
 		enableRowSelection: true,
 		enableColumnResize: true,
 		enableColumnReordering: true,
 		enableHighlighting:true,

 		// enableCellEdit: true,
 		selectedItems: $scope.mySelections,
 		multiSelect: false,
 		enablePaging: true,
 		showFooter: true,
 		totalServerItems: 'totalServerItems',
 		pagingOptions: $scope.pagingOptions,
 		filterOptions: $scope.filterOptions,
 		columnDefs: [
 		{field:'I', displayName:'Id', width:60,resizable: true}, 
 		{field:'T', displayName:'Type',visible:false,resizable: true},
 		{field:'N', displayName:'Level',width:60},
 		{field:'L', displayName:'List',width:100},
 		{field:'P', displayName:'English',minWidth: 400},
 		{field:'R', displayName:'Spanish', minWidth: 400}]
 	};

 	/* 
 	***************
 	* fin grid
 	***************
 	*/







	/*
	***************************************************
	*  VENTANA MODAL
	* *************************************************
	*/
	//http://angular-ui.github.io/bootstrap/ seccion modal
	$scope.muestraModal=function () {
		$scope.nuevaLinea={};
		var modalInstancia = $modal.open({
			templateUrl: 'views/ventanamodal.html',
			controller:'VentanamodalCtrl',
			resolve: { //será pasado $scope.nuevaLinea al controlador modal como local minuevaLinea
				minuevaLinea: function() {
					return $scope.nuevaLinea;
				}
			}
		});
		//cuando se da aceptar en la ventan modal se ejecuta esto
		modalInstancia.result.then(function() {
			//guarda la información de los input en la variable array vocabulario
			$scope.vocabulario.push({
				I: $scope.vocabulario.length + 100001,  //así no habrá problema de duplicidad, le aplico un num alto para la id
				T: 'v',
				N:$scope.nuevaLinea.level,
				L:$scope.nuevaLinea.list,
				P:$scope.nuevaLinea.english,
				R:$scope.nuevaLinea.spanish
			});
		});
	};




})  //cierre del primer controlador. 
//añado el controlador modal, y como parámetros  $modalInstance y la variable local que recogemos con resolve.
//$modalInstance represents a modal window (instance) dependency.
.controller('VentanamodalCtrl', function ($scope, $modalInstance, minuevaLinea) {
	$scope.nuevaLinea=minuevaLinea;
	$scope.guardarLinea=function(){
		$modalInstance.close(minuevaLinea);
	};
	$scope.cancel =function(){
		$modalInstance.dismiss('cancel');
	};
});

