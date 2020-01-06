app.controller('selectComboBoxTest', function ($scope, $http, $log,AppConfig) {
	$scope.tutorialName = "Angular JS";

	$scope.categoryData = [];
	//$scope.dbBakupLinkData = [];
	//$scope.stylesData = {};
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

	$scope.init = function () {
		$http.get(AppConfig.interviewMgmtServices+"/categories").then(
			function (response) {
				$scope.categoryData = response.data;
				$log.log("Succsss : status " + response.status + " data " + angular.toJson(response.data));
			}, onError);		
	};

	$scope.init();

});