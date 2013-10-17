'use strict';

angular.module('icbed.external-services', []).

  value('externalInit', function () {
    try {
      WebFont.load({
        google: {
          families: ['Roboto Slab', 'Roboto Condensed', 'Roboto']
        }
      });
    } catch (e) {
     console.log("Failed to load fonts: " + e);
    }
  });

angular.module('icbed.services', ['ui.bootstrap', 'ngResource', 'ui.router']);

angular.module('icbed.app', ['icbed.external-services', 'icbed.services']).

  config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/main.html",
        controller: 'MainCtrl'
      });
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  }).

  run(function (externalInit) {
    externalInit();
  });


