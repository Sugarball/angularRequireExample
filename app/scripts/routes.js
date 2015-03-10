define([
  './app',
], function (app) {
  // 通过返回app主模块来定义配置
  return app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('index', {
        url: '/',
        views: {
          '': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          '': {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          }
        }
      })
      .state('book',{
        url:'/book',
        views:{
          '': {
            templateUrl: 'views/main.html'
          },
          'main@index': {
            templateUrl: 'views/main.html'
          }
        }
      })
      //.when('/mytable', {
      //  templateUrl: 'views/mytable.html',
      //  controller: 'MytableCtrl'
      //})
    $urlRouterProvider.otherwise('/');
  });
});
