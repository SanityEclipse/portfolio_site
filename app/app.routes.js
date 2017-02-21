(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
    
      .state({ name: 'home', url: '/', component: 'siteLanding'})
      .state({ name: 'about', url: '/about-me', component: 'aboutMe'})
      .state({ name: 'projects', url: '/my-projects', component: 'myProjects'})
      .state({ name: 'contact', url: '/contact-info', component: 'contactInfo'})

  }

}());
