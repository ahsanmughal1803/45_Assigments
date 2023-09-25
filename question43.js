"use strict";
/*
 Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//array of magician's name
const magicians = ["Hery potter", "Elvish", "David Copperfield", "Ron Weasly"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the great ${magician}.`);
    return greatMagicians;
}
//modify the array to add "the great" to each magician's name
const greatMagicianNames = make_great(magicians);
//call the function to show orignal magician's names
console.log("Orignal Magicians");
show_magicians(magicians);
//call the function to know great magicians name
console.log("\nGreat Magicians");
show_magicians(greatMagicianNames);
