'use strict';

describe('Controller: CarouselCtrl', function () {

  // load the controller's module
  beforeEach(module('pruebasAngularApp'));

  var CarouselCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarouselCtrl = $controller('CarouselCtrl', {
      $scope: scope
    });
  }));

 
});
