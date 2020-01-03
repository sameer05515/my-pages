app.controller('DemoController', function($scope) {
            $scope.tutorialName = "Angular JS";

            $scope.linkData = [{
                    'url': 'http://127.0.0.1:8080/bce-gui/#/questions-single-view',
                    'description': 'All questions in one page. Question to be shown as organised with categories, is yet to be implemented.',
                    'header': 'All questions in one page'
                }, {
                    'url': 'http://127.0.0.1:8080/bce-gui/partials/file-search/fileSearchWithBootstrapWithMultipleSearchBoxGroupByNames.html',
                    'description': 'SearchWithBootstrapWithMultipleSearchBoxGroupByNames.',
                    'header': 'Search With Bootstrap With Multiple SearchBox GroupBy Names'
                }, {
                    'url': 'http://localhost:8889/phpmyadmin/index.php',
                    'description': 'Local DB',
                    'header': 'Local DB'
                }, {
                    'url': 'https://github.com/premendrakumar?tab=repositories',
                    'description': 'GitHub Repo',
                    'header': 'GitHub Repo'
                }
            ];

            $scope.dbBakupLinkData = [{
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=information_schema",
                "description": "information_schema"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=interview-mgmt-test",
                "description": "interview-mgmt-test"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=interview_mgmt",
                "description": "interview_mgmt"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=interview_mgmt_testing",
                "description": "interview_mgmt_testing"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=jtractest",
                "description": "jtractest"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=mysql",
                "description": "mysql"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=performance_schema",
                "description": "performance_schema"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=phpmyadmin",
                "description": "phpmyadmin"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=relational-db-test",
                "description": "relational-db-test"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=test",
                "description": "test"
            }, {
                "url": "http://localhost:8889/phpmyadmin/db_export.php?db=topic-mgmt",
                "description": "topic-mgmt"
            }];
			
			
			$scope.stylesData = {
				descriptionStyle : {
					"color": "black",
					//"background-color" : "yellow",
					"font-size": "8px",
					"padding": "10px"
				},
				anchorLinkDataStyle : {
					"color": "blue",
					//"background-color" : "yellow",
					"font-size": "12px",
					"padding": "5px"
				},
				anchorDBLinkDataStyle : {
					"color": "blue",
					//"background-color" : "yellow",
					"font-size": "9px",
					"padding": "5px"
				},
				preDescriptionStyle : {
					"color": "black",
					"font-size": "10px",
					"padding": "5px"
				}
			};

            // $scope.descriptionStyle = {
                // "color": "black",
                
                // "font-size": "8px",
                // "padding": "10px"
            // };

            // $scope.anchorLinkDataStyle = {
                // "color": "blue",
                
                // "font-size": "12px",
                // "padding": "5px"
            // };

            // $scope.anchorDBLinkDataStyle = {
                // "color": "blue",
                
                // "font-size": "9px",
                // "padding": "5px"
            // };
			
			// $scope.preDescriptionStyle = {
				// "color": "black",
				// "font-size": "10px",
				// "padding": "5px"
			// };

        });