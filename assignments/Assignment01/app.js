(function (){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope){
    $scope.colour = "black";
    $scope.myText = "";
    $scope.message = "";
    $scope.tooMuch = function() {
      if($scope.myText == ""){
        $scope.message = "Please enter data first";
        $scope.colour = "red";
      }
      else{
        if(itemsCount($scope.myText.split(",")) > 0){
          if(itemsCount($scope.myText.split(",")) > 3){
            $scope.message = "Too much!";
            $scope.colour = "green";
          }
          else{
            $scope.message = "Enjoy!";
            $scope.colour = "green";
          }
        }
        else{
          $scope.message = "Aren't you hungry?";
          $scope.colour = "red";
        }
      }
    }
  }

  function itemsCount(items){
    var result = 0, i = 0;
    while (items[i] != undefined) {
      if(items[i] != "" && items[i] != " ")
        result++;
      i++;
    }
    return result;
  }

})();
