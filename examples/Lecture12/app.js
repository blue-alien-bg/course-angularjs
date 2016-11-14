(function (){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];
  function MsgController($scope, $filter){
    $scope.name = "Slav";
    $scope.state = "8";
    $scope.buttonText = "Flip Image";
    $scope.imageCost = .95;

    $scope.sayMessage = function(){
      var msg = "Slav says stuff, stuff stuff!";
      var output = $filter('uppercase')(msg);
      return output;
    };

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
