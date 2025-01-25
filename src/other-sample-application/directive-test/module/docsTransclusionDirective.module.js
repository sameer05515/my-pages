angular.module('docsTransclusionDirective', [])
  .controller('docsTransclusionDirective.Controller', ['$scope', function ($scope) {
    $scope.name = 'Tobias';
  }])
  .directive('myDialog', function () {
    return {
      restrict: 'E',
      /**Best Practice: 
       * only use transclude: true , when you want to create a directive 
       * that wraps arbitrary content.*/
      transclude: true,
      scope: {},
      //templateUrl: 'my-dialog.html'
      template: '<div class="alert" ng-transclude></div>'
    };
  });