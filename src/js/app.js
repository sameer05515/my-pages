var app = angular.module("DemoApp", ["ngRoute", "ngAnimate", "angularTrix", "ngSanitize", "ngTouch", "ui.bootstrap"]);

// Configuration: Use window.APP_CONFIG if available (set via config script), otherwise use defaults
app.constant("AppConfig", {
  maxStarRatingValue: "10",
  showLinkData: true,
  showDbBakupLinkData: true,
  // Use environment-based configuration - fallback to relative paths or defaults
  restServices: (window.APP_CONFIG && window.APP_CONFIG.restServices) || "/api/rest",
  interviewMgmtServices: (window.APP_CONFIG && window.APP_CONFIG.interviewMgmtServices) || "/api/interview-mgmt/rest",
});

app.component("helloWorld", {
  template: "Hello {{$ctrl.name}}!",
  bindings: { name: "@" },
});
