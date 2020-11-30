(function () {

    //angular module
    var myApp = angular.module('myApp', ['angularTreeview']);

    //test controller
    myApp.controller('myController', function ($scope, $http) {

        $scope.nodes = [];
        
        $scope.reloadData=function(){
            $http.get("http://127.0.0.1:8080/ParentChildRelationsTopics/topics/tree/data").
            then(function (result) {
                console.log('>>>>>>>>>>>>  ' + result);
                $scope.nodes = result.data.data;
                //$scope.building($scope.nodes);
            }, function (result) {
                alert("Tree no available, Error: " + result);
            });
        };

        $scope.reloadData();

        //test tree model 1
        $scope.roleList1 = [
            {
                "roleName": "User", "roleId": "role1", "children": [
                    { "roleName": "subUser1", "roleId": "role11", "children": [] },
                    {
                        "roleName": "subUser2", "roleId": "role12", "children": [
                            {
                                "roleName": "subUser2-1", "roleId": "role121", "children": [
                                    { "roleName": "subUser2-1-1", "roleId": "role1211", "children": [] },
                                    { "roleName": "subUser2-1-2", "roleId": "role1212", "children": [] }
                                ]
                            }
                        ]
                    }
                ]
            },

            { "roleName": "Admin", "roleId": "role2", "children": [] },

            { "roleName": "Guest", "roleId": "role3", "children": [] }
        ];

        //test tree model 2
        $scope.roleList2 = [
            {
                "roleName": "User", "roleId": "role1", "children": [
                    { "roleName": "subUser1", "roleId": "role11", "collapsed": true, "children": [] },
                    {
                        "roleName": "subUser2", "roleId": "role12", "collapsed": true, "children": [
                            {
                                "roleName": "subUser2-1", "roleId": "role121", "children": [
                                    { "roleName": "subUser2-1-1", "roleId": "role1211", "children": [] },
                                    { "roleName": "subUser2-1-2", "roleId": "role1212", "children": [] }
                                ]
                            }
                        ]
                    }
                ]
            },

            {
                "roleName": "Admin", "roleId": "role2", "children": [
                    { "roleName": "subAdmin1", "roleId": "role11", "collapsed": true, "children": [] },
                    {
                        "roleName": "subAdmin2", "roleId": "role12", "children": [
                            {
                                "roleName": "subAdmin2-1", "roleId": "role121", "children": [
                                    { "roleName": "subAdmin2-1-1", "roleId": "role1211", "children": [] },
                                    { "roleName": "subAdmin2-1-2", "roleId": "role1212", "children": [] }
                                ]
                            }
                        ]
                    }
                ]
            },

            {
                "roleName": "Guest", "roleId": "role3", "children": [
                    { "roleName": "subGuest1", "roleId": "role11", "children": [] },
                    {
                        "roleName": "subGuest2", "roleId": "role12", "collapsed": true, "children": [
                            {
                                "roleName": "subGuest2-1", "roleId": "role121", "children": [
                                    { "roleName": "subGuest2-1-1", "roleId": "role1211", "children": [] },
                                    { "roleName": "subGuest2-1-2", "roleId": "role1212", "children": [] }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];



        //roleList1 to treeview
        $scope.roleList = $scope.roleList1;

    });

})();


/*
    @license Angular Treeview version 0.1.6
    ⓒ 2013 AHN JAE-HA http://github.com/eu81273/angular.treeview
    License: MIT
*/

(function (f) {
    f.module("angularTreeview", []).directive("treeModel", function ($compile) {
        return {
            restrict: "A", link: function (b, h, c) {
                var a = c.treeId, g = c.treeModel, e = c.nodeLabel || "label", d = c.nodeChildren || "children", e = '<ul><li data-ng-repeat="node in ' + g + '"><i class="collapsed" data-ng-show="node.' + d + '.length && node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="expanded" data-ng-show="node.' + d + '.length && !node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="normal" data-ng-hide="node.' +
                    d + '.length"></i> <span data-ng-class="node.selected" data-ng-click="' + a + '.selectNodeLabel(node)">{{node.' + e + '}}</span><div data-ng-hide="node.collapsed" data-tree-id="' + a + '" data-tree-model="node.' + d + '" data-node-id=' + (c.nodeId || "id") + " data-node-label=" + e + " data-node-children=" + d + "></div></li></ul>"; a && g && (c.angularTreeview && (b[a] = b[a] || {}, b[a].selectNodeHead = b[a].selectNodeHead || function (a) { a.collapsed = !a.collapsed }, b[a].selectNodeLabel = b[a].selectNodeLabel || function (c) {
                        b[a].currentNode && b[a].currentNode.selected &&
                            (b[a].currentNode.selected = void 0); c.selected = "selected"; b[a].currentNode = c
                    }), h.html('').append($compile(e)(b)))
            }
        }
    })
})(angular);