var app = angular.module('DemoApp', ['ngRoute', 'ngAnimate','angularTrix', 'ngSanitize','ngTouch','ui.bootstrap']);

app.constant("AppConfig", {
	"maxStarRatingValue":"10",
	"showLinkData" : true,
	"showDbBakupLinkData":true,
	"restServices" : "http://127.0.0.1:8080/RestServices/rest",
	"interviewMgmtServices":"http://127.0.0.1:8080/interview-mgmt/rest",
});

app.component("helloWorld",{
      template: 'Hello {{$ctrl.name}}!',
      bindings: { name: '@' }
  });