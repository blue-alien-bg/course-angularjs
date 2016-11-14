(function (){
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('stuff', StuffFiletr) // Register and inject below to use in code and HTML
    .filter('custom', CustomFilter); // Only register to use only in HTML

  MsgController.$inject = ['$scope', '$filter', 'stuffFilter']; // Injection (minification proofing)
  function MsgController($scope, $filter, stuffFilter){ // Injection (default injection)
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

  function StuffFiletr(){ // Filter Factory function, it creates the filtering function
    return function(input){ // Real filtration happens here
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
