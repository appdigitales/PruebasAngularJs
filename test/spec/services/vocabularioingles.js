'use strict';

describe('Service: vocabularioIngles', function () {

  // load the service's module
  beforeEach(module('pruebasAngularApp'));

  // instantiate service
  var vocabularioIngles;
  beforeEach(inject(function (_vocabularioIngles_) {
    vocabularioIngles = _vocabularioIngles_;
  }));

  it('should do something', function () {
    expect(!!vocabularioIngles).toBe(true);
  });

});
