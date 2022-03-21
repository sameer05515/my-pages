app.factory('InterviewManagementServices', [
		'$http','$log',
		'$routeParams',
		'AppConfig',
		function($http,$log, $routeParams, AppConfig) {

			var InterviewManagementServices = {};
			
            /**Fetch all Categories, Questions, Answers list*/
            
            InterviewManagementServices.fetchAnswersJson = function() {


                $log.log("fetchAnswersJson is  being called");

                return $http.get(AppConfig.interviewMgmtServices + "/report/allQuestions");
                
			};


			InterviewManagementServices.fetchCategoriesList = function() {

				return $http.get(AppConfig.interviewMgmtServices + "/categories");
			};

			InterviewManagementServices.fetchQuestionsList = function(linkedCategoryID) {

				return $http.get(AppConfig.interviewMgmtServices + "/categories/" +
						linkedCategoryID +
						"/questions");
			};
			
			InterviewManagementServices.markRead = function(linkedCategoryID,linkedQuestionID) {

				return $http.put(AppConfig.interviewMgmtServices + "/categories/" +
						linkedCategoryID +
						"/questions/" +
						linkedQuestionID +
						"/markread");
			};
			
			InterviewManagementServices.markPrivate = function(linkedCategoryID,linkedQuestionID) {

				return $http.put(AppConfig.interviewMgmtServices + "/categories/" +
						linkedCategoryID +
						"/questions/" +
						linkedQuestionID +
						"/markprivate");
			};
			
			InterviewManagementServices.fetchAnswersList = function(linkedCategoryID,linkedQuestionID) {

				return $http.get(AppConfig.interviewMgmtServices + "/categories/" +
						linkedCategoryID +
						"/questions/"+linkedQuestionID+"/answers");
			};
			
			/**Fetch Category, Question, Answer object on basis of given ID*/

			InterviewManagementServices.fetchCategory = function(catID) {

				return $http.get(AppConfig.interviewMgmtServices + "/categories" + "/"
						+ catID);
			};
			
			InterviewManagementServices.fetchQuestionForCategory = function(catID,questionID) {

				return $http.get(AppConfig.interviewMgmtServices + "/categories" + "/"
						+ catID+
						"/questions/"+questionID);
			};
			
			InterviewManagementServices.fetchAnswerForQuestion = function(catID,questionID,answerID) {

				return $http.get(AppConfig.interviewMgmtServices + "/categories" + "/"
						+ catID+
						"/questions/"+questionID+
						"/answers/"+answerID);
			};
			
			/**Save Category, Question, Answer */

			InterviewManagementServices.saveCategory = function(
					categoryObj) {

				var req = {
					method : 'POST',
					url : AppConfig.interviewMgmtServices + "/categories",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(categoryObj)
				};

				return $http(req);
			};
			
			InterviewManagementServices.saveQuestion = function(
					questionObj,catID) {

				var req = {
					method : 'POST',
					url : AppConfig.interviewMgmtServices + "/categories/"+ catID+"/questions",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(questionObj)
				};

				return $http(req);
			};
			
			InterviewManagementServices.saveAnswer = function(
					answerObj,catID,questionID) {

				var req = {
					method : 'POST',
					url : AppConfig.interviewMgmtServices + "/categories/"+ catID+"/questions/"+ questionID+"/answers",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(answerObj)
				};

				return $http(req);
			};
			
			/**Update Category, Question, Answer */

			InterviewManagementServices.updateCategory = function(
					categoryObj) {

				var req = {
					method : 'PUT',
					url : AppConfig.interviewMgmtServices + "/categories",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(categoryObj)
				};

				return $http(req);
			};
			
			InterviewManagementServices.updateQuestion = function(
					questionObj,catID) {

				var req = {
					method : 'PUT',
					url : AppConfig.interviewMgmtServices + "/categories/"+ catID+"/questions",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(questionObj)
				};

				return $http(req);
			};
			
			InterviewManagementServices.markReadQuestion = function(
					questionObj,catID,questionID) {

				var req = {
					method : 'PUT',
					url : AppConfig.interviewMgmtServices + "/categories/"+ catID+"/questions/"+questionID+"/markread",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(questionObj)
				};

				return $http(req);
			};
			
			InterviewManagementServices.updateAnswer = function(
					answerObj,catID,questionID) {

				var req = {
					method : 'PUT',
					url : AppConfig.interviewMgmtServices + "/categories/"+ catID+"/questions/"+ questionID+"/answers",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(answerObj)
				};

				return $http(req);
			};
			
			/**Delete Category, Question, Answer */

			InterviewManagementServices.deleteCategory = function(catID) {

				var req = {
					method : 'DELETE',
					url : AppConfig.interviewMgmtServices + "/categories/"+catID,
					headers : {
						'Content-Type' : 'application/json'
					}
				};

				return $http(req);
			};
			
			InterviewManagementServices.deleteQuestion = function(catID,questionID) {

				var req = {
					method : 'DELETE',
					url : AppConfig.interviewMgmtServices + "/categories/"+ catID+"/questions/"+questionID,
					headers : {
						'Content-Type' : 'application/json'
					}
				};

				return $http(req);
			};
			
			InterviewManagementServices.deleteAnswer = function(catID,questionID,answerID) {

				var req = {
					method : 'DELETE',
					url : AppConfig.interviewMgmtServices + "/categories/"+ catID+"/questions/"+ questionID+"/answers/"+answerID,
					headers : {
						'Content-Type' : 'application/json'
					}
				};

				return $http(req);
			};

			
			
			

			InterviewManagementServices.next = function(list, counter) {
				// $scope.topic=list[counter];
				counter = (counter >= list.length - 1) ? 0 : (counter + 1);
				return counter;

			};

			InterviewManagementServices.previous = function(list, counter) {
				// $scope.topic=$scope.topicsList[counter];
				counter = (counter == 0) ? (list.length - 1) : (counter - 1);
				return counter;

			};
			
			InterviewManagementServices.maxInterviewMgmtRatingValue=10;
				//AppConfig.maxInterviewMgmtRatingValue;

			return InterviewManagementServices;

		} ]);