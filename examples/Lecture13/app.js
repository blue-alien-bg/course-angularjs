(function (){
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('stuff', StuffFiletr)
    .filter('custom', CustomFilter);

  MsgController.$inject = ['$scope', '$filter', 'stuffFilter'];
  function MsgController($scope, $filter, stuffFilter){
    $scope.name = "Slav";
    $scope.state = "8";
    $scope.buttonText = "Flip Image";
    $scope.imageCost = .95;
    var msg = "Slav says stuff, stuff, stuff!";

    $scope.sayMessage = function(){
      return msg;
    };

    $scope.sayBigMessage = function(){
      var output = $filter('uppercase')(msg);
      return output;
    }

    $scope.sayFilterMessage = function(){
      var output = stuffFilter(msg);
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

  function StuffFiletr(){
    return function(input){
      input = input || "";
      input = input.replace(/stuff/g, "things");
      return input;
    };
  }

  function CustomFilter(){
    return function(input, target, replacement){
      input = input || "";
      input = input.replace(new RegExp(target, 'g'), replacement); // CAUTION!!! Not applying escape for RegEx special characters!
      return input;
    }
  }

})();
