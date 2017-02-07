(function (){
  'use strict';

  angular.module('app')
    .component ('siteLanding', {
      controller  : controller,
      templateUrl : './app/site-landing/site-landing.view.html',
      css         : './app/site-landing/sitelanding.style.css'
  })

  function controller() {
    const vm = this;
  }

})();
