(function(){
  'use strict';

angular
     .module('app', ['ngRoute',
                     'ngAnimate']);


    .config(function($routeProvider) {

    $routeProvider

    .when('/', {
      templateUrl: 'partials/landing.html',
      controller: 'MainController'
    })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
    })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'AboutController'
    })
      .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'AboutController'
    })

});

})(); 
