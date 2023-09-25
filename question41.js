"use strict";
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
//array of magician's name
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = ["Hery potter", "Elvish", "David Copperfield", "Ron Weasly"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
//call the function to show the magician's name
show_magicians(magicians);
