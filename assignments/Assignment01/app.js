(function (){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope){
    $scope.myText = "";
    $scope.message = "";
    $scope.tooMuch = function() {
      if($scope.myText == "")
        $scope.message = "Please enter data first";
      else{
        $scope.message = "There is data";
      }
    }
    // $scope.logger = function() {
    //   console.log($scope.myText);
    // }
  }

})();
