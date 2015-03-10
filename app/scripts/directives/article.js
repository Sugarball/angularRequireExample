'use strict';

/**
 * @ngdoc directive
 * @name yoAngularApp.directive:article
 * @description
 * # article
 */

define(['./module'],function(module){
  module.directive('article', function () {
    return {
      template: '<div class="col-md-4 col-sm-6">\
                <h3>title</h3>\
                <p>\
                <div ng-transclude></div>\
                </p>\
                </div>',
      restrict: 'E',
      transclude : true

    };
  });
});

