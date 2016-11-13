(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItems)
  ;

  function  FoundItems(){
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&',
        myTerm: '@term',
        myMessage: '@message'
      },
      controller: FoundItemsController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsController(){
    var menu = this;

    menu.items = [];
    menu.message = "Nothing found";
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    
    menu.getResult = function() {
      MenuSearchService.getMatchedMenuItems(menu.searchTerm)
      .then(function(results){
        menu.items = results.foundItems;
        menu.term = results.searchTerm;
        if(!results.foundItems.length){
          menu.message = "Nothing found";
        }else {
          menu.message= "";
        }
      });
    }
    menu.removeItem = function (index){
      menu.items.splice(index, 1);
    }
  }

  MenuSearchService.$inject =['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function (keyword) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (response){
        console.log(keyword);
        var items_list = response.data.menu_items;
        var foundItems = [];
        for(var i = 0; i < items_list.length; i++){
          var item = items_list[i];
          if(keyword.length > 0 && items_list[i].description.toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
            foundItems.push(item)
          }
        }
        return {searchTerm: keyword, foundItems: foundItems};
      });
    }

  }
})();
