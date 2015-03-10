/**
 * Created by gujun on 15/3/6.
 */


require.config({
  paths:{

    "jquery":"/bower_components/jquery/dist/jquery",
    "angular":"/bower_components/angular/angular",
    "bootstrap":"/bower_components/bootstrap/dist/js/bootstrap",
    "angular-animate":"/bower_components/angular-animate/angular-animate",
    "angular-cookies":"/bower_components/angular-cookies/angular-cookies",
    "angular-resource":"/bower_components/angular-resource/angular-resource",
    "angular-route":"/bower_components/angular-route/angular-route",
    "angular-sanitize":"/bower_components/angular-sanitize/angular-sanitize",
    "angular-touch":"/bower_components/angular-touch/angular-touch",
    "ng-table":"/bower_components/ng-table/dist/ng-table.min",
    "socket.io":"/bower_components/socket.io-client/socket.io",
    "ui-router":"/bower_components/angular-ui-router/release/angular-ui-router",
    'app':'app'

  },
  shim:{
    'angular':{
      exports:'angular'
    },
    'angular-route':{
      deps:['angular'],
        exports: 'angular-route'
    },
    'ui-router':{
      deps:['angular'],
      exports: 'ui-router'
    },
    'app': {
      deps: ['jquery', 'angular', 'angular-route']
    }
  },
  urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});
define(['./routes'], function () {

  // 启动ng
  angular.bootstrap(document, ['yoAngularApp']);

});
