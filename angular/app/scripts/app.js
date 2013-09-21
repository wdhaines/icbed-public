'use strict';

angular.module('icbed.external-services', []).

  value('externalInit', function () {
    WebFont.load({
      google: {
        families: ['Roboto Slab', 'Roboto Condensed', 'Roboto']
      }
    });
  });

angular.module('icbed.services', ['ui.bootstrap', 'ngResource', 'ngRoute']);

angular.module('icbed.app', ['icbed.external-services', 'icbed.services']).

  config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).

  run(function (externalInit) {
    externalInit();
  });


