'use strict';

/**
 * @ngdoc directive
 * @name yoAngularApp.directive:article
 * @description
 * # article
 */

define(['./module'],function(module){
  module.directive('loaddata', function () {
    return {
      template: '<div class="col-md-4 col-sm-6">\
                <h2>Data Loader</h2>\
                </div>',
      restrict: 'E',
      replace : true,
      link : function(scope,element,attrs){
        element.bind('mouseenter',function(){
          console.log('load Data');
        });
      }
    };
  });
});

