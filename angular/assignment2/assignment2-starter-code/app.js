(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getToBuyList();

    toBuyList.buyItem = function (itemIndex) {
      var bought_item = ShoppingListCheckOffService.removeSelectedItem(itemIndex);
      ShoppingListCheckOffService.addItemToBoughtList(bought_item);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBuyList = this;
    alreadyBuyList.boughtList = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var listItems = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "10"
      },
      {
        name: "Ginger",
        quantity: "2"
      }
    ];
    var boughtList = [];

    service.getToBuyList = function() {
      return listItems;
    };

    service.removeSelectedItem = function(itemIndex) {
      var bought_item = listItems.splice(itemIndex, 1);
      return bought_item;
    }

    service.addItemToBoughtList = function(selectedItem) {
      var item = {
        name: selectedItem[0].name,
        quantity: selectedItem[0].quantity
      };
      boughtList.push(item);
      return boughtList;
    }

    service.getBoughtList = function () {
      return boughtList;
    }
  }

})();
