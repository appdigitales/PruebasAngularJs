'use strict';

describe('Controller: ListaCtrl', function () {

  // load the controller's module
  beforeEach(module('pruebasAngularApp'));

  var ListaCtrl,
  scope;
  var aleatorio;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaCtrl = $controller('ListaCtrl', {
      $scope: scope
    });
  }));

  describe('comprobando vocIngles:', function() {
    it('vocIngles debe tener más de 100 lineas', function () {
      expect(scope.vocIngles.length).toBeGreaterThan(100);
      console.log('scope.vocIngles.length: ' + scope.vocIngles.length);
      aleatorio=(Math.floor(Math.random()*scope.vocIngles.length));
    });
    it('Debe tener los objectos I T N L P R', function () {
      expect(scope.vocIngles[0].I).toBeDefined(); //id
      expect(scope.vocIngles[0].T).toBeDefined(); //tipo
      expect(scope.vocIngles[0].N).toBeDefined(); //nivel
      expect(scope.vocIngles[0].L).toBeDefined(); //lista
      expect(scope.vocIngles[0].P).toBeDefined(); //pregunta
      expect(scope.vocIngles[0].R).toBeDefined(); //respuesta
    });

    it('Ejemplo aleatorio:', function () {
      var t=scope.vocIngles[aleatorio];
      expect(t.I).toEqual(jasmine.any(Number));
      expect(t.T).toEqual(jasmine.any(String));
      expect(t.N).toEqual(jasmine.any(String));
      expect(t.L).toEqual(jasmine.any(String));
      expect(t.P).toEqual(jasmine.any(String));
      expect(t.R).toEqual(jasmine.any(String));
      console.log('ID:' + t.I + ' Tipo:' + t.T + ' Nivel:' + t.N + ' Lista:' + t.L + ' Pregunta:' + t.P + ' Respuesta:' + t.R);
    });
  });


describe('añadiendo y borrando a vocIngles', function() {
  beforeEach(function() { 
    scope.lineaVocabulario={}; 
    scope.lineaVocabulario.I=(scope.vocIngles[scope.vocIngles.length-1].I)+1;
    scope.lineaVocabulario.T='V';
    scope.lineaVocabulario.N='5';
    scope.lineaVocabulario.L='lista de prueba';
    scope.lineaVocabulario.P='holaaaaaaaaaaaaa';
    scope.lineaVocabulario.R='helloooooooooooo';
  });
  it('añadiendo',function() {
    scope.anadirVocabulario();
    console.log('Añadido vocabulario. ahora hay:' + scope.vocIngles.length + ' en total');
  });
  it('borrando', function(){
        scope.lineaVocabulario.I=40; //asigno al ngmodel del input ID el valor del que he creado.
        scope.borrarVocabulario();
        console.log('ha sido borrado. ahora hay:' + scope.vocIngles.length);
        scope.lineaVocabulario.I=41;
        scope.borrarVocabulario();
        console.log('ha sido borrado. ahora hay:' + scope.vocIngles.length);
        scope.lineaVocabulario.I=42;
        scope.borrarVocabulario();
        console.log('ha sido borrado. ahora hay:' + scope.vocIngles.length);
        scope.lineaVocabulario.I=43;
        scope.borrarVocabulario();
        console.log('ha sido borrado. ahora hay:' + scope.vocIngles.length);
      });
});

// describe('pendientes, si al it le añades x el debuggeador no lo toma en cuenta', function(){
//   xit('especificaciones \'xit\'', function() {
//     expect(true).toBe(false);
//   });

// });

});
