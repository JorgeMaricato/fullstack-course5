(function() {

    'use strict;'

    let shoppingList1 = ["Leite", "Bolo", "Biscoito", "Chocolate", "Manteiga de amendoim", "Dieta", "Dieta (Sabor Chocolate)", "Dieta (Sabor Biscoito)"];

    let shoppingList2 = [
        {
            name: "Leite",
            quantity: "2"
        },
        {
            name: "Bolo",
            quantity: "200"
        },
        {
            name: "Biscoito",
            quantity: "300"
        },
        {
            name: "Chocolate",
            quantity: "5"
        }
    ];

    angular.module("ShoppingListApp", [])
    .controller("ShoppingListController", ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController ($scope) {

        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;
        
        $scope.addToList = function() {
            let newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };
            
            $scope.shoppingList2.push(newItem);
        };

    };

})();