var app = angular.module("awsServicesApp", [
  "ngTouch",
  "ngAnimate",
  "ui.bootstrap",
]);
app.controller("MainController", [
  "$scope",
  function ($scope) {
    $scope.myText="I am working";
  }
]);
