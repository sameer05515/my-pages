var app = angular.module("awsServicesApp", [
  "ngTouch",
  "ngAnimate",
  "ui.bootstrap",
]);

app.controller("imgController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.myText = "I am working";
    $scope.error = "";
    $scope.servicesOverviewData = [];

    $scope.imageData = [
      {
        imageLink: "data/images/img-007.jpg",
        alternativeText: "Sample Social Media Application",
        captions: ["Sample Social Media Application"],
      },
      {
        imageLink: "data/images/img-006.jpg",
        alternativeText: "Sample Social Media Application : Implementation using AWS services",
        captions: ["Sample Social Media Application : Implementation using AWS services"]
      },
      {
        imageLink: "data/images/img-001.jpg",
        alternativeText: "AWS Security services",
        captions: ["Pictorial diagram for AWS Security Services"],
      },
      {
        imageLink: "data/images/img-013.jpg",
        alternativeText: "AWS Global Data Centres",
        captions: ["Pictorial diagram for AWS Global Data Centres"],
      },
    ];

    //   $scope.refreshServicesOverviewData=function (){
    //     $http.get("data/raw-services-overview-2.json").then(function (response) {
    //       $scope.servicesOverviewData = response.data;
    //     }, onError);
    //   };

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

    //   $scope.refreshServicesOverviewData();
  },
]);
