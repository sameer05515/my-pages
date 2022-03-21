// The service you'll be calling
app.factory('myModalService', ['$q', '$modal', function ($q, $modal) {
  
  var modalService = {
    Options: function (text, title,
      options, optionValues, optionClasses, defaultOption) {
      
      if (typeof title !== 'string') title = 'Options';
      
      // Default values is the index of buttons
      if (!optionValues) {
        optionValues = options.map(function (value, index) { return index; });
      }
      
      var defered = $q.defer();
      
      var ctrl = function ($scope, $modalInstance) {
        $scope.text = text;
        $scope.title = title;
        $scope.options = options;
        $scope.optionClasses = optionClasses;
        $scope.doOption = function (index) {
          $modalInstance.close(index);
        };
      };
      ctrl.$inject = ['$scope', '$modalInstance'];
      
      $modal.open({
        controller: ctrl,
        templateUrl: 'template/modalTmpl.html',
        windowClass: 'my-modal-window'
      }).result.then(function (index) { defered.resolve(optionValues[index]) },
        function (message) {
          if (message !== 'backdrop click'
            && message !== void 0) defered.reject('Unknown dismissal of modal.');
          if (typeof defaultOption !== 'number'
            || defaultOption < 0 || defaultOption >= optionValues.length) {
            defered.reject('default');
          }
          defered.resolve(optionValues[defaultOption]);
        });
      
      return defered.promise;
    },
    Confirm: function (text, title) {
      if (typeof title !== 'string') title = 'Confirm';
      return modalService.Options(text, title,
        ['Yes', 'No'], [true, false], ['btn-danger', 'btn-primary'], 1);
    },
    Alert: function (text, title) {
      if (typeof title !== 'string') title = 'Alert';
      return modalService.Options(text, title,
        ['OK'], null, ['btn-primary'], 0).then(angular.noop);
    }
  };
  return modalService;
  
}]);