(function (){
  'use strict';

  angular.module('app')
    .component ('aboutMe', {
      controller : controller,
      templateUrl: './app/about-me/about-me.view.html',
      css        : './app/about-me/about-me.style.css'
  })

  function controller() {
    const vm = this; 
  }

})();
