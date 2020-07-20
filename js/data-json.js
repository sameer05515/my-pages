var app = angular.module("testApp", ["ngSanitize", "ui.bootstrap"]);

app.controller("testCtrl", [
  "$scope",
  "$http","$log",
  function ($scope,  $http,$log) {
    // $scope.alert = function () {
    //   console.log('Alert clicked');
    //   $scope.alertOpen = true;
    //   myModalService.Alert('This is a message.', 'Alert alert alert!')
    //     .then(function () { $scope.alertOpen = false; });
    // };

    // $scope.confirm = function () {
    //   console.log('Confirm clicked');
    //   myModalService.Confirm('Confirm this message?', 'Confirm?')
    //     .then(function (result) { $scope.confirmResult = result; });
    // };

    // $scope.customResult = 'undefined';
    // $scope.custom = function () {
    //   myModalService.Options('Custom modal', 'Custom title',
    //     ['Option 1', 'Option 2', 'And opt 3'], null, ['btn-danger', 'btn-primary'], 2)
    //     .then(function (result) {
    //       $scope.customResult = result;
    //     });
    // };

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

    $scope.clicklinkData = function (urll,dataType) {
      //let urll = "";
      $log.log("urll : "+urll);
      $http.get(urll).then(function(response){
        
        // $log.log("response recieved : "+angular.toJson(response));
        switch(dataType){
          case 'LINK_DATA': $scope.loadLinkData(response); break;
          case 'dbBakupLinkData': $scope.loadDbBakupLinkData(response); break;
          case 'importResponse': $scope.loadImportResponse(response); break;
          case 'stylesData': $scope.loadStylesData(response); break;
          case 'IrregularVerb': $scope.loadIrregularVerb(response); break;
          case 'wordRoots': $scope.loadWordRoots(response); break;
          case 'wordSuffixes': $scope.loadWordSuffixes(response); break;
          default : break;

        }
      },onError);
    };

    $scope.loadLinkData = function(response){
      $log.log("response recieved : "+angular.toJson(response));
    };

    $scope.loadDbBakupLinkData = function(response){
      $log.log("response recieved : "+angular.toJson(response));
    };

    $scope.loadImportResponse = function(response){
      $log.log("response recieved : "+angular.toJson(response));
    };

    $scope.loadStylesData = function(response){
      $log.log("response recieved : "+angular.toJson(response));
    };

    $scope.loadIrregularVerb = function(response){
      $log.log("response recieved : "+angular.toJson(response));
    };

    $scope.loadWordRoots = function(response){
      $log.log("response recieved : "+angular.toJson(response));
    };

    $scope.loadWordSuffixes = function(response){
      $log.log("response recieved : "+angular.toJson(response));
    };



  },
]);
