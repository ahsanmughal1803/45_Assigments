"use strict";
/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//function to create a fruit object.
function createFruit(name, colour, taste) {
    return {
        name,
        colour,
        taste
    };
}
//create an array of fruits.
let fruits = [
    createFruit("Banana", "Yellow", "Sweet"),
    createFruit("Orange", "Orange", "Sweet"),
    createFruit("Kiwi", "Green", "Sweet"),
    createFruit("Mango", "yellow", "Sweet"),
    createFruit("Pineapple", "Yellow", "Sweet")
];
// Acces an invalid index.
const invalidIndex = 10; //there are only 5 elements in the array, so this will cause an error
console.log(`Fruit at bindex ${invalidIndex}:`, fruits[invalidIndex]);
//Print the fruits.
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Colour:${fruit.colour}, Taste:${fruit.taste}`);
});
