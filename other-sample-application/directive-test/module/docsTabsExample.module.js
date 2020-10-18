angular.module('docsTabsExample', [])
    .directive('myTabsDocsTabsExample', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: ['$scope', function MyTabsController($scope) {
                var panes = $scope.panes = [];

                $scope.select = function (pane) {
                    angular.forEach(panes, function (pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function (pane) {
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            }],
            //templateUrl: 'my-tabs.html'
            template: '<div class="tabbable">\
                            <ul class="nav nav-tabs">\
                            <li ng-repeat="pane in panes" ng-class="{active:pane.selected}">\
                                <a href="" ng-click="select(pane)">{{pane.title}}</a>\
                            </li>\
                            </ul>\
                            <div class="tab-content" ng-transclude></div>\
                        </div>'
        };
    })
    .directive('myPaneDocsTabsExample', function () {
        return {
            require: '^^myTabsDocsTabsExample',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function (scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            //templateUrl: 'my-pane.html'
            template: '<div class="tab-pane" ng-show="selected">\
                            <h4>{{title}}</h4>\
                            <div ng-transclude></div>\
                        </div>'
        };
    });

    // If multiple controllers are required, the require option of the directive can take an array argument. The corresponding parameter being sent to the link function will also be an array.

//     angular.module('docsTabsExample', [])
// .directive('myPane', function() {
//   return {
//     require: ['^^myTabs', 'ngModel'],
//     restrict: 'E',
//     transclude: true,
//     scope: {
//       title: '@'
//     },
//     link: function(scope, element, attrs, controllers) {
//       var tabsCtrl = controllers[0],
//           modelCtrl = controllers[1];

//       tabsCtrl.addPane(scope);
//     },
//     templateUrl: 'my-pane.html'
//   };
// });


// Savvy readers may be wondering what the difference is between link and controller. The basic difference is that controller can expose an API, and link functions can interact with controllers using require.

// Best Practice: use controller when you want to expose an API to other directives. Otherwise use link.