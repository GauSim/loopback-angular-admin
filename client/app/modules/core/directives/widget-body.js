'use strict';

var app = angular.module('com.module.core');

app.directive('rdWidgetBody', function () {
  return {
    requires: '^rdWidget',
    scope: {
      loading: '@?',
      classes: '@?'
    },
    transclude: true,
    template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
    restrict: 'E'
  };
});
