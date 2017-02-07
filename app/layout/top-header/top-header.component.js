(function (){
  'use strict';

  angular.module('app')
    .component ('topHeader', {
      controller  : controller,
      templateUrl : './app/layout/top-header/top-header.view.html',
      css         : './app/layout/top-header/top-header.style.css'
  })

  function controller() {
    const vm = this;
  }

})();
