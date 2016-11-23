(function (){
'use strict';

  angular.module("ShoppingListApp", [])
  .controller("ShoppingListAddController", ShoppingListAddController)
  // .controller("ShoppingListRemoveController", ShoppingListRemoveController)
  .controller("ShoppingListShowController", ShoppingListShowController)
  .service("ShoppingListService", ShoppingListService);

  ShoppingListAddController.$inject = ["ShoppingListService"];
  function ShoppingListAddController(ShoppingListService){
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function(){
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      itemAdder.itemName = "";
      itemAdder.itemQuantity = "";
    };

  }

  ShoppingListShowController.$inject = ["ShoppingListService"];
  function ShoppingListShowController(ShoppingListService){
    var showList = this;

    showList.items = ShoppingListService.getItems();

    showList.removeItem = function (itemIndex){
      ShoppingListService.removeItem(itemIndex);
    };
  }

  // ShoppingListRemoveController.$inject = ["ShoppingListService"];
  // function ShoppingListRemoveController(ShoppingListService){
  //   var itemRemover = this;
  //
  //   itemRemover.itemIndex = "";
  //
  //   itemRemover.removeItem = function (){
  //     if(itemRemover.itemIndex != ""){
  //       ShoppingListService.removeItem(itemRemover.itemIndex - 1);
  //     }
  //   };
  // }

  function ShoppingListService(){
    var service = this;

    var items = [];

    service.addItem = function(itemName, amount){
      var item = {name: itemName, quantity: amount};
      items.push(item);
    };

    service.removeItem = function (itemIndex){
      items.splice(itemIndex, 1);
    };

    service.getItems = function(){
      return items;
    };
  }

})();
