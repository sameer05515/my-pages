var app = angular.module('plunker', ['ui.tree']);

app.directive('focus', function($timeout) {
    return {
        restrict: 'AC',
        link: function(scope, element) {
            $timeout(function(){
                element[0].focus();
            }, 0);
        }
    };
});

app.controller('MainCtrl', function($scope) {
  $scope.nodes = [{
    value: "First",
    nodes: []
  },{
    value: "Second",
    nodes: []
  }]
});
