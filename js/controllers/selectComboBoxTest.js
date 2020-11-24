app.controller("selectComboBoxTest", function (
	$scope,
	$http,
	$log,
	AppConfig,
	InterviewManagementServices
) {
	$scope.tutorialName = "Angular JS";

	$scope.categoryData = [];
	//$scope.dbBakupLinkData = [];
	$scope.stylesData = {};
	$scope.settings = {
		showLinkData: AppConfig.showLinkData,
		showDbBakupLinkData: AppConfig.showDbBakupLinkData,
		maxRatingValue: AppConfig.maxStarRatingValue,
	};

	$scope.dummy = {
		categoryName:
			"<div><!--block--><strong>Artificial Intelligence (old set) </strong></div>",
	};

	var onSuccess = function (response) {
		$scope.data = response.data;
	};

	var onError = function (response) {
		$scope.error = response.status;
		$log.log(
			"Error : status " +
			response.status +
			" data " +
			response.data +
			" headers " +
			response.headers +
			" config " +
			response.config
		);
	};

	$scope.showOnlySelectedCategoriesQuestions = function (value) {
		var returnVal = false;

		angular.forEach($scope.categoryData, function (val, key) {
			//$log.log(">>>>>>>>>>>>>>>>>val "+angular.toJson(val));
			$log.log(">>>>>>>>>>>>>>>>>val " + angular.toJson(value));
			$log.log(
				">>>>>>>>>>>>>>>>>(val.catID==value.catID)&&(val.showQuestionsOfCategory) " +
				(val.catID == value.catID && val.showQuestionsOfCategory)
			);
			if (val.catID == value.catID && val.showQuestionsOfCategory) {
				return true;
				return;
			}
		});

		//return false;
	};

	$scope.init = function () {
		$scope.refreshAllCategories();
		$scope.getStyleData();
	};

	$scope.refreshAllCategories=function (){
		$http
			.get(AppConfig.interviewMgmtServices + "/categories/optimized/opti")
			.then(function (response) {
				$scope.categoryData = [];
				angular.forEach(
					response.data,
					function (val, key) {
						val.showQuestionsOfCategory = true;
						val.collapseCategoryQuestions = true;
						this.push(val);
					},
					$scope.categoryData
				);
			}, onError);
	};

	$scope.getStyleData=function (){
		$http.get("data/json/stylesData.json").then(function (response) {
			$scope.stylesData = response.data;			
		}, onError);
	};

	$scope.getSelectedRating = function (rating) {
		console.log(rating);
	};

	$scope.showCategoryQuestions=function(givenCategoryObject){

		$log.log("recievedCategoryData : " + angular.toJson(givenCategoryObject) );

		$http
			.get(AppConfig.interviewMgmtServices + "/categories" + "/"
			+ givenCategoryObject.catID)
			.then(function (response) {

				$log.log("fetchedCategoryData : " + angular.toJson(response.data) );

				
				for (var index=0;index< $scope.categoryData.length;index++) {
					var categ=$scope.categoryData[index];
					if (categ.catID===response.data.catID) {
						$scope.categoryData[index]=response.data;
						$scope.categoryData[index].collapseCategoryQuestions=false;						
					}
				}

			}, onError);

		
	};

	$scope.editCategory = function (editedCategoryObject) {
		$log.log("editedCategoryObject : " + angular.toJson(editedCategoryObject));

		/* let c={
				"catID":editedCategoryObject.catID,
				"catgoryName":editedCategoryObject.catgoryName,
				"dateCreated":editedCategoryObject.dateCreated,
				"dateLastModified":editedCategoryObject.dateLastModified,
				"rating":editedCategoryObject.rating,
				"dateLastRead":editedCategoryObject.dateLastRead,
				"totalRead":editedCategoryObject.totalRead,
				"personal":editedCategoryObject.personal
			}; */

		let c = {
			catgoryName: editedCategoryObject.catgoryName,
			catID: editedCategoryObject.catID,
			dateCreated: editedCategoryObject.dateCreated,
			dateLastModified: editedCategoryObject.dateLastModified,
			dateLastRead: editedCategoryObject.dateLastRead,
			personal: editedCategoryObject.personal,
			rating: editedCategoryObject.rating,
			totalRead: editedCategoryObject.totalRead,
			showQuestionsOfCategory: true,
			collapseCategoryQuestions: true,
			showEditCategory: true,
		};

		$log.log("category : " + angular.toJson(c));

		InterviewManagementServices.updateCategory(c)
			.success(function (data) {
				$log.log("Successfully updated category : " + angular.toJson(data));
				//$log.log("editedCategoryObject : " + angular.toJson(editedCategoryObject) );
			})
			.error(function (data) {
				$log.log("Error : " + angular.toJson(data));
			});
	};

	$scope.editQuestion = function (editedQuestionObject) {
		$log.log("editedQuestionObject : " + angular.toJson(editedQuestionObject));

		let q = {
			questionID: editedQuestionObject.questionID,
			linkedCatID: editedQuestionObject.linkedCatID,
			question: editedQuestionObject.question,
			dateCreated: editedQuestionObject.dateCreated,
			dateLastModified: editedQuestionObject.dateLastModified,
			rating: editedQuestionObject.rating,
			dateLastRead: editedQuestionObject.dateLastRead,
			totalRead: editedQuestionObject.totalRead,
			personal: editedQuestionObject.personal,
		};

		$log.log("question : " + angular.toJson(q));

		InterviewManagementServices.updateQuestion(
			q,
			editedQuestionObject.linkedCatID
		)
			.success(function (data) {
				$log.log("Successfully updated question : " + angular.toJson(data));
			})
			.error(function (data) {
				$log.log("Error : " + angular.toJson(data));
			});
	};

	$scope.editAnswer = function (editedAnswerObject) {
		$log.log(
			"editedAnswerObject : " +
			angular.toJson(
				editedAnswerObject,
				editedAnswerObject,
				editedAnswerObject
			)
		);

		InterviewManagementServices.updateAnswer(
			editedAnswerObject,
			editedAnswerObject.linkedCatID,
			editedAnswerObject.linkedQuesID
		)
			.success(function (data) {
				$log.log("Successfully updated answer : " + angular.toJson(data));
			})
			.error(function (data) {
				$log.log("Error : " + angular.toJson(data));
			});
	};

	$scope.init();
});
