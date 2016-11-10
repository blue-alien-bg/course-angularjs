(function (){
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', DIController);

  DIController.$inject = ['$scope', '$filter']; //The minifier does not modifie literals such as '$scope' and '$filter'.
                                                //After minification Angular looks for the .$inject property to inject
                                                //the specified in the array services.

  function DIController($scope, $filter){
    $scope.name = "Slav";

    $scope.upper = function (){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }

})();
// Minified version below
//!function(){"use strict";function e(e,n){e.name="Slav",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
