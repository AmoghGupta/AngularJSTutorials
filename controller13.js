var app = angular.module("myapp13",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){

$routeProvider
.when('/',{
templateUrl:'login.html'
})
.when('/dashboard',{
templateUrl:'dashboard.html'
})
.otherwise({
redirectTo:'/'
});
}]);

app.controller('login', ['$scope','$location', function($scope, $location){
$scope.submit = function(){
  var uname= $scope.username;
  var password= $scope.password;
  if($scope.username == 'admin' && $scope.password== 'admin'){
    $location.path('/dashboard');
  }
  else{
    alert('wrong data entered');
  }
};
}]);
