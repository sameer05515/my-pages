/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute','ngAnimate'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PshortDescriptionCtrl"})
    // PshortDescriptions
    .when("/about", {templateUrl: "partials/about.html", controller: "PshortDescriptionCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PshortDescriptionCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PshortDescriptionCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PshortDescriptionCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PshortDescriptionCtrl"})
    // links
    .when("/links", {templateUrl: "partials/link-mgmt/links-list.html", controller: "repeatController"})
	// Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PshortDescriptionCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other PshortDescriptions
 */
app.controller('PshortDescriptionCtrl', function (/* $scope, $location, $http */) {
  console.log("PshortDescription Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});


//////////////////////

//angular.module('ngRepeat', ['ngAnimate']).controller('repeatController', function($scope) {
app.controller('repeatController', function($scope,$http) {
	
	$scope.friends = [];
	
	$scope.linksfromxml=[];
	//////////
	$http.get("json/links.json")
    .success(function(response) {
			$scope.friends = response;
		});
	//////////
	
	///////////////
	
	$scope.groups = [];
	$scope.groups1 = [];
	$http.get("xml/links1.1.xml",
	//$http.get("http://127.0.0.1:8888/T0021-airpair-angularjs-tutorial-master/xml/links.xml",
				{
		transformResponse: function (cnv) {
		  var x2js = new X2JS();
		  var aftCnv = x2js.xml_str2json(cnv);
		  return aftCnv;
		}
	  })
		.success(function (response) {
			$scope.linksfromxml=response;
		
			///////////
			
			angular.forEach(response.root, function(value, key) {
				/* angular.forEach(value.linkGroup, function(value1, key1 {
					$scope.groups.push(value1);
				}); */
				$scope.groups.push(value);
				
			});
			
			angular.forEach($scope.groups.linkGroup, function(value1, key1) {
					$scope.groups1.push(value1);
				});
			$scope.isVisible = function(name){
				return true;// return false to hide this artist's albums
			};
			/////////////
	  });
	///////////////
	
  /* $scope.friends = [
    {link:'John', shortDescription:25, longDescription:'boy'},
    {link:'Jessie', shortDescription:30, longDescription:'girl'},
    {link:'Johanna', shortDescription:28, longDescription:'girl'},
    {link:'Joy', shortDescription:15, longDescription:'girl'},
    {link:'Mary', shortDescription:28, longDescription:'girl'},
    {link:'Peter', shortDescription:95, longDescription:'boy'},
    {link:'Sebastian', shortDescription:50, longDescription:'boy'},
    {link:'Erika', shortDescription:27, longDescription:'girl'},
    {link:'Patrick', shortDescription:40, longDescription:'boy'},
    {link:'Samantha', shortDescription:60, longDescription:'girl'}
  ]; */
});