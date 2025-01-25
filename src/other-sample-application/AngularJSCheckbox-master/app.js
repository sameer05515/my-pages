var myApp = angular.module('myApp', []);

myApp.controller('checkBoxController', function ($scope) {
		$scope.employees=[{name:'John', age:25, gender:'boy'},
							{name:'Jessie', age:30, gender:'girl'},
							{name:'Johanna', age:28, gender:'girl'},
							{name:'Joy', age:15, gender:'girl'},
							{name:'Mary', age:28, gender:'girl'},
							{name:'Peter', age:95, gender:'boy'},
							{name:'Sebastian', age:50, gender:'boy'},
							{name:'Erika', age:27, gender:'girl'},
							{name:'Patrick', age:40, gender:'boy'},
							{name:'Samantha', age:60, gender:'girl'}];
		$scope.selection=[];
		// toggle selection for a given employee by name
		$scope.toggleSelection = function toggleSelection(employeeName) {
	    var idx = $scope.selection.indexOf(employeeName);

	    // is currently selected
	    if (idx > -1) {
	      $scope.selection.splice(idx, 1);
	    }

	    // is newly selected
	    else {
	      $scope.selection.push(employeeName);
	    }
	  };
});