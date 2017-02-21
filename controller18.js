var app = angular.module("myapp18", []);

app.controller('mycontrol',['$scope', function($scope){
var range= [];
for(var i=0;i<10;i++){
  range.push(i);
}
$scope.myrange = range;

var nrange= new Array(100);
$scope.newrange = nrange;

}]);
