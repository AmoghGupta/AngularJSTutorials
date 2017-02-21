var app = angular.module("myapp20", []);

app.controller('app',['$scope', function($scope,$digest){
$scope.myRandomNumber = Math.random();
//Vanilla JS means normal JS
document.querySelector('input').addEventListener('click', function(){
console.log("Button clicked");
$scope.myRandomNumber = Math.random();
$scope.$digest();
},false);
}]);
