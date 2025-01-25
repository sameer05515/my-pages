angular.module("myApp", [])
	.controller("helloWorldDirectiveController", function($scope,$http,$location) {
	  this.myName='Premendra Kumar';
	  
	  /* this.name="Johnny";
	  $scope.secondName="Premendra Gupta"; */
  })
  .component("helloWorld",{
      /* template: "<span>Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!</span>", */
	  template: "<span>Hello {{$ctrl.name}}, I'm {{$ctrl.secondName}}!</span>",
      bindings: { name: '@', secondName: '@'  },
      /* controller: function(){
        this.myName = 'Alain';
      } */
	  
	  controller : "helloWorldDirectiveController"
  });