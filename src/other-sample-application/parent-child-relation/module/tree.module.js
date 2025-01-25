var appRoot = angular.module('tree.module', ['ngRoute', 'ui.bootstrap']);

appRoot.directive('nodeTree', function () {
    return {
        template: '<node ng-repeat="node in tree"></node>',
        // template: '<div ng-repeat="node in tree" class="treeStyle"> \
        // <span>{{node.name}}</span> \
        // </div>',
        replace: true,
        restrict: 'E',
        scope: {
            tree: '=children'
        }
    };
});

appRoot.directive('node', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/node.template.html', // HTML for a single node.
        link: function (scope, element) {
            /*
             * Here we are checking that if current node has children then compiling/rendering children.
             * */
            if (scope.node && scope.node.children && scope.node.children.length > 0) {
                scope.node.childrenVisibility = true;
                var childNode = $compile('<node-tree ng-if="!node.childrenVisibility" children="node.children"></node-tree>')(scope);
                element.append(childNode);
            } else {
                scope.node.childrenVisibility = false;
            }
        },
        controller: ["$scope", function ($scope) {
            // This function is for just toggle the visibility of children
            $scope.toggleVisibility = function (node) {
                if (node.children && node.children.length>0 ) {
                    node.childrenVisibility = !node.childrenVisibility;
                }
            };

            $scope.addChild = function(node){

                
                node.children.push({
                    "name": node.name+''+(node.children.length+1),
                    "children": [],
                    "childrenVisibility": false
                });
                
                node.childrenVisibility=false;
            };
            // Here We are marking check/un-check all the nodes.
            $scope.checkNode = function (node) {
                node.checked = !node.checked;
                function checkChildren(c) {
                    angular.forEach(c.children, function (c) {
                        c.checked = node.checked;
                        checkChildren(c);
                    });
                }
                checkChildren(node);
            };
        }]
    };
});