(function (){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope){
    $scope.name = "Slav";
    $scope.sayMessage = function(){
      return "Slav says stuff, stuff stuff!"
    };
    $scope.state = "8";
    $scope.buttonText = "Flip Image";
    $scope.flipImage = function(){
      if($scope.state == "8"){
        $scope.state = "8 neg";
        $scope.buttonText = "Flip it Back";
      }
      else{
        $scope.state = "8";
        $scope.buttonText = "Flip Image";
      }
    }
  }

})();
