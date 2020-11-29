// Code goes here
var appRoot = angular.module('smapp', ['ngRoute', 'ui.bootstrap', 'tree.module']);

appRoot.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'ngIndex.html', controller: 'IndexCtrl' })
            .otherwise({ redirectTo: '/' });
    }
]);

appRoot.controller('IndexCtrl', function ($scope) {
    $scope.nodes = [
        {
            "name": "test1",
            "children": [
                {
                    "name": "test11",
                    "children": []
                }
            ]
        },
        {
            "name": "test2",
            "children": [
                {
                    "name": "test21",
                    "children": []
                }
            ]
        },
        {
            "name": "test3",
            "children": []
        }
    ];


});

// appRoot.directive('rowDirctive', function ($compile) {
//     return {
//         restrict: 'C',
//         replace: false,
//         link: function (scope, element) {
//             element.bind("click", function () {
//                 var rowId = "#" + scope.student.Id;
//                 var innerhtml = angular.element($compile('<span class="" ng-include="\'_StudentDetailsTabs.html\'"></span>')(scope));

//                 if ($(rowId + " td span").length === 0) {
//                     $(rowId + " td").html(innerhtml);
//                 }

//                 if ($(rowId).is(':hidden')) {
//                     $(rowId).slideDown("slow");
//                 } else {
//                     $(rowId).slideUp("slow");

//                 }
//             });
//         }
//     };
// });


// appRoot.controller('StudentDetailsCtrl', function ($scope) {
//     $scope.StudentPD = "student's personal details";
//     $scope.StudentED = "student's educational details";
//     $scope.StudentOD = "student's other details";

//     $scope.PersonalDetails = function () {
//         $scope.Details = "Personal Details"
//     };

//     $scope.EducationalDetails = function () {
//         $scope.Details = "Educational Details"
//     };
// });
