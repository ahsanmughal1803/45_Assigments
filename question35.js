"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

 */
//List os animals with common character
const animals = ['cat', 'dog', 'rabbit'];
//Printing the name of each animal using a for loop
console.log("list of animals:");
for (const animal of animals) {
    console.log(animal);
}
//Printing a statement about each animal
console.log("\nStatement about each animal:");
for (const animal of animals) {
    for (const animal of animals)
        if (animal === 'dog') {
            console.log(`A ${animal} would make a great pet!`);
        }
        else if (animal === 'cat') {
            console.log(`A ${animal} would be good companion at home.`);
        }
        else if (animal === 'rabbit') {
            console.log(`A ${animal} would be a good pet.`);
        }
}
//common character
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would be a great pet!");
