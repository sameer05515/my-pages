app.controller('GraphDataController', ['$scope', '$interval', '$http', '$log',
    function ($scope, $interval, $http, $log) {
        
        $scope.chartData1 = { "nodes": [{ "id": "10OCT2020-00006-Shri-Shankar-sah", "name": "Shri Shankar sah", "label": "PERSON" }, { "id": "10OCT2020-00001-Shri-Sitaram-sah", "name": "Shri Sitaram sah", "label": "PERSON" }], "links": [{ "source": "10OCT2020-00001-Shri-Sitaram-sah", "target": "10OCT2020-00006-Shri-Shankar-sah", "type": "FATHER" }] };
        $scope.chartData ={"nodes":[],"links":[]};
        $http.get("http://localhost:3000/relation-graph-representation/combined-person-relation").then(function (response) {
            $scope.chartData = response.data;
            $log.log("Succsss : status " + response.status + " data : $scope.chartData : " + angular.toJson($scope.chartData));
        }, onError);

        var onError = function (response) {
            //$scope.error = response.status;
            $log.log('Error occured' + response);
        };

        // $interval(function () {
        //     var hour = $scope.salesData.length + 1;
        //     var sales = Math.round(Math.random() * 100);
        //     $scope.salesData.push({ hour: hour, sales: sales });
        // }, 1000, 100);
    }]);