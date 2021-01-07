var app = angular.module("awsServicesApp", [
  "ngTouch",
  "ngAnimate",
  "ui.bootstrap",
]);


app.controller("MainController", [
  "$scope","$http",
  function ($scope,$http) {
    $scope.myText="I am working";
    $scope.error = "";
    $scope.servicesOverviewData=[];

    $scope.refreshServicesOverviewData=function (){
      $http.get("data/raw-services-overview-2.json").then(function (response) {
        $scope.servicesOverviewData = response.data;			
      }, onError);
    };

    var onError = function (response) {
      $scope.error = response.status;
      $log.log(
        "Error : status " +
        response.status +
        " data " +
        response.data +
        " headers " +
        response.headers +
        " config " +
        response.config
      );
    };

    $scope.refreshServicesOverviewData();

  }
]);
