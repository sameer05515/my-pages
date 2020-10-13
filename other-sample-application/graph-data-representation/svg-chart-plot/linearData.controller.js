app.controller('SalesController', ['$scope', '$interval', '$http', '$log',
    function ($scope, $interval, $http, $log) {
        $scope.salesData = [
            { hour: 1, sales: 54 },
            { hour: 2, sales: 66 },
            { hour: 3, sales: 77 },
            { hour: 4, sales: 70 },
            { hour: 5, sales: 60 },
            { hour: 6, sales: 63 },
            { hour: 7, sales: 55 },
            { hour: 8, sales: 47 },
            { hour: 9, sales: 55 },
            { hour: 10, sales: 30 }
        ];
        // $scope.chartData = { "nodes": [{ "id": "10OCT2020-00006-Shri-Shankar-sah", "name": "Shri Shankar sah", "label": "PERSON" }, { "id": "10OCT2020-00001-Shri-Sitaram-sah", "name": "Shri Sitaram sah", "label": "PERSON" }], "links": [{ "source": "10OCT2020-00001-Shri-Sitaram-sah", "target": "10OCT2020-00006-Shri-Shankar-sah", "type": "FATHER" }] };
        // $scope.chartData ={};
        // $http.get("http://localhost:3000/relation-graph-representation/combined-person-relation").then(function (response) {
        //     $scope.chartData = response.data;
        //     $log.log("Succsss : status " + response.status + " data : $scope.chartData : " + angular.toJson($scope.chartData));
        // }, onError);

        // var onError = function (response) {
        //     //$scope.error = response.status;
        //     $log.log('Error occured' + response);
        // };

        $interval(function () {
            var hour = $scope.salesData.length + 1;
            var sales = Math.round(Math.random() * 100);
            $scope.salesData.push({ hour: hour, sales: sales });
        }, 1000, 10);
    }]);


    

