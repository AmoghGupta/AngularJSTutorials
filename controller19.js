var app = angular.module("myapp20", []);

app.controller('app',['$scope', function($scope){

$scope.counter =0;
$scope.$watch('mytext',function(newValue, oldValue){
console.log("New :" + newValue + " Old: "+ oldValue);
$scope.counter++;
});
}]);
