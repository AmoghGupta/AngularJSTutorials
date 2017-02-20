var app = angular.module("myapp10",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
$routeProvider.
when('/',{
  template: 'Welcome user!'
})
.when('/anotherPage',{
template: 'Welcome user, again!'
})
.otherwise({
redirectTo: '/'
});
}]);
