var app = angular.module("myapp12",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){

$routeProvider.when('/',{
templateUrl:'page.html'
})
.when('/helloUser',{
templateUrl:'hello.html'
})
.otherwise({
templateUrl:'By default'
});
}]);
