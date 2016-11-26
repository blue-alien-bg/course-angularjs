(function(){
'use strict';
  angular.module("ShoppingListsApp", [])
    .controller("ToBuyListController", ToBuyListController)
    .controller("AlreadyBoughtListController", AlreadyBoughtListController)
    .service("ShoppingListService", ShoppingListService);

  ToBuyListController.$inject = ["ShoppingListService"];
  function ToBuyListController(ShoppingListService){

    this.message = "Everything is bought!";

    this.items = ShoppingListService.getToBuyItems();

    this.moveItem = function(itemIndex){
      ShoppingListService.moveItem(itemIndex);
    };

  }

  AlreadyBoughtListController.$inject = ["ShoppingListService"];
  function AlreadyBoughtListController(ShoppingListService){

    this.message = "Nothing bought yet";

    this.items = ShoppingListService.getBoughtItems();

  }

  function ShoppingListService(){

    var toBuyItems = [{name: "coockies", quantity: 5}, {name: "sodas", quantity: 2}, {name: "cake", quantity: 1}];
    var boughtItems = [];

    this.moveItem = function(itemIndex){
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    };

    this.getToBuyItems = function(){
      return toBuyItems;
    };

    this.getBoughtItems = function(){
      return boughtItems;
    };

  }

})();
