var sliderApp=angular.module('sliderApp',['ngAnimate']);

sliderApp.controller('SliderController', 
						['$scope','$http',function($scope,$http) {
    $scope.images=[{src:'img1.png',title:'Pic 1'},{src:'img2.jpg',title:'Pic 2'},{src:'img3.jpg',title:'Pic 3'},{src:'img4.png',title:'Pic 4'},{src:'img5.png',title:'Pic 5'}]; 
	// $scope.images=[];
	
	$scope.loadResult =function() {
		
	};
	
	//var urrrlll="http://127.0.0.1:8888/FileService/fileService.jsp?fileName="+$scope.foldername+"";
	var urrrlll='http://127.0.0.1:8888/FileService/fileService.jsp?fileName=C:/Users/796412/Desktop/21-dec-2015/07-june-2016/practical-probabilistic-programming/';
	$http(
			{
				method : 'POST',
				/* url : 'http://127.0.0.1:8888/FileService/fileService.jsp?fileName=C:/Users/796412/Desktop/21-dec-2015/07-june-2016/practical-probabilistic-programming/' */
				url :urrrlll
			}).success(function(data) {
				$scope.fileNames = data;
				$scope.errorMessage = "";
			}).error(function(data) {
				$scope.errorMessage += "There was an error fetching the list of available roles. Please reload the page and try again.";
			}
		);
	
	
}]);
 
sliderApp.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		images: '='
	},
    link: function (scope, elem, attrs) {
	
		scope.currentIndex=0;

		scope.next=function(){
			scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			scope.images.forEach(function(image){
				image.visible=false;
			});
			scope.images[scope.currentIndex].visible=true;
		});
		
		/* Start: For Automatic slideshow*/
		
		var timer;
		
		var sliderFunc=function(){
			timer=$timeout(function(){
				scope.next();
				timer=$timeout(sliderFunc,1000);
			},5000);
		};
		
		sliderFunc();
		
		scope.$on('$destroy',function(){
			$timeout.cancel(timer);
		});
		
		/* End : For Automatic slideshow*/
		
    },
	templateUrl:'templates/templateurl.html'
  }
});