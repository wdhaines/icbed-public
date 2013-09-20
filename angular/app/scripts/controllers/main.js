'use strict';

angular.module('icbed.app').

  controller('MainCtrl', function ($scope, $resource) {
    var Profile = $resource('/api/profiles/:id.json');
    $scope.profile = Profile.get({id: 1});
  });
