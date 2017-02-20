var app = angular.module("myapp13",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){

$routeProvider
.when('/',{
templateUrl:'login.html'
})
.when('/dashboard',{
  resolve: {
    "check" :function($location,$rootScope){
      if(!$rootScope.loggedIn){
        $location.path('/');
      }else{
        templateUrl:'dashboard.html'
      }
    }
  },
  templateUrl:'dashboard.html'
})
.otherwise({
redirectTo:'/'
});
}]);

app.controller('login', ['$scope','$location','$rootScope', function($scope, $location, $rootScope){
$scope.submit = function(){
  if($scope.username == 'admin' && $scope.password== 'admin'){
    $rootScope.loggedIn = true;
    $location.path('/dashboard');
  }
  else{
    alert('wrong data entered');
  }
};
}]);
