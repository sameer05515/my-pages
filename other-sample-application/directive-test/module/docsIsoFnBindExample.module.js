angular.module('docsIsoFnBindExample', [])
    .controller('docsIsoFnBindExample.Controller', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.name = 'Tobias';
        $scope.message = '';
        $scope.hideDialog = function (message) {
            $scope.message = message;
            $scope.dialogIsHidden = true;
            $timeout(function () {
                $scope.message = '';
                $scope.dialogIsHidden = false;
            }, 2000);
        };
    }])
    .directive('myDialogInDocsIsoFnBindExample', function () {
        return {
            restrict: 'E',
            transclude: true,
            /**Best Practice: 
             * use &attr in the scope option when you want 
             * your directive to expose an API for binding to behaviors.*/
            scope: {
                'close': '&onClose'
            },
            template: '<div class="alert">\
    <a href class="close" ng-click="close({message: \'closing for now\'})">&times;</a>\
    <div ng-transclude></div> \
  </div>'
        };
    });
