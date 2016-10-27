var app = angular.module("portfolio", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html',
      controller: 'MainController'
    })
      .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
});
