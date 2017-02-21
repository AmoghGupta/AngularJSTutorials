var app = angular.module("myapp15", []);

app.controller('people', ['$scope','$http', function($scope, $http) {
    $http.get('http://192.168.0.10:5678/database.json').success(function(response) {
        $scope.persons = response.records;
    });

}]);
