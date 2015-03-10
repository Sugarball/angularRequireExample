'use strict';

describe('Controller: MytableCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var MytableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MytableCtrl = $controller('MytableCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
