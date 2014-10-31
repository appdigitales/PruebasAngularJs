'use strict';

/**
 * @ngdoc overview
 * @name pruebasAngularApp
 * @description
 * # pruebasAngularApp
 *
 * Main module of the application.
 */
 angular
 .module('pruebasAngularApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.sortable',
  'LocalStorageModule'
  ])
 .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('pruebasA');
}])

 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/lista', {
    templateUrl: 'views/lista.html',
    controller: 'ListaCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});