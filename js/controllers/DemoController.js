app.controller('DemoController', function ($scope, $http, $log,AppConfig) {
	$scope.tutorialName = "Angular JS";

	$scope.linkData = [];
	$scope.dbBakupLinkData = [];
	$scope.emailData=[
		"aaa.kumar@gmail.com","bbb.kumar@gmail.com","ccc.kumar@gmail.com"
	];

	$scope.addFruit = function (aa) {
		//if ($scope.checked_fruits.indexOf(fruit) != -1) return;
		
		var max=$scope.emailData.length;
		var newEmailId='ddd'+max+'@gmail.com';
		console.log(' new value :  '+newEmailId+' - Date '+new Date());
		$scope.emailData.push(newEmailId);
		//customTag("make-bold-prem", makeBoldPrem);
	};

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