/*
    - With the given shoppingList array, use array destructuring to assign each array within the shoppingList array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array. 
    
    - after the shoppingList array has been reinitialized, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:
        - include a parameter for index
        - utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable
            - you will need to implement some sort of logic to check the index of the current item being mapped over.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], [ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];

let obj = {
cleaning: [],
gifts: [],
clothing: [],
grocery: []
};

let [grocery, cleaning, gifts, clothing] = [shoppingList[0], shoppingList[1], shoppingList[2], shoppingList[3]] ;

//console.log(...shoppingList);

//shoppingList = [grocery, cleaning, gifts, clothing];
let newList = [...shoppingList];

///console.log(newList);

let categories = Object.keys(obj);

//console.log(categories);

//obj.cleaning.push('soap')

function index(item){
    for(i=0; i<newList.length; i++){
            if(item == newList[i]){
                obj.item.push(newList[i])
             }
}};

categories.map(index);


console.log(obj.cleaning);
