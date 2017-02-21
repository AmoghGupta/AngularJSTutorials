var app = angular.module("myapp21", []);

// services are singleton
app.service('random', function() {
    var num =Math.floor(Math.random()*10);
    this.generate = function(){
      return num;
    };
});

app.controller('app', ['$scope','random', function($scope,random) {
$scope.generateRand = function(){
$scope.randomNumber = random.generate();
};



}]);
