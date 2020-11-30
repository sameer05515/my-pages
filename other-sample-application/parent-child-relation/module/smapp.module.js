// Code goes here
var appRoot = angular.module('smapp', ['ngRoute', 'ui.bootstrap', 'tree.module']);

appRoot.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'ngIndex.html', controller: 'IndexCtrl' })
            .otherwise({ redirectTo: '/' });
    }
]);

appRoot.controller('IndexCtrl', function ($scope,$http) {

    $scope.nodes = [
        {
          "id": 1,
          "parentId": 0,
          "title": "Mostly Asked Technical Topics",
          "path": null,
          "children": [
            {
              "id": 2,
              "parentId": 1,
              "title": "Backend",
              "path": null,
              "children": [
                {
                  "id": 6,
                  "parentId": 2,
                  "title": "Core Java",
                  "path": null,
                  "children": []
                },
                {
                  "id": 7,
                  "parentId": 2,
                  "title": "J2EE",
                  "path": null,
                  "children": [
                    {
                      "id": 10,
                      "parentId": 7,
                      "title": "JDBC",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 11,
                      "parentId": 7,
                      "title": "Servlets",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 12,
                      "parentId": 7,
                      "title": "JSP",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 13,
                      "parentId": 7,
                      "title": "JSTL",
                      "path": null,
                      "children": []
                    }
                  ]
                },
                {
                  "id": 8,
                  "parentId": 2,
                  "title": "Design Patterns",
                  "path": null,
                  "children": [
                    {
                      "id": 14,
                      "parentId": 8,
                      "title": "Core Java Design Patterns",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 15,
                      "parentId": 8,
                      "title": "J2EE Design Patterns",
                      "path": null,
                      "children": []
                    }
                  ]
                },
                {
                  "id": 9,
                  "parentId": 2,
                  "title": "API",
                  "path": null,
                  "children": [
                    {
                      "id": 16,
                      "parentId": 9,
                      "title": "Struts",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 17,
                      "parentId": 9,
                      "title": "Hibernate",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 18,
                      "parentId": 9,
                      "title": "Spring Boot",
                      "path": null,
                      "children": [
                        {
                          "id": 20,
                          "parentId": 18,
                          "title": "Spring Batch",
                          "path": null,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": 19,
                      "parentId": 9,
                      "title": "Microservices",
                      "path": null,
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 3,
              "parentId": 1,
              "title": "Frontend",
              "path": null,
              "children": [
                {
                  "id": 21,
                  "parentId": 3,
                  "title": "AngularJS",
                  "path": null,
                  "children": []
                },
                {
                  "id": 22,
                  "parentId": 3,
                  "title": "Angular",
                  "path": null,
                  "children": []
                },
                {
                  "id": 23,
                  "parentId": 3,
                  "title": "ReactJS",
                  "path": null,
                  "children": []
                },
                {
                  "id": 24,
                  "parentId": 3,
                  "title": "HTML",
                  "path": null,
                  "children": []
                },
                {
                  "id": 25,
                  "parentId": 3,
                  "title": "CSS",
                  "path": null,
                  "children": []
                },
                {
                  "id": 26,
                  "parentId": 3,
                  "title": "JavaScript",
                  "path": null,
                  "children": []
                },
                {
                  "id": 27,
                  "parentId": 3,
                  "title": "NodeJS",
                  "path": null,
                  "children": []
                }
              ]
            },
            {
              "id": 4,
              "parentId": 1,
              "title": "Database",
              "path": null,
              "children": [
                {
                  "id": 28,
                  "parentId": 4,
                  "title": "MySQL",
                  "path": null,
                  "children": []
                },
                {
                  "id": 29,
                  "parentId": 4,
                  "title": "PostgreSQL",
                  "path": null,
                  "children": []
                },
                {
                  "id": 30,
                  "parentId": 4,
                  "title": "Oracle",
                  "path": null,
                  "children": []
                },
                {
                  "id": 31,
                  "parentId": 4,
                  "title": "SQLServer",
                  "path": null,
                  "children": []
                },
                {
                  "id": 32,
                  "parentId": 4,
                  "title": "DB2",
                  "path": null,
                  "children": []
                }
              ]
            },
            {
              "id": 5,
              "parentId": 1,
              "title": "DevOps/TeamLead",
              "path": null,
              "children": [
                {
                  "id": 33,
                  "parentId": 5,
                  "title": "AWS",
                  "path": null,
                  "children": []
                },
                {
                  "id": 34,
                  "parentId": 5,
                  "title": "Jenkins",
                  "path": null,
                  "children": []
                },
                {
                  "id": 35,
                  "parentId": 5,
                  "title": "Jira",
                  "path": null,
                  "children": []
                },
                {
                  "id": 36,
                  "parentId": 5,
                  "title": "Version Control",
                  "path": null,
                  "children": [
                    {
                      "id": 41,
                      "parentId": 36,
                      "title": "GIT",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 42,
                      "parentId": 36,
                      "title": "SVN",
                      "path": null,
                      "children": []
                    }
                  ]
                },
                {
                  "id": 37,
                  "parentId": 5,
                  "title": "Deployment",
                  "path": null,
                  "children": [
                    {
                      "id": 43,
                      "parentId": 37,
                      "title": "Tomcat",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 44,
                      "parentId": 37,
                      "title": "Weblogic",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 45,
                      "parentId": 37,
                      "title": "WebSphere",
                      "path": null,
                      "children": []
                    }
                  ]
                },
                {
                  "id": 38,
                  "parentId": 5,
                  "title": "OS/File Transfer",
                  "path": null,
                  "children": [
                    {
                      "id": 46,
                      "parentId": 38,
                      "title": "Putty",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 47,
                      "parentId": 38,
                      "title": "WinSCP",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 48,
                      "parentId": 38,
                      "title": "Linux",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 49,
                      "parentId": 38,
                      "title": "Windows",
                      "path": null,
                      "children": []
                    }
                  ]
                },
                {
                  "id": 39,
                  "parentId": 5,
                  "title": "Other Programming Language",
                  "path": null,
                  "children": [
                    {
                      "id": 50,
                      "parentId": 39,
                      "title": "Python",
                      "path": null,
                      "children": []
                    },
                    {
                      "id": 51,
                      "parentId": 39,
                      "title": "Ruby",
                      "path": null,
                      "children": []
                    }
                  ]
                },
                {
                  "id": 40,
                  "parentId": 5,
                  "title": "Agile",
                  "path": null,
                  "children": []
                }
              ]
            }
          ]
        }
      ];

    // $http.get("http://127.0.0.1:8080/ParentChildRelationsTopics/topics/tree/data").
    // then(function (result) {
    //     console.log('>>>>>>>>>>>>  '+result);
    //     $scope.nodes = result.data.data;
    //     $scope.building($scope.nodes);
    // }, function (result) {
    //     alert("Tree no available, Error: " + result);
    // });


    // $scope.building = function(data){
    //     var chart = angular.element(document.createElement('node-tree'));
    //     chart.attr('children', data);
    //     $compile(chart)($scope);
    //     angular.element(document.getElementById('wrapper')).append(chart);
    //   }

    // $scope.nodes = [
    //     {
    //         "name": "test1",
    //         "children": [
    //             {
    //                 "name": "test11",
    //                 "children": []
    //             }
    //         ]
    //     },
    //     {
    //         "name": "test2",
    //         "children": [
    //             {
    //                 "name": "test21",
    //                 "children": []
    //             }
    //         ]
    //     },
    //     {
    //         "name": "test3",
    //         "children": []
    //     }
    // ];


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
