"use strict";
angular.module("audiometaDemo").controller("MainCtrl", [
  "AudioParser", "AudioParserWorker", "$scope", "$q", function(AudioParser, AudioParserWorker, $scope, $q) {
    var getfileInfoByBatch;
    $scope.setFiles = function(element) {
      var fileObj, files, i, results;
      files = element.files;
      $scope.fileInputState = "";
      $scope.files = [];
      i = 0;
      console.log("got " + files.length + " files");
      results = [];
      while (i < files.length) {
        fileObj = {
          file: files[i]
        };
        $scope.files.push(fileObj);
        (function(fileObj) {
          return AudioParser.getInfo(files[i]).then(function(fileInfo) {
            fileObj.info = fileInfo;
            return console.log("Metadata Found: ", fileObj);
          });
        })(fileObj);
        results.push(i++);
      }
      return results;
    };
    $scope.setWwFiles = function(element) {
      var files, i;
      files = element.files;
      $scope.fileInputState = "";
      $scope.wwfiles = [];
      i = 0;
      console.log("got " + files.length + " files");
      return getfileInfoByBatch(0, files);
    };
    return getfileInfoByBatch = function(i, files) {
      var deferred, fileObj, limit;
      limit = Math.min(files.length, i + 10);
      deferred = $q.defer();
      while (i < limit) {
        fileObj = {
          file: files[i]
        };
        (function(fileObj, i) {
          return AudioParserWorker.getInfo(files[i]).then(function(fileInfo) {
            fileObj.info = fileInfo;
            $scope.wwfiles.push(fileObj);
            console.log("Metadata Found: ", fileObj);
            if (i + 1 === limit) {
              return deferred.resolve();
            }
          });
        })(fileObj, i);
        i++;
      }
      return deferred.promise.then(function() {
        if (limit < files.length) {
          return getfileInfoByBatch(limit, files);
        }
      });
    };
  }
]);

// ---
// generated by coffee-script 1.9.2