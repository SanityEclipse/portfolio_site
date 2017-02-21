(function (){
  'use strict';

  angular.module('app')
    .component ('myProjects', {
      controller  : controller,
      templateUrl : './app/my-projects/my-projects.view.html',
      css         : './app/my-projects/my-projects.style.css'
  })

  function controller() {
    const vm = this; 
  }

})();
