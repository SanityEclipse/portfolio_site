(function (){
  'use strict';

  angular.module('app')
    .component ('contactInfo', {
      controller  : controller,
      templateUrl : './app/contact-info/contact-info.view.html',
      css         : './app/contact-info/contact-info.style.css'
  })

  function controller() {
    const vm = this;
  }

})();
