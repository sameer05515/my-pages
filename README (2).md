Contains a simple service with examples to show Alert, Confirm and simple custom modal windows.  
This uses AngularJS and AngularUI Bootstrap.

The syntax is simple:

    modalService.Options(text, title, options, optionValues, optionClasses, defaultOption)
      text: The text that will be in the modal window (set through ng-bind-html).
      title: The header text that will be in the modal window (set through ng-bind-html).
      options: An array of strings with the content of all buttons (set through ng-bind-html).
      optionValues: The values that each button resolves the promise with.
      optionClasses: The CSS classes each button has (passed to ng-class).
      defaultOption: Index of the default option (0 based).
    
    modalService.Alert(text, title)
      Shortcut for a modal with just an OK button.
    
    modalService.Confirm(text, title)
      Shortcut for a modal with a Yes and No button.
      Default button is No, and will resolve to true or false.

Because the tooltip uses `ng-bind-html` (the template can be modified to just show text
through by changing `ng-bind-html` to `ng-bind`) it requires ngSanitize to sanitize the input.

You can use [`$sce.trustAsHtml('<p>Html here</p>')`][1] to insert any HTML into the tooltip.

 [1]: http://docs.angularjs.org/api/ng/service/$sce