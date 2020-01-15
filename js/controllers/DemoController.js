app.controller('DemoController', function ($scope, $http, $log,AppConfig) {
	$scope.tutorialName = "Angular JS";

	$scope.linkData = [];
	$scope.dbBakupLinkData = [];
	$scope.stylesData = {};
	$scope.settings={
		"showLinkData" : AppConfig.showLinkData,
		"showDbBakupLinkData":AppConfig.showDbBakupLinkData
	};
	$scope.importResponse=[];

	var onSuccess = function (response) {
		$scope.data = response.data;

	};

	var onError = function (response) {
		$scope.error = response.status;
		$log.log("Error : status " + response.status + " data " + response.data + " headers " + response.headers + " config " + response.config);
	}

	$scope.init = function () {
		$http.get("data/json/linkData.json").then(
			function (response) {
				$scope.linkData = response.data;
				//$log.log("Succsss : status " + response.status + " data " + angular.toJson(response.data));
			}, onError);

		$http.get("data/json/dbBakupLinkData.json").then(
			function (response) {
				$scope.dbBakupLinkData = response.data;
				//$log.log("Succsss : status " + response.status + " data " + angular.toJson(response.data));
			}, onError);

		$http.get("data/json/stylesData.json").then(
			function (response) {
				$scope.stylesData = response.data;
				//$log.log("Succsss : status " + response.status + " data " + angular.toJson(response.data));
			}, onError);
		$http.get("data/json/importResponse.json").then(
			function (response) {
				$scope.importResponse = response.data;
				
				//$log.log("Succsss : status " + response.status + " data " + angular.toJson(response.data));
			}, onError);
	};

	$scope.init();

});