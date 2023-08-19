var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

// var filteredNumberArray = numberArray.filter(function(value){
//     return value > 5;
// });

function above5Filter(value) {
    return value > 5;
}

var filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filtered number array: ", filteredNumberArray);


let shoppingList1 = ["Leite", "Bolo", "Biscoito", "Chocolate", "Manteiga de amendoim", "Dieta", "Dieta (Sabor Chocolate)", "Dieta (Sabor Biscoito)"];
console.log("Shopping List: ", shoppingList1);

let searchValue = "Dieta";

function containsFilter(value){
    return value.indexOf(searchValue) !== -1;
}

let searchShoppingList = shoppingList1.filter(containsFilter);
console.log("Searched Shopping List: ", searchShoppingList);