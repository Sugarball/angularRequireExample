'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */
  define([
      'controllers/index',
      'directives/module',
      'ui-router'
      ],
    function(controllers,directive){
      return angular
        .module('yoAngularApp', [
          'ngRoute',
          'ui.router',
          'app.controllers',
          'app.directive'
        ]);
    }
  )

