(function (){
  'use strict';

  angular.module('app')
    .component ('bottomFooter', {
      controller  : controller,
      templateUrl : './app/layout/bottom-footer/bottom-footer.view.html',
      css         : './app/layout/bottom-footer/bottom-footer.style.css'
  })

  function controller() {
    const vm = this;
  }

})();
