var app = angular.module('DemoApp', []);

app.constant("AppConfig", {
	"showLinkData" : false,
	"showDbBakupLinkData":false,
	"restServices" : "http://127.0.0.1:8080/RestServices/rest",
	"interviewMgmtServices":"http://127.0.0.1:8080/interview-mgmt/rest",
});