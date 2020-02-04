app.controller('selectComboBoxTest', function ($scope, $http, $log,AppConfig) {
	$scope.tutorialName = "Angular JS";

	$scope.categoryData = [];
	//$scope.dbBakupLinkData = [];
	$scope.stylesData = {};
	$scope.settings={
		"showLinkData" : AppConfig.showLinkData,
		"showDbBakupLinkData":AppConfig.showDbBakupLinkData
	};

	var onSuccess = function (response) {
		$scope.data = response.data;

	};

	var onError = function (response) {
		$scope.error = response.status;
		$log.log("Error : status " + response.status + " data " + response.data + " headers " + response.headers + " config " + response.config);
	}
	
	$scope.showOnlySelectedCategoriesQuestions=function(value){
		var returnVal=false;
		
		angular.forEach($scope.categoryData, function (val, key) { 
		
		
			//$log.log(">>>>>>>>>>>>>>>>>val "+angular.toJson(val));
			$log.log(">>>>>>>>>>>>>>>>>val "+angular.toJson(value));
			$log.log(">>>>>>>>>>>>>>>>>(val.catID==value.catID)&&(val.showQuestionsOfCategory) "+((val.catID==value.catID)&&(val.showQuestionsOfCategory)));
                if((val.catID==value.catID)&&(val.showQuestionsOfCategory)){
					return true;
					return;
				} 
            });
		
		//return false;
	};

	$scope.init = function () {
		$http.get(AppConfig.interviewMgmtServices+"/categories").then(
			function (response) {
				$scope.categoryData = response.data;
				angular.forEach($scope.categoryData, function (val, key) { 
					val.showQuestionsOfCategory=true;
				});
				
				//$log.log("Succsss : status " + response.status + " data " + angular.toJson(response.data));
			}, onError);
		$http.get("data/json/stylesData.json").then(
			function (response) {
				$scope.stylesData = response.data;
				//$log.log("Succsss : status " + response.status + " data " + angular.toJson(response.data));
			}, onError);
	};
	
	

	$scope.init();

});