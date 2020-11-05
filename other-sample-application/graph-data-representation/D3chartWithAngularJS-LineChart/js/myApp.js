var myApp = angular.module('MyApp', ['d3'])
angular.module('d3', []);
myApp.directive('editkeyvalue', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            key: '=',
            value: '=',
            accept: "&"
        },
        template: '<div><label class="control-label">{{key}}</label>' +
            '<label class="control-label">{{key}}</label>' +
            '<input type="text" ng-model="value" />' +
            '<button type="button" x-ng-click="cancel()">CANCEL</button>' +
            '<button type="submit" x-ng-click="save()">SAVE</button></div>',

        controller: function ($scope, $element, $attrs, $location) {
            $scope.save = function () {
                console.log('from directive', $scope.key, $scope.value);
                $scope.accept()
            };
        }
    }
});

myApp.directive('directedWeightedGraph', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            src: '=',
            parent: '='
        },
        // template : '<div><label class="control-label">{{key}}</label>' +
        // '<label class="control-label">{{key}}</label>' +
        //   '<input type="text" ng-model="value" />'+
        // '<button type="button" x-ng-click="cancel()">CANCEL</button>' +
        // '<button type="submit" x-ng-click="save()">SAVE</button></div>',
        template: '<div style="width:400px;height:400px; border:solid green 1px">' +
            '<span>SRC : {{src}}</span> <br> <span>PARENT : {{parent}}</span>' +
            '<button type="submit" x-ng-click="save()">SAVE</button>' +
            '</div>',

        controller: function ($scope, $element, $attrs, $location) {
            $scope.save = function () {
                alert('Premendra from directive', $scope.src, $scope.parent);
                //$scope.accept()
            };
        }
    }
});


myApp.controller('MyController', function ($scope, $window) {
    $scope.keyA = 'keyAValue';
    $scope.valueA = 'valueAValue';
    $scope.src = 'srcValue';
    $scope.parent = 'parentValue';
    $scope.blabla = function (msg) {
        console.log('from controller', $scope.keyA, $scope.valueA);
        $window.alert('hello ' + msg + '\n' + 'from controller' + $scope.keyA + $scope.valueA);
    };
});