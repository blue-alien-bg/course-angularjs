(function(){
  'use strict';

  angular.module('CounterApp', [])
    .controller('CounterController', CounterController);

  CounterController.inject = ['$scope', '$timeout'];  // $timeout is another
                                                      // service, treat it
                                                      // like one
  function CounterController($scope, $timeout){

    $scope.counter = 0;

    // The best version, a native option
    $scope.upCounter = function(){
      $timeout(function(){
        $scope.counter++;
        console.log("Counter incremented!");
      }, 2000);
    };

    // Better version, call the $apply
    // $scope.upCounter = function(){
    //   setTimeout(function(){
    //     $scope.$apply(function(){
    //       $scope.counter++;
    //       console.log("Counter incremented!");
    //     });
    //   }, 2000);
    // };

    // Acceptable version, call the $digest at the end. Angular will not
    // be able to handle exceptions in this code
    // $scope.upCounter = function(){
    //   setTimeout(function(){
    //     $scope.counter++;
    //     console.log("Counter incremented!");
    //     $scope.$digest();
    //   }, 2000);
    // };

  }
})();
