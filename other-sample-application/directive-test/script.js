// Code goes here
var appRoot = angular.module('smapp', ['ngRoute', 'ui.bootstrap']);

appRoot.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'ngIndex.html', controller: 'IndexCtrl' })
            .otherwise({ redirectTo: '/' });
    }
]);

appRoot.controller('IndexCtrl', function ($scope) {
    $scope.Students = [{ "Id": "stud1", "FirstName": "FirstName1", "LastName": "LastName1" }, { "Id": "stud2", "FirstName": "FirstName2", "LastName": "LastName2" }];

});

appRoot.directive('myStudentDirective', function () {
    return {
        scope: {},
    //     template: '<div>\
    //     <span><b>Student Id</b> : {{myStudentId}}</span><br>\
    //     <span><b>Student First Name</b> : {{myStudentFName}}</span><br>\
    //     <span><b>Student Last Name</b> : {{myStudentLName}}</span><br>\
    // </div>',
    templateUrl:"studentDirective.template.html",
    link: function(scope, element, attrs){
        console.log('==>> myStudentDirective '+JSON.stringify(attrs));
        var idd = attrs.id;
        var firstNamee = attrs.firstName;
        var lastNamee = attrs.lastName;
        scope.myStudentId=idd;
        scope.myStudentFName=firstNamee;
        scope.myStudentLName=lastNamee;
    }
    }
});

appRoot.directive('myStudentListDirective', function () {
    return {
        
        scope: {},
        templateUrl: 'studentListDirective.template.html',
    link: function(scope, element, attrs){

        console.log('==>> myStudentListDirective '+JSON.stringify(attrs));
        //var idd = scope.$eval(attrs.myStudentsList);
        // console.log('---------->>>>>>>>  scope.myStudentsList '+scope.StudentsList);
        // console.log('---------->>>>>>>>  attrs.StudentsList '+attrs.StudentsList);
        console.log('---------->>>>>>>>  attrs.myyTitle '+attrs.myyTitle);
        console.log('---------->>>>>>>>  attrs.myyAge '+attrs.myyAge);
        //scope.StudentsList=idd;
        scope.myTitle=attrs.myyTitle;
        //scope.StudentsList=attrs.StudentsList;
        scope.myyTitle=attrs.myyAge;
    }
    }
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
