var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function($scope) {
	
	$scope.inputMessage={"first":"","second":""};
	
    $scope.personalDetails = [
        {
            'fname':'Muhammed',
            'lname':'Shanid',
            'email':'shanid@shanid.com'
        },
        {
            'fname':'John',
            'lname':'Abraham',
            'email':'john@john.com'
        },
        {
            'fname':'Roy',
            'lname':'Mathew',
            'email':'roy@roy.com'
        }];
    
        $scope.addNew = function(personalDetails){
            $scope.personalDetails.push({ 
                'fname': personalDetails.fname, 
                'lname': personalDetails.lname,
                'email': personalDetails.email,
            });
            $scope.PD = {};
        };
    
        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.personalDetails, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            }); 
            $scope.personalDetails = newDataList;
        };
    
        $scope.checkAll = function () {
            if (!$scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.personalDetails, function (personalDetails) {
                personalDetails.selected = $scope.selectedAll;
            });
        }; 
    
}]);