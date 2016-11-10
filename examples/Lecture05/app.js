(function (){
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope){

    $scope.name = "Slav";
    $scope.sayHello = function (){return "Hello app!"};

  });

})();
