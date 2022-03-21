var app = angular.module("testApp", ["ngSanitize", "ui.bootstrap"]);

app.controller("testCtrl", [
  "$scope",
  "$http",
  "$log",
  function ($scope, $http, $log) {
    // $scope.alert = function () {
    //   console.log('Alert clicked');
    //   $scope.alertOpen = true;
    //   myModalService.Alert('This is a message.', 'Alert alert alert!')
    //     .then(function () { $scope.alertOpen = false; });
    // };

    // $scope.confirm = function () {
    //   console.log('Confirm clicked');
    //   myModalService.Confirm('Confirm this message?', 'Confirm?')
    //     .then(function (result) { $scope.confirmResult = result; });
    // };

    // $scope.customResult = 'undefined';
    // $scope.custom = function () {
    //   myModalService.Options('Custom modal', 'Custom title',
    //     ['Option 1', 'Option 2', 'And opt 3'], null, ['btn-danger', 'btn-primary'], 2)
    //     .then(function (result) {
    //       $scope.customResult = result;
    //     });
    // };

    var onError = function (response) {
      $scope.error = response.status;
      $log.log(
        "Error : status " +
          response.status +
          " data " +
          response.data +
          " headers " +
          response.headers +
          " config " +
          response.config
      );
    };

    $scope.clicklinkData = function (urll, dataType) {
      //let urll = "";
      $log.log("urll : " + urll);
      $http.get(urll).then(function (response) {
        // $log.log("response recieved : "+angular.toJson(response));
        switch (dataType) {
          case "LINK_DATA":
            $scope.loadLinkData(response);
            break;
          case "dbBakupLinkData":
            $scope.loadDbBakupLinkData(response);
            break;
          case "importResponse":
            $scope.loadImportResponse(response);
            break;
          case "stylesData":
            $scope.loadStylesData(response);
            break;
          case "IrregularVerb":
            $scope.loadIrregularVerb(response.data);
            break;
          case "wordRoots":
            $scope.loadWordRoots(response.data);
            break;
          case "wordSuffixes":
            $scope.loadWordSuffixes(response.data);
            break;
          default:
            break;
        }
      }, onError);
    };

    $scope.loadLinkData = function (response) {
      $log.log("response recieved : " + angular.toJson(response));
    };

    $scope.loadDbBakupLinkData = function (response) {
      $log.log("response recieved : " + angular.toJson(response));
    };

    $scope.loadImportResponse = function (response) {
      $log.log("response recieved : " + angular.toJson(response));
    };

    $scope.loadStylesData = function (response) {
      $log.log("response recieved : " + angular.toJson(response));
    };

    $scope.loadIrregularVerb = function (response) {
      $log.log("response recieved : " + angular.toJson(response));

      $scope.IrregularVerbData=response;
      $scope.showSectionLINK_DATA=true;

      // for (let i = 0; i < response.length; i++) {
      //   //{"V1Infinitive":"creep","V2SimplePast":"crept","V3PastParticiple":"crept"}
      //   let obj = response[i];
      //   document.writeln(
      //     "INSERT INTO t_irregular_verb" +
      //       "(id, unique_name, V1Infinitive, V2SimplePast, V3PastParticiple, example)" +
      //       "VALUES ( \"" +
      //       (i+1) +
      //       "\",\"" +
      //       obj.V1Infinitive +
      //       (i+1) +
      //       "\",\"" +
      //       obj.V1Infinitive +
      //       "\",\"" +
      //       obj.V2SimplePast +
      //       "\",\"" +
      //       obj.V3PastParticiple +
      //       '\",\"\");' +'<br>'
      //   );
      // }
    };

    $scope.loadWordRoots = function (response) {

      //{"RootWord":"acro",
      //"Meanings":"top, height, tip, beginning",
      //"Origin":"Greek",
      //"ExamplesAndDefinitions":"acrobat - a \"high walker\"; acronym - a word formed from the first\n\t\t\t\t\t\t\t\t\t\t\t\t(capital) letters of a word; acrophobia - fear of height"}
      $log.log("response recieved : " + angular.toJson(response));

      $scope.WordRootsData=response;
      $scope.showSectionwordRoots=true;

    };

    $scope.loadWordSuffixes = function (response) {
      $log.log("response recieved : " + angular.toJson(response));

      $scope.wordSuffixesData=response;
      $scope.showSectionwordSuffixes=true;
    };

    $scope.init= function(){
      $scope.showSectionLINK_DATA=false;
      $scope.showSectionwordRoots=false;
      $scope.showSectionwordSuffixes=false;
    };

    $scope.HtmlEncode= function (str)
    {
      // var el = document.createElement("div");
      // el.innerText = el.textContent = str;
      // str = el.innerHTML;
      // return str;

      var i = str.length,
        aRet = [];

    while (i--) {
        var iC = str[i].charCodeAt();
        if (iC < 65 || iC > 127 || (iC>90 && iC<97)) {
            aRet[i] = '&#'+iC+';';
        } else {
            aRet[i] = str[i];
        }
    }
    return aRet.join('');
    }

    $scope.init();
  },
]);
