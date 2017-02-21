var app = angular.module("myapp22", []);

// services are singleton
app.factory('random', function() {
  var randomObject = {};
    var num =Math.floor(Math.random()*10);
    randomObject.generate = function(){
      return num;
    };
    return randomObject;
});

app.controller('app', ['$scope','random', function($scope,random) {
$scope.generateRand = function(){
$scope.randomNumber = random.generate();
};



}]);
