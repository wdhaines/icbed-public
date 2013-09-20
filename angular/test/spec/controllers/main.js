'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(angular.mock.module('icbed.app', function($provide) {
    $provide.value('externalInit', function () {
      // Stub out external service initialization
    });
  }));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('does nothing', function () {

  });
});
