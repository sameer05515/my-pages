var app = angular.module('DemoApp', ['ngSanitize']);

app.constant("AppConfig", {
	"showLinkData" : true,
	"showDbBakupLinkData":true,
	"restServices" : "http://127.0.0.1:8080/RestServices/rest",
	"interviewMgmtServices":"http://127.0.0.1:8080/interview-mgmt/rest",
});