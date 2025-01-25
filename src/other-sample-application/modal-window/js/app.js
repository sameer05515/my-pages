var app = angular.module('myApp', ['ngTouch','ngAnimate','ui.bootstrap']);
app.controller("MainController",['$scope','$uibModal',function($scope,$uibModal){
 
 $scope.openModal = function(){
 $scope.modalInstance = $uibModal.open({
 ariaLabelledBy: 'modal-title',
 ariaDescribedBy: 'modal-body',
 templateUrl: 'modalWindow.html',
 controller :'ModelHandlerController',
 controllerAs: '$ctrl',
 size: 'lg',
 resolve: {
 
 }
 });

 }
 
}]);
app.controller("ModelHandlerController",function($scope,$uibModalInstance){
 
 $scope.cancelModal = function(){
 console.log("cancelmodal");
 $uibModalInstance.dismiss('close');
 }
 $scope.ok = function(){
 $uibModalInstance.close('save');
 
 }
 
});