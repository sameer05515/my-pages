var app = angular.module('testApp', [ 'ngSanitize', 'ui.bootstrap' ]);

app.controller('testCtrl', ['$scope', 'myModalService', function ($scope, myModalService) {
  $scope.alert = function () {
    console.log('Alert clicked');
    $scope.alertOpen = true;
    myModalService.Alert('This is a message.', 'Alert alert alert!')
      .then(function () { $scope.alertOpen = false; });
  };
  
  $scope.confirm = function () {
    console.log('Confirm clicked');
    myModalService.Confirm('Confirm this message?', 'Confirm?')
      .then(function (result) { $scope.confirmResult = result; });
  };
  
  $scope.customResult = 'undefined';
  $scope.custom = function () {
    myModalService.Options('Custom modal', 'Custom title',
      ['Option 1', 'Option 2', 'And opt 3'], null, ['btn-danger', 'btn-primary'], 2)
      .then(function (result) {
        $scope.customResult = result;
      });
  };
}]);