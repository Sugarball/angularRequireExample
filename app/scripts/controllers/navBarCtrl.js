/**
 * Created by gujun on 15/3/7.
 */

define(['./module'],function(module){
  module.controller('NavbarCtrl', function ($scope, $location) {
  $scope.isActive = function (route) {
    if ($location.path().indexOf('/dropdown') == 0) {
      return  route === '/dropdown';
    }
    return route === $location.path();
  }
});
})
